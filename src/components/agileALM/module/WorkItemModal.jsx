import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import NoDataFound from '../../global/NoDataFound';

const res = {
    data: {
        token: ''
    }
}

const errors = {
    password: '',
    email: '',
}

const Router = {
    query: {
        callback: '',
        organization: '',
        project: ''
    }
}

const project = {
    _id: '',
    organization: ''
}

const item = {
    state: ''
}

const record = {
    type: ''
}

const team = {
    name: ''
}

const sprint = {
    name: ''
}

const slug = '';

const token = '';

const codeSnippet = `import React, { useState } from 'react'
import { Card, Button, Modal, Space, Divider, notification } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { CSVLink } from "react-csv";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
const headers = [
    { label: "title *", key: "title" },
    { label: "description", key: "description" },
    { label: "state (new,active,resolved,closed)*", key: "state" },
    { label: "type (epic,feature,issue,task,testCase,userStory,bug)*", key: "type" },
    { label: "team", key: "team" },
    { label: "sprint", key: "sprint" },
    { label: "priority (1,2,3,4)", key: "priority" },
    { label: "targetDate", key: "targetDate" },
    { label: "startDate", key: "startDate" },
    { label: "assignedTo", key: "assignedTo" },
    { label: "risk", key: "risk" },
    { label: "effort", key: "effort" },
    { label: "timeCriticality", key: "timeCriticality" },
    { label: "businessValue", key: "businessValue" },
    { label: "tags", key: "tags" },
    { label: "parent", key: "parent" },
];


const teamheaders = [
    { label: "name", key: "name" },
    { label: "id", key: "_id" }
]
const sprintheaders = [
    { label: "name", key: "name" },
    { label: "id", key: "_id" }
]
const userheaders = [
    { label: "name", key: "fullName" },
    { label: "id", key: "_id" }
]

function BulkUpload({ isBulkModalVisible, handleCloseBulkModal }) {
    const Router = useRouter()
    const dispatch = useDispatch()
    const { users, groups, } = useSelector(state => state.project)
    const { sprints } = useSelector(state => state.sprint)
    const [csv, setCsv] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [results, setResults] = useState(null)


    const handleRefresh = (slug) => {

        axios.get(/item/getbyproject/${slug})
            .then(res => {
                dispatch({
                    type: "SET_ITEMS",
                    payload: res.data.items
                })

            })
            .catch(err => {

                notification.error({ message: err?.response?.data?.error })
            })
    }


    const handleSaveCsv = () => {
        setIsLoading(true)
        let formData = new FormData()
        formData.append('file', csv)
        axios.post(/item/bulkupload, formData)
            .then(res => {
                setCsv(null)
                setIsLoading(false)
                setResults({
                    successLists: res.data.successLists || [],
                    errorLists: res.data.errorLists || [],
                })


                handleRefresh(Router.query.project)
            })
            .catch(err => {
                setIsLoading(false)
                setCsv(null)
                err && err.response && alert(err.response.data.error)
            })
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setCsv(e.dataTransfer.files[0])
    }
    const hadleDragOver = (e) => {
        e.preventDefault();
    }

    
    return (

        <Modal
            visible={isBulkModalVisible}
            onCancel={handleCloseBulkModal}
            title={results ? 'Uploaded Results' : 'Work Items Bulk Upload'}
            footer={[
                <button style={{ marginRight: "10px", width: '48%' }} onClick={() => handleCloseBulkModal()} className='default_button_outline2_delete'>Cancel</button>,
                <button style={{ width: '48%' }} disabled={!csv} loading={isLoading} onClick={() => handleSaveCsv()} className='default_button2' id="project_save"> Save</button>
            ]}
            zIndex={9999}
            width={810}
        >

            {
                results ?
                    <div>
                        <div className='d_flex d_center'>
                            <img src="/New_Template/work_item/upload_success.svg"></img>
                        </div>
                        <Divider>{results?.successLists?.length} uploaded successfully</Divider>
                        {
                            results?.successLists?.map((item, i) => (
                                <p style={{ color: "green", fontWeight: "bold", fontSize: "17px" }}>{item?.title}</p>
                            ))
                        }
                        <Divider>{results?.errorLists?.length} failed</Divider>

                        {
                            results?.errorLists?.map((item, i) => (
                                <p style={{ color: "red", fontWeight: "bold", fontSize: "17px" }}>{item?.title}</p>
                            ))
                        }

                        <div style={{ margin: "10px 0", textAlign: "center" }}>

                            <button className='default_button_outline2' onClick={() => setResults(null)}>Upload New CSV</button>
                        </div>
                    </div> :

                    <>
                        {/* <Card> */}
                        <div className="bulk_info">
                            <li>1. Download the skeleton file and fill it with proper data.</li>
                            <li>2. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</li>
                            <li>3. Use id from respected users, teams, sprints.</li>
                            <li>4. If you have multiple item, separate it by comma.</li>
                        </div>
                        <div style={{ marginTop: "15px" }}>



                            <Space>
                                <CSVLink
                                    data={[]}
                                    headers={headers}
                                    filename='workitem_bulk'
                                >
                                    <button className='default_button_outline2 default_button_outline2_color'>Download Skeleton CSV</button>
                                </CSVLink>


                                <CSVLink
                                    data={groups?.filter(x => x.type === 'team')}
                                    headers={teamheaders}
                                    filename='team_ids'
                                >
                                    <button className='default_button_outline2 default_button_outline2_color'>Download Team CSV</button>

                                </CSVLink>
                                <CSVLink
                                    data={sprints}
                                    headers={sprintheaders}
                                    filename='sprint_ids'
                                >
                                    <button className='default_button_outline2 default_button_outline2_color'>Download Sprint CSV</button>

                                </CSVLink>
                                <CSVLink
                                    data={users}
                                    headers={userheaders}
                                    filename='user_ids'
                                >
                                    <button className='default_button_outline2 default_button_outline2_color'>Download User CSV</button>

                                </CSVLink>

                            </Space>
                        </div>

                        {/* </Card> */}



                        <div style={{ marginTop: "20px" }}>
                            {/* previous */}
                            {/* <label class="file">
                                <input onChange={(e) => setCsv(e.target.files[0])} type="file" id="file" aria-label="Browse csv file" accept='.csv' />
                                <span class="file-custom">{csv && csv.name}</span>
                            </label> */}

                            <label onDrop={handleDrop} onDragOver={hadleDragOver} for="id" className="drop-container">
                                <img src="/New_Template/work_item/Upload.svg"></img>
                                <span class="drop-title">{csv?.name ? csv?.name : 'Drop files here'}</span>
                                or
                                <input onChange={(e) => setCsv(e.target.files[0])} type="file" id="file" aria-label="Browse csv file" accept='.csv' />
                            </label>
                            {/* <Space>
                                <Button disabled={!csv} loading={isLoading} onClick={() => handleSaveCsv()} className='d-center' type="primary" icon={<UploadOutlined />} size={"size"} >Upload File </Button>
                                <button onClick={() => handleCloseBulkModal()} className='default_button_outline'>Cancel</button>
                            </Space> */}
                        </div>
                    </>
            }

        </Modal>
    )
}

export default BulkUpload`;

const list = [
    "The component imports various dependencies from the 'antd' library, such as Card, Button, Modal, Space, Divider, and notification. It also imports the UploadOutlined icon from the '@ant-design/icons' library. Additionally, it imports axios for making HTTP requests, CSVLink for generating CSV files, and useSelector, useDispatch from 'react-redux' for accessing the Redux store.",

    "The component defines headers for the CSV files to be downloaded. It includes headers for work items (headers), team information (teamheaders), sprint information (sprintheaders), and user information (userheaders).",

    "The component uses local state to manage the CSV file (csv), loading state (isLoading), and the results of the upload (results).",

    "The handleRefresh function sends a GET request to retrieve the updated work items for the project and updates the Redux store accordingly.",

    'The handleSaveCsv function is triggered when the user clicks the "Save" button. It creates a FormData object and appends the selected CSV file to it. It then sends a POST request to the server for bulk uploading the work items. Upon successful upload, it updates the results state with the success and error lists. It also calls handleRefresh to update the work items in the Redux store.',

    "The handleDrop function is triggered when a file is dropped onto the drop area. It prevents the default behavior, sets the dropped file as the CSV file in the state.",

    "The component renders a Modal from Ant Design library. If results is truthy, it displays the uploaded results. Otherwise, it displays the bulk upload form.",

    "In the bulk upload form section, there are buttons to download the skeleton CSV file and separate CSV files for teams, sprints, and users.",

    "The component renders a drop area where the user can drop the CSV file or click to select a file. It also displays the name of the selected file if available.",

    'The Modal footer contains "Cancel" and "Save" buttons. The "Save" button is disabled if no CSV file is selected or when the upload is in progress (isLoading is true).',

    'Overall, the component provides the functionality to download CSV templates, select and upload a CSV file for bulk uploading work items, and displays the upload results or the bulk upload form.'
];

const codeSnippet2 = `// #ant-custom-modal {
    .ant-modal-header {
        background-color: $primary_color_p2;
    
    }
    
    .ant-modal-title {
        color: #FFFFFF;
        font-weight: 600;
        font-family: $mulish;
        font-size: 16px;
    }
    
    .ant-modal-body {
        label {
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 500;
            opacity: 0.7;
        }
    
        // .input {
        //     border: 1px solid rgba(65, 65, 65, 0.15) !important;
        // }
    
        input,
        textarea,
        .input {
            border: 1px solid rgba(88, 49, 240, 0.2);
            border-radius: 7px;
            padding: 10px;
        }
    
        .ant-select:not(.ant-select-customize-input) .ant-select-selector {
            position: relative;
            background-color: #fff;
            border: 1px solid rgba(65, 65, 65, 0.15);
            border-radius: 7px;
            // padding: 5px;
        }
    }
    
    .ant-modal-body,
    .ant-modal-footer {
        background-color: #FFFFFF !important;
    }
    

    // #ant-custom-modal {
.ant-modal-header {
    background-color: $primary_color_p2;

}

.ant-modal-title {
    color: #FFFFFF;
    font-weight: 600;
    font-family: $mulish;
    font-size: 16px;
}

.ant-modal-body {
    label {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        opacity: 0.7;
    }

    // .input {
    //     border: 1px solid rgba(65, 65, 65, 0.15) !important;
    // }

    input,
    textarea,
    .input {
        border: 1px solid rgba(88, 49, 240, 0.2);
        border-radius: 7px;
        padding: 10px;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        position: relative;
        background-color: #fff;
        border: 1px solid rgba(65, 65, 65, 0.15);
        border-radius: 7px;
        // padding: 5px;
    }
}

.ant-modal-body,
.ant-modal-footer {
    background-color: #FFFFFF !important;
}
    `

const list2 = [
    "The CSS styling targets the modal with the id ant-custom-modal. However, there is a commented out portion in the code that duplicates the same selector. You can remove one of them to avoid redundancy.",

    "The styling targets the header section of the modal using the class .ant-modal-header. It sets the background color to the value of the $primary_color_p2 variable.",

    "The styling targets the title section of the modal using the class .ant-modal-title. It sets the text color to white (#FFFFFF), sets the font weight to 600, sets the font family to the value of the $mulish variable, and sets the font size to 16 pixels.",

    "The styling targets the body section of the modal using the class .ant-modal-body. Within the body section, it targets the label elements and applies some styling. It sets the font family to 'Poppins', sets the font size to 14 pixels, sets the font weight to 500, and sets the opacity to 0.7.",

    'The styling also targets input, textarea, and elements with the class .input within the modal body section. It sets the border to 1 pixel solid with a color defined by rgba(88, 49, 240, 0.2), sets the border radius to 7 pixels, and adds 10 pixels of padding.',

    'Additionally, the styling targets the select element within the modal body section using the class .ant-select:not(.ant-select-customize-input) .ant-select-selector. It sets the position to relative, sets the background color to white (#fff), sets the border to 1 pixel solid with a color defined by rgba(65, 65, 65, 0.15), and sets the border radius to 7 pixels.',

    'The styling also targets the body and footer sections of the modal using the classes .ant-modal-body and .ant-modal-footer, respectively. It sets the background color to white (#FFFFFF) for both sections.',
]

const codeSnippet3 = `exports.getItems = async (req, res) => {
    let { projectslug } = req.params
    if (!projectslug) {
        return res.status(400).json({ error: "project slug is required" })
    }
    try {

        let project = await Project.findOne({ slug: projectslug }).exec()

        if (project) {
            let items = await Item.find({ project: project._id })
                .populate('assignedTo', "firstName lastName email profilePicture")
                .populate('discussions.sender', "firstName lastName email profilePicture")
                .populate('sprint', "name")
                .populate('team', "name")
                .sort("-updatedAt")
                .exec()
            res.status(200).json({ success: true, project, items })
        } else {
            res.status(400).json({ error: "Project not found" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong" })
    }


}`

const list3 = [
    "The getItems function is an asynchronous function that takes req (request) and res (response) as parameters. It is typically used as a controller function in a web application's backend.",

    "The req.params object is used to extract the projectslug parameter from the request's URL parameters. This parameter is used to identify the specific project.",

    "If the projectslug parameter is missing, the function returns a response with a status of 400 (Bad Request) and an error message indicating that the project slug is required.",

    "Inside a try block, the function attempts to find a project in the database based on the provided projectslug using the findOne method of the Project model. The await keyword is used to wait for the asynchronous operation to complete.",

    "If a project is found, the function proceeds to fetch the items related to that project. It uses the Item model's find method to query for items with a matching project field that references the found project's _id. The find operation also populates various fields using the populate method to retrieve additional data related to the items, such as the assigned user, discussions sender, sprint, and team. The items are sorted in descending order based on the updatedAt field.",

    "If items are found, the function returns a response with a status of 200 (OK) and a JSON object containing a success flag, the found project, and the fetched items.",

    "If no project is found, the function returns a response with a status of 400 (Bad Request) and an error message indicating that the project was not found.",

    "If an error occurs during the execution of the function (e.g., a database error), it is caught in the catch block. The error message is logged to the console, and the function returns a response with a status of 400 (Bad Request) and an error message indicating that something went wrong.",
]

const model = `const mongoose = require("mongoose");
var hooker = require('hooker');

const workItemSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: [
        "epic",
        "feature",
        "issue",
        "task",
        "userStory",
        "bug",
        "testPlan",
        "testSuite",
        "testCase",
        //"sharedStep"


      ], default: "epic", required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // assignedBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    state: { type: String, enum: ["new", "active", "resolved", "closed"], default: "new" },
    priority: { type: Number, enum: [1, 2, 3, 4], default: 1 },
    activity: { type: String, enum: ['deployment', 'design', 'development', 'documentation', 'requirements', 'testing'] },
    startDate: { type: Date },
    targetDate: { type: Date },
    attachments: [{ type: String }],
    risk: { type: String },
    effort: { type: String },
    timeCriticality: { type: String },
    businessValue: { type: String },
    attachments: [{ type: String }],
    discussions: [{
      text: { type: String },
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      date: { type: Date, default: Date.now }
    }],
    tags: [{ type: String }],
    team: { type: mongoose.Schema.Types.ObjectId, ref: "ProjectGroup" },
    sprint: { type: mongoose.Schema.Types.ObjectId, ref: "Sprint" },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    affectedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    duplicateOf: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    predecessor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    referenceBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    sharedSteps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    testedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    related: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    hyperLink: [{ type: String }],


    //for test plan

    testConfigurations: [{ type: mongoose.Schema.Types.ObjectId, ref: "TestConfiguration" }],
    testCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    parentPlan: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },

    //for test cases

    steps: [{
      sharedStep: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      action: { type: String },
      attachments:[{type:String}],
      fields: [{
        key: { type: String },
        value: { type: String },
      }]

    }],
    sharedParameter: { type: mongoose.Schema.Types.ObjectId, ref: "SharedParameter" },
    testCaseTemplate: { type: mongoose.Schema.Types.ObjectId, ref: "TestCaseTemplate" },
    columns: [{
      name: String,
      sharedColumn:  String ,
      parameters: [String]
    }],


  },
  {
    timestamps: true,
  }
);


workItemSchema.post('save', async function (doc, next) {
  let item = await ItemModal.findOne({ project: this.project })
    .sort("-id")
    .select("id")
    .exec()

  doc.id = parseInt(item?.id || 0) + 1
  await doc.update({ id: parseInt(item?.id || 0) + 1 })
  next()
});




let ItemModal = mongoose.model("Item", workItemSchema);



module.exports = ItemModal


const mongoose = require("mongoose");
var hooker = require('hooker');

const workItemSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: [
        "epic",
        "feature",
        "issue",
        "task",
        "userStory",
        "bug",
        "testPlan",
        "testSuite",
        "testCase",
        //"sharedStep"


      ], default: "epic", required: true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // assignedBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    state: { type: String, enum: ["new", "active", "resolved", "closed"], default: "new" },
    priority: { type: Number, enum: [1, 2, 3, 4], default: 1 },
    activity: { type: String, enum: ['deployment', 'design', 'development', 'documentation', 'requirements', 'testing'] },
    startDate: { type: Date },
    targetDate: { type: Date },
    attachments: [{ type: String }],
    risk: { type: String },
    effort: { type: String },
    timeCriticality: { type: String },
    businessValue: { type: String },
    attachments: [{ type: String }],
    discussions: [{
      text: { type: String },
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      date: { type: Date, default: Date.now }
    }],
    tags: [{ type: String }],
    team: { type: mongoose.Schema.Types.ObjectId, ref: "ProjectGroup" },
    sprint: { type: mongoose.Schema.Types.ObjectId, ref: "Sprint" },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    affectedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    duplicateOf: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    predecessor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    referenceBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    sharedSteps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    testedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    related: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    hyperLink: [{ type: String }],


    //for test plan

    testConfigurations: [{ type: mongoose.Schema.Types.ObjectId, ref: "TestConfiguration" }],
    testCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    parentPlan: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },

    //for test cases

    steps: [{
      sharedStep: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      action: { type: String },
      attachments:[{type:String}],
      fields: [{
        key: { type: String },
        value: { type: String },
      }]

    }],
    sharedParameter: { type: mongoose.Schema.Types.ObjectId, ref: "SharedParameter" },
    testCaseTemplate: { type: mongoose.Schema.Types.ObjectId, ref: "TestCaseTemplate" },
    columns: [{
      name: String,
      sharedColumn:  String ,
      parameters: [String]
    }],


  },
  {
    timestamps: true,
  }
);


workItemSchema.post('save', async function (doc, next) {
  let item = await ItemModal.findOne({ project: this.project })
    .sort("-id")
    .select("id")
    .exec()

  doc.id = parseInt(item?.id || 0) + 1
  await doc.update({ id: parseInt(item?.id || 0) + 1 })
  next()
});




let ItemModal = mongoose.model("Item", workItemSchema);



module.exports = ItemModal


`
const dbModelList = [
    "The code requires the mongoose package, which is a MongoDB object modeling tool used in Node.js.",

    "The workItemSchema variable defines the schema for a work item using the mongoose.Schema constructor. It specifies various fields and their types, such as id, title, description, type, createdBy, assignedTo, project, state, priority, and so on. The schema also includes embedded subdocuments and references to other Mongoose models using the ref property.",

    "The timestamps: true option is provided to automatically add createdAt and updatedAt fields to the documents based on the current timestamp.",

    "The code defines a post hook for the save event on the workItemSchema. This hook is executed after a work item is saved to the database. Inside the hook function, it retrieves the latest work item for the associated project using the ItemModal model. It increments the id of the current work item by 1 and updates the document with the new id value. This allows for automatically generating an incremented id for each work item within a project.",

    "The ItemModal variable is created using mongoose.model by passing the string 'Item' (the name of the model) and the workItemSchema as arguments. This creates a Mongoose model based on the provided schema.",

    "The ItemModal model is exported from the module, making it accessible to other parts of the application.",
]


const ModelComp = () => {
    return (
        <Box>

            <Typography mt={2} variant='h4'>Item Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={dbModelList}></Process>

        </Box>
    )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/workItemModal.png"} imageTitle={"Screenshot 1: work Item Modal"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Items.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Items.css</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet2}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the codebase</Typography>
                <Process list={list2}></Process>
            </Box>
        </Box>
    )
}

const BackendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Get Items controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const WorkItemModal = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<NoDataFound />} databaseComp={<NoDataFound />}></TabSelection>
        </Box>
    );
};

export default WorkItemModal;
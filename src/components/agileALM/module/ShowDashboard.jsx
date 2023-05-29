import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';

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

const token = '';

const codeSnippet = `import { Avatar, Badge, Card, Space, Statistic, Table } from 'antd'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateItemModal from '../project/CreateItemModal'

function Dashboard() {
    const { project, items, users, isFullScreen } = useSelector(state => state.project)
    const { user } = useSelector(state => state.auth)

    const [filtered, setFiltered] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        setFiltered([...items].filter(x => x.assignedTo?._id === user?._id))
    }, [items, user])


    const columns = [
        {
            title: 'Title',
            key: 'title',
            render: (record, title) => (
                <Space style={{ cursor: "pointer" }} onClick={() => { setSelected(record); setIsModalVisible(true) }}>
                    <Avatar shape='square' size={'small'} src={/New_Template/work_item/${record.type}.svg} />
                    {record.title}
                </Space>
            )
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            // render: (state) => (
            //     <span style={{ textTransform: 'capitalize' }}>{state}</span>
            // )
            render: (state) => <Badge className='d_flex d_center' color={state === 'active' ? '#a8f9c0' : state === 'closed' ? '#b7a6f8' : state === 'new' ? '#dceeff' : state === 'resolved' ? '#B3D0F8' : 'N/A'}
                text={state === 'active' ? 'Active' : state === 'closed' ? 'Closed' : state === 'new' ? 'New' : state === 'resolved' ? 'Resolved' : 'N/A'} />
        },

        {
            title: 'Area',
            dataIndex: 'team',
            key: 'team',
            render: (team) => (
                <span>{team?.name ? ${project?.name} \\ ${team?.name} : project?.name}</span>
            )
        },

    ];

    const features = [
        {
            title: 'Total Tasks',
            count: filtered.filter(x => x.type === 'task').length || 0,
            icon: '/New_Template/overview/task.png'

        },
        {
            title: 'Total Epics',
            count: filtered.filter(x => x.type === 'epic').length || 0,
            icon: '/New_Template/overview/epic.png'

        },
        {
            title: 'Total Features',
            count: filtered.filter(x => x.type === 'feature').length || 0,
            icon: '/New_Template/overview/feature.png'

        },
        {
            title: 'Total User Stories',
            count: filtered.filter(x => x.type === 'userStory').length || 0,
            icon: '/New_Template/overview/userStory.png'

        },
        {
            title: 'Total Test Cases',
            count: filtered.filter(x => x.type === 'testCase').length || 0,
            icon: '/New_Template/overview/testCase.png'

        },
        {
            title: 'Others',
            count: filtered.filter(x => x.type !== 'epic' && x.type !== 'task').length || 0,
            icon: '/New_Template/overview/issue.png'
        }
    ];

    return (
        <div>
            <div className='all_features'>
                {
                    features?.map((feature, i) => <div className='single_feature'>
                        <div className='icon_title'>
                            <div className='icon'>
                                <img src={feature?.icon}></img>
                            </div>
                            <div className='title_count'>
                                <p>{feature?.title}</p>
                                <h1>{feature?.count}</h1>
                            </div>
                        </div>
                        {/* <div>
                            <img style={{ width: '10px', height: '10px', objectFit: 'contain' }} src="/New_Template/overview/vector.png"></img>
                        </div> */}
                    </div>)
                }
            </div>
            <Table bordered pagination={true} dataSource={filtered} columns={columns} />



            {
                isModalVisible && <CreateItemModal
                    isModalVisible={isModalVisible}
                    handleCancelModal={() => { setIsModalVisible(false); setSelected(null) }}
                    //selectedType={selectedType}
                    //parent={parent}
                    selected={selected}
                    // setItem={item => setItems(prev => ([...prev, item]))}
                    projectId={project._id} />

            }

        </div>
    )
}

export default Dashboard`;

const list = [
    "The component imports various UI components from the Ant Design library, such as Avatar, Badge, Card, Space, Statistic, and Table, and React hooks (useState, useEffect) and Redux hooks (useSelector, useDispatch).",

    "The component defines the Dashboard function component.",

    "Inside the component, it accesses the required state variables and functions from the Redux store using the useSelector hook.",

    "The component initializes state variables using the useState hook. These variables are filtered (used to store the filtered list of items based on the assigned user) and isModalVisible and selected (used for controlling the visibility of the create item modal and storing the selected item, respectively).",

    "The component uses the useEffect hook to update the filtered list whenever the items or user state variables change. It filters the items array based on the assigned user (user) and updates the filtered state.",

    "The component defines the columns array, which represents the columns configuration for the Ant Design Table component. Each object in the array represents a column and specifies properties like title, dataIndex, and render (to customize the rendering of a column's content).",

    "The component renders JSX elements that represent the dashboard UI. It uses the map function to iterate over the features array and render individual feature elements.",

    "It renders an Ant Design Table component with the filtered array as the dataSource and columns as the column configuration.",

    "It conditionally renders the CreateItemModal component when isModalVisible is true. This component is used to create new items.",

    "Finally, the component is exported as the default export.",
];

const codeSnippet2 = `.dashboard_container_root {

    padding: 100px 10px;
    position: relative;

    @media screen and (max-width: 792px) {
        padding: 20px 0;
    }

    .heading_title {
        text-align: center;

        h1 {
            font-family: "Lato", sans-serif;
            font-size: 42px;
            font-weight: bold;
            line-height: 1.1;

            span {
                color: #00796B;
                font-weight: bold;
            }

            @media screen and (max-width: 792px) {
                font-size: 32px;
            }
        }
    }

.shape_image {
    position: absolute;
    left: 0;
    top: 0;

    img {
        width: 100%;
    }
}

.shape_image2 {
    position: absolute;
    right: 0;
    bottom: 0;

    img {
        width: 100%;
    }
}

.dashboard_container {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 40px;

    @media screen and (max-width: 792px) {
        grid-template-columns: 100%;
    }

    .dashboard_img {
        margin: auto;
        padding-top: 20px;
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .dashboard_details {
        display: grid;
        grid-template-columns: 50% 50%;

        .dashboard_single_details {
            padding: 20px;

            @media screen and (max-width: 792px) {
                padding: 20px 10px
            }

            h3 {
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                color: #00796b;
                line-height: 1;
                margin-top: 10px;
            }

            p {
                font-size: 16px;
                color: #000000;
                font-family: 'Lato', sans-serif;
                max-width: 80%;
                opacity: 0.8;
                line-height: 1.2;
                margin-top: 10px;
            }
        }
    }
}
}`

const list2 = [
    "The .dashboard_container_root class represents the root container of the dashboard. It sets padding, position, and media queries to adjust the layout based on the screen size.",

    "The .heading_title class represents the heading/title section of the dashboard. It sets text alignment and styles for the heading element (h1). There is also a nested span element with a specific color and font weight.",

    "The .shape_image class represents an image element positioned absolutely at the top-left corner of the container.",

    "The .shape_image2 class represents an image element positioned absolutely at the bottom-right corner of the container.",

    "The .dashboard_container class represents the main grid container for the dashboard. It uses CSS grid to define two columns, each taking 50% of the width. On smaller screens, it changes to a single column layout.",

    "The .dashboard_img class represents the container for the dashboard image. It centers the image vertically using margin and sets padding. The image itself has a width of 100%, object-fit set to cover, and a border-radius.",

    "The .dashboard_details class represents the grid container for the dashboard details section. It uses CSS grid to define two columns, each taking 50% of the width.",

    "The .dashboard_single_details class represents an individual detail section within the dashboard details grid. It sets padding and adjusts the padding on smaller screens. It contains a heading element (h3) and a paragraph element (p) for displaying details and descriptions.",
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
        <ImageComp image={"/agileALM/dashboard.png"} imageTitle={"Screenshot 1: dashboard"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Dashboard.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Dashboard.css</Typography>
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



const ShowDashboard = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />}></TabSelection>
        </Box>
    );
};

export default ShowDashboard;
import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import UserStoryComp from '../../global/UserStoryComp';

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
        callback: ''
    }
}

const token = '';

const selectedOrganization = {
    id: {

    }
}

const slug = '';

const projects = []

const project = {
    category: ''
}

const name = '';

const shortid = {
    generate: () => console.log("generate")
}

const selectedSprint = {
    _id: ''
}

const codeSnippet = `import React, { useState, useEffect } from 'react';
import { Button, Drawer, notification, Select, Space, Tabs, Table, Input, DatePicker, Popconfirm, Spin } from 'antd';
import { useRouter } from 'next/router'
import validator from 'validator';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { addSprint, updateSprint, deleteSprint } from '../../../actions/sprintAction';
import { AiOutlineClose } from "react-icons/ai";
const { Option } = Select;
const { TabPane } = Tabs;

function CreateSprint({ visible, closeDrawer, selected }) {
    const Router = useRouter()
    const { project, groups } = useSelector(state => state.project)
    const [isSaving, setIsSaving] = useState(false)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [team, setTeam] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [selectedSprint, setSelectedSprint] = useState(null)

    const onChangeStartTarget = (date, dateString) => {
        setStartDate(moment(date._d).format());
    }
    const onChangeEndTarget = (date, dateString) => {
        setEndDate(moment(date._d).format());
    }

    useEffect(() => {
        if (selected) {
            setSelectedSprint(selected)
            setName(selected?.name)
            setTeam(selected?.group)
            setStartDate(selected?.startDate)
            setEndDate(selected?.endDate)
        } else {
            setSelectedSprint(null)
            setName("")
            setTeam(null)
            setStartDate(null)
            setEndDate(null)
        }
    }, [selected])

    const handleDelete = () => {
        axios.delete(/sprint/deletebyuser/${selectedSprint?._id})
            .then(res => {
                notification.success({ message: "Deleted successfully" })
                dispatch(deleteSprint(selectedSprint?._id))
                closeDrawer()
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const handleCreate = async () => {
        // if (selectedMembers.length === 0) {
        //     return notification.error({ message: "Please enter emails" })
        // }


        if (!name) {
            return notification.error({ message: "Name is required" })
        }
        if (!team) {
            return notification.error({ message: "Please select a team" })
        }
        if (!startDate || !endDate) {
            return notification.error({ message: "Start date and end date is required" })
        }

        let data = {
            team,
            name,
            startDate,
            endDate
        }
        setIsSaving(true)
        if (selectedSprint) {
            axios.patch(/sprint/updatebyuser/${selectedSprint?._id}, data)
                .then(res => {
                    notification.success({ message: "Updated Successfully" })
                    dispatch(updateSprint(res.data.sprint))
                    setIsSaving(false)
                    closeDrawer()
                })
                .catch(err => {
                    setIsSaving(false)
                    console.log(err);
                    notification.error({ message: err?.response?.data?.error })
                })
        } else {
            axios.post(/sprint/create, data)
                .then(res => {
                    notification.success({ message: "Created Successfully" })
                    setIsSaving(false)
                    dispatch(addSprint(res.data.sprint))
                    closeDrawer()
                })
                .catch(err => {
                    setIsSaving(false)
                    console.log(err);
                    notification.error({ message: err?.response?.data?.error })
                })
        }

    }


    return (
        <div>

            <Drawer
                closeIcon={
                    <AiOutlineClose size={17} style={{ color: "red" }} />
                }
                title={'Add Sprint'}
                placement="right"
                onClose={closeDrawer}
                visible={visible}
                footer={(
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        {/* <button onClick={() => closeDrawer()} style={{ marginRight: "10px" }} className='default_button_outline'>Cancel</button> */}
                        <button onClick={() => closeDrawer()} style={{ marginRight: "10px", width: '48%' }} className='default_button_outline2_delete'>Cancel</button>
                        {
                            selectedSprint &&
                            <Popconfirm onConfirm={() => handleDelete()} title="Are you sure?">
                                <button style={{ marginRight: '10px' }} onClick={() => null} className='default_button_outline2_delete'>Delete</button>

                            </Popconfirm>
                        }

                        <button disabled={isSaving} onClick={() => handleCreate()} style={{ width: '48%' }} className='default_button2'>{isSaving && <Spin />} {selectedSprint ? "Update" : "Create"}</button>

                        {/* <button disabled={isSaving} onClick={() => handleCreate()} className='default_button'>{isSaving && <Spin />} {selectedSprint ? "Update" : "Create"}</button> */}
                    </div>
                )}
            >
                <label>Name:</label>
                <Input placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} size="large" />

                <label>Select Team:</label>
                <Select
                    //dropdownStyle={{ display: "none" }}
                    size="large"
                    value={team}
                    style={{ width: '100%' }}
                    placeholder="Select Team"
                    onChange={(value) => setTeam(value)}>
                    {
                        groups.filter((group) => group.type === 'team').map((group, i) => (
                            <Option value={group._id} key={i}>{group.name}</Option>
                        ))
                    }
                </Select>

                <label>Start Date:</label>
                <DatePicker size="large" value={startDate ? moment(startDate) : null} style={{ width: "100%" }} dropdownClassName='date_antd' onChange={onChangeStartTarget} />
                <label>End Date:</label>
                <DatePicker size="large" value={endDate ? moment(endDate) : null} style={{ width: "100%" }} dropdownClassName='date_antd' onChange={onChangeEndTarget} />



            </Drawer>
        </div>
    )
}

export default CreateSprint`

const list = [
    "The component imports various dependencies from external libraries such as react, antd, next/router, and others.",

    "The component receives props, specifically visible, closeDrawer, and selected.",

    "Inside the component, it initializes state variables using the useState hook. These variables include isSaving, name, team, startDate, endDate, and selectedSprint.",

    "The component defines two helper functions: onChangeStartTarget and onChangeEndTarget, which are event handlers for date input changes..",

    "The useEffect hook is used to update the state variables when the selected prop changes. It sets the values of selectedSprint, name, team, startDate, and endDate based on the selected prop.",

    "The component defines the handleDelete function, which makes an HTTP DELETE request using Axios to delete a sprint. If the request is successful, it dispatches a deleteSprint action and closes the drawer.",

    "The handleCreate function is an event handler for creating or updating a sprint. It performs several validations and makes an HTTP POST or PATCH request using Axios accordingly. If the request is successful, it dispatches the appropriate action (addSprint or updateSprint), displays a success notification, and closes the drawer.",

    "The component renders an Ant Design Drawer component, which displays a form for creating or updating a sprint. It includes input fields for name, a select dropdown for choosing a team, and date pickers for start and end dates.",

    "The Drawer component also includes a footer with buttons for canceling, deleting (if a sprint is selected), and creating/updating a sprint. The button labels change based on the state of isSaving, and a loading spinner is displayed during the saving process.",

    "Inside the Sidebar component, there is conditional rendering based on the isLoading state and the selectedOrganization state to display loading or project information.",
    "The create project modal is displayed when the isModalVisible state is true.",
];

const codeSnippet2 = `.ant-drawer-wrapper-body  {
    background-color: #CDC9D2;
  }
  
  .ant-drawer-header  {
    border-bottom: none;
  }
  
  .side_bar .ant-drawer-header-close-only {
    // background: $primary_color !important;
    margin-left: 30px;
    margin-top: 20px;
    color: black !important;
  }
  
  .ant-drawer-header .ant-drawer-header-close-only {
    color: red !important;
  }
  
  .side_bar .ant-drawer-body {
    background-color: $primary_color;
  }
  
  .side_bar {
    li {
      a {
        color: black;
        font-weight: 400;
        font-size: 16px;
        padding: 5px 10px;
        display: inline-block;
        width: 100%;
        display: flex;
        //color: #777777;
        align-items: center;
  
        &:hover {
          // background-color: rgb(238, 238, 238);
        }
  
        .p_icon {
          margin-right: 10px;
          color: #777777;
          font-size: 18px;
        }
      }
  
  
    }`

const list2 = [
    "The first block of code targets the body of the ant-drawer component and sets the background color to #CDC9D2.",
    "The second block of code targets the header of the ant-drawer component and removes the bottom border.",

    "The third block of code targets the close button in the header of the ant-drawer component. It adds some custom styles to the button, including a margin, color, and background.",

    "The fourth block of code targets the body of the ant-drawer component when it is used within an element with the class .side_bar. It sets the background color to the value of the $primary_color variable (which is likely defined elsewhere in the SCSS file).",

    "The fifth block of code targets the list items (li) within the .side_bar element. It further targets the anchor tags (a) within the list items.",

    "Inside the anchor tag styles, the color is set to black, font weight to 400, font size to 16px, padding to 5px 10px, and display to inline-block with a width of 100%. The anchor tags are displayed as flex items, and the color is set to black.",

    "The :hover pseudo-class is used to specify the styles when hovering over the anchor tags. However, the background color is commented out, so it won't have any effect unless the comment is removed or modified.",

    "Inside the anchor tag styles, there is a nested .p_icon class, which targets an element within the anchor tag. It adds some styles such as margin-right, color, and font size.",
]

const codeSnippet3 = `exports.updateSprint = async (req, res) => {
    const { name, startDate, endDate, team } = req.body
    let sprintId = req.params.sprint
    if (!name) {
        return res.status(400).json({ error: "Name is required" })
    }
    if (!sprintId) {
        return res.status(400).json({ error: "Name is required" })
    }
    if (!startDate) {
        return res.status(400).json({ error: "startDate is required" })
    }
    if (!endDate) {
        return res.status(400).json({ error: "endDate is required" })
    }
    try {
        let data = {
            name,
            startDate: startDate || undefined,
            endDate: endDate || undefined,
            group: team,
        }

       
        let sprint = await Sprint.findByIdAndUpdate(sprintId,{$set:data},{new:true})
        .populate("group","name")
        .exec()
  
        res.status(200).json({ success: true, sprint })

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "something went wrong" })
    }
}`

const list3 = [
    "The updateSprint function is an asynchronous function that receives the req (request) and res (response) objects as parameters.",

    "It extracts the name, startDate, endDate, and team properties from the request body using object destructuring.",

    "It also extracts the sprint parameter from the request URL using req.params.sprint. This likely represents the ID of the sprint to be updated.",

    "It performs several validation checks. If any of the following conditions are not met, it sends a response with a status of 400 (Bad Request) and a JSON object containing an error property with the appropriate error message:",

    "Inside a try block, the function creates a data object that contains the updated values for the sprint, including name, startDate, endDate, and group.",

    "The function uses the findByIdAndUpdate method provided by Mongoose to find the sprint with the specified sprintId and update it with the new data values. The {new: true} option ensures that the updated sprint is returned as the result.",

    "If the update operation is successful, the function sends a response with a status of 200 (OK) and a JSON object containing properties success set to true and sprint set to the updated sprint object.",
]

const model = `const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    startDate:{type:Date},
    endDate:{type:Date},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    group:{type: mongoose.Schema.Types.ObjectId, ref:"ProjectGroup"},
  },
  { timestamps: true }
);


module.exports = mongoose.model("Sprint", sprintSchema);`
const modelList = [
    "The code imports the mongoose module, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.",

    "It defines a Mongoose schema named sprintSchema using the mongoose.Schema function. The schema represents the structure and properties of a sprint document in a MongoDB collection.",

    "Inside the sprintSchema, the following fields are defined: name: A required field of type String that represents the name of the sprint, startDate: An optional field of type Date that represents the start date of the sprint, endDate: An optional field of type Date that represents the end date of the sprint, createdBy: A field of type mongoose.Schema.Types.ObjectId that references the User model. It represents the ID of the user who created the sprint, group: A field of type mongoose.Schema.Types.ObjectId that references the ProjectGroup model. It represents the ID of the project group associated with the sprint.",

    "The { timestamps: true } option is passed as the second argument to the mongoose.Schema function. This option adds createdAt and updatedAt fields to the schema, automatically managing their values.",

    "Finally, the code exports a Mongoose model named 'Sprint', created by calling the mongoose.model function with the schema definition (sprintSchema) as its arguments."
]


const ModelComp = () => {
    return (
        <Box>
            {/* <Typography mt={2} variant='h4'>Database model</Typography> */}
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <Typography mt={2} variant='h4'>Sprint Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>

            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={modelList}></Process>
        </Box>
    )
}

const AgileExecution = () => {
  const userStory = {
      title: 'Implement Update Sprint Functionality',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I need to implement the update sprint functionality in AgileALM to enable the team to establish sprints for iterative development and effective work management.",
          list: [
              "All the fields should contain previous data",
               "Create a Right side drawer with all these fields.",
               "Create backend API to perform the functionalities",
               "Use SASS for designing."
              ]
      },
      priority: "1",
      risk: "1",
      effort: "5 hours",
      startDate: "2023-06-03",
      endDate: "2023-06-03"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/updateSprint.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to update sprint user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/updateSprint.png"} imageTitle={"Screenshot 1: Create Sprint"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>

            <Typography mt={2} variant='h4'>Sprint.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Sprint.css</Typography>
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
            <Typography mt={2} variant='h4'>updateSprint controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const UpdateSprint = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default UpdateSprint;
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
    category: '',
    _id: ''
}

const name = '';

const shortid = {
    generate: () => console.log("generate")
}

const selectedSprint = {
    _id: ''
}

const id = '';

const board = {
    _id: ''
}

const selectedBoard = {
    _id: ''
}

const codeSnippet = `import { Col, Input, Modal, notification, Row, Select, Space, Spin, Switch } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const { Option } = Select

function BoardModal({ isVisible, onCancel, selected }) {
    const { groups, project } = useSelector(state => state.project)
    const { sprints } = useSelector(state => state.sprint)
    const [isSaving, setIsSaving] = useState(false)
    const [name, setName] = useState("")
    const [team, setTeam] = useState("")
    const [sprint, setSprint] = useState("")
    const [selectedBoard, setSelecetdBoard] = useState(null)




    const [column1, setColumn1] = useState({
        title: "Went well",
        isActive: true
    })
    const [column2, setColumn2] = useState({
        title: "To Improve",
        isActive: true
    })
    const [column3, setColumn3] = useState({
        title: "Action Items",
        isActive: true
    })
    const [column4, setColumn4] = useState({
        title: "column4",
        isActive: false
    })
    const [column5, setColumn5] = useState({
        title: "column5",
        isActive: false
    })
    const [column6, setColumn6] = useState({
        title: "column6",
        isActive: false
    })


    const setData = (selected) => {
        console.log(selected);
        setName(selected?.name)
        setTeam(selected?.team?._id||selected?.team||"")
        setSprint(selected?.sprint?._id||selected?.sprint||"")
        setColumn1(selected?.column1)
        setColumn2(selected?.column2)
        setColumn3(selected?.column3)
        setColumn4(selected?.column4)
        setColumn5(selected?.column5)
        setColumn6(selected?.column6)
        setSelecetdBoard(selected)

    }

    useEffect(() => {
        if (selected) {
            setData(selected)
            setSelecetdBoard(selected)
        } else {
            setName("")
            setTeam("")
            setSprint("")
            setColumn1({
                title: "Went well",
                isActive: true
            })
            setColumn2({
                title: "To Improve",
                isActive: true
            })
            setColumn3({
                title: "Action Items",
                isActive: true
            })
            setColumn4({
                title: "column4",
                isActive: false
            })
            setColumn5({
                title: "column5",
                isActive: false
            })
            setColumn6({
                title: "column6",
                isActive: false
            })
            setSelecetdBoard(null)
        }
    }, [selected])

    const handleSave = () => {
        if (!name) {
            return notification.error({ message: "Name is required" })
        }
        let data = {
            project: project?._id,
            name,
            team,
            sprint,
            column1,
            column2,
            column3,
            column4,
            column5,
            column6,
        }
        setIsSaving(true)
        if(selectedBoard){
            axios.patch(/retro/update/${selectedBoard?._id}, data)
            .then(res => {
                setIsSaving(false)
                onCancel({refresh:true})
            })
            .catch(err => {
                setIsSaving(false)
                notification.error({ message: err?.response?.data?.error })
            })
        }else{
            axios.post(/retro/create, data)
            .then(res => {
                setIsSaving(false)
                onCancel({refresh:true})
            })
            .catch(err => {
                setIsSaving(false)
                notification.error({ message: err?.response?.data?.error })
            })
        }
        
    }


    return (
        <Modal
            visible={isVisible}
            onCancel={() => onCancel({refresh:false})}
            footer={[
                <Space>
                    <button onClick={() => onCancel({refresh:false})} className='default_button_outline2_delete'>Cancel</button>
                    <button disabled={isSaving} onClick={() => handleSave()} className='default_button2' id="create">{isSaving && <Spin />} {selectedBoard ? "Update":"Create"}</button>
                </Space>
            ]}
            width={800}
            className='retro_modal'
        >
            <Row gutter={10}>
                <Col span={12}>
                    <label className='section_label' >Board Name</label>
                    <Input placeholder='Enter board name' value={name} onChange={e => setName(e.target.value)} id="enter_board_name"/>

                    <label className='section_label' htmlFor="team">Team</label>
                    <Select
                        value={team}
                        onChange={val => setTeam(val)}
                        style={{ width: "100%" }}
                    >
                        <Option value="">Select a team</Option>
                        {
                            groups?.filter(x => x.type === 'team')?.map((team) => (
                                <Option value={team?._id}>{team?.name}</Option>
                            ))
                        }
                    </Select>

                    <label className='section_label' htmlFor="team">Sprint</label>
                    <Select
                        value={sprint}
                        onChange={val => setSprint(val)}
                        style={{ width: "100%" }}
                    >
                        <Option value="">Select a sprint</Option>
                        {
                            sprints?.map((item) => (
                                <Option value={item?._id}>{item?.name}</Option>
                            ))
                        }
                    </Select>
                </Col>

                <Col span={12}>
                    <label className='section_label' htmlFor="team">Column</label>

                    <div>
                        <div className="column_item">
                            <Input
                                onChange={e => setColumn1(prev => ({ ...prev, title: e.target.value }))}
                                value={column1.title}
                                className='input'
                            />
                            <Switch
                                checked={column1.isActive}
                                onChange={val => setColumn1(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>


                        <div className="column_item">
                            <Input
                                onChange={e => setColumn2(prev => ({ ...prev, title: e.target.value }))}
                                value={column2.title}
                                className='input'
                            />
                            <Switch
                                checked={column2.isActive}
                                onChange={val => setColumn2(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>


                        <div className="column_item">
                            <Input
                                onChange={e => setColumn3(prev => ({ ...prev, title: e.target.value }))}
                                value={column3.title}
                                className='input'
                            />
                            <Switch
                                checked={column3.isActive}
                                onChange={val => setColumn3(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>


                        <div className="column_item">
                            <Input
                                onChange={e => setColumn4(prev => ({ ...prev, title: e.target.value }))}
                                value={column4.title}
                                className='input'
                            />
                            <Switch
                                checked={column4.isActive}
                                onChange={val => setColumn4(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>


                        <div className="column_item">
                            <Input
                                onChange={e => setColumn5(prev => ({ ...prev, title: e.target.value }))}
                                value={column5.title}
                                className='input'
                            />
                            <Switch
                                checked={column5.isActive}
                                onChange={val => setColumn5(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>


                        <div className="column_item">
                            <Input
                                onChange={e => setColumn6(prev => ({ ...prev, title: e.target.value }))}
                                value={column6.title}
                                className='input'
                            />
                            <Switch
                                checked={column6.isActive}
                                onChange={val => setColumn6(prev => ({ ...prev, isActive: val }))}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default BoardModal`

const list = [
    "The component imports necessary dependencies from the antd library, such as Col, Input, Modal, notification, Row, Select, Space, Spin, and Switch. It also imports axios for making HTTP requests, and React, useState, useEffect, and useSelector from React and Redux libraries.",

    "The BoardModal component is defined as a functional component and receives props: isVisible (to determine modal visibility), onCancel (callback function to handle cancel action), and selected (represents the selected retro board data).",

    "Inside the component, useSelector is used to access data from the Redux store. groups and project are retrieved from the state.project slice, while sprints is retrieved from the state.sprint slice.",

    "State variables are declared using the useState hook: isSaving: A boolean variable indicating whether the board is currently being saved or updated, name: Represents the board name, team: Represents the selected team for the board, sprint: Represents the selected sprint for the board, selectedBoard: Stores the data of the currently selected board.",

    "An effect hook (useEffect) is used to set the initial form data when the selected board changes. If a selected board is passed, it calls the setData function with the selected board. If no selected board is passed, it resets the form data to default values.",

    "The handleSave function is called when the save or update button is clicked. It performs form validation and constructs the data object to be sent in the request payload. If a selectedBoard exists, it sends a PATCH request to update the board using the /retro/update/:id endpoint. If no selectedBoard exists, it sends a POST request to create a new board using the /retro/create endpoint. Upon success, it calls the onCancel function to close the modal and refreshes the retro board list. If an error occurs, it displays an error notification.",

    "The component returns the JSX code for the Modal component from Ant Design. It is configured with props such as visible, onCancel, footer, width, and className to control the appearance and behavior of the modal.",

    "The JSX code within the Modal component renders form elements and inputs for the board name, team selection, sprint selection, and columns. It also includes buttons for cancel and save/update actions.",

    "Within the Select components for team and sprint, options are dynamically generated using the groups and sprints data from the Redux store."
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
    
    // }`

const list2 = [
    ".ant-modal-header styles the header section of the modal. background-color sets the background color to a variable $primary_color_p2.",
    "It sets the padding to 10 pixels for the element.",

    ".ant-modal-title styles the title of the modal. color sets the text color to #FFFFFF. font-weight sets the font weight to 600. font-family sets the font family to a variable $mulish. font-size sets the font size to 16px.",

    ".ant-modal-body styles the body section of the modal. Inside .ant-modal-body, label styles the labels within the modal body. font-family sets the font family to 'Poppins' or a sans-serif font. font-size sets the font size to 14px. font-weight sets the font weight to 500. opacity sets the opacity to 0.7",
]

const codeSnippet3 = `exports.createBoard = async (req, res) => {
    let {
        project,
        name,
        team,
        sprint,
        column1,
        column2,
        column3,
        column4,
        column5,
        column6,
    } = req.body

    if (!name) {
        return res.status(400).json({ error: "Name is required" })
    }
    if (!project) {
        return res.status(400).json({ error: "project is required" })
    }
    try {
        let data = {
            project,
            name,
            team: team || null,
            sprint: sprint || null,
            column1,
            column2,
            column3,
            column4,
            column5,
            column6,
            createdBy: req.user._id
        }

        let _board = new Retro(data)
        let board = await _board.save()
        res.status(201).json({ success: true, board })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}`

const list3 = [
    "The function is exported as createBoard and takes in req (request) and res (response) as parameters.",

    "The function extracts the required fields from the request body using object destructuring. The extracted fields include project, name, team, sprint, and column1 to column6.",

    "The code performs basic validations for the presence of required fields. If name is missing, it returns a 400 status code with an error message stating that the name is required. Similarly, if project is missing, it returns a 400 status code with an error message stating that the project is required.",

    "Inside the try block, the function constructs a data object to be saved in the database. It includes the extracted fields, sets team and sprint to null if they are not provided, and adds the createdBy field, which represents the user ID of the creator (extracted from req.user._id).",

    "A new instance of the Retro model (representing the retro board collection in the MongoDB database) is created with the data object.",

    "The save method is called on the _board instance to save the data to the database. The result is stored in the board variable.",

    "If the board is successfully saved, it responds with a 201 status code and a JSON object containing the success status (true) and the saved board object."
]

const model = `const mongoose = require("mongoose");

const retroSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    startDate:{type:Date},
    endDate:{type:Date},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    team:{type: mongoose.Schema.Types.ObjectId, ref:"ProjectGroup"},
    sprint:{type: mongoose.Schema.Types.ObjectId, ref:"Sprint"},
    project:{type: mongoose.Schema.Types.ObjectId, ref:"Project",required:true},
    column1:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:true},
      title: {type:String,default:'column1'},
    },
    column2:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:true},
      title: {type:String,default:'column2'},
    },
    column3:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:true},
      title: {type:String,default:'column3'},
    },
    column4:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:false},
      title: {type:String,default:'column4'},
    },
    column5:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:false},
      title: {type:String,default:'column5'},
    },
    column6:{
      color:{type:String,enum:"white",default:"white"},
      isActive:{type:Boolean,default:false},
      title: {type:String,default:'column6'},
    }
  },
  { timestamps: true }
);




module.exports = mongoose.model("Retro", retroSchema);
`
const modelList = [
    "The code imports the mongoose module, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.",

    "It defines a Mongoose schema named retroSchema using the mongoose.Schema function. The schema represents the structure and properties of a retro board document in a MongoDB collection.",

    "name: A required field of type String that represents the name of the retro board.",

    "startDate: An optional field of type Date that represents the start date of the retro board.",

    "endDate: An optional field of type Date that represents the end date of the retro board.",

    "createdBy: A field of type mongoose.Schema.Types.ObjectId that references the User model. It represents the ID of the user who created the retro board.",

    "team: A field of type mongoose.Schema.Types.ObjectId that references the ProjectGroup model. It represents the ID of the project group associated with the retro board.",

    "sprint: A field of type mongoose.Schema.Types.ObjectId that references the Sprint model. It represents the ID of the sprint associated with the retro board.",

    "project: A required field of type mongoose.Schema.Types.ObjectId that references the Project model. It represents the ID of the project associated with the retro board.",

    "column1 to column6: These fields represent the columns of the retro board. Each column has properties like color (string with enum values of 'white'), isActive (boolean with a default value of true), and title (string with default values like 'column1', 'column2', etc.).",

    "Finally, the code exports a Mongoose model named 'Retro', created by calling the mongoose.model function with the schema definition (retroSchema) as its arguments."
]


const ModelComp = () => {
    return (
        <Box>
            {/* <Typography mt={2} variant='h4'>Database model</Typography> */}
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <Typography mt={2} variant='h4'>Retro Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>

            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={modelList}></Process>
        </Box>
    )
}

const AgileExecution = () => {
  const userStory = {
      title: 'Create a retro board functionlaity.',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I want to implement the creating retro board functionality in AgileALM so that the team can create the specific retro board to share the experience.",
          list: [
              "Create a modal for creating the retro board.",
               "Give a column option to make the board.",
               "Give a select option for the sprint name.",
               "Make an API for that."
              ]
      },
      priority: "1",
      risk: "1",
      effort: "5 hours",
      startDate: "2023-06-06",
      endDate: "2023-06-06"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/create_retro.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to create retro borad view user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/create_retro.png"} imageTitle={"Screenshot 1: Create Interface"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>

            <Typography mt={2} variant='h4'>Retro.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Retro.css</Typography>
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
            <Typography mt={2} variant='h4'>createBoard controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const CreateRetro = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default CreateRetro;
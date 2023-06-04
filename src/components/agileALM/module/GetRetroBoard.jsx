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

const codeSnippet = `import { Card, Empty, notification, Popconfirm, Space, Tag, Tooltip } from 'antd'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BoardModal from './Retro/BoardModal'
import { useRouter } from 'next/router'
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
import moment from 'moment'

function RetroBoard() {
    const Router = useRouter()
    const [isVisible, setIVisible] = useState(false)
    const { project } = useSelector(state => state.project)
    const [isLoading, setIsLoading] = useState(false)

    const [selected, setSelected] = useState(null)

    const [boards, setBoards] = useState([])

    const fetchData = (project) => {
        setIsLoading(true)
        axios.get(/retro/get/${project?._id})
            .then(res => {
                setIsLoading(false)
                setBoards(res.data.boards || [])
            })
            .catch(err => {
                setIsLoading(false)
                notification.error({ message: err?.response?.data?.error })
            })
    }

    useEffect(() => {
        if (Object.keys(project).length > 0) {
            fetchData(project)
        }
    }, [project])

    const handleCancel = (value) => {

        setIVisible(false)
        setSelected(null)
        if (value?.refresh) {
            fetchData(project)
        }
    }

    const handleShowEdit = (board) => {
        setSelected(board)
        setIVisible(true)
    }

    const handleDelete = (id) => {
        axios.delete(/retro/delete/${id})
            .then(res => {
                fetchData(project)
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }

    return (
        <div className='retro'>
            <div className="top">
                <h3 className="title">Boards</h3>
                <div className="actions">
                    <button onClick={() => setIVisible(true)} className='default_button2' id="create_board">Create Board</button>
                </div>
            </div>

            {
                isLoading ?
                    <Card className='mt_10' loading={isLoading} /> :
                    boards?.length === 0 ?
                        <Empty description="No boards found" /> :
                        <div className='board_list'>
                            {
                                boards?.map((board, i) => (
                                    <div className='board_item' key={i}>
                                        <div>
                                            <div className="icon_container">
                                                <img src='/New_Template/overview/board2.svg'></img>
                                            </div>
                                            <div className='mt_5'>
                                                <h2 onClick={() => Router.push(/retro/${board?._id})} className="name">{board?.name}</h2>
                                                <Tag className='' style={{ backgroundColor: '#B2A4E9', color: 'white', border: 'none' }}>{moment(board?.createdAt).format("MM/DD/YYYY")}</Tag>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <Tooltip title={"Edit Retroboard"} color={'#141D38'} placement="top">
                                                <img className='icon' onClick={() => handleShowEdit(board)} style={{ marginRight: "15px" }} src='/New_Template/overview/edit.svg'></img>
                                            </Tooltip>

                                            {/* <AiOutlineEdit onClick={() => handleShowEdit(board)} className='icon' style={{ marginRight: "30px" }} size={25} /> */}
                                            <Popconfirm title="Are you sure" onConfirm={() => handleDelete(board?._id)}>
                                                <Tooltip title={"Delete Retroboard"} color={'#141D38'} placement="top">
                                                    <img className='icon' src='/New_Template/overview/remove.svg'></img>
                                                </Tooltip>

                                                {/* <AiFillDelete color='red' className='icon' size={25} /> */}
                                            </Popconfirm>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
            }

            <BoardModal
                isVisible={isVisible}
                onCancel={(value) => handleCancel(value)}
                selected={selected}
            />
        </div>
    )
}

export default RetroBoard`

const list = [
    "The component imports various dependencies from external libraries such as antd, axios, react, and others.",

    "The component initializes state variables using the useState hook. These variables include isVisible, isLoading, selected, and boards.",

    "The component defines a fetchData function that makes an HTTP GET request to retrieve retro boards for a given project. It sets the retrieved boards in the state variables isLoading and boards. It also handles error responses by displaying an error notification.",

    "The useEffect hook is used to fetch the retro boards when the project state variable changes.",

    "The component defines several event handler functions: handleCancel, handleShowEdit, and handleDelete.",

    "The component renders a top section with a title and an action button for creating a new retro board.",

    "The component renders a BoardModal component, which is a modal dialog for creating or editing a retro board. The modal is displayed based on the value of isVisible state variable. It also passes the selected retro board as a prop to the BoardModal component.",
];

const codeSnippet2 = `.retro {
    // background-color: white;
    padding: 10px;

    @media (max-width: 406px) {
        padding: 10px 0;
    }

    @media (max-width: 388px) {
        overflow: scroll;
    }

    .top {
        display: flex;
        justify-content: space-between;

        h3.title {
            font-weight: bold;
            font-size: 25px;
        }
    }

    .board_list {
        margin: 25px 0 10px 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        @media (max-width: 1300px) {
            grid-template-columns: 1fr 1fr;
        }

        .board_item {
            background-color: white;
            // padding: 20px;
            // border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;

            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            box-shadow: 5px 5px 5px rgba(88, 105, 240, 0.08);
            padding: 5px 35px;
            height: 125px;
            transition: all 0.3s ease;

            @media (max-width: 1200px) {
                height: 135px;
            }

            @media (max-width: 1600px) {
                margin: 5px 0;
            }

            @media (max-width: 1592px) {
                margin: 8px 0;
                padding: 5px 25px;
            }

            @media (max-width: 388px) {
                width: 100%;
                overflow: scroll;
            }

            .icon_container {
                margin-top: -40px;
                // margin-bottom: 20px;
                // background-color: #F56A00;
                // display: inline-block;
                // border-radius: 50%;
                // padding: 10px;

                img {
                    // width: 40px;
                    // height: 40px;
                    object-fit: contain;
                }
            }

            h2.name {
                cursor: pointer;
                font-family: $poppins;
                font-size: 20px;
                font-weight: 500;
                line-height: 1.2;

                @media (max-width: 1472px) {
                    line-height: 1.2;
                }

                @media (max-width: 1300px) {
                    font-size: 20px;
                }

                @media (max-width: 424px) {
                    font-size: 16px;
                }

            }

            .actions {
                display: flex;
                align-items: center;
                margin: 0 20px;

                .icon {
                    cursor: pointer;
                    height: 25px;
                    width: 25px;
                    object-fit: cover;
                }
            }

            &:hover {
                background-color: rgb(249, 249, 249);
            }
        }
    }
}
`

const list2 = [
    "The code targets an element with the class .retro.",
    "It sets the padding to 10 pixels for the element.",

    "Inside the .retro element, there are several nested styles for different elements and media queries.",

    "The @media queries specify different styles based on the maximum width of the viewport.",

    "The .top class targets an element inside the .retro element. It sets the display to flex and justifies the content to space between.",

    "Inside the .top class, there is a nested style for the h3.title element. It sets the font weight to bold and font size to 25 pixels.",

    "The .board_list class targets an element inside the .retro element. It sets the margin, display, and grid template columns for creating a grid layout with 3 columns and a gap of 20 pixels between the items.",

    "The .board_item class targets an element inside the .board_list element. It sets several styles for the appearance of a board item, such as background color, border, box shadow, padding, height, and transition.",
    "Inside the .board_item class, there are several nested styles for different elements and media queries.",

    "The .icon_container class targets an element inside the .board_item element. It sets the margin, and contains an image element with additional styles.",

    "The h2.name class targets an element inside the .board_item element. It sets styles related to the name of the board, such as cursor, font size, font weight, and line height.",

    "The .actions class targets an element inside the .board_item element. It sets the display to flex and aligns the items to the center. It also sets margin for spacing.",

    "Finally, the :hover pseudo-class is used to specify styles when hovering over the .board_item element. It changes the background color to a light grayish color."
]

const codeSnippet3 = `exports.getBoard = async (req, res) => {
    let { project } = req.params
    if (!project) {
        return res.status(400).json({ error: "project is required" })
    }
    try {

        let boards = await Retro.find({ project })
            .sort('-createdAt')
            .exec()
        res.status(200).json({ success: true, boards })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}`

const list3 = [
    "The getBoard function is an asynchronous function that receives the req (request) and res (response) objects as parameters.",

    "It extracts the project parameter from the request URL using req.params.project. This likely represents the ID or identifier of the project for which the boards are being fetched.",

    "It performs a validation check to ensure that the project parameter is present. If it's not, it sends a response with a status of 400 (Bad Request) and a JSON object containing an error property with the message 'project is required'.",

    "Inside a try block, the function queries the database using the Retro model (assuming it's defined elsewhere in the codebase) to find all retro boards associated with the specified project. The boards are sorted in descending order of creation date (-createdAt), meaning the most recent boards appear first.",

    "The await keyword is used to wait for the database query to complete.",

    "If the query is successful, the function sends a response with a status of 200 (OK) and a JSON object containing properties success set to true and boards set to the retrieved boards.",
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
      title: 'Retro board view',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I want to implement the retrospective board functionality in AgileALM so that the team can effectively reflect on the previous sprint, identify areas for improvement, and plan actionable steps for future iterations.",
          list: [
              "Get all the retro boards of the projects",
               "Show name and date.",
               "Give an Edit, Delete icon on the retro page.",
               "Make an API for that."
              ]
      },
      priority: "1",
      risk: "1",
      effort: "5 hours",
      startDate: "2023-06-04",
      endDate: "2023-06-04"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/retro_view.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to borad view user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/boardView.png"} imageTitle={"Screenshot 1: Board View"}></ImageComp>
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
            <Typography mt={2} variant='h4'>getBoard controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const GetRetroBoard = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default GetRetroBoard;
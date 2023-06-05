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

const codeSnippet = `import React, { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Card, Empty, Input, notification } from 'antd'
import Column from '../../components/RetroBoard/Column'
function RetroBoard() {
    const Router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [board, setBoard] = useState(null)

    useEffect(() => {
        if (Router.query.id) {
            setIsLoading(true)
            axios.get(/retro/details/${Router.query.id})
                .then(res => {
                    setIsLoading(false)
                    setBoard(res?.data?.board)
                })
                .catch(err => {
                    setIsLoading(false)
                    notification.error({ message: err?.response?.data?.error })
                })
        }
    }, [Router.query.id]);

    // useEffect(() => {
    //     axios.get("/user/get-user-info/rafiurprotik111@gmail.com")
    //     .then(res => console.log('res', res.data))
    //     .catch(err => console.log('err', err))
    // },[])

    const getActiveColumn = (board) => {
        let activeList = []
        let { column1, column2, column3, column4, column5, column6 } = board

        if (column1?.isActive) {
            activeList.push({...column1,columnId:'column1'})
        }
        if (column2?.isActive) {
            activeList.push({...column2,columnId:'column2'})
        }
        if (column3?.isActive) {
            activeList.push({...column3,columnId:'column3'})
        }
        if (column4?.isActive) {
            activeList.push({...column4,columnId:'column4'})
        }
        if (column5?.isActive) {
            activeList.push({...column5,columnId:'column5'})
        }
        if (column6?.isActive) {
            activeList.push({...column6,columnId:'column6'})
        }

        return activeList
    }

    return (
        <>
            <TopBar />
            <div className='retro_board'>

                {
                    isLoading ?
                        <Card loading={isLoading} /> :
                        !board ?
                            <Empty description="Board Not Found" /> :
                            <div className='board_wrapper'>
                                <div className="name">
                                    <h3>{board?.name}</h3>

                                    <div className='details_info'>
                                        <h4> Team: {board?.team?.name||"N/A"}</h4>
                                        <h4> Sprint: {board?.sprint?.name||"N/A"}</h4>
                                    </div>
                                </div>

                                <div className="details">
                                    {getActiveColumn(board)?.map((column, i) => (
                                        <Column key={i} column={column} board={board} />
                                    ))}
                                </div>
                            </div>
                }

            </div>
        </>

    )
}

export default RetroBoard`

const list = [
    "The component imports necessary dependencies such as React, useEffect, useState, and components from Ant Design library (TopBar, Card, Empty, Input, notification).",

    "The RetroBoard component is defined as a functional component.",

    "Within the component, the useRouter hook from the next/router package is used to access the router object.",

    "State variables are declared using the useState hook: isLoading: A boolean variable indicating whether the board is currently being loaded.",

    "An effect hook (useEffect) is used to fetch the retro board data when the Router.query.id changes (whenever the id parameter in the URL changes). The effect sets the isLoading state to true and sends a GET request to retrieve the board details using the /retro/details/:id endpoint. Upon successful response, it sets the isLoading state to false and updates the board state with the received data. If an error occurs, it sets the isLoading state to false and displays an error notification.",

    "The getActiveColumn function takes the board object as input and returns an array of active columns (those with isActive property set to true). It iterates over the columns (column1 to column6) and pushes the active ones along with their IDs into the activeList array.",

    "The component renders a BoardModal component, which is a modal dialog for creating or editing a retro board. The modal is displayed based on the value of isVisible state variable. It also passes the selected retro board as a prop to the BoardModal component.",
];

const codeSnippet2 = `.retro_board {
    padding: 20px;
    margin-top: 65px;

    .board_wrapper {
        .name {
            margin-bottom: 20px;

            h3 {
                font-family: $poppins;
                font-size: 22px;
                font-weight: 500;
                text-align: center;
                text-transform: capitalize;
            }

            .details_info {

                display: flex;
                justify-content: center;
                align-items: center;

                h4 {
                    margin-right: 10px;
                    background-color: $secondary_color_p2;
                    padding: 10px;
                    border-radius: 3px;
                    color: rgb(95, 95, 95);
                    font-family: $poppins;
                    font-size: 14px;
                    font-weight: 500;
                }
            }

        }

        .details {
            display: flex;

            .column {
                flex: 1;
                padding: 10px;
                // box-shadow: $box_shadow;
                background-color: white;
                border-radius: 10px;

                h3.title {
                    font-weight: bold;
                    font-size: 16px;
                    text-transform: capitalize;
                }

                &:not(:last-child) {
                    margin-right: 10px;
                }

                .box_wrapper {
                    margin: 20px 0;

                    .comment {
                        padding: 10px;
                        // box-shadow: inset 0 1px 1px 0 rgb(30 34 47 / 4%), inset 0 1px 2px 1px rgb(30 34 47 / 4%);
                        // border: solid 1px #e7eaea;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        background-color: $secondary_color_p2;

                        .text {
                            text-align: left;
                            font-family: $poppins;
                            font-size: 16px;
                            font-weight: 400;
                        }

                        .divider {
                            width: 100%;
                            height: 1px;
                            background-color: #d8d8d8;
                            margin-top: 5px;
                        }

                        .footer_section {
                            margin-top: 10px;
                            //padding: 10px;
                            display: flex;
                            justify-content: space-between;

                            .author {
                                font-family: $poppins;
                                font-size: 15px;
                                font-weight: 400;
                            }

                            .actions {
                                display: flex;
                                align-items: center;

                                .icon_wrap {
                                    display: flex;
                                    align-items: center;

                                    .icon {
                                        font-size: 18px;
                                        cursor: pointer;


                                    }

                                    span {
                                        margin: 0 3px;
                                        font-weight: bold;
                                    }

                                    &:not(:last-child) {
                                        margin-right: 10px;
                                    }
                                }

                            }
                        }
                    }

                    .wentWell {
                        background-color: #DCF5DE;
                    }

                    .toImprove {
                        background-color: #FAF1E1;
                    }

                    .actionItems {
                        background-color: #f3cad0;
                    }

                    .input_box {
                        .input {
                            border: 1px solid rgba(88, 49, 240, 0.2);
                            background-color: #FFFFFF;
                            padding: 10px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }
}`

const list2 = [
    "The .retro_board class applies padding and sets a top margin to create spacing around the retro board component.",
    "It sets the padding to 10 pixels for the element.",

    "Inside the .board_wrapper class, the .name section contains styles for the name of the retro board. The h3 element within it has styles for the font family, size, weight, alignment, and text transformation.",

    "The .details_info class styles the container for additional details of the retro board, such as the team name and sprint name. The h4 element within it has styles for the margin, background color, padding, border radius, font family, size, weight, and color.",

    "The .details class applies styles to the container for the columns of the retro board. It uses flexbox to display the columns in a row.",

    "The .column class represents individual columns within the retro board. It sets flex-grow to 1, padding, background color, and border radius.",

    "The h3.title style inside the .column class defines the font weight, size, and text transformation for the title of the column.",

    "The .box_wrapper class styles the container for comment boxes within a column. It sets margin, and each comment box has padding, margin-bottom, border radius, and background color based on its type (wentWell, toImprove, or actionItems).",

    "The .comment class represents an individual comment box. It defines padding, margin-bottom, border radius, and background color.",

    "The .text class styles the content of the comment box, defining the font family, size, and weight.",

    "The .divider class sets the width, height, and background color of a horizontal divider line within a comment box.",

    "The .input_box class styles the container for the input box in the actionItems section. The input field within it has styles for border, background color, padding, and border radius.",

    "There are additional classes like .wentWell, .toImprove, and .actionItems that apply specific background colors to the comment boxes based on their type."
]

const codeSnippet3 = `exports.getDetails = async (req, res) => {
    let { boardid } = req.params
    if (!boardid) {
        return res.status(400).json({ error: "board id is required" })
    }
    try {
        let board = await Retro.findById(boardid)
            .populate("team", "name")
            .populate("sprint", "name")
            .exec()
        if (!board) {
            return res.status(400).json({ error: "Board not found" })
        }



        res.status(200).json({ success: true, board })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}`

const list3 = [
    "The function is exported as getDetails and takes in req (request) and res (response) as parameters.",

    "The boardid variable is extracted from the request parameters using req.params.boardid. This parameter represents the ID of the retro board for which details are being fetched.",

    "The code checks if the boardid parameter is present. If it's not provided, it returns a 400 status code with an error message stating that the board ID is required.",

    "Inside the try block, the function attempts to find and retrieve the retro board details from the database using Retro.findById(boardid). The Retro model represents the retro board collection in the MongoDB database.",

    "The populate method is used to populate the team and sprint fields of the retro board with their respective details from other collections. The second argument of populate specifies the fields to be populated and the fields to be included for the populated documents.",

    "If the board is not found (i.e., null), it returns a 400 status code with an error message stating that the board was not found.",
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
      title: 'Single retro board view with comments',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I want to implement the single retro board view with comments functionality in AgileALM so that the team can effectively reflect on the previous sprint, identify areas for improvement, and plan actionable steps for future iterations.",
          list: [
              "Get a single retro board view and get all the comments with id",
               "Show went well, to improve action items",
               "Give input sections to make comments of the user.",
               "Make an API for that."
              ]
      },
      priority: "1",
      risk: "1",
      effort: "4 hours",
      startDate: "2023-06-05",
      endDate: "2023-06-05"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/retro_view2.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to single retro borad view user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/single_retro.png"} imageTitle={"Screenshot 1: Board View"}></ImageComp>
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



const SingleRetro = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default SingleRetro;
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

const column = {
    columnId: '',
    title: ''
}

const type = '';

const selectedComment = {
    _id: ''
}

const codeSnippet = `import { Divider, Input, Modal, notification, Space, Tag } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { BsChat, BsHandThumbsUpFill, BsHandThumbsDownFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Avatar from 'antd/lib/avatar/avatar'
import moment from 'moment'

function Column({ column, board }) {
    const { user } = useSelector(state => state.auth)
    const [text, setText] = useState("")
    const [remarkText, setRemarkText] = useState("")

    const [comments, setComments] = useState([])

    const [isRemarkVisible, setIsRemarkVisible] = useState(false)
    const [selectedComment, setSelectedComment] = useState(null)

    const handleCancelRemark = () => {
        setIsRemarkVisible(false)
    }
    const handleShowRemark = (comment) => {
        setSelectedComment(comment)
        setIsRemarkVisible(true)
    }

    useEffect(() => {
        if (column && board) {
            axios.get(/retro/comment/get/${board?._id}/${column.columnId})
                .then(res => {
                    setComments(res.data.comments)
                })
                .catch(err => {
                    notification.error({ message: err?.response?.data?.error })
                })
        }
    }, [column, board])


    const sendComment = () => {
        if (!text || !board || !column?.columnId) {
            return
        }

        let data = {
            text: text?.trim(),
            board: board?._id,
            column: column?.columnId
        }
        axios.post('/retro/comment/create', data)
            .then(res => {
                setText("")
                setComments(prev => ([...prev, res.data.comment]))
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const handleKeyUp = (e) => {

        if (e.keyCode == 13) {
            sendComment()
        }
    }

    const handleVote = (type, id) => {
        axios.patch(/retro/comment/vote/${id}/${type})
            .then(res => {
                let arr = [...comments]
                let index = arr.findIndex(x => x._id === id)
                arr[index] = { ...arr[index], ...res.data.comment }
                setComments(arr)
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const sendRemark = () => {
        if (!remarkText) {
            return
        }
        let data = {
            text: remarkText
        }

        axios.put(/retro/remark/post/${selectedComment?._id}, data)
            .then(res => {
                setSelectedComment(prev => ({ ...prev, ...res.data.comment }))
                let arr = [...comments]
                let index = arr.findIndex(x => x._id === selectedComment?._id)
                arr[index] = { ...arr[index], ...res.data.comment }
                setRemarkText("")
                setComments(arr)
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }

    // console.log('column', column);


    return (
        <div className='column'>
            <h3 className="title">
                {column?.title}
            </h3>
            <div className="box_wrapper">
                {
                    comments?.map((comment, i) => (
                        <div key={i} className={${column?.title === 'Went well' ? 'wentWell comment' : column?.title === 'To Improve' ? 'toImprove comment' : column?.title === 'Action Items' ? 'actionItems comment' : 'comment' }}>
                            <div className="text"> {comment.text}</div>
                            <div className='divider'></div>
                            <div className="footer_section">
                                <Space className="author">
                                    <b> {comment?.author?.fullName || "N/A"}</b>
                                    <Tag style={{ color: "black" }} color={'white'}>{moment(comment?.createdAt).fromNow()}</Tag>
                                   
                                </Space>

                                <div className="actions">
                                    <div className='icon_wrap'>
                                        {
                                            comment?.upVotes?.includes(user?._id) ?
                                                <BsHandThumbsUpFill color='#5831F0' onClick={() => handleVote('upVote', comment?._id)} className='icon' /> :
                                                <FaRegThumbsUp color='#5831F0' onClick={() => handleVote('upVote', comment?._id)} className='icon' />


                                        }
                                        <span>{comment?.upVotes?.length}</span>
                                    </div>
                                    <div className='icon_wrap'>

                                        {
                                            comment?.downVotes?.includes(user?._id) ?
                                                <BsHandThumbsDownFill color='#5831F0' onClick={() => handleVote('downVote', comment?._id)} className='icon' /> :
                                                <FaRegThumbsDown color='#5831F0' onClick={() => handleVote('downVote', comment?._id)} className='icon' />
                                        }
                                        <span>{comment?.downVotes?.length}</span>
                                    </div>

                                    <div className='icon_wrap'>
                                        <BsChat color='#5831F0' onClick={() => handleShowRemark(comment)} className='icon' />
                                        <span>{comment?.remarks?.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="input_box">
                    <Input.TextArea className='input' onKeyUp={handleKeyUp} value={text} onChange={e => setText(e.target.value)} placeholder='Write comment and press enter' />
                </div>
            </div>


            <Modal
                visible={isRemarkVisible}
                onCancel={() => handleCancelRemark()}
                footer={false}
            >
                <div>
                    {selectedComment?.remarks?.map((remark, i) => (
                        <div style={{display:"flex",marginBottom:"10px"}} key={i}>
                            <Avatar style={{background:"green",marginRight:"10px"}}>{remark?.author?.fullName}</Avatar>
                            <div style={{background:"#eee",flex:1,padding:"10px"}} className="text">
                                {remark.text}
                            </div>
                        </div>
                    ))}
                </div>
                <Input.TextArea className='input mt_15' placeholder='Write something' value={remarkText} onChange={e => setRemarkText(e.target.value)} />
                <button className='default_button2 mt_5' onClick={() => sendRemark()}>Send</button>
            </Modal>
        </div>
    )
}

export default Column`

const list = [
    "The component imports necessary dependencies such as Ant Design components (Divider, Input, Modal, notification, Space, Tag), external libraries (axios, moment), and icons (FaRegThumbsUp, FaRegThumbsDown, BsChat, BsHandThumbsUpFill, BsHandThumbsDownFill).",

    "The component receives column and board as props and retrieves the authenticated user from the Redux store using the useSelector hook.",

    "The component defines several state variables using the useState hook, including text, remarkText, comments, isRemarkVisible, and selectedComment. These variables will hold the current text input values, comments data, visibility of the remark modal, and the selected comment for which a remark is being added.",

    "The component defines two functions: handleCancelRemark and handleShowRemark. These functions handle the visibility of the remark modal and set the selected comment when a user wants to add a remark to a specific comment.",

    "The component uses the useEffect hook to fetch comments from the server when the column or board props change. It makes an HTTP GET request to retrieve comments related to the specific column and board using the axios library. The retrieved comments are then stored in the comments state variable.",

    "The component defines a sendComment function that sends a new comment to the server when the user submits a comment. It makes an HTTP POST request to create a new comment using the axios library. If the request is successful, the input field is cleared, and the new comment is added to the existing comments list.",

    "The component handles the key up event in the input field using the handleKeyUp function. If the Enter key is pressed (keyCode 13), it calls the sendComment function to submit the comment.",

    "The component defines a handleVote function that allows users to vote (upvote or downvote) on a comment. It makes an HTTP PATCH request to update the vote count for the specified comment using the axios library. If the request is successful, the updated comment data is merged into the comments state variable.",

    "The component renders an input box at the bottom where users can enter new comments. The input field value is controlled by the text state variable, and the onChange event updates the text state variable accordingly.",

    "The component renders a modal for adding remarks to a specific comment. The modal is shown when the isRemarkVisible state variable is true. The modal displays the existing remarks for the selected comment and allows users to enter new remarks. The sendRemark function sends the remark to the server when the user clicks the send button."
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

const codeSnippet3 = `exports.postComment = async (req, res) => {

    const {
        text,
        board,
        column
    } = req.body

    if (!text) {
        return res.status(400).json({ error: "Please write something" })
    }
    if (!board) {
        return res.status(400).json({ error: "Invalid data" })
    }
    if (!column) {
        return res.status(400).json({ error: "Invalid data" })
    }
    try {
        let data = {
            text,
            board,
            column,
            author: req.user._id
        }
        let _comment = new RetroComment(data)
        let comment = await _comment.save()
        await User.populate(comment, { path: "author", select: "firstName lastName email profilePicture" })
        res.status(201).json({ success: true, comment })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' })
    }
}`

const list3 = [
    "The function is exported as postComment and receives req (request) and res (response) objects as parameters, which are typically provided by the Express.js framework.",

    "The function extracts the following properties from the request body: text, board, and column. These properties are expected to be sent in the request body.",

    "The function performs some basic validation checks: If the text property is falsy (empty or undefined), it sends a 400 Bad Request response with an error message stating that the user should write something, If the board property is falsy, it sends a 400 Bad Request response with an error message stating that the data is invalid, If the column property is falsy, it sends a 400 Bad Request response with an error message stating that the data is invalid",

    "If the input data passes the validation checks, the function proceeds to create and save a new comment using the provided data. It does the following: Creates a new object data with the text, board, column, and author properties. The author property is set to the _id of the currently authenticated user (retrieved from req.user._id). Creates a new instance of the RetroComment model (assuming it's defined elsewhere) using the data object. Saves the new comment by calling the save method on the _comment object. Uses the populate method to populate the author field of the comment object with additional user data (such as first name, last name, email, and profile picture). This step assumes that there is a User model defined and has a relationship with the RetroComment model. Sends a 201 Created response with a success status and the newly created comment object.",

    "If any error occurs during the process (e.g., an error while saving the comment), it catches the error, logs it to the console, and sends a 400 Bad Request response with a generic error message stating that something went wrong.",
]

const model = `const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
    {
        text: { type: String },
        type:{type:String,enum:["comment"],default:"comment"},
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        remarks: [{
            author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String }
        }],
        upVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        downVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        board: { type: mongoose.Schema.Types.ObjectId, ref: "Retro" },
        column: {
            type: String,
            enum: ["column1", "column2", "column3", "column4", "column5", "column6"],
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("RetroComment", commentsSchema);`


const modelList = [
    "The code requires the 'mongoose' package, which is a popular Object-Document Mapping (ODM) library for MongoDB in Node.js.",

    "The code defines a new Mongoose schema using mongoose.Schema(). The schema represents the structure and attributes of a 'RetroComment' document in the MongoDB collection.",

    "text: A string field that represents the comment text.",

    "type: A string field that represents the comment type. It has an enum with a single value of 'comment' and a default value of 'comment'.",

    "author: A reference to the 'User' model. It stores the ID of the user who authored the comment.",

    "remarks: An array of objects representing remarks on the comment. Each remark has an author field (reference to the 'User' model) and a text field (string).",

    'upVotes: An array of references to the "User" model. It stores the IDs of users who upvoted the comment.',

    'downVotes: An array of references to the "User" model. It stores the IDs of users who downvoted the comment.',

    'board: A reference to the "Retro" model. It stores the ID of the associated Retro board.',

    'column: A string field that represents the column in which the comment is placed. It has an enum with six possible values: "column1", "column2", "column3", "column4", "column5", and "column6". The required property is set to true, ensuring that this field is always provided.',

    "The schema includes { timestamps: true }, which adds two fields to the document automatically: createdAt and updatedAt. These fields store the creation and update timestamps respectively."
]


const ModelComp = () => {
    return (
        <Box>
            {/* <Typography mt={2} variant='h4'>Database model</Typography> */}
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <Typography mt={2} variant='h4'>RetroComment Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>

            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={modelList}></Process>
        </Box>
    )
}

const AgileExecution = () => {
  const userStory = {
      title: 'Retro comment functionality adding.',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I want to implement the make retro board comment functionality in AgileALM so that users can add their opinions of anyone's task.",
          list: [
              "Create a modal and an input field for adding the comment.",
               "Show all the comments in the modal",
               "Give an icon and the total length of the comment.",
               "Make an API for that."
              ]
      },
      priority: "1",
      risk: "1",
      effort: "4 hours",
      startDate: "2023-06-08",
      endDate: "2023-06-08"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/retroComment.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to retro borad comment user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/retroComments.png"} imageTitle={"Screenshot 1: Board View"}></ImageComp>
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
            <Typography mt={2} variant='h4'>postComment controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const CreateCommentRetro = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default CreateCommentRetro;
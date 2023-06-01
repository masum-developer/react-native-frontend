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

const token = '';

const codeSnippet = `import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Drawer, Dropdown, List, Menu, Tooltip } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineFullscreenExit, AiOutlineExpandAlt } from "react-icons/ai";
import { BsBell, BsArrowsFullscreen } from "react-icons/bs";

import {
  FaAngleDown,
  FaAngleUp,
  FaBell,
  FaBookReader,
  FaDollarSign,
  FaFacebookMessenger,
  FaSearch,
  FaSignOutAlt,
  FaUserEdit,
  FaVoteYea,
  FaWindowRestore
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../helper/WithAuth";
import CreateItemModal from "./project/CreateItemModal";


function TopBar({ handle }) {
  const Router = useRouter()
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const { notifications } = useSelector((state) => state.notification);
  const { project, items } = useSelector(state => state.project)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [filteredItems, setFilteredItems] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selected, setSelected] = useState(null)


  //filtering by text search
  useEffect(() => {
    if (searchText) {
      setFilteredItems([...items].filter(x => x.title.toLowerCase().includes(searchText.toLowerCase()) || (x?.id == searchText)).splice(0, 10))
    } else {
      setFilteredItems([...items].splice(0, 10))
    }
  }, [searchText])


  const handleLogout = () => {
    Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_NAME);
    window.location.pathname = "/";
  };
  const searchRef = useRef()

  const menu = (
    <div className="drop_container">
      <div className="user_info">
        <div className="avatar">
          <Avatar
            style={{
              backgroundColor: "#5831F0",
            }}
            icon={<UserOutlined />}
            size="default"
          />
        </div>

        <div className="info">
          <p style={{ textTransform: "capitalize" }}>{user.fullName || ""}</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="page">
        <ul className="page_list">
          <li>
            <Link href="/organization">
              <a>
                {" "}
                {/* <FaVoteYea className="p_icon" /> */}
                <img style={{ marginRight: '10px' }} src="/organization2.png" alt="Organization"></img>
                My Organizations
              </a>
            </Link>
          </li>

          <li>
            <Link href="/user/profile?tab=basic">
              <a>
                {" "}
                {/* <FaVoteYea className="p_icon" /> */}
                <img style={{ marginRight: '10px' }} src="/profile.png" alt="My Profile"></img>
                My Profile
              </a>
            </Link>
          </li>

          {/* <li>
                <Link href="/">
                  <a>
                    <FaUserEdit className="p_icon" />
                    My Profile
                  </a>
                </Link>
              </li> */}

          <li>
            <button onClick={() => handleLogout()}>
              <FaSignOutAlt className="p_icon" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );


  const setModalVisible = (item) => {
    dispatch({
      type: "SET_MODAL",
      payload: {
        selected: item?._id,
        isVisible: true
      }
    })
  }

  const searchOverlay = (
    <div className="dropdown_search">
      <Menu selectedKeys={["0"]} style={{ width: "100%" }}>
        {
          filteredItems.map((item, i) => (
            <Menu.Item active icon={<Avatar shape="square" size={22} src={/New_Template/work_item/${item.type}.svg} />} onClick={() => { setModalVisible(item) }} key={i}><b>#{item?.id}</b> {item?.title}</Menu.Item>
          ))
        }
      </Menu>


    </div>
  )


  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setDropdownVisible(false)
      filteredItems[0] && setModalVisible(filteredItems[0])
    }
  }


  const handlePush = (key, value) => {

    let query = Router.query
    delete query["project"]
    delete query["organization"]

    Router.push({
      pathname: window.location.pathname,
      query: { ...query, [key]: value }
    })
  }

  return (
    <>
      <div className='topbar'>
        <div className="logo">
          {/* <h1>
          </h1> */}
          {/* <Link href='/organization'>
            <a>Agile ALM</a>
          </Link> */}

          <div className="logo_box" id="logo">
            <Link href="/organization">
              <a>
                <img src="/AgileAlM-Navy-Blue-V2.png" alt="logo"></img>
              </a>
            </Link>
          </div>

        </div>
        <div className="menu">
          {
            project && Router.route !== "/organization/[organization]" &&
            <Dropdown
              overlayStyle={{ zIndex: 1000 }}
              trigger={['click']}
              overlay={searchOverlay}>
              <div className="search">
                <input value={searchText} onKeyDown={handleKeyDown} onChange={e => setSearchText(e.target.value)} onBlur={() => { setDropdownVisible(false) }} onFocus={() => setDropdownVisible(true)} ref={searchRef} placeholder="Search here" id="search" />
                <div className="icon_container">
                  <FaSearch className="icon" />
                </div>
                {/* {
              dropdownVisible &&
              <div className="dropdown">
                {
                  filteredItems.map((item, i) => (
                    <li onClick={()=>{setSelected(item);setIsModalVisible(true)}} key={i}>{item?.title}</li>
                  ))
                }

              </div>
            } */}
              </div>
            </Dropdown>


          }
        </div>
        <div className="menu">

          {project && Router.route !== "/organization/[organization]" && <Tooltip title="View Full Screen" color={'#141D38'} placement="top">
            <span style={{ cursor: 'pointer' }}>
              {/* <BsArrowsFullscreen onClick={handle?.enter} size={"20"}>
              </BsArrowsFullscreen> */}
              {!handle?.active ?
                <AiOutlineExpandAlt onClick={handle?.enter} color='#5831F0' size={20} /> :
                <AiOutlineFullscreenExit onClick={handle?.exit} color='#5831F0' size={20} />
              }

            </span>
          </Tooltip>}

          {
            project && Router.route !== "/organization/[organization]" &&
            <Dropdown
              getPopupContainer={(triggerNode) =>
                triggerNode.parentElement
              }
              overlayClassName="noti_menu"
              overlay={notificationsList}
              trigger={["click"]}

            >
              <a style={{ margin: "0 25px" }} onClick={(e) => e.preventDefault()} id="noti_dropdown">
                <Badge
                  count={
                    notifications &&
                    notifications.filter((noti) => !noti.opened).length
                  }
                >
                  <BsBell
                    style={{ fontSize: "24px", color: "black" }}
                  />
                </Badge>
              </a>
            </Dropdown>
          }




          <Dropdown
            overlayClassName="user_menu"
            overlay={menu}
          // trigger={["click"]}

          >
            <button className="user_button br_100 mr_10" style={{ paddingLeft: '20px' }} id="user_menu">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{
                    backgroundColor: "#583BF0",
                  }}
                  icon={<UserOutlined />}
                  size="small"
                />
                <FaAngleDown className="icon" />
              </div>
            </button>
          </Dropdown>
        </div>





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


    </>
  )
}

export default TopBar`;

const list = [
    "The code imports necessary dependencies, components, and icons from various libraries such as Ant Design, Axios, Cookies, Moment, Next.js, React, React Icons, and Redux.",

    "The TopBar function component accepts a handle prop, which appears to be a function used for handling full-screen mode.",

    "Inside the TopBar component, various hooks and variables are initialized using the useState, useEffect, useRef, and useSelector hooks.",

    "The handleLogout function is responsible for handling the logout functionality. It removes the token cookie and redirects the user to the home page.",

    "The handlePush function is used for updating the router query parameters based on the selected key and value.",

    "The component renders a navigation bar containing the logo, search input, project-related dropdown menus, notification badge, and user profile dropdown menu.",

    "The logo section displays the application logo and handles redirection to the organization page.",

    "The search input section allows users to search for items within the project. It uses a dropdown overlay to display search results.",

    "The project-related dropdown menus include options for navigating to the user's organizations, user profile, and logging out.",

    "The notification badge section displays the number of unread notifications and provides a dropdown overlay for viewing and managing notifications.",

    "The user profile dropdown menu includes the user's avatar, name, and email. It offers options for managing organizations, user profile, and logging out.",

    "The component uses various icons to enhance the visual presentation and interaction of the navigation bar.",

    "The CreateItemModal component is conditionally rendered when the isModalVisible state is true. It provides a modal for creating new items related to the project."
];

const codeSnippet2 = `.topbar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 7px 20px;
    //box-shadow: var(--border-subtle-color,rgba(0, 0, 0, .08)) 0 1px 0;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // z-index: 99;
    z-index: 1000;


    .logo {
        h1 {
            font-weight: bold;
            font-size: 18px;
        }

        .logo_box {
            cursor: pointer;

            img {
                max-width: 100%;
                height: 65px;
                object-fit: cover;
            }
        }

    }

    .user_button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .menu {
        display: flex;
        align-items: center;

        .search {
            // border: 1px solid $dark_gray;
            border: none;
            padding-left: 5px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            margin: 0 10px;
            position: relative;
            background-color: #F7F7FC;
            height: 42px;

            // @media screen and (max-width: 512px) {
            //     display: none;
            // }

            .icon_container {
                background-color: $primary_color_p2;
                display: flex;
                justify-content: center;
                padding: 11px;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                cursor: pointer;

            }

            .icon {
                font-size: 20px;
                margin: 0 5px;
                color: #FFFFFF;
                // background-color: $primary_color_p2;
            }

            input {
                border: none;
                width: 600px;
                font-family: "Poppins", sans-serif;
                font-size: 15px;
                font-weight: 300;
                color: black;
                transition: width .3s;
                background-color: #F7F7FC;

                @media screen and (max-width: 892px) {
                    width: 300px;
                }

                @media screen and (max-width: 672px) {
                    width: 200px;
                }

                @media screen and (max-width: 600px) {
                    width: 150px;
                }


                @media screen and (max-width: 512px) {
                    // display: none;
                    width: 40px;
                }

                &::placeholder {

                    font-family: "Poppins", sans-serif;
                    font-size: 15px;
                    font-weight: 300;
                    color: #8b8b8b;
                    padding-left: 5px;

                    @media screen and (max-width: 512px) {
                        font-size: 14px;
                    }

                    @media screen and (max-width: 388px) {
                        display: none;
                    }
                }

                @media screen and (max-width: 412px) {
                    width: 10px;
                }

                @media screen and (max-width: 388px) {
                    width: 3px;
                }

                // @media screen and (max-width: 362px) {
                //     width: 80px;
                // }

                &:focus {
                    outline: none;
                    //width: 650px;

                    // @media screen and (max-width: 892px) {
                    //     width: 330px;
                    // }

                    // @media screen and (max-width: 600px) {
                    //     width: 150px;
                    // }

                    // @media screen and (max-width: 512px) {
                    //     // display: none;
                    //     width: 50px;
                    // }

                    // @media screen and (max-width: 412px) {
                    //     width: 10px;
                    // }

                    // @media screen and (max-width: 388px) {
                    //     width: 3px;
                    // }
                }
            }


        }
    }



    //button
    .user_button {
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        max-width: 100%;
        padding: 8px 24px;
        background-color: #e7e1fc;
        border-radius: 2px;
        border: 1px solid $primary_color;
        color: $primary_color;
        outline: none;
        transition: 0.5s all;
        cursor: pointer;
        border-radius: 999px;
        border: none;
        margin-right: 2vw;

        .icon {
            margin-left: 10px;
            font-size: 18px;
        }

        &:hover {
            background-color: #e1d9fc;
        }
    }
}


.dropdown_search {
    position: absolute;
    top: 110%;
    max-height: 300px;
    overflow-x: auto;
    background-color: white;
    width: 100%;
    box-shadow: $box_shadow;
    z-index: 999;

    @media screen and (max-width: 600px) {
        position: static;
    }

    li {
        list-style-type: none;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-color: $light_gray;
        }

    }

    &::-webkit-scrollbar-track {
        //-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
        background-color: $dark_gray;
    }
}








.ant-dropdown.noti_menu {
    background-color: white !important;
    // box-shadow: $box_shadow;
    max-width: 400px;
    width: 100%;
    border-radius: 10px;


}


.list_items_antd {
    background-color: white !important;
    // box-shadow: $box_shadow;
    max-width: 400px;
    width: 100%;
    width: 400px;
    max-height: 50vh !important;
    overflow-y: auto;
    padding: 0;

    @media (max-width: 700px) {
        width: 100vw;
    }

    .noti_item {
        padding: 10px;

        &:hover,
        &.unread {
            background: #F7F7FC;
        }
    }


    &::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        // background: #b2a4e9;

    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        // background: #888;
        background: #b2a4e9;

    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .list_header {
        display: flex;
        padding: 5px 10px;
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 20px;
            font-weight: 600;
        }

        .url {
            color: black;

            &:hover,
            &:link,
            &:visited {
                color: black !important;
            }
        }
    }
}`

const list2 = [
    "The .topbar class represents the top navigation bar. It is a flex container that is displayed horizontally with space between its items. It has a white background, center-aligned items, padding, and a border at the bottom. It is positioned fixed at the top of the page and spans the full width.",

    "The .logo class represents the logo section within the navigation bar. It contains styles for the logo text and logo image. The logo image is set to have a maximum width of 100% and a height of 65 pixels.",

    "The .user_button class represents the user-related menu section within the navigation bar. It is a button element with no border, transparent background, and a pointer cursor.",

    "The .menu class represents the menu section within the navigation bar. It is a flex container that aligns its items vertically and centers them. It contains styles for the search input field and the user-related dropdown menus.",

    "The .search class represents the search input field. It has a border-radius, padding, and a position of relative. It also contains a background color, height, and styles for the search icon container and the input element. The input element has a width that transitions when focused.",

    "The .icon_container class represents the container for the search icon. It has a background color and displays the search icon centered.",

    "The .dropdown_search class represents the dropdown overlay for search results. It has an absolute position, maximum height with scrollbars, and a white background color. It also contains styles for the list items within the dropdown and the scrollbar.",

    "The .ant-dropdown.noti_menu class represents the dropdown overlay for notifications. It has a white background color and a border-radius. It also contains styles for the list items within the dropdown and the scrollbar.",

    "The .list_items_antd class represents the list of items within the notifications dropdown overlay. It has a white background color, maximum width, and maximum height with scrollbars. It contains styles for the list items, the list header, and the scrollbar."
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
        <ImageComp image={"/agileALM/searchItems.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Topbar.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Topbar.css</Typography>
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

const AgileExecution = () => {
  const userStory = {
      title: 'Item search functionality in topbar.',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I want to implement the item search functionality at the top bar so that users can easily search for and locate specific items, such as work items, features, etc.",
          list: [
              "Make an input field to search the items",
               "Give a suggestion box when the user focuses on the input field.",
               "Ensure that the item search functionality is performant.",
               "Make an API to get the items",
               "Design the UI with SASS and Ant Design",
              ]
      },
      priority: "1",
      risk: "1",
      effort: "4 hours",
      startDate: "2023-06-01",
      endDate: "2023-06-01"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/item_search.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>As a developer, I want to implement the item search functionality at the top bar so that users can easily search for and locate specific items, such as work items, features, etc.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to search items to Organization user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}



const ItemSearch = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution/>}></TabSelection>
        </Box>
    );
};

export default ItemSearch;
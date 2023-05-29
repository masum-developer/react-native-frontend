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

const sprint = {
    name: ''
}

const token = '';

const codeSnippet = `import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { notification, Modal, Row, Col, Input, DatePicker, Select, Table, Avatar, Divider, Tooltip, message, Space, Switch } from 'antd'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';
import { FaPencilAlt, FaUserFriends, FaRegTrashAlt, FaRegClone, FaRegCopy } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem, updateItem } from '../../actions/projectActions';
import CreateItemModal from './CreateItemModal';
import { BsThreeDotsVertical, BsArrow90DegRight, BsGear, BsUpload } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineCloudUpload, AiOutlineExpandAlt, AiOutlineFullscreenExit } from 'react-icons/ai'
import { IoTrashBinOutline } from 'react-icons/io5'
import { FiFilter } from 'react-icons/fi'
import { IoMdOptions } from 'react-icons/io'
import { RiDeleteBinFill } from 'react-icons/ri'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BulkUpload from './BulkUpload';
const { Option } = Select
const { SubMenu } = Menu;
import { Badge } from 'antd';


function Item() {
    let Router = useRouter()
    const dispatch = useDispatch()
    const { project, items, users, isFullScreen } = useSelector(state => state.project)
    const { user } = useSelector(state => state.auth)
    const [selectedType, setSelectedType] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selected, setSelected] = useState(null)
    const [hiddenComplete, setHiddenComplete] = useState(false)
    const [hiddenFilter, setHiddenFilter] = useState(false)


    //bulk

    const [isBulkModalVisible, setIsBulkModalVisible] = useState(false)



    const handleFullScreen = () => {
        dispatch({
            type: "SET_FULLSCREEN",
        })
    }

    const assignTo = (item, assignedTo) => {
        axios.patch(/item/update/${item}, { assignedTo })
            .then(res => {
                dispatch(updateItem(res.data.item))
                //notification.success({ message: "updated" })
                message.success("updated")
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const handleDelete = (item) => {
        if (item?._id) {
            axios.delete(/item/delete/${item._id})
                .then(res => {
                    dispatch(deleteItem(res.data.itemId))
                })
                .catch(err => {
                    notification.error({ message: err?.response?.data?.error })
                })
        }

    }
    const handleClone = (item) => {
        if (item?._id) {
            axios.post(/item/clone/${item._id})
                .then(res => {
                    dispatch(addItem(res.data.item))
                    message.success("Cloned successfully")
                })
                .catch(err => {
                    notification.error({ message: err?.response?.data?.error })
                })
        }

    }


    const dropMenu = (item) => (
        <Menu style={{ width: "200px" }}>
            <Menu.Item onClick={() => { setModalVisible(item) }} icon={<FaPencilAlt />}>Edit</Menu.Item>
            <Menu.Item onClick={() => { handleDelete(item) }} icon={<FaRegTrashAlt />}>Delete</Menu.Item>
            <SubMenu icon={<FaUserFriends />} title="Assign To">
                {
                    users.map((user) => (
                        <Menu.Item onClick={() => assignTo(item._id, user._id)} key={user._id}>{user?.fullName}</Menu.Item>
                    ))
                }


            </SubMenu>
            <Menu.Item onClick={() => handleClone(item)} icon={<FaRegClone />}>Clone</Menu.Item>

            <CopyToClipboard text={item._id}
                onCopy={() => message.success("Copied to clipboard")}>
                <Menu.Item icon={<FaRegCopy />}>Copy Id</Menu.Item>
            </CopyToClipboard>


        </Menu>
    );

    function onChangeDateStart(date, dateString) {
        // console.log(date, dateString);
        setStartDate(moment(date._d).format());
    }
    function onChangeDateTarget(date, dateString) {
        // console.log(date, dateString);
        setTargetDate(moment(date._d).format());
    }

    const setModalVisible = (item) => {
        dispatch({
            type: "SET_MODAL",
            payload: {
                selected: item?._id,
                isVisible: true
            }
        })
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            key: 'title',
            render: (record, title) => (
                <Space style={{ cursor: "pointer" }} onClick={() => { setModalVisible(record) }}>
                    <Avatar shape='square' size={'small'} src={/New_Template/work_item/${record.type}.svg} />
                    {record.title}
                </Space>
            )
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            render: (state) => <Badge className='d_flex d_center' color={state === 'active' ? '#a8f9c0' : state === 'closed' ? '#b7a6f8' : state === 'new' ? '#dceeff' : state === 'resolved' ? '#B3D0F8' : 'N/A'}
                text={state === 'active' ? 'Active' : state === 'closed' ? 'Closed' : state === 'new' ? 'New' : state === 'resolved' ? 'Resolved' : 'N/A'} />
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (type) => (
                <span style={{ textTransform: 'capitalize' }}>{type}</span>
            )
        },
        {
            title: 'Assigned To',
            dataIndex: 'assignedTo',
            key: 'assignedTo',
            render: (assignedTo) => (
                <span>{assignedTo?.fullName || "N/A"}</span>
            )
        },
        {
            title: 'Area',
            dataIndex: 'team',
            key: 'team',
            render: (team) => (
                <span>{team?.name ? ${project?.name} \\ ${team?.name} : project?.name}</span>
            )
        },
        {
            title: 'Iteration',
            dataIndex: 'sprint',
            key: 'sprint',
            render: (sprint) => (
                <span>{sprint?.name ? ${project?.name} \\ ${sprint?.name} : project?.name}</span>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Dropdown trigger={['click']} overlay={dropMenu(record)}>
                    <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                </Dropdown>
            )
        },
    ];

    const [filteredKey, setFilteredKey] = useState("Recently updated")
    const [records, setRecords] = useState([])

    useEffect(() => {
        setRecords(items)
    }, [items])

    const hanldleSearch = (value) => {
        if (value) {
            setRecords([...items].filter(x => (x.title.toLowerCase().includes(value.toLowerCase())) || (x?.id == value)))
        } else {
            setRecords([...items])
        }
    }

    function sortFunctionCreate(a, b) {
        var dateA = new Date(a.createdAt).getTime();
        var dateB = new Date(b.createdAt).getTime();
        return dateA < dateB ? 1 : -1;
    };
    const getFilteredData = (filteredKey) => {
        if (filteredKey === 'Recently updated') {

            return records
        } else if (filteredKey === 'Recently created') {
            return [...records].sort(sortFunctionCreate)
        } else if (filteredKey === 'Assigned to me') {
            return [...records].filter(x => x.assignedTo?._id === user?._id)
        } else if (filteredKey === 'Recently completed') {
            return [...records].filter(x => x.state === 'closed')
        }
        else {
            return []
        }
    }


    useEffect(() => {
        if (hiddenComplete) {
            setRecords(prev => prev.filter(x => x.state !== 'closed'))
        } else {
            setRecords(items)
        }
    }, [hiddenComplete])



    const filterMenu = (
        <Menu>
            <Menu.Item onClick={() => setFilteredKey("Assigned to me")}>Assigned to me</Menu.Item>
            {/* <Menu.Item onClick={()=>setFilteredKey("Recently updated")}>Following</Menu.Item>
            <Menu.Item onClick={()=>setFilteredKey("Recently updated")}>Mentioned</Menu.Item>
            <Menu.Item onClick={()=>setFilteredKey("Recently updated")}>My activity</Menu.Item> */}
            {/* <Menu.Divider /> */}
            <Menu.Item onClick={() => setFilteredKey("Recently updated")}>Recently updated</Menu.Item>
            <Menu.Item onClick={() => setFilteredKey("Recently completed")}>Recently completed</Menu.Item>
            <Menu.Item onClick={() => setFilteredKey("Recently created")}>Recently created</Menu.Item>

        </Menu>
    )

    const worktemMenu = (
        <Menu>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/epic.svg' />} onClick={() => { setSelectedType('epic'); setIsModalVisible(true) }} key="epic">Epic</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/feature.svg' />} onClick={() => { setSelectedType('feature'); setIsModalVisible(true) }} key="Feature">Feature</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/issue.svg' />} onClick={() => { setSelectedType('issue'); setIsModalVisible(true) }} key="Issue">Issue</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/task.svg' />} onClick={() => { setSelectedType('task'); setIsModalVisible(true) }} key="Task">Task</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/bug.svg' />} onClick={() => { setSelectedType('bug'); setIsModalVisible(true) }} key="Bug">Bug</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/testCase.svg' />} onClick={() => { setSelectedType('testCase'); setIsModalVisible(true) }} key="testCase">Test Case</Menu.Item>
            <Menu.Item icon={<Avatar size={'small'} src='/New_Template/work_item/userStory.svg' />} onClick={() => { setSelectedType('userStory'); setIsModalVisible(true) }} key="userStroy">User Story</Menu.Item>
        </Menu>
    );


    return (
        <>
            <div className='work_items_top d_flex d_between'>
                <h1>Work Items</h1>
                {/* <button className='default_button2'>Add A New Work Item</button> */}
                <div className='d_flex d_gap_15'>

                    <div className='bottom_button d_alignCenter'>
                        <button onClick={() => setIsBulkModalVisible(true)} className='default_button_outline2 d_alignCenter mr_15 ml_5'>
                            <BsUpload size={18}></BsUpload>
                            <span className='ml_5'>Import Work Items</span>
                        </button>

                        <button className='default_button2_delete d_alignCenter'>
                            <RiDeleteBinFill size={18}></RiDeleteBinFill>
                            <span className='ml_5'>Recycle Bin</span>
                        </button>
                    </div>


                    <Dropdown trigger={['click']} overlay={worktemMenu}>
                        <button className="ant-dropdown-link default_button2" onClick={e => e.preventDefault()}>
                            <AiOutlinePlus style={{ marginRight: "5px" }} />
                            New Work Item <DownOutlined style={{ marginLeft: "5px" }} />
                        </button>
                    </Dropdown>
                </div>
            </div>
            <div className='work_items'>
                <div className="top_title">
                    {/* <h1>Work Items</h1> */}
                    <div className="actions">
                        <div className="left">
                            <Dropdown trigger={['click']} overlay={filterMenu}>
                                <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {filteredKey} <DownOutlined style={{ marginLeft: "5px" }} />
                                </button>
                            </Dropdown>



                            {/* <Dropdown trigger={['click']} overlay={worktemMenu}>
                                <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <AiOutlinePlus style={{ marginRight: "5px" }} />
                                    New Work Item <DownOutlined style={{ marginLeft: "5px" }} />
                                </button>
                            </Dropdown> */}

                            <button>
                                <BsArrow90DegRight style={{ marginRight: "5px" }} />
                                Open in Queries
                            </button>


                            <button>
                                <BsGear style={{ marginRight: "5px" }} />
                                Column Options
                            </button>

                            <div className='bottom_button d_alignCenter'>
                                <button onClick={() => setIsBulkModalVisible(true)} className='default_button_outline2 d_alignCenter mr_15 ml_5'>
                                    <BsUpload size={18}></BsUpload>
                                    <span className='ml_5'>Import Work Items</span>
                                </button>

                                <button className='default_button2_delete d_alignCenter'>
                                    <RiDeleteBinFill size={18}></RiDeleteBinFill>
                                    <span className='ml_5'>Recycle Bin</span>
                                </button>
                            </div>
                        </div>

                        <div className="right">
                            <Tooltip title='View options'>
                                {
                                    <Dropdown trigger={['click']} overlay={
                                        <Menu style={{ padding: "10px" }}>
                                            <div>
                                                <b>Completed Work Items</b>

                                            </div>
                                            <Space>
                                                <Switch checked={hiddenComplete} id='hidden' defaultChecked onChange={val => setHiddenComplete(val)} />
                                                <label htmlFor="hidden">Hidden</label>

                                            </Space>
                                        </Menu>
                                    }>
                                        <div onClick={e => e.preventDefault()}>
                                            <Space>
                                                <button><IoMdOptions size={20} color='#5831F0' /></button>
                                            </Space>
                                        </div>
                                    </Dropdown>
                                }

                            </Tooltip>
                            <Tooltip title={hiddenFilter ? 'Show filter' : 'Hide filter'}>
                                <button onClick={() => setHiddenFilter(prev => !prev)}><FiFilter color='#5831F0' size={20} /></button>
                            </Tooltip>
                            <Tooltip title={isFullScreen ? 'Exit Full Screen Mode' : 'Enter Full Screen Mode'}>
                                <button onClick={() => handleFullScreen()}>
                                    {isFullScreen ?
                                        <AiOutlineFullscreenExit color='#5831F0' size={20} /> :
                                        <AiOutlineExpandAlt color='#5831F0' size={20} />
                                    }
                                </button>

                            </Tooltip>
                        </div>
                    </div>
                </div>

                {
                    !hiddenFilter &&
                    <div className='filter'>
                        <FiFilter style={{ color: '#5831F0' }} size={20} className='icon' />
                        <input onChange={(e) => hanldleSearch(e.target.value)} className='filter_input' placeholder="Filter by keyword" />
                    </div>
                }


                <div >
                    <Table bordered pagination={{ defaultPageSize: 10 }} dataSource={getFilteredData(filteredKey)} columns={columns} scroll={{
                        x: 1000
                    }} style={{ position: "relative" }} />
                </div>

                {
                    isModalVisible && <CreateItemModal
                        isModalVisible={isModalVisible}
                        handleCancelModal={() => { setIsModalVisible(false); setSelected(null) }}
                        selectedType={selectedType}
                        //parent={parent}
                        selected={selected}
                        // setItem={item => setItems(prev => ([...prev, item]))}
                        projectId={project._id} />

                }

            </div>
        </>
    )
}

export default Item`;

const list = [
    "The component imports various dependencies from the 'antd' library, as well as several icons from different icon libraries.",

    "The component defines several state variables using the useState hook, such as isModalVisible, selectedType, selected, hiddenComplete, and hiddenFilter. These variables are used to manage the visibility of modals, store selected item type, selected item data, and control the visibility of certain components.",

    "The component uses the useSelector hook from react-redux to access the project and user data from the Redux store.",

    "The component defines various functions to handle actions such as assigning an item to a user, deleting an item, and cloning an item. These functions make API calls using the axios library and dispatch actions to update the Redux store.",

    "The component defines a dropMenu function that returns a dropdown menu component from the antd library. This menu provides options for editing, deleting, assigning, cloning, and copying the ID of a work item.",

    "The component defines several variables for the table columns, such as ID, Title, State, Type, Assigned To, Area, and Actions. These columns define how the data should be displayed in the table.",

    "The component defines additional functions for handling date selection and filtering data based on the selected filter option.",

    "The component renders a UI with various elements such as a heading, buttons for adding new work items and performing actions, dropdown menus, and a table displaying the work items. It also includes functionality for searching/filtering work items, sorting, and toggling visibility of completed work items.",

    "The component conditionally renders a CreateItemModal component based on the isModalVisible state, allowing users to create or edit work items.",

    "The component exports the Item component as the default export.",
];

const codeSnippet2 = `.work_items_top {
    padding: 20px 10px;

    h1 {
        color: #414141;
        font-family: $poppins;
        font-size: 28px;
        font-weight: 700;
    }
}

.work_items {
    background-color: white;
    border-radius: 10px;

    .top_title {
        background-color: white;
        padding: 10px 20px;
        // margin-bottom: 10px;
        border-radius: 10px !important;

        h1 {
            font-family: $poppins;
            font-size: 18px;
            font-weight: 500;
        }

        margin-bottom: 20px;
        border-radius: 3px;
    }

    .actions {
        display: flex;

        @media screen and (max-width: 756px) {
            flex-direction: column;
            justify-content: center;
        }

        .left {
            display: flex;

            @media screen and (max-width: 972px) {
                overflow-x: scroll;
            }

            button {
                display: flex;
                align-items: center;
                background: none;
                border: 1px solid rgba(88, 49, 240, 0.2);
                padding: 7px 9px;
                cursor: pointer;
                border-radius: 3px;
                margin-right: 10px;
                line-height: 1;
                color: $primary_color_p2;
                font-family: $poppins;
                font-size: 15px;
                font-weight: 400;

                &:hover {
                    background-color: $light_gray;
                }

                @media (max-width: 1300px) {
                    padding: 5px 1px;
                }
            }
        }

        .right {
            display: flex;
            margin-left: auto;

            @media screen and (max-width: 756px) {
                margin: 10px auto;
            }

            button {
                display: flex;
                align-items: center;
                background: none;
                border: none;
                padding: 5px 7px;
                cursor: pointer;
                border-radius: 3px;
                margin-right: 10px;

                @media (max-width: 1300px) {
                    padding: 5px 2px;
                }

                &:hover {
                    background-color: $light_gray;
                }
            }


            .default_button_outline2 {
                border: 1px solid $primary_color_p2;
                outline: none;
                background: white;
                color: $primary_color;
                padding: 11px 20px;
                text-decoration: none;
                border-radius: 7px;
                transition: all 0.3s;
                cursor: pointer;
                font-weight: 400;
                font-family: $mulish;
                font-size: 14px;

                &.btn_block {
                    width: 100%;
                }

                &:hover {
                    background: $primary_color_p2;
                    color: white;
                    opacity: 1;
                }

                @media (max-width: 680px) {
                    padding: 3px 10px;
                    font-size: 15px;
                }
            }

            .default_button_outline2_small {
                padding: 6px 14px !important;
                border-radius: 5px;
            }
        }
    }

    .filter {
        border: 1px solid rgba(88, 49, 240, 0.2);
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        margin: 10px 10px;
        padding: 10px;
        border-radius: 10px;

        .filter_input {
            font-size: 16px;
            background: transparent;
            border: none;
            width: 100%;
            padding: 5px 7px;

            &:hover,
            &:focus {
                outline: none;
            }
        }
    }

    .ant-table-thead>tr>th {
        background: #F8F6FF;
        font-family: $poppins;
        font-size: 15px;
        font-weight: 400;
    }

    .ant-table-row {
        font-family: $poppins;
        font-size: 15px;
        font-weight: 300;
    }
}

.ant-badge-status-dot {
    height: 12px;
    width: 12px;
    border: 1px solid rgb(164, 164, 164);
}

.ant-pagination-item a {
    color: $primary_color_p2;
    font-family: $poppins;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid rgba(105, 72, 238, 0.2);
}

.ant-pagination-item-active a {
    color: white;
    background-color: $primary_color_p2;
}

.ant-table-pagination.ant-pagination {
    padding: 20px 10px;
}

.ant-pagination-next .ant-pagination-item-link {
    color: $primary_color_p2;
    border: 1px solid rgba(105, 72, 238, 0.2);
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid rgba(105, 72, 238, 0.2);
    border-radius: 5px;
}

.ant-dropdown-menu {
    border: 1px solid rgba(88, 49, 240, 0.2);
    border-radius: 7px;
    padding: 0;
}

.ant-dropdown-menu-item {
    font-family: $poppins;
    font-size: 14px;
    font-weight: 400;
}

.ant-dropdown-menu-item:hover {
    background-color: $primary_color_p2;
    color: white;
}

.ant-dropdown-menu-submenu-popup ul {
    margin-right: 0;
    margin-left: 0;
}`

const list2 = [
    "The code defines styles for the 'work_items_top' class, which represents the top section of the component. It sets padding, color, font-family, font-size, and font-weight properties for the heading.",

    "The code defines styles for the 'work_items' class, which represents the main section of the component. It sets background-color, border-radius, and other styles for the section.",

    "Within the 'work_items' class, there's a nested 'top_title' class that sets styles for the top title section of the component. It defines background-color, padding, font-family, font-size, and font-weight properties for the heading.",

    "The 'actions' class within the 'top_title' section sets styles for the actions section. It defines display, flex-direction, margin, and other styles for the section.",

    'Within the "actions" class, there are "left" and "right" classes that define styles for the left and right sections of the actions. They define display, margin, and other styles for the sections.',

    'The code includes styles for buttons within the "left" and "right" sections, such as background, border, padding, cursor, margin, color, font-family, font-size, and font-weight properties.',

    'The code includes styles for the "filter" class, which represents the filter input section. It sets styles for border, background-color, display, align-items, margin, padding, and other properties.',

    'The code includes styles for the "ant-table-thead>tr>th" class, which sets background, font-family, font-size, and font-weight styles for the table headers.',

    'The "ant-table-row" class sets font-family, font-size, and font-weight styles for the table rows.',

    'The code includes styles for pagination elements, such as font-family, font-size, font-weight, color, background-color, padding, border, and other properties.',

    'Styles for the "ant-select" class, which represents the select dropdown, are defined. It sets border, border-radius, and other styles for the select dropdown.',

    'The code includes styles for the "ant-dropdown-menu" class, which sets border, border-radius, and padding styles for the dropdown menu.',
    
    'The code includes styles for the "ant-dropdown-menu-item" class, which sets font-family, font-size, and font-weight styles for the dropdown menu items.',

    'The code includes styles for hover effects on dropdown menu items, setting background-color and color properties.'
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
        <ImageComp image={"/agileALM/filterItems.png"} imageTitle={"Screenshot 1: dashboard"}></ImageComp>
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



const ItemsFilter = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />}></TabSelection>
        </Box>
    );
};

export default ItemsFilter;
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

const token = '';

const codeSnippet = `import { Avatar, notification, Tooltip, Drawer, Select, Alert, Tag, Modal, Input, Space, Spin } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux'
import { getTotalUsers } from '../../actions/projectActions';
import { AiOutlineStar, AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { BsPencil, BsClipboard } from 'react-icons/bs';
const { Option } = Select
import { MdKeyboardArrowRight } from 'react-icons/md';
import moment from 'moment';
import { useRouter } from 'next/router';
import parse from 'html-react-parser'


function Overview() {
    const { project, items, users } = useSelector(state => state.project)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [isInviting, setIsInviting] = useState(false)

    const [groups, setGroups] = useState([])
    const [emails, setEmails] = useState([])
    const [members, setMembers] = useState([])
    const [selectedGroups, setSelectedGroups] = useState([])

    const [description, setDescription] = useState("")
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
    const [usersData, setUsersData] = useState({});

    const [sortedDate, setSortedDate] = useState([]);

    const Router = useRouter();

    const handleDescCancel = () => {
        setIsDescriptionVisible(false)
    }
    const handleShoewDesc = () => {
        setDescription(project?.description)
        setIsDescriptionVisible(true)
    }

    const saveDesc = () => {
        let data = {
            description
        }

        axios.put(/project/description/${project?._id}, data)
            .then(res => {
                dispatch({
                    type: "UPDATE_PROJECT",
                    payload: res.data?.project
                })
                handleDescCancel()
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })
    }


    const getMembers = () => {
        axios.get(/organization/allmember/${project.organization})
            .then(res => {
                setMembers(res.data.members)
            })
            .catch(err => {
                notification.error({ message: err?.response?.data?.error })
            })

    }

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    useEffect(() => {
        if (project) {
            getMembers()
        }
    }, [project])

    useEffect(() => {
        if (project) {
            axios.get(/project/groups/${project._id}/all)
                .then(res => {
                    setGroups(res.data.groups)
                })
                .catch(err => {
                    console.log(err);

                })
        }
    }, [project]);


    useEffect(() => {
        axios.get(/project/user-info/${project._id})
            .then(res => {
                setUsersData(res.data);
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }, []);


    const handleInvite = async () => {
        if (emails.length === 0) {
            return notification.error({ message: "Please enter emails" })
        }



        let results = await Promise.all(emails.map(async (email) => {
            return validator.isEmail(email)
        }))

        if (results.includes(false)) {
            return notification.error({ message: "Some of your email is invalid" })
        }

        if (selectedGroups.length === 0) {
            return notification.error({ message: "Please select at least one group/team" })
        }

        let data = {
            project: project._id,
            emails,
            groups: selectedGroups,
        }
        setIsInviting(true)
        axios.post(/project/invite, data)
            .then(res => {
                notification.success({ message: "Invited succefully" })
                dispatch(getTotalUsers(project._id))

                setIsInviting(false)
                setVisible(false)
            })
            .catch(err => {
                setIsInviting(false)
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const handleLikeFav = (type) => {
        let data = { type, method: project[type]?.includes(user?._id) ? "remove" : "add" }
        axios.post(/project/like-favourite/${project?._id}, data)
            .then(res => {
                dispatch({
                    type: "SET_PROJECT",
                    payload: res.data.project
                })
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const features = [
        {
            title: 'Total Epics',
            count: items?.filter(item => item?.type === 'epic').length || 0,
            icon: '/New_Template/overview/feature.png'
        },
        {
            title: 'Total Tasks',
            count: items?.filter(item => item?.type === 'task').length || 0,
            icon: '/New_Template/overview/task.png'

        },
        {
            title: 'Total Features',
            count: items?.filter(item => item?.type === 'feature').length || 0,
            icon: '/New_Template/overview/features.png'

        },
        {
            title: 'Total Bugs',
            count: items?.filter(item => item?.type === 'bug').length || 0,
            icon: '/New_Template/overview/bugs.png'
        }
    ];

    // console.log('items', items.filter(item => item?.type === 'bug').length);

    useEffect(() => {
        const task = items?.filter(item => (item?.type === 'task')).filter(item => item?.createdBy === user._id);

        // const taskTask = items?.filter(item => (item?.type === 'task')).filter(item => item?.createdBy === user._id);

        // console.log('taskTaks', taskTask);


        //single value
        // const latestDate = task?.reduce((a, b) => {
        //     return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
        // });

        const sorted = task?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setSortedDate(sorted);

    }, []);



    return (
        <div className='overview'>

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
            {/* <div className="top_title">
                <div className="name">
                    <Avatar style={{ background: "#6BA5E7" }} shape='square' >{project.name.split(' ').map(item => item.charAt(0).toUpperCase())}</Avatar>
                    <h1>{project.name}</h1>
                </div>
                <div className="actions">

                    <Tooltip title="Add New User in the Project" color={'#141D38'} key="Add New User in the Project" placement="top">
                        <button onClick={() => showDrawer()} className='default_button' id="add_user">Add User</button>
                    </Tooltip>


                    <Tooltip title={project?.favourites?.includes(user?._id) ? 'Remove from Favorite' : 'Add to Favourite'} color={'#141D38'} key="Add to favourite" placement="top">

                        <button onClick={() => handleLikeFav('favourites')} className={'star'}>
                            {
                                project?.favourites?.includes(user?._id) ?
                                    <AiFillStar size={28} className='icon' /> :
                                    <AiOutlineStar size={28} className='icon' />
                            }
                        </button>

                    </Tooltip>
                </div>
            </div> */}
            <div className="details">
                <div className="left">
                    <div className="about">
                        {/* <div className='top'>
                            <h1>About this project</h1>
                            <div className="actions">
                                <div className="like">

                                    <Tooltip title="Give a Like" color={'#141D38'} key="Give a Like" placement="top">
                                        <button onClick={() => handleLikeFav('likes')}>
                                            {
                                                project?.likes?.includes(user?._id) ?
                                                    <AiFillHeart className={'icon active} size={20} /> :
                                                    <AiOutlineHeart className={'icon'} size={20} />

                                            }
                                            <span>Like</span>
                                        </button>
                                    </Tooltip>

                                    <div className="count">{project?.likes?.length || 0}</div>
                                </div>

                                <Tooltip title="Edit Project Description" color={'#141D38'} key="Edit Project Description" placement="top">
                                    <button onClick={() => handleShoewDesc()}>
                                        <BsPencil size={20} />
                                    </button>
                                </Tooltip>


                            </div>

                        </div>
                        <p>{project?.description || "No decription found"}</p> */}

                        <div className='title'>
                            <h3><Avatar style={{ background: "#5831F0" }} shape='square' >{project?.name?.split(' ').map(item => item.charAt(0).toUpperCase())}</Avatar> Project: {project?.name}</h3>
                            <hr style={{ marginTop: '10px', color: '#414141', opacity: '0.3' }}></hr>
                        </div>

                        <div className='user_details'>
                            <p>Project Owner: <span>{usersData?.fullName}</span></p>
                            <p>Owner Contact: <span>{usersData?.email}</span></p>
                            <p>Start Date: <span>{moment(project?.createdAt).format("DD-MM-YYYY")}</span></p>
                        </div>

                        <div className='about_project'>
                            <h5>About The Project</h5>
                            <p>{project?.description}</p>
                        </div>

                    </div>

                    <div className="about" style={{ marginTop: '20px' }}>
                        <h5>Project Members</h5>
                        <div className='d_flex d_between'>

                            <div style={{ marginTop: "10px", maxWidth: '90%' }}>
                                {
                                    users.map((user, i) => (
                                        <Tooltip title={user.email} key={i}>
                                            <Avatar size={"large"} style={{ backgroundColor: '#f56a00' }}>{user?.firstName}</Avatar>
                                        </Tooltip>
                                    ))
                                }
                            </div>


                            <div style={{ cursor: 'pointer' }} onClick={() => showDrawer()}>
                                <Tooltip title="Add User To The Project" color={'#141D38'} placement="top">
                                    <img src="/New_Template/overview/plus.svg" alt="Add User"></img>
                                </Tooltip>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="right">
                    <div className="stats">
                        <div className="top" id="ant-custom-select">
                            <h3>Project Status</h3>
                            <Select defaultValue={7} style={{ width: "120px" }}>
                                <Option value={1}>Last 1 day</Option>
                                <Option value={7}>Last 7 day</Option>
                                <Option value={30}>Last 30 day</Option>
                            </Select>
                        </div>

                        <hr style={{ marginTop: '10px', color: '#414141', opacity: '0.3' }}></hr>

                        <h5>Boards</h5>
                        <div className="work_item">
                            <div className="item_section">
                                <div className="icon_container">
                                    <img src='/New_Template/overview/work_items.svg'></img>
                                </div>
                                <div className="info">
                                    <p className='text'>Created Work Items</p>
                                    <p className="count">{items?.length}</p>
                                </div>
                            </div>


                            <div className="item_section">
                                <div className="icon_container">
                                    <img src='/New_Template/overview/finished.svg'></img>
                                </div>
                                <div className="info">
                                    <p className='text'>Finished Work Items</p>
                                    <p className="count">{items?.filter(x => x.state === 'closed').length}</p>
                                </div>
                            </div>
                        </div>

                        {sortedDate.length > 0 && <div className='mt_15'>
                            <h5>Recent Activities</h5>
                        </div>}
                        <div className='recent_activities_container'>
                            {
                                sortedDate?.map(item => <div className='single_recent' key={item?._id}>
                                    <div className='top'>
                                        <h4># {item?.id}</h4>
                                        <div className='d_alignCenter'>
                                            <span className={${item?.state === 'new' ? 'dotnew' : item?.state === 'resolved' ? 'dotresolved' : item?.state === 'active' ? 'dotprogress' : item?.state === 'closed' ? 'dotfinished' : ''}}></span>
                                            <p className={${item?.state === 'new' ? 'new' : item?.state === 'resolved' ? 'resolved' : item?.state === 'active' ? 'progress' : item?.state === 'closed' ? 'finished' : ''}}>

                                                {${item?.state === 'new' ? 'New' : item?.state === 'resolved' ? 'Resolved' : item?.state === 'active' ? 'Progress' : item?.state === 'closed' ? 'Finished' : ''}}

                                            </p>
                                        </div>
                                    </div>
                                    <p>{item?.title?.slice(0, 25)} - {item?.description ? parse(item?.description) : ""}</p>
                                    <p>{user?.fullName}</p>
                                    {/* <p>{parser(user?.description)}</p> */}
                                </div>).splice(0, 2)
                            }

                            {sortedDate.length > 0 && <div className='d_center see_all mt_10'>
                                <div className='d_alignCenter'>
                                    <a onClick={() => Router.push(/organization/${Router?.query?.organization}/${Router?.query?.project}?tab=item)}>See All Activities &rarr;</a>
                                </div>
                            </div>}

                        </div>

                    </div>
                    {/* <div className="members card_view">
                        <h1>Members</h1>
                        <div style={{ marginTop: "10px" }}>
                            {
                                users.map((user, i) => (
                                    <Tooltip title={user.email} key={i}>
                                        <Avatar style={{ backgroundColor: '#f56a00' }}>{user?.firstName}</Avatar>
                                    </Tooltip>
                                ))
                            }
                        </div>

                    </div> */}
                </div>
            </div>


            <Drawer
                title="Add User"
                placement="right"
                onClose={onClose}
                visible={visible}
                footer={(
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <button onClick={() => onClose()} style={{ marginRight: "10px", width: '48%' }} className='default_button_outline2_delete'>Cancel</button>
                        <button disabled={isInviting} style={{ width: '48%' }} onClick={() => handleInvite()} className='default_button2' id="save">{isInviting && <Spin />} Save</button>
                    </div>
                )}
            >
                <label>Enter email and press enter:</label>
                <Select
                    // dropdownStyle={{ display: "none" }}
                    value={emails}
                    mode="tags"
                    id="enter_email"
                    style={{ width: '100%' }}
                    placeholder="Enter emails"
                    onChange={(value) => setEmails(value)}>
                    {
                        members.map((member, i) => (
                            <Option value={member?.user?.email} key={i}>{member?.user?.email} ({member?.user?.fullName})</Option>
                        ))
                    }


                </Select>

                {
                    emails.filter((email) => !members.map(m => m?.user?.email).includes(email)).length > 0 &&
                    <Alert style={{ margin: "10px 0" }} message={<>
                        <Tag color={'geekblue'}>{emails.filter((email) => !members.map(m => m?.user?.email).includes(email)).join(",")}</Tag>

                        isn't member of this organization. We will invite them by email
                    </>
                    }

                        type='warning'>

                    </Alert>

                }

                <label>Team/Groups:</label>
                <Select
                    mode='multiple'
                    id="team_groups"
                    value={selectedGroups}
                    onChange={value => setSelectedGroups(value)}
                    style={{ width: "100%" }}
                >
                    {
                        groups.map((group, i) => (
                            <Option value={group._id} key={i} >{group.name} ({group?.type})</Option>
                        ))
                    }
                </Select>

            </Drawer >




            <Modal
                visible={isDescriptionVisible}
                onCancel={handleDescCancel}
                footer={[
                    <Space>
                        <button onClick={() => handleDescCancel()} className='default_button_outline'>Cancel</button>
                        <button onClick={() => saveDesc()} className='default_button'>Save</button>
                    </Space>
                ]}
            >
                <label htmlFor="desc">Project Description:</label>
                <Input.TextArea size='large' value={description} onChange={e => setDescription(e.target.value)} />
            </Modal>
        </div >
    )
}

export default Overview`

const list = [
    "This is a React functional component called 'Overview'. It imports various components and libraries from external dependencies such as Ant Design, Axios, React Icons, and Moment. The component displays an overview of a project,including project details, statistics, recent activities, and project members.",

    "The component starts by importing the necessary dependencies and defining the initial state variables using the useState hook. It also utilizes the useSelector and useDispatch hooks from the React Redux library to access and update the application state.",

    "handleDescCancel and handleShowDesc functions control the visibility of a modal for editing the project description.",

    "The saveDesc function sends a PUT request to update the project description using the Axios library.",

    "The getMembers function fetches the members of the project's organization using an API request.",

    "The showDrawer and onClose functions control the visibility of a drawer component for adding users to the project.",

    "The handleInvite function sends a POST request to invite users to the project, validating email addresses and selected groups before making the API call.",

    "The handleLikeFav function handles the like and favorite functionality of the project by sending a POST request to update the project's likes and favorites.",

    "The features array contains objects representing different project features such as epics, tasks, features, and bugs. These features are displayed with their respective counts in the rendered JSX.",

    "Several useEffect hooks are used to fetch data from the server and update the component state accordingly. For example, useEffect(() => {...}, [project]) fetches the project's members when the project state variable changes.",
];

const codeSnippet2 = `.overview {

    .all_features {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
        grid-gap: 20px;
        margin-bottom: 20px;

        .single_feature {
            display: flex;
            background-color: #FFFFFF;
            justify-content: space-around;
            padding: 20px 0;
            border-radius: 10px;

            .icon_title {
                display: flex;
                // align-items: center;
            }

            .icon {
                background-color: #EFEBFE;
                border-radius: 10px;
                padding: 10px 20px;
                display: flex;
                justify-content: center;

                img {
                    object-fit: contain;
                    // height: 20px;
                    // width: 20px;
                }
            }

            .title_count {
                margin-left: 10px;

                h1 {
                    font-family: $poppins;
                    font-size: 28px;
                    font-weight: 600;
                    margin-top: 3px;
                }

                p {
                    font-family: $poppins;
                    font-size: 16px;
                    font-weight: 400;
                    opacity: 0.8;
                }
            }

        }
    }

    .top_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 15px 13px;

        .name {
            display: flex;

            h1 {
                font-weight: 900;
                margin-left: 10px;

                @media (max-width: 592px) {
                    line-height: 1;
                    font-weight: 600;
                }
            }
        }

        .actions {
            display: flex;
            align-items: center;

            .star {
                background: none;
                border: none;

                .icon {
                    padding: 2px;
                    margin: 0 10px;
                    color: rgba(214, 127, 60, 1);
                    display: inline-block;

                    &:hover {
                        background-color: #ddd;
                        cursor: pointer;
                    }

                }
            }
        }
    }

    .details {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        padding-right: 15px;

        @media screen and (max-width: 1068px) {
            flex-direction: column;
        }

        .card_view {
            padding: 20px;
            background-color: white;
            box-shadow: $box_shadow;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 3px;

            @media screen and (max-width: 512px) {
                margin-right: 0;
            }

            h1 {
                font-weight: bold;
                line-height: 1;
            }
        }

        .left {
            width: 50%;

            @media screen and (max-width: 1068px) {
                min-width: 100%;
            }

            .about {
                background-color: #FFFFFF;
                padding: 15px 20px;
                border-radius: 15px;

                h5 {
                    font-family: "Poppins", sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                }

                .title {
                    h3 {
                        font-family: $poppins;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }

                .user_details {
                    margin-top: 10px;

                    p {
                        font-family: $poppins;
                        font-size: 14px;
                        font-weight: 500;
                    }

                    span {
                        font-family: $poppins;
                        font-size: 14px;
                        font-weight: 500;
                        color: $primary_color_p2;
                    }
                }

                p {
                    color: #8b8b8b;

                    @media (max-width: 512px) {
                        line-height: 1;
                        margin-top: 15px;
                    }
                }

                .about_project {
                    margin-top: 20px;

                    h5 {
                        font-family: $poppins;
                        font-size: 14px;
                        font-weight: 600;
                    }

                    p {
                        font-family: $poppins;
                        font-size: 15px;
                        font-weight: 300;
                        text-align: justify;
                    }
                }

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .actions {
                        display: flex;
                        align-items: center;

                        button {
                            padding: 5px 10px;
                            background: none;
                            border: none;
                            display: flex;
                            align-items: center;

                            &:hover {
                                background-color: $light_gray;
                                cursor: pointer;
                            }

                            margin: 0 10px;
                            border-radius: 3px;
                        }

                        .like {
                            display: flex;
                            align-items: center;

                            .icon {
                                margin-right: 10px;

                                &.active {
                                    color: red;

                                }
                            }

                            .count {
                                background-color: $light_gray;
                                padding: 0 10px;
                                border-radius: 50%;
                            }
                        }

                    }
                }
            }
        }

        .right {
            width: 50%;

            @media screen and (max-width: 1068px) {
                width: 100%;
            }

            .stats {
                background-color: #FFFFFF;
                padding: 15px 20px;
                border-radius: 15px;
                overflow-y: auto;

                h5 {
                    display: inline-block;
                    margin: 10px 0;
                    font-family: "Poppins", sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                }

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    h3 {
                        font-family: $poppins;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }

                .work_item {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-top: 15px;
                }

                .item_section {
                    // flex-basis: 50%;
                    // display: flex;
                    // align-items: center;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    border-radius: 10px;
                    box-shadow: 5px 5px 5px rgba(88, 105, 240, 0.08);
                    padding: 5px 35px;
                    // position: relative;

                    .icon_container {
                        padding: 5px;
                        // background-color: $light_gray;
                        border-radius: 5px;
                        margin-right: 10px;
                        // position: absolute;
                        // top: 0;
                        margin-top: -20px;

                        .icon {
                            font-size: 25px;
                        }

                    }

                    .count {
                        font-family: "Poppins", sans-serif;
                        font-size: 28px;
                        font-weight: 600;
                        margin-top: 3px;
                    }

                    .text {
                        font-family: "Poppins", sans-serif;
                        font-size: 14px;
                        font-weight: 500;
                        opacity: 0.7;
                    }
                }

                .recent_activities_container {
                    .see_all {
                        a {
                            color: #584AF0;
                            font-family: "Poppins", sans-serif;
                            font-size: 15px;
                            font-weight: 600;
                        }
                    }

                    .single_recent {
                        border: 1px solid rgba(65, 65, 65, 0.15);
                        border-radius: 10px;
                        padding: 10px;
                        margin-top: 10px;

                        .top {
                            h4 {
                                font-family: "Poppins", sans-serif;
                                font-size: 15px;
                                font-weight: 600;
                            }

                            .dotnew {
                                height: 15px;
                                width: 15px;
                                background-color: #8dc2f8;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .dotresolved {
                                height: 15px;
                                width: 15px;
                                background-color: #a4efab;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .dotprogress {
                                height: 15px;
                                width: 15px;
                                background-color: #A8F9C0;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .dotfinished {
                                height: 15px;
                                width: 15px;
                                background-color: #11B07A;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .finished {
                                color: #11B07A;
                                font-family: "Poppins", sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                margin-left: 5px;
                            }

                            .resolved {
                                
                                color: #a4efab;
                                font-family: "Poppins", sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                margin-left: 5px;
                            }

                            .new {
                                color: #8dc2f8;
                                font-family: "Poppins", sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                margin-left: 5px;
                            }

                            .dot_progress {
                                height: 15px;
                                width: 15px;
                                background-color: #F3943E;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .dot_backlog {
                                height: 15px;
                                width: 15px;
                                background-color: #D8404D;
                                border-radius: 50%;
                                display: inline-block;
                            }

                            .progress {
                                color: #A8F9C0;
                                font-family: "Poppins", sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                margin-left: 5px;
                            }

                            .backlog {
                                color: #D8404D;
                                font-family: "Poppins", sans-serif;
                                font-size: 14px;
                                font-weight: 500;
                                margin-left: 5px;
                            }
                        }


                        p {
                            font-family: "Poppins", sans-serif;
                            font-size: 15px;
                            font-weight: 300;
                            color: #8b8b8b;

                            ul, li {
                                list-style: none !important;
                            }
                        }
                    }
                }
            }
        }

    }
}

.ant-select-dropdown {
    padding: 0;
}

.rc-virtual-list-holder-inner {
    border: 1px solid rgba(88, 49, 240, 0.2);
    border-radius: 7px;
    // padding: 0;
}

.ant-select-item {

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;

    &:hover {
        background-color: $primary_color_p2;
        color: white;
    }
}`

const list2 = [
    "The code is to target a specific component or section with a class name of .overview.",

    "Inside the .overview section, there are various CSS rules defined for different elements and classes.",

    "The .all_features class represents a container for multiple features. It applies CSS grid layout properties to arrange the features in a grid format with responsive column sizing.",

    "The .single_feature class represents a single feature within the .all_features container. It defines styles for the feature's layout, background color, padding, and border radius.",

    "The .icon_title, .icon, and .title_count classes represent different elements within a feature. They define styles for the layout, font, margin, and padding of these elements.",

    "The .top_title class represents a container for a top title section. It defines styles for its layout, background color, padding, and alignment of its child elements.",

    "The .name and .actions classes represent different elements within the .top_title container. They define styles for their layout, font, margin, and alignment.",

    "The .details class represents a container for detailed information. It defines styles for its layout, padding, and gap between child elements.",

    "The .card_view class represents a card-like view within the .details container. It defines styles for its layout, background color, padding, box shadow, and border radius.",

    "The .left and .right classes represent two different sections within the .details container. They define styles for their width and alignment.",

    "Inside the .about class, there are styles defined for a specific section of information. It defines background color, padding, border radius, and font styles for various headings, paragraphs, and details.",

    "The .about_project class represents a specific section within the .about section. It defines styles for the margin, headings, and paragraphs related to project information.",

    "The .stats class represents a container for statistics or metrics. It defines styles for its background color, padding, border radius, and scroll behavior for overflowing content.",

    "The .single_recent class represents a single item within the recent activities container. It defines styles for its layout, border, padding, margins, and font styles for headings and paragraphs."
]

const codeSnippet3 = `exports.updateInvitedProject = async (req, res) => {
    // #swagger.tags = ['Project']
    // #swagger.summary = 'Invite for a project'
    let { project, userId, groups } = req.body;

    if (!project) {
        return res.status(400).json({ error: "Project id is required" })
    }
    if (!userId) {
        return res.status(400).json({ error: "No emails selected" })
    }
    if (groups?.length === 0) {
        return res.status(400).json({ error: "Select at least one group/team" })
    }

    try {
        let projectFind = await Project.findById(project).exec()


        let user = await User.findById(userId).exec()

        if (!user) {
            return res.status(400).json({ error: "User not found!" })
        }

        let findExisting = await OrganizationMember.findOne({ user: userId, organization: projectFind.organization }).exec()
        if (findExisting) {
            groups.map(async (g) => {
                await ProjectGroup.findByIdAndUpdate(g, { $addToSet: { members: findExisting._id } }).exec()
            })
            return res.status(200).json({ msg: 'Updated successfully' });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong" })
    }


}`

const list3 = [
    "This code snippet is an implementation of the updateInvitedProject function, which handles the logic for inviting a user to a project. Here's a breakdown of the code",
    "The function is an asynchronous function that takes in the req and res parameters, representing the request and response objects, respectively.",

    "It extracts the project, userId, and groups values from the req.body object using destructuring.",

    "It performs several validation checks to ensure that the required data is present. If any of the validations fail, it returns a response with an error message and an appropriate HTTP status code.",

    "Inside the try block, it attempts to find the project associated with the provided project ID using Project.findById(project).exec(). If the project is not found, it returns a response with an error message.",

    "It then attempts to find the user associated with the provided userId using User.findById(userId).exec(). If the user is not found, it returns a response with an error message.",

    "Next, it checks if the user already exists as a member in the organization related to the project. It uses OrganizationMember.findOne({ user: userId, organization: projectFind.organization }).exec() to find an existing organization member. If the member is found, it updates the associated project groups by iterating over the groups array and using ProjectGroup.findByIdAndUpdate(g, { $addToSet: { members: findExisting._id } }).exec().",

    "If all the operations are successful, it returns a response with a success message and an HTTP status code of 200.",
    "If any errors occur during the execution, it catches the error, logs it, and returns a response with an error message and an appropriate HTTP status code.",
]

const model = `const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    profilePicture: { type: String, default: "" },
    firstName: { type: String, required: true },
    lastName: { type: String, default: "" },
    hash_password: String,
    role: { type: String, enum: ["master", "staff", "user"], default: "user" },
    password_reset_token: {
      type: String,
      default: ""
    },
    isEmailVerified: {
      status:{type:Boolean,default:"false"},
      token:String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};



module.exports = mongoose.model("User", userSchema);
`
const dbModelList = [
    "The module imports the required dependencies: mongoose and bcrypt.",

    "It creates a new Mongoose schema using the mongoose.Schema function. The schema defines the structure and properties of the User model.",

    "The schema consists of various fields: email: A string field representing the user's email address. It is required, unique, and stored in lowercase, profilePicture: A string field representing the URL or path to the user's profile picture. It has a default value of an empty string, firstName: A string field representing the user's first name. It is required, lastName: A string field representing the user's last name. It has a default value of an empty string, hash_password: A string field representing the hashed password of the user. This field stores the encrypted version of the user's password, role: A string field representing the role of the user. It accepts three possible values: 'master', 'staff', or 'user'. The default value is set to 'user', password_reset_token: A string field representing the token used for password reset. It has a default value of an empty string, isEmailVerified: An object field that represents the email verification status of the user. It has two properties: status (a boolean indicating if the email is verified) and token (a string representing the verification token).",

    "The schema also includes additional configuration options: timestamps: true: It automatically adds createdAt and updatedAt fields to the schema, tracking the creation and modification timestamps of the user documents, toJSON: { virtuals: true }: It enables the schema to include virtual properties when converting the user document to JSON, toObject: { virtuals: true }: It enables the schema to include virtual properties when converting the user document to a plain JavaScript object.",

    "The schema defines a method called authenticate, which is an asynchronous function that compares the provided password with the hashed password stored in the hash_password field. It uses bcrypt.compare to perform the comparison and returns a promise with the result.",

    "The schema defines a virtual property called fullName, which represents the full name of the user. It concatenates the firstName and lastName fields.",

    "Finally, the module exports the Mongoose model created from the schema using mongoose.model, with the model name 'User' and the defined userSchema."
]

const model2 = `const mongoose = require("mongoose");

const organizatinoMemberSchema = new mongoose.Schema(
    {
        organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
       // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        user:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
        accessLevel: { type: String, enum: ["basic", "stakeholder","administrator"], default: "basic" }
    },
    { timestamps: true }
);

module.exports = mongoose.model("OrganizationMember", organizatinoMemberSchema);`

const model2List = [
    'The schema consists of several fields: organization: A reference field of type mongoose.Schema.Types.ObjectId that refers to the Organization model. It represents the organization to which the member belongs, user: A reference field of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the user who is a member of the organization, accessLevel: A string field representing the access level of the member within the organization. It accepts three possible values: "basic", "stakeholder", or "administrator". The default value is set to "basic".',

    "The schema includes an additional configuration option: timestamps: true: It automatically adds createdAt and updatedAt fields to the schema, tracking the creation and modification timestamps of the organization member documents.",

    'Finally, the module exports the Mongoose model created from the schema using mongoose.model, with the model name "OrganizationMember" and the defined organizatinoMemberSchema.'
]

const model3 = `const mongoose = require("mongoose");

const projectGroupSchema = new mongoose.Schema(
  {
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    name: {type:String,required:true},
    type: {type:String, enum:["team","group"],default:"team"},
    description: { type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    members:[{type: mongoose.Schema.Types.ObjectId, ref:"OrganizationMember"}],
    canDelete:{type:Boolean,default:true},
    item:{
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    sprint:{
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    retro:{
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    group:{
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false},
      addMember:{type:Boolean,default:false},
      removeMember:{type:Boolean,default:false},
      updatePermission:{type:Boolean,default:false},
    },
    projectPermission:{
      update:{type:Boolean,default:false},
    },

    testCaseTemplate:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    testPlan:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    testParameter:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    testConfiguration:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    testRuns:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
    testProgressReport:{
      read:{type:Boolean,default:true},
      delete:{type:Boolean,default:false},
      update:{type:Boolean,default:false},
      create:{type:Boolean,default:false}
    },
 
  },
  { timestamps: true }
);


module.exports = mongoose.model("ProjectGroup", projectGroupSchema);`

const model3List = [
    "The schema consists of several fields:",

    "project: A reference field of type mongoose.Schema.Types.ObjectId that refers to the Project model. It represents the project to which the group belongs.",

    "name: A string field representing the name of the group. It is required.",

    'type: A string field representing the type of the group. It accepts two possible values: "team" or "group". The default value is set to "team".',

    'description: A string field representing the description or details of the group.',
    'createdBy: A reference field of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the user who created the group.',
    'members: An array of reference fields of type mongoose.Schema.Types.ObjectId that refers to the OrganizationMember model. It represents the members who are part of the group.',

    'canDelete: A boolean field indicating whether the group can be deleted or not. The default value is set to true.',

    'The schema includes additional fields for different permissions:',

    'item: Represents the permissions related to items within the group.',

    'sprint: Represents the permissions related to sprints within the group.',

    'retro: Represents the permissions related to retrospectives within the group.',

    'group: Represents the permissions related to group management within the group.',

    'projectPermission: Represents the permissions related to project-level operations within the group.',

    'testCaseTemplate: Represents the permissions related to test case templates within the group.',

    'testPlan: Represents the permissions related to test plans within the group.',

    'testParameter: Represents the permissions related to test parameters within the group.',

    'testConfiguration: Represents the permissions related to test configurations within the group.',

    'testRuns: Represents the permissions related to test runs within the group.'
]

const model4 = `const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    slug: {type:String, required:true,unique:true},
    description: { type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    organization: {type: mongoose.Schema.Types.ObjectId, ref:"Organization"},
    // members:[{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
    category:{type: String,enum:["basic",'agile'], default:"basic"},
    likes:[{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
    favourites:[{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
  },
  { timestamps: true }
);


module.exports = mongoose.model("Project", projectSchema);`

const model4List = [
    "The module imports the required dependency: mongoose.",
    "It creates a new Mongoose schema using the mongoose.Schema function. The schema defines the structure and properties of the Project model.",

    "The schema consists of several fields: name: A string field representing the name of the project. It is required,",

    "slug: A string field representing the unique slug of the project. It is required and has a unique constraint.",

    "description: A string field representing the description or details of the project.",
    "reatedBy: A reference field of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the user who created the project.",
    "organization: A reference field of type mongoose.Schema.Types.ObjectId that refers to the Organization model. It represents the organization to which the project belongs.",

    'category: A string field representing the category of the project. It accepts two possible values: "basic" or "agile". The default value is set to "basic".',

    "likes: An array of reference fields of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the users who have liked the project.",

    "favourites: An array of reference fields of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the users who have marked the project as a favorite",

    'Finally, the module exports the Mongoose model created from the schema using mongoose.model, with the model name "Project" and the defined projectSchema.'
]

const ModelComp = () => {
    return (
        <Box>

            <Typography mt={2} variant='h4'>User Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={dbModelList}></Process>

            <Box mt={2}>
                <Typography mt={2} variant='h4'>Project Model</Typography>
                <CodeBox codeSnippet={model4}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model4List}></Process>
            </Box>

            <Box mt={2}>
                <Typography mt={2} variant='h4'>OrganizationMember Model</Typography>
                <CodeBox codeSnippet={model2}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model2List}></Process>
            </Box>

            <Box mt={2}>
                <Typography mt={2} variant='h4'>ProjectGroup Model</Typography>
                <CodeBox codeSnippet={model3}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model3List}></Process>
            </Box>

        </Box>
    )
}

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/addUser.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Overview.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Overview.css</Typography>
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
            <Typography mt={2} variant='h4'>Invite project controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const AddUserToProject = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />}></TabSelection>
        </Box>
    );
};

export default AddUserToProject;
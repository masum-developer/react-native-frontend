import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import StepComp from '../../EnvironmentSetup/StepComp';
import MuiAlert from '@mui/material/Alert';
import TabSelection2 from '../TabSelection2';
import UserStoryComp from '../../global/UserStoryComp';

const res = {
    data: {
        token: '',
        organizations: [{
            slug: ''
        }]
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

const org = {
    slug: ''
}

const collapsed = '';

const organization = {
    _id: ''
}

const id = '';

const process = {
    env: {
        NEXT_PUBLIC_CLIENT_URL : {

        },
        CLIENT_URL: {

        }
    }
};

const record = {
    _id: ''
};

const invite = {
    _id: ''
}
const organizationId = '';

const updated = {
    _id: ''
}


const codeSnippet = `import React, { useState, useEffect } from 'react';
import { Button, Drawer, notification, Select, Space, Tabs, Table, Menu, Dropdown, Checkbox, Divider, Modal, Popconfirm, message } from 'antd';
import { useRouter } from 'next/router'
import validator from 'validator';
import axios from 'axios';
import moment from 'moment';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
const { Option } = Select;
const { TabPane } = Tabs;

function Users({ projects, organization }) {
    const { user } = useSelector(state => state.auth);
    const Router = useRouter()
    const [visible, setVisible] = useState(false);
    const [emails, setEmails] = useState([])
    const [accessLevel, setAccessLevel] = useState('basic')
    const [selectedProjects, setSelectedProjects] = useState([])

    const handleChangedSelectedproject = (isChecked, id) => {
        let filtered = selectedProjects.filter(p => p?.project === id)
        if (filtered.length === 0) {
            setSelectedProjects(prev => ([...prev, { project: id, groups: [] }]))
        } else {
            setSelectedProjects(prev => (prev.filter(p => p?.project !== id)))
        }
    }

    const handleChangeGroup = (value, project) => {
        let arr = [...selectedProjects]
        let index = arr.findIndex(p => p?.project === project)
        let item = {
            ...arr[index], groups: value
        }

        arr[index] = item
        setSelectedProjects(arr)
    }


    const [invitations, setInvitations] = useState([])
    const [members, setMembers] = useState([])

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

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

        let data = {
            organization: organization._id,
            emails,
            projects: selectedProjects,
            accessLevel
        }

        axios.post(/organization/invite, data)
            .then(res => {
                notification.success({ message: "Invited succefully" })
                //setInvitations(prev=>([...prev,res.data.invitations]))
                getInvitation()
                setVisible(false)
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const getInvitation = () => {
        axios.get(/organization/allinvitation/${organization._id})
            .then(res => {
                setInvitations(res.data.invitations)
            })
            .catch(err => {
                console.log(err);
            })

    }
    const getMembers = () => {
        axios.get(/organization/allmember/${organization._id})
            .then(res => {
                setMembers(res.data.members)
            })
            .catch(err => {
                console.log(err);
            })

    }


    const removeUserOrg = (id) => {
        console.log(id);
        axios.patch(/organization/removeuser/${id}, { organization: organization._id })
            .then(res => {
                getMembers()
            })
            .catch(err => {
                console.log(err);
            })
    }

    function confirm(id) {
        Modal.confirm({
            title: 'Are you sure?',
            //   icon: <ExclamationCircleOutlined />,
            content: 'This will remove the user from this group',
            okText: 'Remove',
            cancelText: 'Cancel',
            onOk: () => removeUserOrg(id),
            zIndex: '1111'
        });
    }

    const cancelInvite = (id) => {
        axios.delete(/organization/invite/delete/${id})
            .then(res => {
                getInvitation()
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }
    const resendInvite = (id) => {
        axios.patch(/organization/invite/resend/${id})
            .then(res => {
                notification.success({ message: "Invitation sent successfully" })
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    const MenuMember = ({ record }) => (

        <Menu>
            {/* <Menu.Item>Manage User</Menu.Item> */}
            <button className='default_button_outline2_delete default_button_outline2_delete_small' onClick={() => confirm(record._id)} danger>Remove from organization</button>
        </Menu>
    )


    useEffect(() => {
        if (organization) {
            getInvitation()
            getMembers()
        }
    }, [organization])


    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Access Level',
            dataIndex: 'accessLevel',
            key: 'accessLevel',
            render: (accessLevel) => (
                <span>{accessLevel || "N/A"}</span>
            )
        },
        {
            title: 'projects',
            dataIndex: 'projects',
            render: (projects) => (
                <div>
                    {
                        projects?.map((project) => (
                            <span style={{ display: "inline-block", background: "#E1D9FC", marginRight: "10px", marginTop: '5px', padding: "5px 10px" }}>{project?.project?.name || "Project Deleted"} </span>
                        ))
                    }
                </div>
            )
        },

        {
            title: 'Action',
            key: 'action',
            width: '25%',
            render: (record, text) => (
                <Space>
                    <Popconfirm title="Are you sure?" onConfirm={() => cancelInvite(record?._id)}>
                        <button className='default_button_outline2_delete default_button_outline2_delete_small'>Cancel</button>
                    </Popconfirm>
                    <button className='default_button2 default_button2_small' onClick={() => resendInvite(record._id)}>Resend</button>
                    <CopyToClipboard text={${process.env.NEXT_PUBLIC_CLIENT_URL}/invitation/${record?._id}}
                        onCopy={() => message.success("Copied to clipboard")}>
                        <button className='default_button_outline2 default_button_outline2_small' >Copy Link</button>

                    </CopyToClipboard>
                </Space>
            )
        },
    ];
    const columnsMember = [
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            render: (user) => (
                <span>
                    <p>{user.fullName}</p>
                    <p>{user.email}</p>
                </span>
            )
        },
        {
            title: 'Access Level',
            dataIndex: 'accessLevel',
            key: 'accessLevel',
            render: (accessLevel) => (
                <span>{accessLevel || "N/A"}</span>
            )
        },
        {
            title: 'Date added',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt) => (
                <span>{moment(createdAt).format("D/M/YYYY") || "N/A"}</span>
            )
        },
        {
            title: '',
            key: 'action',
            render: (record, text) => (
                <span>
                    {
                        record.accessLevel !== 'administrator' &&
                        <Dropdown placement='bottomRight' trigger={['click']} overlay={<MenuMember record={record} />}>
                            <BsThreeDotsVertical style={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }} />
                        </Dropdown>
                    }


                </span>
            )
        },
    ];

    const handleConfirm = (organizationId) => {
        axios.delete(/organization/deleteOrgByOwner/${organizationId})
            .then(res => {
                notification.success({ message: "Organization deleted successfully!" })
                window.location.href = "/organization"
            })
            .catch(err => {
                console.log('err', err);
                notification.error({ message: err?.response?.data?.error || 'Something went wrong' })
            })
    }

    return (
        <div>
            <button className='default_button2' onClick={() => showDrawer()}>
                Add User
            </button>
            {user?._id === organization?.createdBy ? <Popconfirm
                title="Delete the organization"
                description="Are you sure to delete this organization?"
                onConfirm={() => handleConfirm(organization?._id)}
                okText="Yes"
                cancelText="No"
            >
                <button className='default_button2_delete ml_15'>
                    Delete Organization
                </button>
            </Popconfirm> : null}

            <Tabs defaultActiveKey="1" >
                <TabPane tab="Members" key="1">
                    <Table bordered dataSource={members} columns={columnsMember} />
                </TabPane>
                <TabPane tab="Invitations" key="2">
                    <Table bordered dataSource={invitations} columns={columns} />
                </TabPane>
                {/* <TabPane tab="Groups" key="3">
                    Groups
                </TabPane> */}
            </Tabs>

            <Drawer
                title="Add user"
                placement="right"
                onClose={onClose}
                visible={visible}
                footer={(
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <button onClick={() => onClose()} style={{ marginRight: "10px", width: '48%' }} className='default_button_outline2_delete'>Cancel</button>
                        <button onClick={() => handleInvite()} style={{ width: '48%' }} className='default_button2'>Save</button>
                    </div>
                )}
            >
                <label>Enter email and press enter:</label>
                <Select
                    dropdownStyle={{ display: "none" }}
                    value={emails}
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Enter emails"
                    onChange={(value) => setEmails(value)}>

                </Select>
                <label>Access Level:</label>
                <Select
                    value={accessLevel}
                    onChange={(value) => setAccessLevel(value)}
                    style={{ width: '100%' }}
                >
                    <Option value='basic'>Basic</Option>
                    <Option value='stakeholder'>Stakeholder</Option>
                </Select>


                <Divider orientation='left'>Projects</Divider>

                {
                    projects?.map((project) => (
                        <div style={{ marginBottom: "10px" }}>
                            <div>
                                <Checkbox id={project._id} checked={selectedProjects.findIndex(p => p?.project === project._id) !== -1} onChange={e => handleChangedSelectedproject(e.target.checked, project._id)} style={{ marginRight: "10px" }} />
                                <label htmlFor={project._id} style={{ textTransform: "capitalize" }}>{project?.name}</label>
                            </div>
                            {
                                selectedProjects.findIndex(p => p?.project === project._id) !== -1 &&
                                <Select onChange={value => handleChangeGroup(value, project._id)} value={selectedProjects.filter(p => p?.project === project._id)[0]?.groups} placeholder='Please select groups/teams' mode='multiple' style={{ width: "100%" }}>
                                    {
                                        project.groups?.map((group) => (
                                            <Option key={group._id} value={group._id}>{group.name} ({group.type})</Option>
                                        ))
                                    }
                                </Select>
                            }

                        </div>
                    ))
                }


            </Drawer>
        </div>
    )
}

export default Users`

const list = [
    "The component imports various components and libraries from the Ant Design library, Next.js, and other dependencies.",

    "The component defines a function component named Users that takes projects and organization as props.",

    "Within the component, it retrieves the user from the Redux store using the useSelector hook and imports the Next.js router.",

    "The component initializes state variables using the useState hook. These variables are visible (to control the visibility of a drawer), emails (an array to store the entered emails), accessLevel (to track the selected access level), and selectedProjects (to store the selected projects and associated groups).",

    "The component defines various functions to handle user interactions. These functions handle opening and closing the drawer, changing the selected projects, and handling the invite functionality.",

    "The component defines additional state variables invitations (to store the invitations received by the organization) and members (to store the members of the organization).",
    
    'The component includes the rendering of a button that triggers the opening of the drawer to add a user. It also conditionally renders a delete organization button if the currently logged-in user is the owner of the organization.',

    "The component renders a set of tabs (Members and Invitations) using the Tabs component from Ant Design. Each tab displays a table (Table component) with the respective data (members or invitations) fetched from the server.",
    
    'Inside the Users component, a Drawer component is rendered to add users to the organization. It includes form fields for entering emails, selecting access levels, and selecting projects with associated groups.',

    'The Users component makes use of various functions (getInvitation, getMembers, removeUserOrg, confirm, cancelInvite, resendInvite) to handle data fetching and manipulation when interacting with the server.',

    'The component uses the useEffect hook to fetch invitations and members when the organization prop is updated.',

    'The component defines columns for the tables (columns and columnsMember) with custom rendering for specific columns.',

    'The Users component returns JSX elements that render the buttons, tabs, tables, and the drawer to add users.'
];

const codeSnippet2 = `// #ant-custom-modal {
    .ant-drawer-body {
      label {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 500;
        opacity: 0.7;
      }
    
      .input {
        border: 1px solid rgba(88, 49, 240, 0.2);
        border-radius: 7px;
        padding: 10px;
      }
    
      .ant-select-multiple .ant-select-selection-item {
        background: $primary_color_p2;
        color: white;
        font-family: "Poppins", sans-serif;
      }
    
      .ant-select-item-option-selected {
        background-color: red !important;
      }
    
      .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        position: relative;
        background-color: #fff;
        border: 1px solid rgba(65, 65, 65, 0.15);
        border-radius: 7px;
        padding: 5px;
      }
    
    }
    
    .ant-drawer-body,
    .ant-drawer-footer {
      background-color: #FFFFFF !important;
    }`

const list2 = [
    "The code starts with a selector #ant-custom-modal, but it appears to be commented out since it is preceded by //.",

    "The code targets the elements with the class .ant-drawer-body inside the Drawer component. These elements are the body content of the drawer.",

    "Inside the .ant-drawer-body selector, there are additional CSS rules:",

    'The label elements inside the drawer body have font styles applied to them. The font family is set to "Poppins", the font size is 14 pixels, the font weight is 500, and the opacity is set to 0.7.',

    'The .ant-select-multiple .ant-select-selection-item class targets the selected items in a multiple select component. It sets the background color to a variable $primary_color_p2 and the text color to white, with a font family of "Poppins".',

    "The .ant-select-item-option-selected class sets the background color to red for selected options in a select component. However, the !important declaration suggests that this style may not take effect.",

    "The .ant-select:not(.ant-select-customize-input) .ant-select-selector class targets the selector component inside the drawer body. It sets the position to relative, background color to white, border to a solid color with transparency, border-radius of 7 pixels, and padding of 5 pixels.",

    "The .setting_button class styles the settings button at the bottom of the sidebar menu. It sets the margin, padding, display, alignment, background color, border, color, border radius, and cursor for the button. The hover styles change the font size when the button is hovered over.",

    "The code also targets the .ant-drawer-body and .ant-drawer-footer classes outside the #ant-custom-modal selector. These classes represent the body and footer sections of the drawer. The background color is set to white for both sections.",
]

const codeSnippet3 = `exports.inviteUser = async (req, res) => {
    let { emails, accessLevel, organization, projects } = req.body
    if (!organization) {
        return res.status(400).json({ error: "Organization is required" })
    }
    if (emails?.length === 0) {
        return res.status(400).json({ error: "Please enter email" })
    }

    try {

        var results = await Promise.all(emails.map(async (email) => {
            try {
                let data = {
                    organization,
                    email,
                    accessLevel,
                    projects
                }
                let findInvite = await OrganizationInvitation.findOne({ organization, email }).exec()
                if (findInvite) {
                    let updated = await OrganizationInvitation.findByIdAndUpdate(findInvite._id, { $set: { accessLevel, projects } }, { new: true }).exec()


                    let templateId = "d-af41a6e195bc4b4da052f525aec6f513"
                    let dynamicTemplateData = {
                        subject: "Ts4u AGILE Invitation",
                        url: ${process.env.CLIENT_URL}/invitation/${updated._id}
                    }
                    await sendDynamicEmail(email, templateId, dynamicTemplateData)
                    return updated

                } else {


                    let _invitation = new OrganizationInvitation(data)
                    let invite = await _invitation.save()
                    let templateId = "d-af41a6e195bc4b4da052f525aec6f513"
                    let dynamicTemplateData = {
                        subject: "Ts4u AGILE Invitation",
                        url: ${process.env.CLIENT_URL}/invitation/${invite._id}
                    }
                    await sendDynamicEmail(email, templateId, dynamicTemplateData)
                    return invite
                }


            } catch (error) {
                console.log(error);
                return false
            }
        }));
        let filter = results.filter(i => i !== false)

        //console.log(filter);
        res.status(200).json({ success: true, invitations: filter })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong" })
    }
}`

const list3 = [
    "The function inviteUser is exported and takes in req (request) and res (response) parameters.",

    "The function extracts the necessary data from the request body, including emails, accessLevel, organization, and projects.",
    
    'It checks if the organization field is present. If not, it returns a 400 error response with the message "Organization is required".',

    'It checks if the emails array is empty. If so, it returns a 400 error response with the message "Please enter email".',

    "Inside a try-catch block, the function proceeds to invite the users by iterating over the emails array using Promise.all.",

    "For each email, it checks if there is an existing invitation for the given organization and email combination using OrganizationInvitation.findOne(). If an invitation is found, it updates the access level and projects using OrganizationInvitation.findByIdAndUpdate(). The updated invitation is then stored in the updated variable.",

    "If no existing invitation is found, it creates a new OrganizationInvitation document using the provided data and saves it in the database. The newly created invitation is stored in the invite variable.",

    "After saving or updating the invitation, it sends an email to the invited user using the sendDynamicEmail function. It retrieves the email template ID and provides dynamic template data, including the subject and URL to the invitation.",

    "The function collects the resulting invitations (either updated or newly created) and filters out any false values, indicating failed operations.",
]

const model = `const mongoose = require("mongoose");

const organizationInvitationSchema = new mongoose.Schema(
    {
        organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
        email: { type: String ,required:true},
        accessLevel: { type: String, enum: ["basic", "stakeholder"], default: "basic" },
        projects:[
            {
                project:{ type: mongoose.Schema.Types.ObjectId, ref: "Project" },
                groups:[{ type: mongoose.Schema.Types.ObjectId, ref: "ProjectGroup" }],
            }
        ]
        
    },
    { timestamps: true }
);


module.exports = mongoose.model("OrganizationInvitation", organizationInvitationSchema);
`
const modelList = [
    "The code requires the mongoose module to work with MongoDB.",

    "The organizationInvitationSchema is created using mongoose.Schema, which defines the structure and properties of the OrganizationInvitation model.",

    'The schema includes the following fields: organization: A reference to the Organization model using the mongoose.Schema.Types.ObjectId type, email: The email of the invited user, stored as a string. It is marked as required, accessLevel: The access level for the invited user, stored as a string. It is limited to two possible values: "basic" or "stakeholder". The default value is set to "basic".',

    "projects: An array of objects representing the projects related to the invitation. Each object contains two fields:",

    "The schema includes the option { timestamps: true }, which automatically adds createdAt and updatedAt fields to the model for tracking the creation and modification timestamps.",

    "Finally, the OrganizationInvitation model is created using mongoose.model and exported to be used in other parts of the application."
]


const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/addUserOrg.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Users.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Users.css</Typography>
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
            <Typography mt={2} variant='h4'>Add user to organization controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}

const AgileExecution = () => {
    const userStory = {
        title: 'Add user to organization',
        assignedTo: 'Rafiur Rahman Protik',
        description: {
            title: "As a full-stack developer, I want to develop the user addition to organization feature in AgileALM, So that organization owners can easily add users to their organizations and manage access to projects.",
            list: [
                "Design and develop the user interface for the user addition feature, allowing organization owners to enter user details.",
                 "Implement the backend logic to validate the entered email address or username and ensure the associated user exists.",
                 "Create the functionality to add the specified user to the organization with the appropriate access level.",
                 "Implement the logic to handle permission and access control for the added user within the organization.",
                ]
        },
        priority: "1",
        risk: "1",
        effort: "1 day",
        startDate: "2023-05-31",
        endDate: "2023-05-31"
    }
    return (
        <Box>

            <Box mt={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/addUserToOrg.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is User Story?</Typography>
                <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to add user to Organization user story:
                </Typography>

                <UserStoryComp userStory={userStory}></UserStoryComp>

            </Box>

        </Box>
    )
}

const ModelComp = () => {
    return (
        <Box>
            {/* <Typography mt={2} variant='h4'>Database model</Typography> */}
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <Typography mt={2} variant='h4'>OrganizationInvitation Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>

            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={modelList}></Process>
        </Box>
    )
}



const AddUserToOrg = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution />}></TabSelection>
        </Box>
    );
};

export default AddUserToOrg;
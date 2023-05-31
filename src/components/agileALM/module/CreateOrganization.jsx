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


const codeSnippet = `import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Input, notification, Menu, Layout, Card, Avatar } from 'antd'
import { useRouter } from 'next/router'
import TopBar from '../../components/TopBar';
import { FcOrganization } from 'react-icons/fc';
import { Tooltip } from 'antd';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Project({ children, settings, collapsed, setCollapsed, collapseDisable }) {
    const Router = useRouter()
    const [organizations, setOrganizations] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [name, setName] = useState('')
    const [description, setDescription] = useState("")


    const handleShowModal = () => {
        setIsModalVisible(true)
    }
    const handleCloseModal = () => {
        setIsModalVisible(false)
        setName("")
        setDescription("")
    }

    const handleCreate = () => {
        let data = {
            name,
            description
        }

        axios.post('/organization/create', data)
            .then(res => {
                setOrganizations(prev => ([...prev, res.data.organization]))
                handleCloseModal()
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: err?.response?.data?.error })
            })
    }

    useEffect(() => {
        axios.get('/organization/myorganization')
            .then(res => {
                setOrganizations(res.data.organizations)
                if (!Router.query.organization && res.data?.organizations?.length > 0) {
                    // setSelectedOrganization(res.data?.organizations[0])
                    Router.push(/organization/${res.data?.organizations[0]?.slug})
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <TopBar />
            <Layout className='layout' style={{ height: "93vh", backgroundColor: '#F7F7FC' }}>

                <Sider
                    className='org_menu'
                    style={{ padding: "15px 0", background: "white", position: "fixed", height: "100vh", left: 0, top: "61px", bottom: 0, overflow: "auto", zIndex: "99", borderRadius: '10px' }}
                    width={300}
                // collapsible={collapseDisable} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                >
                    {/* <div className='total_org'>
                        <p>Total Organizations</p>
                        <hr></hr>
                    </div> */}
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[Router.query.organization]}
                        //defaultOpenKeys={['sub1']}
                        style={{ height: '100%', border: '1px solid white' }}
                    >
                        {
                            organizations.map(org => (
                                <Menu.Item
                                    className='menu_item'
                                    id={org.name.split(' ').join('_')}
                                    icon={
                                    // <Avatar style={{ background: "#6BA5E7" }} shape='square' >{org.name.split(' ').map(item => item.charAt(0).toUpperCase())}</Avatar>
                                    <img src="/New_Template/org_icon.svg"></img>
                                }
                                    onClick={() => Router.push(/organization/${org.slug})}
                                    key={org.slug}>
                                    <Tooltip title={org.name + " Organization"} color={'#141D38'} key={org.name} placement="right">
                                        <div style={{ width: '100%' }}>
                                            {org.name}
                                        </div>
                                    </Tooltip>
                                </Menu.Item>
                            ))
                        }
                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu> */}
                        <Tooltip title={!collapsed && 'Create New Organization'} color={'#141D38'} key={!collapsed && 'New Organization'} placement="right">
                            <button onClick={() => handleShowModal()} className='new_org' style={{ display: 'flex', alignItems: 'center' }} id="create_new_organization">
                                {/* <FcOrganization size="38" className='icon'></FcOrganization> */}
                                <img style={{ objectFit: 'cover', height: '35px', width: '35px' }} className='icon' src="/New_Template/overview/organization.svg"></img>
                                {!collapsed && 'Create An Organization'}
                            </button>
                        </Tooltip>

                        {
                            settings && settings
                        }

                    </Menu>
                </Sider>

                <Layout className={${collapsed ? 'collapsed-site-layout' : 'site-layout'}} >
                    <Content style={{ marginTop: "70px", marginLeft: '10px' }}>


                        {children}

                    </Content>

                </Layout>
            </Layout>

            <Modal
                title='Create organization'
                visible={isModalVisible}
                onCancel={handleCloseModal}
                footer={[
                    <button style={{ marginRight: "10px", width: '48%' }} onClick={() => handleCloseModal()} className='default_button_outline2_delete'>Cancel</button>,
                    <button style={{ width: '48%' }} onClick={() => handleCreate()} className='default_button2' id="organization_save">Save</button>
                ]}
            >
                <label htmlFor="name">Name</label>
                <Input size='large' value={name} onChange={e => setName(e.target.value)} id="organization_name" />
                <label htmlFor="name">Description</label>
                <Input.TextArea size='large' value={description} onChange={e => setDescription(e.target.value)} id="organization_description" />
            </Modal>
        </>

    )
}

export default Project`

const list = [
    "Import necessary dependencies from the react, axios, and antd libraries.",
    "The component defines several states using the useState hook to manage the state of the organizations, modal visibility, name, and description.",

    "The component defines functions to handle the modal visibility (handleShowModal and handleCloseModal) and create an organization (handleCreate).",

    "The useEffect hook is used to fetch the organizations associated with the user and set the organizations state accordingly. If there is no selected organization in the query parameters and there are organizations available, the first organization is selected and the page is redirected to that organization.",

    "The component renders the TopBar component.",

    "The component renders the main layout using the Layout component from Ant Design. It includes a Sider component on the left side, which displays a list of organizations as a menu. Each organization is rendered as a Menu.Item component, showing the organization name and an icon. Clicking on an organization triggers a route change using Router.push.",
    
    'Below the list of organizations, there is a button to create a new organization. Clicking on the button displays a modal with input fields for the organization name and description. The modal visibility is controlled by the isModalVisible state. The handleCreate function is called when the "Save" button in the modal is clicked.',

    "The component also renders the content area using the Content component from Ant Design. The children components passed to the Project component are rendered within this content area.",
    
    'Finally, there is a Modal component that appears when creating a new organization. It displays a title, input fields for the organization name and description, and "Cancel" and "Save" buttons.',
];

const codeSnippet2 = `.layout {

    .org_menu {
        // height: calc(100vh - 61px) !important;
        height: calc(100vh - 135px) !important;
        margin: 50px 20px 50px 20px;

        &::-webkit-scrollbar {
            width: 5px;
            // height: 100px;
            height: 2px;
        }

        &::-webkit-scrollbar-track {
            // background: #b2a4e9;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
            background: #b2a4e9;
            border-radius: 10px;
            // outline: 1px solid slategrey;

        }

        &::-webkit-scrollbar-thumb:hover {

            background: #b2a4e9;
        }

        .total_org {
            margin: 10px 20px;
            // display: none;

            p {
                font-weight: 400;
                font-family: $mulish;
                font-size: 14px;
            }

            hr {
                margin-top: 10px;
            }
        }

        .ant-menu-root {
            padding: 0 10px;
        }

        .ant-menu {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            font-family: $mulish;
            font-size: 15px;
        }

        .ant-menu-inline {
            background-color: #ffffff;
        }

        .ant-menu-submenu-open {

            .ant-menu-inline {
                background-color: #f9f9fa;

            }
        }

        .ant-menu-title-content {
            color: #414141;
        }

        .ant-menu-submenu-active:hover {
            background-color: #F2F6FF;
            border-radius: 5px;
        }

        .ant-menu-submenu-open:hover {
            background-color: #F2F6FF;

            .ant-menu-submenu-active:hover {
                background-color: #F2F6FF;
                border-radius: 5px;
            }
        }

        .ant-menu-item-selected {
            background-color: #F2F6FF;
            border: 1px solid #5831F0;
            // margin-left: 10px;
            // margin-right: 10px;
            color: $primary_color_p2;

        }

        .ant-menu-item {
            // padding-left: 0 !important;
            width: 100%;
            padding: 25px !important;
            border-radius: 10px;

            &:hover {
                background-color: #F2F6FF;
            }
        }

        .ant-menu-inline .ant-menu-item-selected::after {
            transform: scaleY(0);
        }
    }

    .org_menu_project {
        margin: 50px 0;
        height: calc(100vh - 61px) !important;


        .ant-menu-item-selected {
            background-color: #F2F6FF;
            border: none;
            border-left: 7px solid #584AF0;
            // margin-left: 10px;
            // margin-right: 10px;
            color: $primary_color_p2;

        }
    }

    .ant-layout {
        background-color: #F7F7FC !important;
        height: 100vh !important;

    }

    .site-layout {
        margin-left: 300px;
    }

    .collapsed-site-layout {
        margin-left: 80px;
    }

    .menu_item {
        padding: 0 13px !important;
        //font-weight: 500;
        color: black;

        span {
            font-weight: 700;
        }

        .ant-menu-submenu-title {
            padding: 0 !important;
        }

        &:hover {
            background-color: #e4e4e4;
            color: black;
        }
    }

    .new_org {
        // padding: 15px 13px;
        padding: 10px 20px !important;
        cursor: pointer;
        color: $primary_color_p2;
        border: none;
        font-weight: 700;
        text-align: left;
        font-weight: 700;
        font-family: $mulish;
        font-size: 16px;
        background-color: transparent;

        &:hover {
            background-color: #F2F6FF;
            border-radius: 10px;
        }

        .icon {
            margin-right: 10px;
        }
    }

    .setting_button {
        margin-top: auto;
        padding: 13px;
        display: flex;
        align-items: center;
        // background-color: #F2F6FF;
        background-color: transparent;
        border: 1px solid #5831F0;
        color: '#5831F0';
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            // background-color: #e4e4e4;
            font-size: 15px;
        }

        .icon {
            margin-right: 10px;
        }
    }

    .setting_button2 {
        border: none;
    }

    .log_out_btn {
        border: none;
        color: #ED4655;
    }
}`

const list2 = [
    "The .org_menu class represents the sidebar menu on the left side of the layout. It sets the height, margin, and scroll styles for the menu. The scroll styles customize the appearance of the scroll bar.",

    "The .total_org class styles the section that displays the total number of organizations. It sets the margin and styling for the paragraph and horizontal line elements.",

    "The .ant-menu classes style the menu items within the sidebar menu. It sets the font weight, font family, and font size for the menu items.",

    "The .ant-menu-submenu-active class styles the active submenu item when hovered over. It sets the background color and border-radius for the hovered item.",

    "The .ant-menu-item-selected class styles the selected menu item. It sets the background color, border, and text color for the selected item.",

    "The .ant-layout class styles the main layout container. It sets the background color and height of the layout.",

    "The .new_org class styles the button to create a new organization. It sets the padding, cursor, font weight, and background color for the button. The hover styles change the background color and border-radius when the button is hovered over.",

    "The .setting_button class styles the settings button at the bottom of the sidebar menu. It sets the margin, padding, display, alignment, background color, border, color, border radius, and cursor for the button. The hover styles change the font size when the button is hovered over.",

    "The .log_out_btn class styles a logout button. It removes the border and sets the color for the button.",
]

const codeSnippet3 = `exports.createOrganization = async (req, res) => {
    let { name, description } = req.body
    if (!name) {
        return res.status(400).json({ error: "Title is required" })
    }
    try {
        let slug = slugify(name)
        let findSlug = await Organization.findOne({ slug }).exec()
        if (findSlug) {
            return res.status(400).json({ error: "Name is taken! Select another" })
        }

        let data = {
            name,
            slug,
            createdBy: req.user._id
        }
        if (description) {
            data.description = description
        }

        let _organization = new Organization(data)
        let organization = await _organization.save()

        let dataMember = {
            organization: organization._id,
            user: req.user._id,
            accessLevel: 'administrator'
        }

        let _userMember = new OrganizationMember(dataMember)
        await _userMember.save()

        res.status(201).json({ success: true, organization })


    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong" })
    }
}`

const list3 = [
    "The function is exported as createOrganization and takes req (request) and res (response) as parameters.",
    "The function extracts the name and description fields from the request body using destructuring.",
    "It checks if the name field is provided. If not, it returns a response with a status of 400 (Bad Request) and an error message indicating that the title is required.",

    "Inside a try-catch block, the function generates a slug based on the organization name using the slugify function. It then queries the database to check if the generated slug already exists for another organization.",

    "If a matching slug is found, the function returns a response with a status of 400 and an error message indicating that the name is already taken. The user is prompted to select another name.",

    "If the generated slug is unique, the function creates an object called data containing the name, slug, and createdBy fields. The createdBy field is set to the ID of the user making the request.",

    "If a description is provided, it is added to the data object.",

    "A new instance of the Organization model is created using the data object, and then it is saved to the database.",

    "Another object called dataMember is created, which contains the organization ID, the user ID, and the access level set to 'administrator'.",

    "A new instance of the OrganizationMember model is created using the dataMember object, and then it is saved to the database.",

    "Finally, a response with a status of 201 (Created) is sent, containing a success flag and the created organization object.",
    "If any errors occur during the process, a catch block will handle the error and send a response with a status of 400 and an error message indicating that something went wrong.",
]

const model = `const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    slug: {type:String, required:true,unique:true},
    description: { type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  },
  { timestamps: true }
);


module.exports = mongoose.model("Organization", organizationSchema);
`
const modelList = [
    "The module imports the required dependency: mongoose.",

    "It creates a new Mongoose schema using the mongoose.Schema function. The schema defines the structure and properties of the Organization model.",

    "The schema consists of several fields: name: A string field representing the name of the organization. It is required, slug: A string field representing a unique identifier or URL-friendly version of the organization name. It is required and has a unique constraint, meaning each organization must have a unique slug value, description: A string field representing the description or details of the organization, createdBy: A reference field of type mongoose.Schema.Types.ObjectId that refers to the User model. It represents the user who created the organization.",

    "The schema includes an additional configuration option: timestamps: true: It automatically adds createdAt and updatedAt fields to the schema, tracking the creation and modification timestamps of the organization documents."
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

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/createOrg.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Project.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Project.css</Typography>
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
            <Typography mt={2} variant='h4'>Create organization controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}

const AgileExecution = () => {
    const userStory = {
        title: 'Organization creating functionality.',
        assignedTo: 'Rafiur Rahman Protik',
        description: {
            title: "As a full-stack developer, I want to develop the organization creation functionality, So that users can easily create new organizations and manage their projects effectively.",
            list: [
                "Design and develop the user interface for the organization creation feature, allowing users to enter organization details.",
                 "Implement the backend logic to validate the uniqueness and validity of the organization name.",
                 "Create the functionality to create a new organization with the provided details.",
                 "Implement the logic to grant appropriate access and permissions to the organization creator.",
                 "Handle and display clear error messages for any issues encountered during the orEnsure the organization creation feature is responsive and optimized for different devices and screen sizes.",
                ]
        },
        priority: "1",
        risk: "1",
        effort: "8 hours",
        startDate: "2023-03-04",
        endDate: "2023-03-04"
    }
    return (
        <Box>

            <Box mt={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is User Story?</Typography>
                <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the creating organization user story:
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
            <Typography mt={2} variant='h4'>Organization Model</Typography>
            <CodeBox codeSnippet={model}></CodeBox>

            <Typography mt={2} variant='h4'>Description of the model</Typography>
            <Process list={modelList}></Process>

            <Box mt={2}>
                <Typography mt={2} variant='h4'>OrganizationMember Model</Typography>
                <CodeBox codeSnippet={model2}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model2List}></Process>
            </Box>
        </Box>
    )
}



const CreateOrganization = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution />}></TabSelection>
        </Box>
    );
};

export default CreateOrganization;
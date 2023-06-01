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

const codeSnippet = `import { Layout, Menu, Breadcrumb, Modal, Input, Select, notification, Card, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Setting from '../../../components/organization/Setting';
import Sidebar from '../../../components/organization/Sidebar'
import { FiSettings } from 'react-icons/fi'
const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { Tooltip } from 'antd';
import SeoComponent from '../../../components/global/SeoComponent';



function Project() {
  const Router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState('projects')
  const [organizations, setOrganizations] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [selectedOrganization, setSelectedOrganization] = useState(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState('basic')
  const [collapsed, setCollapsed] = useState(false);
  const [collapseDisable, setCollapseDisable] = useState(false);


  const [projects, setProjects] = useState([])

  const handleShowModal = () => {
    setIsModalVisible(true)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
    setName("")
    setDescription("")
  }


  const getProjects = (slug) => {
    setIsLoading(true)
    axios.get(/project/byorganization/${slug})
      .then(res => {
        setIsLoading(false)
        setProjects(res.data.projects)
        setSelectedOrganization(res.data.organization)
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err);
        notification.error({ message: err?.response?.data?.error })
      })
  }
  useEffect(() => {
    if (Router.query.organization) {
      setActive("projects")
      getProjects(Router.query.organization)
    }
  }, [Router]);

  // console.log(Router.query.organization);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800) {
        setCollapsed(false);
        setCollapseDisable(true);
      } else {
        setCollapsed(true);
        setCollapseDisable(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

//   console.log('projects', projects);

  return (
    <>

      <SeoComponent
        title="Agile ALM Organizations"
        description="Agile ALM helps you to manage your project, making it easier for everyone to handle any projects and to track everything with this single project management tool."
        url="https://agilealm.cloud/organization/TS4U-Projects"
      />

      <Sidebar
        selectedOrganization={selectedOrganization}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
        collapseDisable={collapseDisable}
        settings={
          selectedOrganization &&
          <Tooltip title="Your Organization Settings" color={'#141D38'} key="Organization Settings" placement="right">
            <button onClick={() => setActive(prev => prev === 'setting' ? 'projects' : "setting")} className='setting_button'>
              <FiSettings size={25} className='icon' />
              {!collapsed && 'Organization Settings'}
            </button>
          </Tooltip>
        }
      >
        {
          isLoading ?
            <Card style={{ marginLeft: '30px' }} loading={isLoading}>
            </Card> :
            selectedOrganization &&
            <div className='project_lists'>
              {
                active === 'setting' ?
                  <Setting projects={projects} organization={selectedOrganization} /> :
                  <>
                    <div className='top_title'>
                      <h1 className='org_name'>{You have total ${projects?.length} projects under ${selectedOrganization?.name || "N/A"} organizations.}</h1>
                      <button onClick={() => handleShowModal()} className='default_button2 d_flex d_center' id="new_project">
                        <FaPlus style={{ marginRight: "10px" }} />
                        New Project
                      </button>
                    </div>
                    <hr style={{
                      marginTop
                        : '10px',
                        color: '#414141', opacity: '0.3'
                    }}></hr>
                    <div className='submenu'>
                      <p >
                        Projects
                      </p>
                    </div>


                    <div className='project_card_wrapper'>
                      {
                        projects?.length > 0 && projects.map((project, i) => (
                          <div className={${project?.category === 'basic' ? 'design' : 'design2'} project_card} onClick={() => Router.push(/organization/${project?.organization?.slug}/${project.slug})} key={i}>
                            <div className="avatar">
                              {/* <Avatar shape='square' size='large' style={{ background: "#6BA5E7" }}>{project.name.split(' ').map(item => item.charAt(0).toUpperCase())}</Avatar> */}
                              <img src="/New_Template/project-icon.svg"></img>
                            </div>
                            <div className="info">
                              <div className='name-category'>
                                <h1 className="name">
                                  {project.name}
                                </h1>
                                <p className={${project?.category === 'basic' ? 'basic' : 'agile'}}>{project?.category}</p>
                              </div>

                              <p className='desc'>
                                {project.description}
                              </p>


                            </div>

                          </div>
                        ))
                      }
                    </div>
                  </>

              }
            </div>
        }



      </Sidebar>


      {/* <div id='ant-custom-modal'> */}
        <Modal
          title='Create Project'
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={[
            <button style={{ marginRight: "10px", width: '48%' }} onClick={() => handleCloseModal()} className='default_button_outline2_delete'>Cancel</button>,
            <button style={{ width: '48%' }} onClick={() => handleCreate()} className='default_button2' id="project_save"> Save</button>
          ]}
        >
          <label htmlFor="name">Name</label>
          <Input size='large' value={name} onChange={e => setName(e.target.value)} id="project_name" />
          <label htmlFor="name">Description</label>
          <Input.TextArea size='large' value={description} onChange={e => setDescription(e.target.value)} id="project_description" />

          <label htmlFor="category">Category</label>
          <Select
            size='large'
            value={category}
            onChange={value => setCategory(value)}
            style={{ width: "100%" }}

          >
            <Option value='basic'>Basic</Option>
            <Option value='agile'>Agile</Option>
          </Select>
        </Modal>
      {/* </div> */}
    </>

  )
}

export default Project`

const list = [
    "The component imports various components and icons from the antd library, as well as other dependencies and custom components.",
    "Several state variables are defined using the useState hook: isLoading: indicates whether the page is currently loading data, active: keeps track of the active section (either 'projects' or 'setting').",
    "The component initializes state variables using the useState hook: isLoading: Represents the loading state of the form, inputType: Manages the visibility of the password input field, firstName, lastName, email, password: Store the input values of the form fields, errors: Holds the validation errors, if any.",
    "organizations: stores the list of organizations, isModalVisible: controls the visibility of the create project modal, selectedOrganization: stores the currently selected organization, name, description, and category: store the input values for creating a new project, collapsed: controls the collapsed state of the sidebar. collapseDisable: controls the disabled state of the sidebar collapse button. projects: stores the list of projects associated with the selected organization.",
    "The handleShowModal function is called to show the create project modal by setting the isModalVisible state to true.",
    "The handleCloseModal function is called to close the create project modal by setting the isModalVisible state to false and resetting the input values.",
    "If there are no validation errors, it sets the isLoading state to true to indicate that the form submission is in progress. It creates an object (data) containing the input values.",
    "The getProjects function is called to fetch the list of projects associated with the selected organization. It sends a GET request to the server, and upon a successful response, it updates the projects state and the selectedOrganization state. If there is an error, it displays a notification with the error message.",
    "The component includes several useEffect hooks to handle initial data fetching and other side effects:",
    "UI includes a Sidebar component that displays a sidebar with organization information, project creation button, and project list or organization settings based on the active state.",
    "Inside the Sidebar component, there is conditional rendering based on the isLoading state and the selectedOrganization state to display loading or project information.",
    "The create project modal is displayed when the isModalVisible state is true.",
];

const codeSnippet2 = `.project_lists {
    margin-left: 30px;
    background-color: #FFFFFF;
    height: 100%;
    padding: 10px 20px;
    border-radius: 10px;

    .top_title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .org_name {
            font-family: $poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
        }
    }

    .submenu {
        margin-top: 20px;

        p {
            font-weight: 700;
            padding-bottom: 5px;
            display: inline-block;
            border-bottom: 2px solid $primary_color;
        }
    }

    .project_card_wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;



        .project_card {
            height: 210px;
            width: 400px;
            background-color: white;
            margin-right: 20px;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 3px;
            display: flex;
            cursor: pointer;
            border: 1px solid rgba(65, 65, 65, 0.15);
            border-radius: 10px;

            @media screen and (max-width: 600px) {
                flex-direction: column;
                height: auto;
                margin-right: 0;
            }

            .avatar {
                width: 15%;
                margin-right: 10px;

            }

            .info {
                width: 80%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .name-category {
                    flex-grow: 5;

                    .name {
                        font-family: $poppins;
                        color: #414141;
                        font-weight: 500;
                        font-size: 17px;
                    }

                    .basic {
                        font-family: $mulish;
                        font-size: 13px;
                        text-transform: capitalize;
                        background-color: #9747FF;
                        display: inline-block;
                        padding: 0 7px;
                        font-weight: 500;
                        color: #FFFFFF;
                        border-radius: 3px;
                        margin-top: 5px;
                    }

                    .agile {
                        font-family: $mulish;
                        font-size: 13px;
                        text-transform: capitalize;
                        background-color: #F77719;
                        ;
                        display: inline-block;
                        padding: 0 7px;
                        font-weight: 500;
                        color: #FFFFFF;
                        border-radius: 3px;
                        margin-top: 5px;
                    }
                }

                @media screen and (max-width: 600px) {
                    margin-top: 10px;
                    min-width: 100%;
                }

                // h1 {
                //     font-weight: 900;
                //     font-size: 18px;
                //     line-height: 1.1;

                // }



                .desc {
                    color: #414141;
                    flex-grow: 1;
                    margin-top: 7px;

                    font-family: $poppins;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 24px;

                    height: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 512px) {
                        line-height: 1;
                        margin-top: 15px;
                    }


                }
            }
        }

        .design {
            border-top: 10px solid #9747FF;
        }

        .design2 {
            // border-top: 10px solid #F77719;
            border-top: 10px solid #9747FF;

            ;
        }
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: $secondary_color_p2;
        color: black;
        border-right: 5px solid $primary_color_p2;
        font-family: $poppins;
        font-size: 15px;
        font-weight: 300;
    }

    .ant-menu-inline .ant-menu-item {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .ant-menu-inline .ant-menu-item-selected::after {
        transform: scaleY(0);
    }
}

// #ant-custom-modal {
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
    "The .project_lists selector styles the container that wraps the project list. It sets the margin, background color, height, padding, and border-radius properties.",
    "The .top_title selector styles the top section of the project list. It uses flexbox to align the content and sets the font properties for the organization name.",
    "The .submenu selector styles the subtitle of the project list. It sets the margin, font-weight, padding, and border-bottom properties to create an underline effect.",
    "The .project_card_wrapper selector styles the container for the project cards. It uses flexbox to display the cards in a wrap layout. It sets the margin and flex-wrap properties.",
    "The .project_card selector styles each individual project card. It sets the width, height, background color, margin, padding, border-radius, and border properties. It also sets the cursor property to indicate that the card is clickable.",
    "The .avatar selector styles the container for the project avatar. It sets the width and margin properties.",
    "The .info selector styles the container for the project information. It sets the width and height properties to control the size of the container. It uses flexbox to arrange the content in a column layout.",
    "The .name-category selector styles the container for the project name and category. It uses flex-grow to allow the container to expand vertically if needed. It sets the font properties for the project name and category.",
    "The .basic and .agile selectors style the basic and agile category labels respectively. They set the font properties, background color, padding, font-weight, color, and border-radius properties.",
    "The .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected selector styles the selected menu item in the project list's submenu. It sets the background color, color, border-right, font-family, font-size, and font-weight properties.",

    "The .ant-menu-inline .ant-menu-item selector styles the inline menu items in the project list. It sets the margin properties to remove the top and bottom margins.",
    "The .ant-menu-inline .ant-menu-item-selected::after selector styles the indicator after the selected menu item. It sets the transform property to scaleY(0) to hide the indicator.",
    "The .ant-modal-header selector styles the header section of the create project modal. It sets the background color.",
    "The .ant-modal-title selector styles the title of the create project modal. It sets the color, font-weight, font-family, and font-size properties.",
    "The .ant-modal-body selector styles the body section of the create project modal. It sets the styles for labels, inputs, textareas, and select elements. It specifies the border, border-radius, and padding properties.",
    "The .ant-modal-body, .ant-modal-footer selector styles the body and footer sections of the create project modal. It sets the background color to override the default styles."
]

const codeSnippet3 = `exports.getProjectByOrganization = async (req, res) => {
    // #swagger.tags = ['Project']
    // #swagger.summary = 'Get project by organization'
    let { organizationslug } = req.params
    if (!organizationslug) {
        return res.status(400).json({ error: "organization slug is required" })
    }
    try {
        // let projects = await Project.find({ organization: organizationid })
        //     .populate('organization', 'name slug')
        //     .exec()
        let organization = await Organization.findOne({ slug: organizationslug }).exec()

        let organizationMemberId = await OrganizationMember.findOne({ user: req.user._id, organization: organization._id })
            .lean()
            .select("_id")
            .exec()
        // console.log(organizationMemberId?._id.toString());
        let projectIds = await ProjectGroup.distinct("project", { members: organizationMemberId?._id?.toString() }).exec()
        // console.log(projectIds)
        let projects = await Project.aggregate([
            {
                $match:
                {
                    organization: mongoose.Types.ObjectId(organization._id),
                    _id: { $in: projectIds.map((id) => mongoose.Types.ObjectId(id)) }
                },

            },
            {
                $lookup:
                {
                    from: "projectgroups",
                    let: { id: '$_id' },
                    pipeline: [
                        {
                            "$match": {
                                "$expr": {
                                    "$and": [
                                        { "$eq": ["$project", '$$id'] },
                                    ]
                                }
                            }
                        },
                    ],
                    as: "groups"
                }
            },
            // {
            //     $sort: { index: 1 }
            // }
        ]).exec()


        await Organization.populate(projects, { path: "organization", select: "name slug" })

        res.status(201).json({ success: true, projects, organization })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Something went wrong" })
    }
}`

const list3 = [
    "The function receives the req (request) and res (response) parameters, representing the HTTP request and response, respectively.",
    "The function extracts the organizationslug parameter from the request parameters using destructuring.",
    "It checks if the organizationslug is missing. If it is missing, it sends a response with a status code of 400 (Bad Request) and a JSON object containing an error property with the value 'organization slug is required'.",

    "Inside a try-catch block, the function attempts to fetch the projects based on the organization slug.",

    "It first queries the Organization collection to find the organization document matching the provided organizationslug.",

    "It then queries the OrganizationMember collection to find the organization member document associated with the logged-in user and the organization found in the previous step. It retrieves the _id field of the organization member.",

    "The function uses the organization member _id to query the ProjectGroup collection and retrieve the distinct project IDs where the organization member is a member.",

    "Using the retrieved project IDs, the function performs an aggregate query on the Project collection to find the projects that match the organization and project IDs.",
    "Within the aggregate pipeline, the function performs a $match stage to filter projects based on the organization ID and the retrieved project IDs.",

    "Next, the function performs a $lookup stage to populate the groups field in the projects. It looks up the ProjectGroup collection based on the project ID and adds the matched groups as an array in the groups field of the projects.",

    "The function then uses the Organization.populate method to populate the organization field in the projects, fetching the organization's name and slug based on the populated organization field.",
    "If all the database operations are successful, the function sends a response with a status code of 201 (Created) and a JSON object containing a success property set to true, the retrieved projects array, and the organization document.",

    "If there is an error during the database operations, the function catches the error, logs it, and sends a response with a status code of 400 (Bad Request) and a JSON object containing an error property with the value 'Something went wrong'.",
]

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/project.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

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

            <Box mt={2}>
                <Typography mt={2} variant='h4'>ProjectGroup Model</Typography>
                <CodeBox codeSnippet={model3}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model3List}></Process>
            </Box>

            <Box mt={2}>
                <Typography mt={2} variant='h4'>Project Model</Typography>
                <CodeBox codeSnippet={model4}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the model</Typography>
                <Process list={model4List}></Process>
            </Box>
        </Box>
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
            <Typography mt={2} variant='h4'>GetProjectByOrganization controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}

const AgileExecution = () => {
  const userStory = {
      title: 'View all the projects in single organization.',
      assignedTo: 'Rafiur Rahman Protik',
      description: {
          title: "As a developer, I need to implement the project view functionality in AgileALM to provide users with a comprehensive overview of their projects. This functionality will allow users to navigate through different projects, view project details, track progress, and access relevant resources.",
          list: [
              "Ensuring that the project view functionality is responsive and works well on different devices and screen sizes.",
               "Implement appropriate access controls and permissions to ensure that users only see projects they have permission to access",
              ]
      },
      priority: "1",
      risk: "1",
      effort: "5 hours",
      startDate: "2023-03-06",
      endDate: "2023-03-06"
  }
  return (
      <Box>

          <Box mt={2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ImageComp image="/agile/projectView.png"></ImageComp>
              </Box>
              <Typography variant='h3'>What is User Story?</Typography>
              <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

              <Typography variant='h4' mt={2}>Here we give some information related to view all projects user story:
              </Typography>

              <UserStoryComp userStory={userStory}></UserStoryComp>

          </Box>

      </Box>
  )
}



const ShowProject = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution />}></TabSelection>
        </Box>
    );
};

export default ShowProject;
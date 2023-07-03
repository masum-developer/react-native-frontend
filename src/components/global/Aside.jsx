import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SideMenus } from '../../staticData/menus';
import { AiFillDatabase } from 'react-icons/ai';
import IconCom from './IconCom';

const Aside = ({ children }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const router = useRouter();

    const handlePush = (key, value) => {
        let query = router.query;

        router.push({
            pathname: window.location.pathname,
            query: { ...query, [key]: value }
        })
    }

    function GetSubMenu({ menu }) {
        return menu.hasSubMenu ? (
            <SubMenu label={menu?.title}>
                {
                    menu?.subMenus?.map((item, i) =>
                        <GetSubMenu menu={item} key={i}></GetSubMenu>
                    )
                }
            </SubMenu>
        ) : (
            <MenuItem
                icon={menu?.icon}
                onClick={() => handlePush('tab', menu?.slug)}
            >
                {menu?.title}
            </MenuItem>
        )
    }


    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container>
                <Grid item xs={2} md={2} lg={1} xl={1}>
                    <ProSidebarProvider>
                        <Sidebar
                            toggled={matches ? true : false}
                            defaultCollapsed={!matches}
                            className='sidebar'
                            style={{ height: '90vh', position: 'fixed', paddingBottom: '10px' }}
                            backgroundColor="#ECE4EC"
                            width='250px'
                            collapsed={true}
                        >
                            <Menu
                                menuItemStyles={{
                                    button: ({ level, active, disabled }) => {
                                        // if (level === 0) {
                                        return {
                                            color: disabled ? "#eee" : "#455A64",
                                            backgroundColor: active ? "#3D34E3" : undefined,
                                            "&:hover": {
                                                backgroundColor: "#D5C9F0  !important",
                                                color: "#3D34E3 !important",
                                                fontWeight: "bold !important",
                                                fontFamily: "Heebo, sans-serif"
                                            },
                                            //  };
                                        }
                                    },
                                }}
                            >
                                <MenuItem onClick={() => handlePush('tab', 'get_started')} icon={<IconCom image={'/sidebar/start.svg'} />}>Get Started</MenuItem>
                                <SubMenu icon={<IconCom image={'/sidebar/git.svg'} />} label="Environment Setup" defaultOpen>
                                    <MenuItem onClick={() => handlePush('tab', 'vscode-installation')}>VS Code Installation</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'vscode-extentions')}>VS Code Extensions</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'git-installation')}>Git Installation</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'git-gitlab')}>Git & GitLab</MenuItem>

                                </SubMenu>
                                {/* <MenuItem >Agile Scrum</MenuItem> */}

                                <SubMenu label="Frontend Development" icon={<IconCom image={'/sidebar/frontend.svg'} />}>
                                    <SubMenu label="HTML" icon={<IconCom image={'/sidebar/html5.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'html_introduction')}>HTML Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'html_overview')}>Overview</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'basic_tags')}>Basic Tags</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'elements')}>Elements</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'attributes')}>Attributes</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'formatting')}>Formatting</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'images')}>Images</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'tables')}>Tables</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'lists')}>Lists</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'textlinks')}>Text Links</MenuItem>
                                    </SubMenu>
                                    <SubMenu label="CSS" icon={<IconCom image={'/sidebar/css3.svg'} />} >
                                        <MenuItem onClick={() => handlePush('tab', 'css_introduction')}>CSS Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'selectors')}>Selectors</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'colors')}>Colors</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'background')}>Background</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'margin')}>Margin</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'padding')}>Padding</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'boxmodel')}>Box Model</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'heightandwidth')}>Height and Width</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'font')}>Font</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'icons')}>Icons</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'list')}>Lists</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'css_table')}>Tables</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'display')} >Display</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'position')}>Position</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'z-index')}>Z-Index</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'float')}>Float</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'block')}>Block</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'align')}>Align</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'dropdown')}>DropDown</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'form')}>Form</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'cssimages')}>Image</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'units')}> Unit</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'specificity')}>Specificity</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'important')}>!Important</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'flexbox')}>Flexbox</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'grid')}>Grid</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'websitelayout')}>Website Layout</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'cssanimation')}>Animation</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'navigationbar')}>Navigation Bar</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'opacity')}>Opacity</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'shadows')}>Shadows</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'transition')}>Transition</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mediaqueries')}>Media Queries</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'responsiveness')}>Responsiveness</MenuItem>
                                    </SubMenu>

                                    <SubMenu label="SASS" icon={<IconCom image={'/sidebar/sass.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'sassintroduction')}>SASS Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sassinstallation')}>SASS Installation</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sassvariable')}>Variables</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'nesting')}>Nesting</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'import')}>@import</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mixin')}>@mixin</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'extend')}>@extend</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sassstring')}>String</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'numberic')}>Numeric</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sasslist')}>List</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'map')}>Map</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sassselector')} >Selector</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'sasscolors')}>Color</MenuItem>
                                    </SubMenu>

                                    <SubMenu label="ReactJS" icon={<IconCom image={'/sidebar/react.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'react-introduction')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-installation')}>Installation</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-project-structure')}>Project Structure</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-jsx')}>JSX</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-component')}>Component</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-props')}>Props</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-events')}>Events</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-conditional-rendering')}>Conditional Rendering</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-list')}>List</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'react-form')}>Form</MenuItem>

                                        <SubMenu label="Hooks">
                                            <MenuItem onClick={() => handlePush('tab', 'hooks-introduction')}>Introduction</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'hooks-useState')}>useState</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'hooks-useEffect')}>useEffect</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'hooks-useContext')}>useContext</MenuItem>
                                            <MenuItem>Custom Hooks</MenuItem>
                                        </SubMenu>

                                    </SubMenu>

                                    <SubMenu label="NextJS" icon={<IconCom image={'/sidebar/next.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'next-introduction')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'next-installation')}>Installation</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'next-project-structure')}>Project Structure</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'next-routing')}>Routing</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'next-error-page')}>404 Error Page</MenuItem> 
                                        <MenuItem onClick={() => handlePush('tab', 'next-layouts')}>Layouts</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'next-image-components')}>Image Components</MenuItem> 
                                        <MenuItem onClick={() => handlePush('tab', 'next-script-components')}>Script Component</MenuItem>


                                    </SubMenu>

                                </SubMenu>

                                <SubMenu label="Programming Language" icon={<IconCom image={'/sidebar/programming-language.svg'} />}>
                                    <SubMenu label="JavaScript" icon={<IconCom image={'/sidebar/javascript.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'js_introduction')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'js_overview')}>Overview</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'js_syntax')}>Syntax</MenuItem>
                                        <SubMenu label="Variables">
                                            <MenuItem onClick={() => handlePush('tab', 'js_var')}>Var</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'js_let')}>Let</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'js_const')}>Const</MenuItem>
                                        </SubMenu>
                                        <SubMenu label="Operators">
                                            <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Overview</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'arithmetic')}>Arithmetic</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'assignment')}>Assignment</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'comparison')}>Comparison</MenuItem>
                                        </SubMenu>
                                        <MenuItem onClick={() => handlePush('tab', 'dataTypes')}>Data Types</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'string')}>Strings</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'numbers')}>Numbers</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'array')}>Array</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'objects')}>Objects</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'function')}>Functions</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'date')}>Date</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'random')}>Random</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'if-else')}>If Else Statement</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'switch')}>Switch Statement</MenuItem>
                                        <SubMenu label="Loop">
                                            <MenuItem onClick={() => handlePush('tab', 'loop-intro')}>Introduction</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'for-loop')}>For</MenuItem>
                                            {/* <MenuItem onClick={() => handlePush('tab', 'assignment')}>For In</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'comparison')}>For Of</MenuItem> */}
                                            <MenuItem onClick={() => handlePush('tab', 'whileloop')}>While</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'dowhileloop')}>Do While</MenuItem>
                                        </SubMenu>
                                        <MenuItem onClick={() => handlePush('tab', 'set')}>Set</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'map')}>Maps</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'typeof')}>Typeof</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'scope')}>Scope</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'type-conversion')}>Type Conversion</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'json')}>JSON</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'class')}>Class</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'error-handling')}>Error Handling</MenuItem>
                                        <SubMenu label="JavaScript ES6">
                                            <MenuItem onClick={() => handlePush('tab', 'es6-introduction')}>Introduction</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'arrow-function')}>Arrow Function</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'es6-let')}>Let</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'es6-const')}>Const</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'destructuring')}>Destructuring</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'modules')}>Modules</MenuItem>
                                        </SubMenu>
                                        <SubMenu label="In-depth Functions">
                                            <MenuItem onClick={() => handlePush('tab', 'func_declaration')}>Declarations</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'func-expressions')}>Expressions</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'arrow-function')}>Arrow Function</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'anonymous-function')}>Anonymous Function</MenuItem>
                                        </SubMenu>

                                        <SubMenu label="Asynchronus JavaScript">
                                            <MenuItem onClick={() => handlePush('tab', 'callbacks')}>Callbacks</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'asynchronous')}>Asynchronous</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'promise')}>Promises</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'async-await')}>Async/Await</MenuItem>
                                        </SubMenu>

                                        <SubMenu label="DOM Manipulation">
                                            <MenuItem onClick={() => handlePush('tab', 'dom-introduction')}>Introduction</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'selectors')}>Selectors</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'dom-styling')}>Styling</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'dom-events')}>Events</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'dom-event-listener')}>Event Listener</MenuItem>
                                        </SubMenu>
                                    </SubMenu>
                                </SubMenu>

                                <SubMenu label="Runtime Engine" icon={<IconCom image={'/sidebar/nodejs.svg'} />}>
                                    <SubMenu label="NodeJs" icon={<IconCom image={'/sidebar/nodejs.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'nodejs-introduction')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'nodejs-server')}>Basic Server</MenuItem>
                                    </SubMenu>
                                </SubMenu>

                                <SubMenu label="Backend Development" icon={<IconCom image={'/sidebar/back-end-development.svg'} />}>
                                    <SubMenu label="ExpressJs" icon={<IconCom image={'/sidebar/express-js.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'expreejs-introduction')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'expreejs-installation')}>Installation & Setup</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'express-project-structure')}>Project Structure</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'req-object')}>req Object</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'res-object')}>res Object</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'status-code')}>Status Code</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'express-js-routing')}>Routing</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'http-methods')}>HTTP Methods</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'middleware')}>Middleware</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'express-error-handling')}>Error Handling</MenuItem>
                                    </SubMenu>

                                    <SubMenu label="Database" icon={<IconCom image={'/sidebar/database.svg'} />}>
                                        <MenuItem onClick={() => handlePush('tab', 'db-introduction')}>Database Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-getting-started')}>MongoDB Get Started</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-query')}>MongoDB Query</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-atlas')}>MongoDB Atlas</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-database-collection')}>Database & Collection</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-insert')}>MongoDB Insert</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-find')}>MongoDB Find</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-find')}>MongoDB Update</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-delete')}>MongoDB Delete</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'mongodb-query-operator')}>MongoDB Query Operator</MenuItem>
                                        <SubMenu label="MongoDB Aggregations">
                                            <MenuItem onClick={() => handlePush('tab', 'aggregations-introduction')}>Introduction</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'aggregations-group')}>$group</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'aggregations-limit')}>$limit</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'aggregations-project')}>$project</MenuItem>

                                        </SubMenu>
                                    </SubMenu>
                                </SubMenu>

                                <SubMenu label="Technical Assessment" icon={<IconCom image={'/sidebar/assessment.svg'} />}>
                                    <MenuItem onClick={() => handlePush('tab', 'core-javascript')}>Core JavaScript</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'js-string')}>String</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'js-loop')}>Loop</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'js-array')}>Array</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'js-object')}>Object</MenuItem>
                                </SubMenu>

                                <SubMenu label="AgileALM Breakdown" icon={<IconCom image={'/sidebar/AgileAlM-Navy-Blue-V2.png'} />}>
                                    <SubMenu label="User">
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-register')}>User Registration</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-login')}>User Login</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-forgetPassword')}>Forget Password</MenuItem>
                                    </SubMenu>
                                    <SubMenu label="Organization">
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-createOrganization')}>Create Organization</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-addUserToOrg')}>Add User To Organization</MenuItem>
                                        {/* <MenuItem onClick={() => handlePush('tab', 'agileALM-forgetPassword')}>Forget Password</MenuItem> */}
                                    </SubMenu>
                                    <SubMenu label="Project">
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-showproject')}>Show All Project</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-createproject')}>Create Project</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-addUserToProject')}>Add User To Project</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-createSprint')}>Create Sprint</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-updateSprint')}>Update Sprint</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-itemSearch')}>Item Search</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-dashboard')}>Dashboard View</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-itemsFilter')}>Items Filter</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'agileALM-workItemModal')}>Work Items Modal</MenuItem>
                                        <SubMenu label="Retro Board">
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-view')}>Board View</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-create')}>Create</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-delete')}>Delete</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-sprint-experience')}>Sprint Experience</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-comments')}>Comments</MenuItem>
                                            <MenuItem onClick={() => handlePush('tab', 'agileALM-retro-like')}>Like</MenuItem>

                                        </SubMenu>
                                    </SubMenu>

                                </SubMenu>

                                {/* {
                                    SideMenus?.map((menu, i) =>
                                        <GetSubMenu menu={menu} key={i}></GetSubMenu>
                                    )
                                } */}

                            </Menu>
                        </Sidebar>
                    </ProSidebarProvider>
                </Grid>
                <Grid item xs={10} md={8} lg={9} xl={11} sx={{ marginTop: { xs: '80px', md: '150px' }, marginLeft: { sm: '300px' }, height: '100vh', padding: { xs: '20px' } }}>
                    {children}
                </Grid>
            </Grid>

        </Box>
    );
};

export default Aside;
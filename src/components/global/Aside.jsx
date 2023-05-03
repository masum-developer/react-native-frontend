import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';

const Aside = ({ children }) => {
    const matches = useMediaQuery('(min-width:600px)');
    console.log('matcgh', matches);
    const router = useRouter();

    const handlePush = (key, value) => {
        let query = router.query;

        router.push({
            pathname: window.location.pathname,
            query: { ...query, [key]: value }
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container>
                <Grid item xs={2} md={2} lg={1} xl={1}>
                    <ProSidebarProvider>
                        <Sidebar defaultCollapsed={!matches} className='sidebar' style={{ marginTop: '109px', height: '90vh', position: 'fixed', paddingBottom: '10px' }} backgroundColor="#ECE4EC" width='250px'>
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
                                <MenuItem onClick={() => handlePush('tab', 'get_started')}>Get Started</MenuItem>
                                <SubMenu label="Environment Setup" defaultOpen>
                                    <MenuItem onClick={() => handlePush('tab', 'vscode-installation')}>VS Code Installation</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'vscode-extentions')}>VS Code Extensions</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'git-installation')}>Git Installation</MenuItem>

                                    <MenuItem onClick={() => handlePush('tab', 'git-gitlab')}>Git & GitLab</MenuItem>

                                </SubMenu>
                                {/* <MenuItem >Agile Scrum</MenuItem> */}

                                <SubMenu label="HTML">
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
                                <SubMenu label="CSS" >
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
<<<<<<< HEAD
                                    <MenuItem onClick={() => handlePush('tab', 'position')}>Position</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'z-index')}>Z-Index</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'float')}>Float</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'block')}>Block</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'align')}>Align</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'dropdown')}>DropDown</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'form')}>Form</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'cssimages')}>Image</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab','units')}> Unit</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab','specificity')}>Specificity</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'important')}>!Important</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'flexbox')}>Flexbox</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'grid')}>Grid</MenuItem>
                                    
=======
                                    <MenuItem>Position</MenuItem>
                                    <MenuItem>Z-Index</MenuItem>
                                    <MenuItem>Float</MenuItem>
                                    <MenuItem>Block</MenuItem>
                                    <MenuItem>Align</MenuItem>
                                    <MenuItem>DropDown</MenuItem>
                                    <MenuItem>Form</MenuItem>
                                    <MenuItem>Image</MenuItem>
                                    <MenuItem>Unit</MenuItem>
                                    <MenuItem>Specificity</MenuItem>
                                    <MenuItem>!Important</MenuItem>
>>>>>>> 2ccb75f61b9a4fd0b434e988651fd882c83108d9



                                </SubMenu>
                                <SubMenu label="JavaScript">
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
                                        <MenuItem onClick={() => handlePush('tab', 'comparison')}>While</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'comparison')}>Do While</MenuItem>
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

                                <SubMenu label="ReactJS">
                                    <MenuItem onClick={() => handlePush('tab', 'react-introduction')}>Introduction</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'react-installation')}>Installation</MenuItem>
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

                                <SubMenu label="NodeJs">
                                    <MenuItem onClick={() => handlePush('tab', 'nodejs-introduction')}>Introduction</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'nodejs-server')}>Basic Server</MenuItem>
                                </SubMenu>

                                <SubMenu label="ExpressJs">
                                    <MenuItem onClick={() => handlePush('tab', 'expreejs-introduction')}>Introduction</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'expreejs-installation')}>Installation & Setup</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'req-object')}>req Object</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'res-object')}>res Object</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic-server')}>Status Code</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic-server')}>Routing</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic-server')}>HTTP Methods</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic-server')}>Middleware</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic-server')}>Error Handling</MenuItem>
                                </SubMenu>

                                <SubMenu label="Database">
                                </SubMenu>

                            </Menu>
                        </Sidebar>
                    </ProSidebarProvider>
                </Grid>
                <Grid item xs={8} md={8} lg={9} xl={11} sx={{ marginTop: '150px', marginLeft: { sm: '300px' }, height: '100vh' }}>
                    {children}
                </Grid>
            </Grid>

        </Box>
    );
};

export default Aside;
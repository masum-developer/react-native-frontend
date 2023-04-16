import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

const Aside = ({ children }) => {
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

            <Grid container spacing={1}>
                <Grid item xs={2} md={2} lg={1} xl={1}>
                    <ProSidebarProvider>
                        <Sidebar className='sidebar' style={{ marginTop: '109px', height: '90vh', position: 'fixed' }} backgroundColor="#ECE4EC" width='250px'>
                            <Menu
                                menuItemStyles={{
                                    button: ({ level, active, disabled }) => {
                                        // if (level === 0) {
                                        return {
                                            color: disabled ? "#eee" : "#455A64",
                                            backgroundColor: active ? "#3D34E3" : undefined,
                                            "&:hover": {
                                                backgroundColor: "#D5C9F0 !important",
                                                color: "#3D34E3 !important",
                                                fontWeight: "bold !important",
                                                fontFamily: "Heebo, sans-serif"
                                            },
                                            // };
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

                                <SubMenu label="HTML" defaultOpen>
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
                                <MenuItem>CSS</MenuItem>
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
                                        <MenuItem onClick={() => handlePush('tab', 'assignment')}>Assigment</MenuItem>
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
                                        <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Asynchronous</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Promises</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Async/Await</MenuItem>
                                    </SubMenu>

                                    <SubMenu label="DOM Manipulation">
                                        <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Introduction</MenuItem>
                                        <MenuItem onClick={() => handlePush('tab', 'operator_overview')}>Features List</MenuItem>
                                    </SubMenu>
                                </SubMenu>

                            </Menu>
                        </Sidebar>
                    </ProSidebarProvider>
                </Grid>
                <Grid item xs={8} md={8} lg={9} xl={10} sx={{ marginTop: '150px', marginLeft: { lg: '120px' }, height: '100vh' }}>
                    {children}
                </Grid>
            </Grid>

        </Box>
    );
};

export default Aside;
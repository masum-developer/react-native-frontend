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
                        <Sidebar style={{ marginTop: '109px' }} backgroundColor="#ECE4EC" width='250px'>
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
                                <SubMenu label="HTML" defaultOpen>
                                    <MenuItem onClick={() => handlePush('tab', 'html_introduction')}>HTML Introduction</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'html_overview')}>Overview</MenuItem>
                                    <MenuItem onClick={() => handlePush('tab', 'basic_tags')}>Basic Tags</MenuItem>
                                    <MenuItem>Elements</MenuItem>
                                    <MenuItem>Attributes</MenuItem>
                                    <MenuItem>Basic Tags</MenuItem>
                                    <MenuItem>Formatting</MenuItem>
                                    <MenuItem>Images</MenuItem>
                                    <MenuItem>Tables</MenuItem>
                                    <MenuItem>Lists</MenuItem>
                                    <MenuItem>Text Links</MenuItem>
                                </SubMenu>
                                <MenuItem>CSS</MenuItem>
                                <MenuItem>JavaScript</MenuItem>
                                
                            </Menu>
                        </Sidebar>
                    </ProSidebarProvider>
                </Grid>
                <Grid item xs={8} md={8} lg={9} xl={10} sx={{ marginTop: '150px', marginLeft: {lg : '120px'}}}>
                    {children}
                </Grid>
            </Grid>

        </Box>
    );
};

export default Aside;
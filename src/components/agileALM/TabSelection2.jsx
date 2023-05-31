import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AgileProcess from '../agileProcess/AgileProcess';
import { useRouter } from 'next/router';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



const TabSelection2 = ({ imageComp, frontendComp, backendComp, databaseComp, agileExecution }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(max-width:600px)');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };




    return (
        <Box pb={3}>
            <Box sx={{ bgcolor: 'background.paper' }}>
                <AppBar position="static" sx={{ backgroundColor: '#313641' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant={matches ? 'scrollable' : 'fullWidth'}
                        aria-label="full width tabs example"
                        allowScrollButtonsMobile
                    >
                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>Empowering teams through collaboration and flexibility.</Typography>}>
                            <Tab label="Agile Methodology" {...a11yProps(0)} />
                        </Tooltip>

                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>Requirement from the perspective of an end user.</Typography>}>
                            <Tab label="User Story" {...a11yProps(1)} />
                        </Tooltip>
                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>User Interface of the page.</Typography>}>
                            <Tab label="UI" {...a11yProps(2)} />
                        </Tooltip>

                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>Frontend implementation</Typography>}>
                            <Tab label="FI" {...a11yProps(3)} />
                        </Tooltip>

                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>Backend implementation</Typography>}>
                            <Tab label="BI" {...a11yProps(4)} />
                        </Tooltip>


                        <Tooltip placement="top" title={<Typography textAlign={"center"} variant='subtitle2'>Database model of the requirement</Typography>}>
                            <Tab label="DB" {...a11yProps(5)} />
                        </Tooltip>

                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        {/* agile process */}
                        <AgileProcess></AgileProcess>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        {/* execution */}
                        {agileExecution}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        {/* image */}
                        {imageComp}
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        {/* frontend */}
                        {frontendComp}
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        {/* backend */}
                        {backendComp}
                    </TabPanel>

                    <TabPanel value={value} index={5} dir={theme.direction}>
                        {/* database mode */}
                        {databaseComp}
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Box>
    );
};

export default TabSelection2;
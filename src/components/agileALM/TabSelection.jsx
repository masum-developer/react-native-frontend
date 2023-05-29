import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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



const TabSelection = ({ imageComp, frontendComp, backendComp, databaseComp }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(max-width:600px)');

  console.log('matches', matches);

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
            <Tab label="User Interface" {...a11yProps(0)} />
            <Tab label="Frontend Implementation" {...a11yProps(1)} />
            <Tab label="Backend Implementation" {...a11yProps(2)} />
            <Tab label="Database Model" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* image */}
            {imageComp}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* frontend */}
            {frontendComp}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* backend */}
            {backendComp}
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            {/* backend */}
            {databaseComp}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
};

export default TabSelection;
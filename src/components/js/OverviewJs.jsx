import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';

const OverviewJs = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'overviewJs');

    //destructuring
    const { title, desc, section1, section2, section3 } = data || {};
    const { title1, desc1, lists1 } = section1 || {};
    const { title2, list2, codeTemplate2desc } = section2 || {};
    const { title3, desc3 } = section3 || {};

    return (
        <Box>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='subtitle1'>{desc}</Typography>

            <Typography variant='h3' mt={3}>{title1}</Typography>
            <Typography variant='subtitle1'>{desc1}</Typography>

            <Box mt={1}>
                {
                    lists1?.map((item, i) => <List key={i} item={item}></List>)
                }
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>{title2}</Typography>
                <Box mt={1}>
                    {
                        list2?.map((item, i) => <List key={i} item={item}></List>)
                    }
                </Box>
                <Typography mt={2} variant='subtitle1'>{codeTemplate2desc}</Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>{title3}</Typography>
                <Typography mt={2} variant='subtitle1'>{desc3}</Typography>
            </Box>
        </Box>

    );
};

export default OverviewJs;
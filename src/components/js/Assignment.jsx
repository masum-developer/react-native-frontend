import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';

const Assignment = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'assignment');

    //destructuring
    const { title, desc, section1 } = data || {};
    const { desc1, codeTemplate1, desc1_2, codeTemplate1_2 } = section1 || {};

    return (
            <>{Object.keys(data).length > 0 ?
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                    <Typography variant='subtitle1'>{desc}</Typography>

                    <Box mt={3}>
                        <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                        <Typography variant='subtitle1'>{desc1}</Typography>
                        <CodeBox codeSnippet={codeTemplate1_2}></CodeBox>
                        <Typography variant='subtitle1'>{desc1_2}</Typography>
                    </Box>


                </Box> :
                <CircularIndeterminate></CircularIndeterminate>
            }
            </>

        );
};

export default Assignment;
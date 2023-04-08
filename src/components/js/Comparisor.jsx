import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';

const Comparison = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'comparison');

    //destructuring
    const { title, desc, section1, section2, section3, section4, section5, section6 } = data || {};
    const { desc1, codeTemplate1 } = section1 || {};
    const { desc2, codeTemplate2 } = section2 || {};
    const { desc3, codeTemplate3 } = section3 || {};
    const { desc4, codeTemplate4 } = section4 || {};
    const { desc5, codeTemplate5 } = section5 || {};
    const { desc6, codeTemplate6, desc6_2 } = section6 || {};

    return (
            <>{Object.keys(data).length > 0 ?
                <Box>
                    <Typography variant='h3'>{title}</Typography>
                    <Typography variant='subtitle1'>{desc}</Typography>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc1}</Typography>
                        <CodeBox codeSnippet={codeTemplate1}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc2}</Typography>
                        <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc3}</Typography>
                        <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc4}</Typography>
                        <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                    </Box>

                    <Box mt={3}>
                        <Typography variant='subtitle1'>{desc5}</Typography>
                        <CodeBox codeSnippet={codeTemplate5}></CodeBox>
                    </Box>

                    <Box mt={3} pb={2}>
                        <Typography variant='subtitle1'>{desc6}</Typography>
                        <CodeBox codeSnippet={codeTemplate6}></CodeBox>
                        <Typography variant='subtitle1'>{desc6_2}</Typography>

                    </Box>


                </Box> :
                <CircularIndeterminate></CircularIndeterminate>
            }
            </>

        );
};

export default Comparison;
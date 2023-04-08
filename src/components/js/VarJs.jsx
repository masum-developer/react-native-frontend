import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import useFind from '../../hooks/useFind';
import JsData from '../../localDb/JsData';
import CircularIndeterminate from '../global/Spinner';

const VarJs = () => {
    //fetching data from custom hooks
    const data = useFind(JsData, 'varJs');

    //destructuring
    const { title, desc, section1, section2, section3, section4 } = data || {};
    const { desc1, codeTemplate1 } = section1 || {};
    const { desc2, codeTemplate2 } = section2 || {};
    const { desc3, codeTemplate3, desc3_2, codeTemplate3_2 } = section3 || {};
    const { desc4 } = section4 || {};

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
                        <Typography mt={1} variant='subtitle1'>{desc3_2}</Typography>
                        <CodeBox codeSnippet={codeTemplate3_2}></CodeBox>
                    </Box>

                    <Box mt={2}>
                        <Typography variant='subtitle1'>{desc4}</Typography>
                    </Box>
                </Box> :
                <CircularIndeterminate></CircularIndeterminate>
            }
            </>

        );
};

export default VarJs;
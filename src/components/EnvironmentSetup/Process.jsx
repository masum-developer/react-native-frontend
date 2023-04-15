import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Process = ({ list }) => {
    return (
        <Box mt={3} sx={{ borderLeft: '4px solid gray'}}>
            <Box mt={1} sx={{ backgroundColor: '#ECE4EC', padding: '10px 20px' }}>

            {
                list?.map((item, i) => <Stack direction={"row"}>
                    <Box>
                        <img src="/arrow.svg" style={{ height: '25px', width: '25px' }} alt="list"></img>
                    </Box>
                    <Typography key={i} variant='subtitle2'>{item}</Typography>
                </Stack>)
            }
        </Box>
        </Box>
    );
};

export default Process;
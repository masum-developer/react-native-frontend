import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const List = ({ item }) => {
    return (
        <Stack direction={"row"}>
            <Box>
                <img src="/arrow.svg" style={{ height: '25px', width: '25px' }} alt="list"></img>
            </Box>
            <Typography variant='subtitle2'>{item?.title}</Typography>
        </Stack>
    );
};

export default List;
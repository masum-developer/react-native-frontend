import { Box, Typography } from '@mui/material';
import React from 'react';
import { AiFillCloud, AiFillHeart, AiFillCar, AiFillFileAdd } from 'react-icons/ai';
import {BsFillBarChartLineFill} from 'react-icons/bs'


const IconOutput = () => {
    return (
        <Box mt={1} >
            <div>
                <AiFillCloud size={35}></AiFillCloud>
                <AiFillHeart size={35}></AiFillHeart>
                <AiFillCar size={35}></AiFillCar>
                <AiFillFileAdd size={35}></AiFillFileAdd>
                <BsFillBarChartLineFill size={35}></BsFillBarChartLineFill>
</div>





        </Box>

    )
}

export default IconOutput;
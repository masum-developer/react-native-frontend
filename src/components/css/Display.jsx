import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import CssData from '../../localDb/CSS'
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import cssData from '../../localDb/CSS';
import CssOutput from '../global/CssOutput';
import ClassCssOutput from '../global/ClassCssOutput';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';





const Display = () => {

    //fetching data from custom hooks
    const data = useFind(CssData, 'display');
    //destructuring
    const { section1,section2,section3 } = data || {};
    const { title1, desc1 } = section1 || {};
    const { title2, desc2, list2 } = section2 || {};
    const { title3, desc3,list3 } = section3 || {};
    
   
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box >

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='h3'>{title2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
                <Block list={list2}></Block>
                 <Typography mt={3} variant='h3'>{title3}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
                <Block list={list3}></Block>
              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default Display;
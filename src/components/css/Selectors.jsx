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
import ListsOutput5 from '../global/Listsoutput5';
import ClassCssOutput from '../global/ClassCssOutput';

const Selectors = () => {
    //fetching data from custom hooks
    const data = useFind(CssData, 'selectors');

    //destructuring
    const { section1,section2 ,section3,section4,section5,section6,section7,section8,section9,section10} = data || {};
    const { title1, desc1 } = section1 || {};
    const {title2, desc2 ,desc} = section2 || {}
    const {title3, desc3 ,codeTemplate3} = section3 || {}
    const { desc4} = section4 || {}

    const { desc5, codeTemplate5 } = section5 || {}
    const { desc6, codeTemplate6 } = section6 || {}
    
    const { desc7, title7, codeTemplate7 } = section7 || {}
    const { desc8 } = section8 || {}
    const { desc9, codeTemplate9 } = section9 || {}
    const{desc10,codeTemplate10,desc11,desc12}=section10||{}
    
   

    return (
        <Box >

            <Typography variant='h3'>{title1}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
            <Typography mt={3} variant='h3'>{title2}</Typography>
             <Typography mt={3} variant='subtitle1'>{desc}</Typography>

            <Box mt={3}>
                <ListsOutput5></ListsOutput5>
            </Box>

            <Typography mt={3} variant='subtitle1'>{desc2}</Typography>
            {/* ID Selector */}
            <Typography mt={3} variant='h3'>{title3}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc3}</Typography>
             {/* Codesnippet 1 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc4}</Typography>
            
            <Typography mt={3} variant='subtitle1'>{desc5}</Typography>
              {/* Codesnippet 2 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate5}></CodeBox>
            </Box>
               <Typography mt={3} variant='subtitle1'>{desc6}</Typography>
              {/* Codesnippet 3 */}
             <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate6}></CodeBox>
            </Box>
             {/* Output */}
             <Box mt={3}>
                <Typography variant='h4'>Output: </Typography>
                <CssOutput h1Color="Welcome to Ts4u website!" pColor='Here you will find all sorts of useful information' ></CssOutput>

                {/* Class Selector */}
                 <Typography mt={3} variant='h3'>{title7}</Typography>
            <Typography mt={3} variant='subtitle1'>{desc7}</Typography>
      {/* Code Snippit 1*/}
            <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate7}></CodeBox>
                </Box>    
             <Typography mt={3} variant='subtitle1'>{desc8}</Typography>    
                
            </Box>
            <Typography mt={3} variant='subtitle1'>{desc9}</Typography>
              {/* Code Snippit 2*/}
            <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate9}></CodeBox>
            </Box>  
            <Typography mt={3} variant='subtitle1'>{desc10}</Typography>
              {/* Code Snippit 3*/}
            <Box mt={3}>
              
                <CodeBox codeSnippet={codeTemplate10}></CodeBox>
            </Box> 
            {/* Output */}
            <Typography mt={3} variant='subtitle1'>{desc12}</Typography>
            <ClassCssOutput></ClassCssOutput>
            <Typography mt={3} variant='subtitle1'>{desc11}</Typography>
            <br></br>





        </Box>
       
        
    );
};

export default Selectors;
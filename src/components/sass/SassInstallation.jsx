import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../global/List';
import CodeBox from '../global/CodeBox';
import { useEffect } from 'react';
import { useState } from 'react';
import useFind from '../../hooks/useFind';
import CircularIndeterminate from '../global/Spinner';
import Block from '../global/Block';
import MuiAlert from '@mui/material/Alert';
import SassData from '../../localDb/SASS'
import ImageComp from '../EnvironmentSetup/ImageComp';










const SassInstallation = () => {

    //fetching data from custom hooks
    const data = useFind(SassData, 'sassinstallation');
    //destructuring
    const { section1, section2, section3, section4} = data || {};
    const { title1, desc1,desc1_1,desc1_2,desc1_3,desc1_4,desc1_5,desc1_6} = section1 || {};
    const { desc2_1,desc2_2,codeTemplate2_1 } = section2 || {};
   
   
   
    
    

    
    
    return (
        <>{Object.keys(data).length > 0 ?
            <Box>

                <Typography variant='h3'>{title1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_1}</Typography>
                
                <Typography mt={3} variant='subtitle1'>{desc1_2}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_3}</Typography>
               <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: Makesure That Node.Js Package must be installed before run this command.
                   </MuiAlert>
                </Box>
                <Box mt={3}>
                     <ImageComp image={"/sass/Screenshot1.PNG"} imageTitle={"Screenshot 1: sass"}></ImageComp>

                </Box>
                <Typography mt={3} variant='subtitle1'>{desc1_4}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_5}</Typography>
                <Typography mt={3} variant='subtitle1'>{desc1_6}</Typography>
                  <Box mt={3}>
                     <ImageComp image={"/sass/Screenshot2.PNG"} imageTitle={"Screenshot 2: sass"}></ImageComp>

                </Box>
                <Typography mt={3} variant='subtitle1'>{desc2_1}</Typography>
                   {/* Code Snippit 1 */}

                <Box>
                   

                <CodeBox codeSnippet={codeTemplate2_1}></CodeBox>
                </Box> 
                <Typography mt={3} variant='subtitle1'>{desc2_2}</Typography>
              

               
              
                
                
               
                
                
             

                



           

              
                

         


               
                  
               

               

             
                
                 
                
                
               

               

                
             
             
             
             
             
                
                
                

                
              
                <br></br>

              




                
                

                


          
              

                


            
        

            </Box> :
            <CircularIndeterminate></CircularIndeterminate>
        
        }
        </>
    );
};
export default SassInstallation  ;
import { Box, Typography } from '@mui/material';
import React from 'react';


const CssOutput = ({ h1Text,pText,h1Color,pColor,h1Background,pBackground}) => {
    return(

         <Box mt={1}  sx={{ backgroundColor: '#ECE4EC', padding: '20px 10px' }}>
            {
                h1Text && <Typography variant='h2'>{h1Text}</Typography>
            }

            {
                pText && <Typography variant='subtitle2'>{pText}</Typography>
            }
            {
                h1Color && <h1 style={{
                    color: 'blue',
                }}>{h1Color}</h1>
            }
            {
                pColor && <p style={{
                    color: 'blue',
                    
                }}>{pColor}</p>
            }
            {
                h1Background && <h1 style={{
                    color: 'white',
                    background: 'black',
                    padding: "20px"
                }}>{h1Background}</h1>
            }
             {
                pBackground && <p style={{
                    color: 'black',
                    background: 'violet',
                    padding: "20px"
                }}>{pBackground}</p>
            }
            
            </Box>
    )
}

export default CssOutput;
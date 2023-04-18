import { Box, Typography } from '@mui/material';
import React from 'react';

const CSSListsOutput1 = () => {
    return (
        <Box mt={1} sx={{ backgroundColor: 'green', padding: '10px 20px' }}>
          
            <ul style={{
                    backgroundColor: 'black', color:'white', }}>
                <li >Item 1</li>
  <li>Item 2</li>
  <li>iItem 3</li>
            </ul>
  



        </Box>

    )
}

export default CSSListsOutput1;
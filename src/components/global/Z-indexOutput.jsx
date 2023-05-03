import { Box, Typography } from '@mui/material';
import React from 'react';

const ZIndexOutput = () => {
    return (
        <Box  >
            <div>
               
                <h2 style={{ position: 'initial',
                    zIndex:'1'
                , backgroundColor:'InfoText',color:'Blue'}}>Welcome to TS4U Abroad</h2>
                <h3 style={{ position: 'relative',    zIndex:'3', backgroundColor: 'InfoText', color: 'Yellow' }}>Welcome to TS4U Abroad</h3>
                <h4 style={{ position: 'sticky',   zIndex:'1', backgroundColor: 'InfoText', color: 'Red' }}>Welcome to TS4U Abroad</h4>
                 <h1  style={{position:'absolute',   zIndex:'2',backgroundColor:'InfoText',color:'violet'}}>Welcome to TS4U Abroad</h1>
             
                
                
</div>






        </Box>

    )
}

export default ZIndexOutput;
import { Box, Typography } from '@mui/material';
import React from 'react';

const CssTablesOutput = () => {
    return (
        <Box mt={1} sx={{ backgroundColor: '#f2f380', padding: '30px 20px'}}>
                <table style={{backgroundColor:'violet',color:'black'}}>
                <caption><strong>Employee Details</strong></caption>
                
  <thead>
    <tr>
      <th style={{ border: '2px solid black',
  padding: '8px',
  textAlign: 'left'}}>Name</th>
      <th style={{ border: '2px solid black',
  padding: '8px',
  textAlign: 'left'}}>Age</th>
      <th style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>Huma</td>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>25</td>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>Female</td>
    </tr>
    <tr>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>Jane</td>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>30</td>
      <td style={{ border: '2px solid black',
  padding: '10px',
  textAlign: 'left'}}>Male</td>
    </tr>
  </tbody>
</table>

        </Box>
    )
}

export default CssTablesOutput;
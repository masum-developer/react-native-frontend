import { Box, Typography } from '@mui/material';
import React from 'react';

const TableOutput2 = () => {
    return (
        <Box mt={1} sx={{ backgroundColor: '#ECE4EC', padding: '30px 20px' }}>
                <table>
                <caption><strong>Employee Details</strong></caption>
                
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Huma</td>
      <td>25</td>
      <td>Female</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>Male</td>
    </tr>
  </tbody>
</table>

        </Box>
    )
}

export default TableOutput2;
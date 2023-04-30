import { Box, Typography,FormControl,NativeSelect  } from '@mui/material';
import React from 'react';

const DropdownOutput = () => {
    return (
        <Box mt={3}>
            <div style={{ border: "5px solid violet" }}>
        <FormControl fullWidth>

        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option><b>HTML</b></option>
          <option><b>CSS</b></option>
          <option><b>JAVASCRIPT</b></option>
        </NativeSelect>
      </FormControl>
            </div>

        </Box>

    )
}

export default DropdownOutput;
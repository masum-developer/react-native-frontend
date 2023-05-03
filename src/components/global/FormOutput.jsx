import { Box, Typography,FormControl,NativeSelect  } from '@mui/material';
import React from 'react';

const FormOutput = () => {
    return (
        <Box mt={3} >
            <form  style={{
                border:"2px solid blue", textAlign:'center',paddingBottom:'2px',backgroundColor:"#f2f2f2",boxShadow:"0px 0px 10px #888"}} action="/send-data-here" method="post">
  <label for="first"><b>First name:</b></label><br></br>
  <input style={{padding:"8px", boxShadow:"0px 0px 5px #ddd"}} type="text" id="first" name="first" /><br></br>
  <label for="last"><b>Last name:</b></label><br></br>
  <input style={{padding:"8px",boxShadow:"0px 0px 5px #ddd"}} type="text" id="last" name="last" /><br></br>
  <button  type="submit" style={{backgroundColor:' #4CAF50',color:"white",padding:'10px 20px',marginTop:"3px",borderRadius:"5px",border:'none'}}>Submit</button>
</form>

        </Box>

    )
}

export default FormOutput;














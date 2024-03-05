import { Box, Typography } from "@mui/material";
import React from "react";

const ClassContent = ({classContent}) => {
   console.log(classContent)

   const myData = classContent;
  return <Box pb={3}>

{myData}

    </Box>;



};

export default ClassContent;

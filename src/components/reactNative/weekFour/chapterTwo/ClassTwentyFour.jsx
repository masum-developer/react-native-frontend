import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code1 = `
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => {
  // Handle parsed data here
  console.log(data);
})
.catch(error => console.error('Error:', error));
`;

const code2 = `
fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));

`;

const code3 = `

fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));

`;
const code4 = `
fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Resource not found');
    } else {
      throw new Error('An error occurred');
    }
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));

`;

const ClassTwentyFour = () => {
  return (
    <Box>
      <Typography variant="h3">Chapter 2: User Authentication</Typography>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Class 24: Implementing Login and Sign Up Screen
      </Typography>

      <Typography mb={2}>
        Implementing login and sign up screens in a React Native application
        involves designing UI components for user authentication, handling user
        input, and integrating with backend APIs for authentication. Here's a
        general guide on how to implement login and sign up screens:
        Implementing login and sign up screens in a React Native application
        involves designing UI components for user authentication, handling user
        input, and integrating with backend APIs for authentication. Here's a
        general guide on how to implement login and sign up screens:
      </Typography>
    </Box>
  );
};

export default ClassTwentyFour;

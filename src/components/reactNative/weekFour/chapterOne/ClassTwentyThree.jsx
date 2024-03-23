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

const ClassTwentyThree = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Class 23: Handling API Responses and Errors
      </Typography>

      <Typography mb={2}>
        Handling API responses and errors is crucial for building robust React
        Native applications that interact with backend servers. Here's a guide
        on how to handle API responses and errors effectively:
      </Typography>
      <Typography fontWeight={"bold"}>Handling API Responses:</Typography>
      <Box>
        <Typography>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            1. Parsing JSON:
          </span>
          Most APIs return data in JSON format. When you receive a response from
          the API, you typically need to parse the JSON data to extract the
          information you need. You can use the .json() method on the response
          object to parse JSON data.
        </Typography>
        <CodeBox codeSnippet={code1}></CodeBox>
      </Box>
      <br />
      <Box>
        <Typography>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            2. Checking Status Codes:
          </span>
          HTTP responses include status codes that indicate the outcome of the
          request. You can check the status code to determine whether the
          request was successful or encountered an error. Status codes in the
          2xx range indicate success, while other ranges indicate various types
          of errors.
        </Typography>
        <br />
        <CodeBox codeSnippet={code2}></CodeBox>
      </Box>
      <br />
      <Typography fontWeight={"bold"}>Handling API Errors:</Typography>
      <br />
      <Box>
        <Typography>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            1. Catching Fetch Errors:
          </span>
          You can use the .catch() method to catch any errors that occur during
          the network request, such as network errors, timeouts, or CORS issues.
        </Typography>
        <CodeBox codeSnippet={code3}></CodeBox>
      </Box>
      <br />
      <Box>
        <Typography>
          <span style={{ fontWeight: "bold", marginRight: "10px" }}>
            2. Handling Specific Errors:
          </span>
          Depending on your application's requirements, you may need to handle
          specific types of errors differently. For example, you might want to
          display a user friendly message for certain types of errors or retry
          the request under certain conditions.
        </Typography>
        <CodeBox codeSnippet={code4}></CodeBox>
      </Box>
    </Box>
  );
};

export default ClassTwentyThree;

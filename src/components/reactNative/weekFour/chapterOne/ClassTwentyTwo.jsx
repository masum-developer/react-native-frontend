import { Box, Typography } from "@mui/material";
import React from "react";
import StepComp from "../../../EnvironmentSetup/StepComp";
import CodeBox from "../../../global/CodeBox";
import Process from "../../../EnvironmentSetup/Process";

const code1 = `
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

`;
const code2a = `
npm install axios
`;
const code2b = `
import axios from 'axios';
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
`;
const code3 = `
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.onerror = function () {
  console.error('Error:', xhr.statusText);
};
xhr.send();

`;
const ClassTwentyTwo = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Week 4: Authentication and Security
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Chapter 1: Networking Basics
      </Typography>
      <Typography fontWeight="bold">
        Class 22: Making Network Requests in React Native
      </Typography>
      <Typography mb={2}>
        Making network requests in React Native involves using APIs provided by
        JavaScript and React Native itself, as well as thirdparty libraries.
        Here's a basic guide on how to make network requests in React Native:
      </Typography>
      <Typography fontWeight={"bold"}>Using Fetch API:</Typography>
      <Typography>
        The Fetch API provides a simple interface for fetching resources
        asynchronously across the network. It is built into modern web browsers
        and React Native. Here's how you can use Fetch to make a network
        request:
      </Typography>
      <CodeBox codeSnippet={code1}></CodeBox>
      <br />
      <Typography variant="subtitle2" fontWeight={"bold"}>
        Using Axios:
      </Typography>
      <Typography>
        Axios is a popular JavaScript library for making HTTP requests. It
        provides a more convenient and featurerich API compared to Fetch. First,
        install Axios in your React Native project:
      </Typography>
      <CodeBox codeSnippet={code2a}></CodeBox>
      <br />
      <Typography>Then, you can use Axios to make network requests:</Typography>
      <CodeBox codeSnippet={code2b}></CodeBox>
      <br />
      <Typography variant="subtitle2" fontWeight={"bold"}>
        Using XMLHttpRequest:
      </Typography>
      <Typography>
        XMLHttpRequest is a builtin JavaScript object that allows you to make
        network requests in all modern web browsers, including React Native.
        However, it's lowerlevel and less convenient compared to Fetch and
        Axios.
      </Typography>
      <CodeBox codeSnippet={code3}></CodeBox>
      <br />
    </Box>
  );
};

export default ClassTwentyTwo;

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';
import StepComp from '../EnvironmentSetup/StepComp';
import ImageComp from '../EnvironmentSetup/ImageComp';



const list = [
    "1) Managed Database Service: MongoDB Atlas takes care of the operational aspects of database management, including provisioning, configuration, patching, backups, and monitoring. This allows developers to focus on building applications rather than managing the underlying infrastructure.",
    "2) Cloud-Native and Multi-Cloud: MongoDB Atlas is designed to run natively on major cloud platforms, including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. It provides a consistent experience across different cloud providers and allows you to choose the cloud environment that best suits your needs.",
    "3) Scalability and Elasticity: MongoDB Atlas offers easy scalability for your databases. You can scale your clusters vertically by increasing the resources allocated to each node, or horizontally by adding more replica set members or sharding your data across multiple clusters. This enables you to handle increasing data volumes and growing workloads.",
    "4) High Availability and Fault Tolerance: MongoDB Atlas ensures high availability and fault tolerance for your databases. It automatically manages replica sets, handles failover, and replicates data across multiple nodes and availability zones or regions. This provides redundancy and minimizes the risk of data loss or downtime.",
    "5) Integration with MongoDB Ecosystem: MongoDB Atlas seamlessly integrates with other MongoDB products and services. It integrates with MongoDB Compass, a graphical user interface for database management, as well as MongoDB Stitch, a serverless platform for building backend services and integrations.",
];

const step1 = [
    "Visit the MongoDB Atlas website: Go to the MongoDB Atlas website at https://www.mongodb.com/cloud/atlas.",
];

const step2 = [
    "Fill in the Signup Form: You will be redirected to the signup form. Fill in the required information, including your name, email address, and password."
]

const step3 = [
    "Fill all the requirements like goal, types of application you are building, preferred language"
]

const step4 = [
    "Choose the Cloud Provider and Region: Select your preferred cloud provider (Amazon Web Services, Google Cloud Platform, or Microsoft Azure) and the region where you want your MongoDB Atlas clusters to be deployed. Choose the options that best fit your requirements."
]

const step5 = [
    "Create a database using user a username and password. Users will be given the read and write to any database privilage by default. You can update these permissions and/or create additional users later. Ensure these credentials are different to your MongoDB Cloud username and password."
]

const step6 = [
    "MongoDB will add current IP address. You can connect to your cluster from this device.",
    "Click on 'Finish and Close' button to continue."
]


const MongoDBAtlas = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is MongoDB Atlas?</Typography>
            <Typography variant='subtitle2'>
                MongoDB Atlas is a fully-managed cloud database service provided by MongoDB. It allows you to deploy, manage, and scale MongoDB databases in the cloud without the need for manual infrastructure setup and maintenance.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here are some key features and capabilities of MongoDB Atlas:
            </Typography>

            <Block list={list}></Block>

            <Box mt={3}>
                <Typography variant='h3'>How to create a MongoDB Atlas account?</Typography>
                <Typography variant='subtitle2'>
                    To create a MongoDB Atlas account, you can follow these steps:
                </Typography>
            </Box>

            <Box mt={1}>
                <StepComp stepText="Step 1:"></StepComp>
                <ImageComp image={"/mongodb/1.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step1}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 2:"></StepComp>
                <ImageComp image={"/mongodb/2.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step2}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 3:"></StepComp>
                <ImageComp image={"/mongodb/3.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step3}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 4:"></StepComp>
                <ImageComp image={"/mongodb/4.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step4}></Process>
            </Box>


            <Box mt={3}>
                <StepComp stepText="Step 5:"></StepComp>
                <ImageComp image={"/mongodb/5.jpg"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step5}></Process>
            </Box>

            <Box mt={3}>
                <StepComp stepText="Step 6:"></StepComp>
                <ImageComp image={"/mongodb/6.png"} imageTitle={"Screenshot 1: Installing"}></ImageComp>
                <Process list={step6}></Process>
            </Box>


        </Box>
    );
};

export default MongoDBAtlas;
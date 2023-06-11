import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';

const list = [
    'db.collection.aggregate is the method used to perform aggregation on a collection named collection. You should replace collection with the actual name of your collectio',
    "The pipeline stages are specified as an array within the aggregate method's parameter. In the example, we have two stages: $match and $limit.",
    "The $match stage is optional but commonly used to filter the documents based on a certain condition. You can replace { field: value } with your own matching criteria.",
    "The $limit stage comes after the $match stage (if used) and restricts the result set to a maximum of 10 documents. You can modify the numeric value to your desired limit.",
    "Add any additional stages to the pipeline as needed, such as $group, $sort, $project, etc., to perform further transformations or calculations on the data."
];


const codeSnippet = `db.collection.aggregate([
    { $match: { field: value } },  // Optional: Add a $match stage to filter documents
    { $limit: 10 }  // Limit the result set to 10 documents
])`

const AggregationsLimit = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is $limt in Aggregation Framework?</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, the $limit operator is used within the aggregation framework to restrict the number of documents returned in the result set. It allows you to specify a numeric value that determines the maximum number of documents to be included in the output.
            </Typography>

            <Typography variant='subtitle2'>
                Here's an example of how to use $limit in a MongoDB aggregation pipeline:
            </Typography>
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography variant='subtitle2'>
                In the above example, the $limit stage restricts the result set to a maximum of 10 documents. You can change the value to any positive integer based on your requirements.
            </Typography>

            <Typography variant='subtitle2'>
                It's important to note that $limit should generally be used towards the end of an aggregation pipeline after all the necessary transformations and calculations have been applied. This helps ensure that the $limit stage operates on the final result set rather than limiting the input to subsequent pipeline stages.
            </Typography>

            <Box mt={3}>

                <Typography variant='h3'>Let's break down the example:</Typography>

                <Process list={list}></Process>


                <Typography mt={2} variant='subtitle2'>
                    Remember that the order of the stages in the pipeline matters. $limit should generally be used towards the end of the pipeline to limit the output after all necessary operations have been performed.
                </Typography>
            </Box>
        </Box>
    );
};

export default AggregationsLimit;
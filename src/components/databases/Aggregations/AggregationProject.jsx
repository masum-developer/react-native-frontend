import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';

const list = [
    'db.collection.aggregate is the method used to perform aggregation on a collection named collection. Replace collection with the actual name of your collection.',
    "The pipeline stages are specified as an array within the aggregate method's parameter. In the example, we have two stages: $match and $project.",
    "The $match stage is optional but commonly used to filter the documents based on a certain condition. You can replace { field: value } with your own matching criteria.",
    "The $project stage comes after the $match stage (if used) and is used to shape the output documents. In the example, we define the projection using an object with field names as keys and projection expressions as values.",
    "The _id field is included in the documents by default. To exclude it from the output, set its value to 0 in the $project stage.",
    "Add any additional stages to the pipeline as needed, such as $group, $sort, $limit, etc., to perform further transformations or calculations on the data."
];


const codeSnippet = `db.collection.aggregate([
    { $match: { field: value } },  // Optional: Add a $match stage to filter documents
    { $project: {
      field1: 1,  // Include field1 in the output
      field2: 1,  // Include field2 in the output
      newField: "$existingField",  // Create a new field with a renamed value
      _id: 0  // Exclude the _id field from the output
    }}
  ])`

const AggregationProject = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is $project in Aggregation Framework?</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, the $project operator is used within the aggregation framework to shape the documents in the result set by specifying which fields to include or exclude, renaming fields, creating computed fields, or rearranging the structure of the documents.
            </Typography>

            <Typography variant='subtitle2'>
                Here's an example of how to use $project in a MongoDB aggregation pipeline:
            </Typography>
            <CodeBox codeSnippet={codeSnippet}></CodeBox>

            <Box mt={3}>

                <Typography variant='h3'>Let's break down the example:</Typography>

                <Process list={list}></Process>


                <Typography mt={2} variant='subtitle2'>
                    Remember to adjust the field names, projection expressions, and other stages according to your specific requirements.
                </Typography>
            </Box>
        </Box>
    );
};

export default AggregationProject;
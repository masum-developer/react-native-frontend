import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../../global/Block';
import CodeBox from '../../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../../EnvironmentSetup/Process';



const list = [
    "$match: Filters documents based on specified criteria, similar to the query operator $match in find operations.",
    "$group: Groups documents by a specified key and applies aggregate functions to calculate values for each group.",
    "$project: Reshapes documents by including, excluding, or transforming fields. It is used to specify the fields that should be included in the output.",
    "$sort: Sorts the documents based on specified fields.",
    "$limit: Limits the number of documents in the output.",
    "$skip: Skips a specified number of documents in the pipeline.",
    "$unwind: Deconstructs an array field from input documents and outputs a separate document for each element.",
    "$lookup: Performs a left outer join with another collection, allowing you to retrieve matching documents from the joined collection.",
    "$addFields: Adds new fields to the documents in the pipeline, which can be computed using expressions.",
    "$project: Includes, excludes, or transforms fields in the output documents."
];

const list2 = [
    "Data Aggregation: The Aggregation Framework allows you to perform complex aggregation operations on your data. You can group documents, calculate aggregated values, apply mathematical functions, and perform statistical analysis. It is particularly useful when you need to derive insights from your data by summarizing, averaging, counting, or calculating aggregated values.",

    "Data Transformation: The Aggregation Framework enables you to reshape and transform your data. You can modify the structure of documents, add new fields, exclude or rename existing fields, and perform calculations on fields. This allows you to prepare data for specific use cases, create custom views, or generate reports with the desired format.",

    "Joining Data: With the $lookup stage, the Aggregation Framework supports data joining operations within MongoDB. You can perform left outer joins, look up and retrieve matching documents from another collection, and combine related data from multiple sources.",

    "Pipelined Processing: The Aggregation Framework operates on data using a pipeline model. You can combine multiple stages to create a sequence of operations, where the output of one stage serves as the input for the next stage. This enables you to perform a series of data processing steps in a single query, reducing network latency and improving performance.",

    "Efficiency and Scalability: The Aggregation Framework is optimized for performance and scalability. It leverages MongoDB's indexing capabilities to efficiently process large volumes of data. By performing data processing directly in the database, you can minimize data transfer and reduce the need for additional processing in the application layer."
]


const AggregationsIntro = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is MongoDB Aggregation?</Typography>
            <Typography variant='subtitle2'>
                MongoDB Aggregation Framework is a powerful tool that allows you to perform advanced data processing operations on your MongoDB collections. It provides a set of operators and stages that enable you to aggregate, transform, and analyze data.
            </Typography>

            <Typography variant='subtitle2'>
                The Aggregation Framework consists of several stages that can be combined to create a pipeline for data aggregation. Here are some commonly used stages in the MongoDB Aggregation Framework:
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why MongoDB Aggregation is used?</Typography>
                <Typography variant='subtitle2'>
                    The MongoDB Aggregation Framework is used for advanced data processing and analysis tasks in MongoDB. Here are some reasons why you might use the Aggregation Framework:
                </Typography>

                <Process list={list2}></Process>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>How to use it?</Typography>


                <Process list={list}></Process>

                <Typography mt={2} variant='subtitle2'>
                    These stages can be used in combination to create complex pipelines that perform various data aggregation and transformation tasks. The Aggregation Framework also provides a rich set of operators, such as arithmetic operators, array operators, conditional operators, and date operators, that can be used within stages to perform calculations and transformations on data.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    The Aggregation Framework is particularly useful when you need to perform operations such as grouping, averaging, summing, joining, and data reshaping in MongoDB. It provides a flexible and efficient way to process large volumes of data directly within the database.
                </Typography>
            </Box>
        </Box>
    );
};

export default AggregationsIntro;
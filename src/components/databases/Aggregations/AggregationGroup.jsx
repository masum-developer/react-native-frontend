import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../../global/Block';
import CodeBox from '../../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../../EnvironmentSetup/Process';



const list = [
    'Specify the Grouping Key: The grouping key determines how the documents will be grouped. It can be a single field or multiple fields. In the $group stage, you specify the grouping key using the _id field, which can be an existing field in the documents or a computed value based on expressions. For example, to group documents based on the "category" field, you would specify { _id: "$category" }.',
    'Define Aggregate Calculations: After specifying the grouping key, you can define aggregate calculations to perform on the grouped data. Aggregate calculations are expressed as key-value pairs, where the key represents the name of the calculated field, and the value represents the aggregate function or expression to apply. Some commonly used aggregate functions are:',
    `$sum: Calculates the sum of a specified field. \n`,
    `$avg: Calculates the average of a specified field. \n`,
    `$min: Returns the minimum value of a specified field. \n`,
    `$max: Returns the maximum value of a specified field. \n`,
    `$first: Returns the first value in a group. \n`,
    `$last: Returns the last value in a group. \n`,
];

const list2 = [
    "Data Aggregation: The Aggregation Framework allows you to perform complex aggregation operations on your data. You can group documents, calculate aggregated values, apply mathematical functions, and perform statistical analysis. It is particularly useful when you need to derive insights from your data by summarizing, averaging, counting, or calculating aggregated values.",

    "Data Transformation: The Aggregation Framework enables you to reshape and transform your data. You can modify the structure of documents, add new fields, exclude or rename existing fields, and perform calculations on fields. This allows you to prepare data for specific use cases, create custom views, or generate reports with the desired format.",

    "Joining Data: With the $lookup stage, the Aggregation Framework supports data joining operations within MongoDB. You can perform left outer joins, look up and retrieve matching documents from another collection, and combine related data from multiple sources.",

    "Pipelined Processing: The Aggregation Framework operates on data using a pipeline model. You can combine multiple stages to create a sequence of operations, where the output of one stage serves as the input for the next stage. This enables you to perform a series of data processing steps in a single query, reducing network latency and improving performance.",

    "Efficiency and Scalability: The Aggregation Framework is optimized for performance and scalability. It leverages MongoDB's indexing capabilities to efficiently process large volumes of data. By performing data processing directly in the database, you can minimize data transfer and reduce the need for additional processing in the application layer."
]

const codeSnippet = `const pipeline = [
    { $group: {
      _id: "$category",
      totalCount: { $sum: 1 },     // Calculates the total count
      avgPrice: { $avg: "$price" } // Calculates the average price
    }}
];
`

const codeSnippet2 = `
const MongoClient = require('mongodb').MongoClient;

async function runAggregation() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('your_database');
    const collection = database.collection('your_collection');

    const pipeline = [
      { $group: {
        _id: "$category",
        totalCount: { $sum: 1 },
        avgPrice: { $avg: "$price" }
      }}
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

runAggregation().catch(console.error);`

const AggregationGroup = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is $group in Aggregation Framework?</Typography>
            <Typography variant='subtitle2'>
                The $group stage in the MongoDB Aggregation Framework is used to group documents together based on a specified key or keys and perform aggregate calculations on the grouped data.
            </Typography>

            <Typography variant='subtitle2'>
                Here's how you can use the $group stage:
            </Typography>
            <Process list={list}></Process>

            <Box mt={3}>

                <Typography variant='h3'>Example of $group</Typography>

                <Typography variant='subtitle2'>
                    Here's an example of using the $group stage to group documents by the "category" field and calculate the total count and average price for each category:
                </Typography>

                <CodeBox codeSnippet={codeSnippet}></CodeBox>

                <Typography mt={2} variant='subtitle2'>
                    In this example, the documents will be grouped based on the "category" field, and for each group, the $group stage will create the fields _id, totalCount, and avgPrice. The _id field will contain the category value, totalCount will store the count of documents in each group, and avgPrice will store the average price of documents in each group.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    Execute the Aggregation: Pass the pipeline, which includes the $group stage, to the aggregate method of the MongoDB driver along with the collection on which you want to perform the aggregation.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    Process the Result: Iterate over the result of the aggregation and access the grouped data.
                </Typography>


                <Typography variant='h3'>Example of $group</Typography>


                <Typography mt={2} variant='subtitle2'>
                    Here's an example using Node.js and the MongoDB Node.js driver:
                </Typography>
                <CodeBox codeSnippet={codeSnippet2}></CodeBox>

            </Box>
        </Box>
    );
};

export default AggregationGroup;
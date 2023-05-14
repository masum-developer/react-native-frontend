import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';



const list = [
    "1) Syntax: MongoDB query syntax resembles JavaScript syntax and involves using methods and operators to specify the criteria for document retrieval.",
    "2) Query Filters: Queries in MongoDB use filters to define the conditions that documents must match in order to be included in the result set. Filters can be based on equality, comparison, logical operators, regular expressions, and more.",
    "3) Projection: Projection allows you to specify which fields should be included or excluded in the result set. It allows you to retrieve only the necessary data, reducing network and processing overhead.",
    "4) Sorting: Sorting determines the order in which the returned documents are presented. You can sort documents based on one or more fields in ascending or descending order.",
    "5) Limit and Skip: The limit option limits the number of documents to be returned in the result set, while the skip option allows you to skip a specified number of documents from the beginning of the result set.",
    "6) Aggregation: MongoDB provides an aggregation framework that allows you to perform advanced data processing, transformations, and calculations using aggregation pipelines. Aggregation pipelines consist of multiple stages, such as filtering, grouping, sorting, and applying mathematical or statistical operations"
];

const list2 = [
    "1) db.collection.insertOne(): Insert a single document into a collection.",
    "2) db.collection.insertMany(): Insert multiple documents into a collection.",
    "3) db.collection.find(): Query and retrieve documents from a collection.",
    "4) db.collection.updateOne(): Update a single document in a collection.",
    "5) db.collection.updateMany(): Update multiple documents in a collection.",
    "6) db.collection.deleteOne(): Delete a single document from a collection.",
    "7) db.collection.deleteMany(): Delete multiple documents from a collection."
]

const list3 = [
    "1) db.collection.aggregate(): Perform advanced data processing and transformations using aggregation pipelines. Aggregation pipelines consist of multiple stages, including filtering, sorting, grouping, and more.",
];

const list4 = [
    "1) db.collection.createIndex(): Create indexes to improve query performance. MongoDB supports various types of indexes, such as single-field, compound, text, geospatial, and hashed indexes.",
];

const list5 = [
    "1) db.collection.createIndex(): Create a text index on a field to enable full-text ", ,
    "2) db.collection.find(): Perform full-text search queries to search for text patterns across documents."
];

const list6 = [
    "1) db.collection.watch(): Set up change streams to listen for real-time changes in a collection. Change streams allow applications to react to inserts, updates, and deletes in near real-time.",
];

const codeTemplate = `// Find all documents in the "users" collection where the "age" field is greater than 25
db.users.find({ age: { $gt: 25 } })

// Find documents with projection (include only the "name" and "email" fields)
db.users.find({}, { name: 1, email: 1 })

// Sort documents by the "name" field in ascending order and limit the result to 10 documents
db.users.find().sort({ name: 1 }).limit(10)`

const MongoDBQuery = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is MongoDB Query?</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, a query refers to the action of retrieving data from the database based on specific criteria. MongoDB provides a flexible and powerful querying mechanism to search, filter, and retrieve documents from collections using a query language similar to JavaScript.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here are some key components and concepts of MongoDB queries:
            </Typography>

            <Block list={list}></Block>

            <Box mt={3}>
                {/* <Typography variant='h3'>Why MongoDB is used?</Typography> */}
                <Typography variant='subtitle2'>
                    Here's an example of a MongoDB query using the MongoDB Query API and the MongoDB shell:
                </Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle2'>
                    This is just a basic example, and MongoDB offers a rich set of query operators, methods, and features to handle complex querying requirements. The specific querying syntax and usage may vary slightly depending on the programming language or driver you are using to interact with MongoDB.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>Example of MongoDB query</Typography>
                <Typography variant='subtitle2'>
                    Starting from version 4.4, MongoDB introduced the MongoDB Query API, which provides a unified and simplified way to interact with the database across multiple programming languages. The MongoDB Query API supports various query languages and data models. Let's take a look at some of the components of the MongoDB Query API:
                </Typography>
            </Box>
            <Box mt={3}>
                <Typography variant='h4'>
                    MongoDB CRUD (Create, Read, Update, Delete) Operations:
                </Typography>
                <Process list={list2}></Process>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    Aggregation Framework:
                </Typography>
                <Process list={list3}></Process>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    Indexes:
                </Typography>
                <Process list={list4}></Process>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    Full-Text Search:
                </Typography>
                <Process list={list5}></Process>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    Change Streams:
                </Typography>
                <Process list={list6}></Process>
            </Box>

        </Box>
    );
};

export default MongoDBQuery;
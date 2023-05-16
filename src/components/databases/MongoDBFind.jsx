import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';



const list = [
    "db.collection: Specifies the collection you want to search in. Replace collection with the actual name of the collection in your MongoDB database.",
    "query: Specifies the criteria to filter documents. This parameter is optional. If not provided, all documents in the collection will be returned. You can use various query operators and comparison expressions to define the search conditions.",
    "projection: Specifies which fields to include or exclude in the result set. This parameter is optional. By default, all fields are returned. Use the projection parameter to specify the fields you want to include (1) or exclude (0).",
];


const MongoDBFind = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>MongoDB Find Operation</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, the find() method is used to query and retrieve documents from a collection based on specific criteria. It allows you to search for documents that match a particular set of conditions.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                The basic syntax of the find() method in the MongoDB shell is as follows:
            </Typography>

            <CodeBox codeSnippet={`db.collection.find(query, projection)`}></CodeBox>


            <Typography variant='subtitle2'>
                Here's an explanation of the parameters:
            </Typography>
            <Process list={list}></Process>

            <Typography variant='subtitle2'>
                Here are a few examples of using the find() method in MongoDB:
            </Typography>

            <Box mt={3}>
                <Typography variant='h4'>
                    1) Find all documents in a collection:
                </Typography>
                <CodeBox codeSnippet={`db.myCollection.find()`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    2) Find documents that match a specific condition:
                </Typography>
                <CodeBox codeSnippet={`db.myCollection.find({ age: 30 })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    3) Find documents with projection (include or exclude specific fields):
                </Typography>
                <CodeBox codeSnippet={`db.myCollection.find({}, { name: 1, age: 1, _id: 0 })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    4) Find documents using query operators:
                </Typography>
                <CodeBox codeSnippet={`db.myCollection.find({ age: { $gte: 25, $lte: 40 } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    5) Find documents with nested conditions:
                </Typography>
                <CodeBox codeSnippet={`db.myCollection.find({ "address.city": "New York" })`}></CodeBox>
            </Box>

            <Box>
                <Typography variant='subtitle2'>
                    These are basic examples to demonstrate the usage of the find() method. MongoDB offers a wide range of query operators and expressions that allow you to construct complex queries to retrieve specific documents from a collection.

                    Remember to replace myCollection with the actual name of your collection in the database.
                </Typography>
            </Box>

            <Box>
                <Typography variant='h3'>
                    More Examples on find operation
                </Typography>
                <Typography variant="subtitle2">
                    Here are a few more examples of using the find() method in MongoDB with different query operators and scenarios:
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    1) Find documents matching multiple conditions using logical operators:
                </Typography>
                <CodeBox codeSnippet={`// Find documents where age is greater than or equal to 25 and city is "New York"
db.myCollection.find({ $and: [ { age: { $gte: 25 } }, { city: "New York" } ] })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    2) Find documents matching any of the conditions using the $or operator:
                </Typography>
                <CodeBox codeSnippet={`// Find documents where age is less than 30 or city is "London"
db.myCollection.find({ $or: [ { age: { $lt: 30 } }, { city: "London" } ] })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    3) Find documents with fields that exist using the $exists operator:
                </Typography>
                <CodeBox codeSnippet={`// Find documents where the "email" field exists
db.myCollection.find({ email: { $exists: true } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    4) Find documents with array values matching specific conditions using the $elemMatch operator:
                </Typography>
                <CodeBox codeSnippet={`// Find documents with an array field "scores" where at least one score is greater than 80
db.myCollection.find({ scores: { $elemMatch: { $gt: 80 } } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    6) Find documents with case-insensitive search using regular expressions and the $regex operator:
                </Typography>
                <CodeBox codeSnippet={`// Find documents where the "name" field starts with "j" (case-insensitive)
db.myCollection.find({ name: { $regex: /^j/i } })`}></CodeBox>
            </Box>

        </Box>
    );
};

export default MongoDBFind;
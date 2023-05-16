import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';



const list = [
    "db.collection: Specifies the collection you want to search in. Replace collection with the actual name of the collection in your MongoDB database.",
    "query: Specifies the criteria to select the documents to be updated. This parameter is similar to the query parameter in the find() method and determines which documents should be modified.",
    "update: Specifies the modifications to be made to the selected documents. This parameter can include update operators, such as $set, $inc, $push, and more, to specify the specific updates to apply to the fields.",
    "options: Specifies additional options for the update operation, such as upsert (to insert a document if no match is found) and multi (to update multiple documents that match the query)."
];


const MongoDBUpdate = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>MongoDB Update Operation</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, the update() method is used to modify existing documents in a collection. It allows you to update one or more fields within a document or replace the entire document.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                The basic syntax of the update() method in the MongoDB shell is as follows:
            </Typography>

            <CodeBox codeSnippet={`db.collection.update(query, update, options)`}></CodeBox>


            <Typography variant='subtitle2'>
                Here's an explanation of the parameters:
            </Typography>
            <Process list={list}></Process>

            <Typography variant='subtitle2'>
                Here are a few examples of using the update() method in MongoDB:
            </Typography>

            <Box mt={3}>
                <Typography variant='h4'>
                    1) Update a single field in a document:
                </Typography>
                <CodeBox codeSnippet={`// Update the "status" field of a document with _id "123" to "completed"
db.myCollection.update({ _id: "123" }, { $set: { status: "completed" } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    2) Update multiple fields in a document:
                </Typography>
                <CodeBox codeSnippet={`// Update the "name" and "age" fields of a document with _id "456"
db.myCollection.update({ _id: "456" }, { $set: { name: "Alice", age: 35 } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    3) Increment a numeric field in a document:
                </Typography>
                <CodeBox codeSnippet={`// Increment the "score" field of a document with _id "789" by 10
db.myCollection.update({ _id: "789" }, { $inc: { score: 10 } })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    4) Update multiple documents that match a query:
                </Typography>
                <CodeBox codeSnippet={`// Update the "status" field to "in progress" for all documents where the "category" field is "books"
db.myCollection.update({ category: "books" }, { $set: { status: "in progress" } }, { multi: true })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    5) Replace the entire document:
                </Typography>
                <CodeBox codeSnippet={`// Replace the document with _id "123" with a new document
db.myCollection.update({ _id: "123" }, { name: "New Name", age: 25 })
`}></CodeBox>
            </Box>

            <Box>
                <Typography variant='subtitle2'>
                    These are basic examples to demonstrate the usage of the update() method. MongoDB offers a wide range of update operators and options that allow you to perform various modifications and updates on your documents.

                    Remember to replace myCollection with the actual name of your collection in the database.
                </Typography>
            </Box>

        </Box>
    );
};

export default MongoDBUpdate;
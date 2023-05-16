import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';



const list = [
    "db.collection: Specifies the collection from which you want to delete documents. Replace collection with the actual name of the collection in your MongoDB database.",
    "query: Specifies the criteria to select the documents to be deleted. This parameter works similarly to the query parameter in the find() method and determines which documents should be removed.",
];


const MongoDBDelete = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>MongoDB Delete Operation</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, the delete() method is used to remove documents from a collection. It allows you to delete one or more documents that match a specified query.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                The basic syntax of the delete() method in the MongoDB shell is as follows:
            </Typography>

            <CodeBox codeSnippet={`db.collection.delete(query)`}></CodeBox>


            <Typography variant='subtitle2'>
                Here's an explanation of the parameter:
            </Typography>
            <Process list={list}></Process>

            <Typography variant='subtitle2'>
                Here are a few examples of using the delete() method in MongoDB:
            </Typography>

            <Box mt={3}>
                <Typography variant='h4'>
                    1) Delete a single document:
                </Typography>
                <CodeBox codeSnippet={`// Delete a document with _id "123"
db.myCollection.delete({ _id: "123" })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    2) Delete multiple documents that match a query:
                </Typography>
                <CodeBox codeSnippet={`// Delete all documents where the "status" field is "completed"
db.myCollection.delete({ status: "completed" })`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    3) Delete all documents in a collection:
                </Typography>
                <CodeBox codeSnippet={`// Delete all documents in the collection
db.myCollection.delete({})`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    4) Delete documents based on specific conditions:
                </Typography>
                <CodeBox codeSnippet={`// Delete documents where the "quantity" field is less than 10 and the "category" field is "outdated"
db.myCollection.delete({ $and: [ { quantity: { $lt: 10 } }, { category: "outdated" } ] })`}></CodeBox>
            </Box>

            <Box>
                <Typography variant='subtitle2'>
                    These examples demonstrate basic usage of the delete() method in MongoDB. It's important to note that the deletion process is irreversible, and the deleted documents cannot be recovered.

                    Remember to replace myCollection with the actual name of your collection in the database.
                </Typography>
            </Box>

        </Box>
    );
};

export default MongoDBDelete;
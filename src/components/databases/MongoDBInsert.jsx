import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';



const list = [
    "1) insertOne: Inserts a single document into a collection. It takes an object representing the document to be inserted and returns a result object containing information about the insertion.",
    "2) insertMany: Inserts multiple documents into a collection. It takes an array of objects representing the documents to be inserted and returns a result object containing information about the insertion.",
    "3) insert: This method is deprecated and should not be used in newer versions of MongoDB. It used to support inserting one or multiple documents, but it has been replaced by insertOne and insertMany.",
];

const codeTemplate = `// Assuming you have a MongoClient instance named 'client' and a database instance named 'db'

// Insert a single document using insertOne
const result = await db.collection('myCollection').insertOne({ name: 'John Doe', age: 30 });
console.log('Inserted document ID:', result.insertedId);

// Insert multiple documents using insertMany
const docs = [
  { name: 'Jane Smith', age: 25 },
  { name: 'Bob Johnson', age: 35 }
];
const result = await db.collection('myCollection').insertMany(docs);
console.log('Inserted document IDs:', result.insertedIds);`

const codeTemplate2 = `const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your-database-name';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Insert a single document
async function insertOneDocument() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection('your-collection-name');

    // Insert a single document
    const result = await collection.insertOne({ name: 'John Doe', age: 25 });

    console.log('Inserted document:', result.insertedId);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Insert multiple documents
async function insertManyDocuments() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection('your-collection-name');

    // Insert multiple documents
    const result = await collection.insertMany([
      { name: 'Jane Smith', age: 30 },
      { name: 'Bob Johnson', age: 40 },
    ]);

    console.log('Inserted documents:', result.insertedIds);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the functions to insert data
insertOneDocument();
insertManyDocuments();`


const MongoDBInsert = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>MongoDB Insert Operation</Typography>
            <Typography variant='subtitle2'>
                There are several methods available for inserting data in MongoDB:
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here are some key points to understand about MongoDB databases:
            </Typography>

            <Block list={list}></Block>
            <Typography variant='subtitle2'>
                Here's an example of using the insertOne and insertMany methods:
            </Typography>

            <CodeBox codeSnippet={codeTemplate}></CodeBox>

            <Typography variant='subtitle2'>
                In the code above, myCollection is the name of the collection where the documents will be inserted. The insertOne method inserts a single document, while insertMany inserts multiple documents specified in an array.

                After the insert operation, the result object contains information about the insertion, such as the inserted document ID(s). You can access this information to perform further operations or to verify the success of the insertion.
            </Typography>

            <Box mt={3}>
                <Typography variant='subtitle2'>
                    To insert data into MongoDB, you can use the insertOne or insertMany methods provided by the MongoDB Node.js driver. Here's an example of how you can use these methods:


                </Typography>
                <Typography variant='subtitle2'>
                    First, make sure you have the MongoDB Node.js driver installed by running npm install mongodb.
                </Typography>

                <CodeBox codeSnippet={codeTemplate2}></CodeBox>

                <Typography mt={1} variant='subtitle2'>
                    In the code above, you need to replace 'your-database-name' with the name of your MongoDB database and 'your-collection-name' with the name of your collection.

                    The insertOne method is used to insert a single document, and it returns an object containing the ID of the inserted document. The insertMany method is used to insert multiple documents, and it returns an object containing the IDs of the inserted documents.

                    Make sure to handle errors and close the MongoDB connection after inserting the data.

                    Note: This code assumes you are using MongoDB with a local server. Adjust the url variable if you are using a remote MongoDB server or if your server URL is different.
                </Typography>
            </Box>

        </Box>
    );
};

export default MongoDBInsert;
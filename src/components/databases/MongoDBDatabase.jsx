import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';



const list = [
    "1) Data Organization: MongoDB databases allow you to organize and store data in a structured manner. You can create multiple databases within a MongoDB server, and each database can contain collections of documents.",
    "2) Collections: Collections are the equivalent of tables in relational databases. Within a database, you can create one or more collections to group related documents together. Collections do not enforce a specific schema, so documents within a collection can have varying structures.",
    "3) Document Storage: MongoDB databases store data in the form of documents. A document is a JSON-like data structure that represents a single record or entity. Documents within a collection can have different fields and data types, allowing for flexibility in the data model.",
    "4) Namespaces: In MongoDB, a namespace refers to the combination of a database name and a collection name. Each document within a database is uniquely identified by its namespace, which follows the format 'database.collection'.",
];

const list2 = [
    "1) Flexibility and Schema Agility: MongoDB's document-oriented nature allows for flexible and dynamic schemas. It doesn't enforce a fixed schema, which means you can easily evolve your data model over time, accommodating changing requirements without the need for complex migrations.",
    "2) Scalability and Performance: MongoDB is designed to handle large amounts of data and high traffic loads. It supports horizontal scaling through sharding, allowing you to distribute data across multiple servers and handle increased workloads seamlessly. This scalability enables organizations to scale their applications as they grow.",
    "3) Fast and Efficient Development: MongoDB's flexible data model and JSON-like documents make it easier for developers to work with data. It aligns well with modern programming languages and frameworks, allowing for faster development cycles and more agile development processes.",
    "4) High Availability and Fault Tolerance: MongoDB provides built-in replication through replica sets. Replica sets ensure data durability, automatic failover, and high availability. If a primary node fails, a secondary node can automatically take over, minimizing downtime and ensuring continuous availability of your application.",
    "5) Rich Querying and Indexing: MongoDB offers a powerful query language with support for a wide range of operations, including filtering, sorting, and aggregation. It also provides indexing capabilities to optimize query performance. MongoDB supports various types of indexes, making it efficient in handling different types of queries."
]

const list3 = [
    "1) Content Management Systems: MongoDB's flexible schema and ability to handle unstructured data make it suitable for content management systems where content types and structures can vary.",
    "2) Real-Time Analytics: MongoDB's fast read and write performance, as well as its ability to handle high data volumes, make it suitable for real-time analytics applications where data is constantly updated and analyzed.",
    "3) Social Networks and User Profiles: MongoDB's document-based model allows for easy storage and retrieval of user profiles and social network data, including user-generated content, relationships, and activity streams.",
    "4) Internet of Things (IoT): MongoDB's scalability and ability to handle high volumes of data make it suitable for IoT applications where large amounts of sensor data and device information need to be stored and processed.",
]

const codeTemplate = `{
    "_id": ObjectId("61dc9f2899d8ce331f01be92"),
    "name": "T-shirt",
    "price": 19.99,
    "category": "Clothing",
    "inventory": 100
}`

const codeTemplate2 = `{
    "_id": ObjectId("61dc9f2899d8ce331f01be93"),
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
}`

const codeTemplate3 = `{
    "_id": ObjectId("61dc9f2899d8ce331f01be94"),
    "user_id": ObjectId("61dc9f2899d8ce331f01be93"),
    "products": [
      {
        "product_id": ObjectId("61dc9f2899d8ce331f01be92"),
        "quantity": 2
      }
    ],
    "total_amount": 39.98,
    "status": "pending"
}`

const MongoDBDatabase = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is MongoDB Database?</Typography>
            <Typography variant='subtitle2'>
                In MongoDB, a database is a container that holds a set of related data. It is a logical entity where you can store and organize collections of documents. In simpler terms, a database in MongoDB is similar to a database in traditional relational database systems.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here are some key points to understand about MongoDB databases:
            </Typography>

            <Block list={list}></Block>

            <Box mt={3}>
                <Typography variant='h3'>Example of MongoDB database?</Typography>
                <Typography variant='subtitle2'>
                    Here's an example of a MongoDB database structure and how it could be used for a fictional e-commerce application:


                </Typography>
                <Typography variant='subtitle2'>
                    Database Name: <bold>ecommerce</bold>
                </Typography>

                <Typography mt={2} variant='h5'>
                    Collections:
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    1) Collection Name: products
                </Typography>
                <CodeBox codeSnippet={codeTemplate}></CodeBox>
                <Typography variant='subtitle2'>
                    Description: The products collection stores information about various products available in the e-commerce store. Each document represents a single product and contains fields like name, price, category, and inventory (quantity available).
                </Typography>
            </Box>


            <Box mt={3}>
                <Typography variant='h4'>
                    2) Collection Name: users
                </Typography>
                <CodeBox codeSnippet={codeTemplate2}></CodeBox>
                <Typography variant='subtitle2'>
                    Description: The users collection stores user data, including their name, email, and password (stored securely as a hashed value). This collection is used for user registration, authentication, and profile management.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h4'>
                    3) Collection Name: orders
                </Typography>
                <CodeBox codeSnippet={codeTemplate3}></CodeBox>
                <Typography variant='subtitle2'>
                    Description: The orders collection tracks orders placed by users. Each document represents a single order and includes the user_id referencing the user who placed the order, an array of products with their product_id and quantity, the total_amount of the order, and the status of the order (e.g., pending, completed, canceled).
                </Typography>
            </Box>

        </Box>
    );
};

export default MongoDBDatabase;
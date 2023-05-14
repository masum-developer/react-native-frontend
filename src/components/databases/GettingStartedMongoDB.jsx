import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';



const list = [
    "1) Document-Oriented: MongoDB stores data in flexible, self-contained documents. A document is a set of key-value pairs, similar to a JSON object, that represents a single instance of data. Documents within a collection can have varying structures, allowing for schema flexibility.",
    "2) NoSQL and Schema-Free: MongoDB is part of the NoSQL movement, which means it diverges from the traditional relational database model. It doesn't enforce a fixed schema, allowing you to store different types of data within the same collection. This flexibility makes it suitable for agile development and handling evolving data structures.",
    "3) Scalable and High Performance: MongoDB is designed to scale horizontally across multiple servers, enabling seamless distribution of data and workload. It supports automatic sharding, which divides data across multiple machines, providing high availability and scalability for large-scale applications.",
    "4) Rich Query Language: MongoDB offers a powerful and expressive query language, allowing you to retrieve, filter, and manipulate data using a wide range of operators and functions. It supports complex queries, text search, geospatial queries, and more.",
    "5) Indexing and Aggregation: MongoDB provides indexing capabilities to improve query performance. It supports various types of indexes, including single-field, compound, text, geospatial, and hashed indexes. Additionally, MongoDB offers an aggregation framework that enables advanced data processing and analysis, including grouping, filtering, and transformation operations.",
    "6) Replication and High Availability: MongoDB supports replica sets, which are self-healing clusters of MongoDB nodes. Replica sets provide redundancy and automatic failover, ensuring high availability and data durability. They also enable read scalability by allowing multiple secondary nodes to handle read operations.",
    "7) Community and Ecosystem: MongoDB has a vibrant community and a wide range of tools, libraries, and frameworks built around it. It provides official drivers for various programming languages, including JavaScript, Python, Java, and more, making it accessible and easy to integrate with different application stacks."
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

const GettingStartedMongoDB = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is MongoDB?</Typography>
            <Typography variant='subtitle2'>
                MongoDB is a popular open-source, NoSQL database management system that provides high performance, scalability, and flexibility for handling structured, semi-structured, and unstructured data. It belongs to the document-oriented database category, which means it stores data in flexible, JSON-like documents called BSON (Binary JSON) instead of traditional rows and columns.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here are some key features and concepts of MongoDB:
            </Typography>

            <Block list={list}></Block>

            <Box mt={3}>
                <Typography variant='h3'>Why MongoDB is used?</Typography>
                <Typography variant='subtitle2'>
                    MongoDB is used for several reasons, and its popularity stems from its unique features and capabilities. Here are some common reasons why MongoDB is used:


                </Typography>
                <Block list={list2}></Block>
                <Typography variant='subtitle2'>
                    Overall, MongoDB is used when flexibility, scalability, developer productivity, and high availability are important factors for an application. Its document-oriented approach, scalability, and rich feature set make it a popular choice for modern application development.
                </Typography>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>Where MongoDB is used?</Typography>
                <Typography variant='subtitle2'>
                MongoDB is used in a wide range of applications across various industries. Some common use cases where MongoDB is utilized include:
                </Typography>
                <Block list={list3}></Block>
            </Box>

        </Box>
    );
};

export default GettingStartedMongoDB;
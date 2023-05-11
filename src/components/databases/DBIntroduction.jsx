import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CodeBox from '../global/CodeBox';
import Block from '../global/Block';
import Process from '../EnvironmentSetup/Process';

const list = [
    "1) Relational databases: Relational databases are the most common type of database and are used to store structured data in tables. Relational databases use SQL to manipulate data, and they are used in a wide range of applications, including web applications, business systems, and scientific research.",
    "2) NoSQL databases: NoSQL databases are designed to handle unstructured or semi-structured data, such as documents, graphs, or key-value pairs. NoSQL databases do not use SQL, and instead use specialized query languages or APIs to manipulate data.",
    "3) Object-oriented databases: Object-oriented databases store data as objects, rather than in tables. They are commonly used in object-oriented programming languages, such as Java or Python.",
    "4) Cloud databases: Cloud databases are hosted on cloud infrastructure and can be accessed from anywhere with an internet connection. Cloud databases can be easily scaled up or down as needed, making them a popular choice for web applications and other cloud-based systems."
];

const list2 = [
    "MySQL: MySQL is an open-source relational database management system (RDBMS) that uses SQL to manage data. It is widely used in web applications and is known for its ease of use and scalability.",
    "Oracle: Oracle is a powerful, enterprise-grade RDBMS that is widely used in large organizations. It offers advanced features for managing data, such as data warehousing, performance tuning, and high availability.",
    "SQL Server: SQL Server is a relational database management system developed by Microsoft. It is widely used in Windows-based environments and offers features such as data warehousing, business intelligence, and data mining.",
    "PostgreSQL: PostgreSQL is an open-source relational database management system that is known for its scalability and robustness. It is often used in enterprise applications that require high performance and reliability.",
    "MongoDB: MongoDB is a NoSQL document-oriented database that is designed for flexibility and scalability. It is often used in big data and real-time web applications.",
    "Cassandra: Cassandra is a NoSQL distributed database that is designed for high scalability and fault tolerance. It is often used in applications that require large-scale data management, such as social media platforms and IoT (Internet of Things) devices.",
    "Redis: Redis is an in-memory data store that is used for caching, real-time messaging, and other applications that require fast access to data. It is often used in web applications and is known for its speed and simplicity."
]

const DBIntroduction = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>What is Database?</Typography>
            <Typography variant='subtitle2'>
                A database is an organized collection of structured data that is stored and accessed electronically. Databases are used to store, retrieve, and manage large amounts of data efficiently and effectively. They are a fundamental component of modern computer systems and are used in a wide range of applications, from simple personal data management to complex enterprise applications.
            </Typography>


            <Typography mt={2} variant='subtitle2'>
                Databases are typically organized into tables, which contain rows of data and columns that define the structure of the data. Data in a database can be easily queried and manipulated using specialized languages, such as SQL (Structured Query Language).
                Some common types of databases include:
            </Typography>

            <Process list={list}></Process>

            <Typography mt={1} variant='subtitle2'>
                Overall, databases are a crucial component of modern computer systems, and are used to store and manage large amounts of data efficiently and effectively.
            </Typography>

            <Box mt={2}>
                <Typography variant='h3'>Why database is used?</Typography>

                <Typography variant='subtitle2'>Databases are used for many reasons in modern computer systems:</Typography>

                <Process list={list2}></Process>

                <Typography mt={1} variant='subtitle2'>
                    Overall, databases are used to store, retrieve, and manage data efficiently and effectively. They are a crucial component of modern computer systems, and are used in a wide range of applications to provide reliable data storage and retrieval.
                </Typography>
            </Box>

            <Box mt={2}>
                <Typography variant='h3'>Most Uses Databases:</Typography>

                <Typography variant='subtitle2'>There are many databases available, ranging from simple desktop databases to large-scale enterprise databases. Here are some of the most commonly used databases:</Typography>

                <Process list={list2}></Process>

                <Typography mt={1} variant='subtitle2'>
                    These are just a few examples of the many databases available. The choice of database depends on the specific needs of the application, including the size and complexity of the data, performance requirements, and scalability needs.
                </Typography>
            </Box>
        </Box>
    );
};

export default DBIntroduction;
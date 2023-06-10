import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';



const list = [
    "$eq: Matches values that are equal to a specified value.",
    "$ne: Matches values that are not equal to a specified value.",
    "$gt: Matches values that are greater than a specified value.",
    "$gte: Matches values that are greater than or equal to a specified value.",
    "$lt: Matches values that are less than a specified value.",
    "$lte: Matches values that are less than or equal to a specified value.",
    "$in: Matches any of the values specified in an array.",
];

const list2 = [
    "$and: Joins query clauses with a logical AND and returns documents that match all the conditions.",
    "$or: Joins query clauses with a logical OR and returns documents that match any of the conditions.",
    "$not: Inverts the effect of a query expression and returns documents that do not match the query expression."
]

const list3 = [
    "$regex: Matches documents based on a specified regular expression.",
    "$text: Performs full-text search on a text index.",
    "$mod: Performs a modulo operation on the value of a field."
]


const QueryOperator = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>MongoDB Query Operator</Typography>
            <Typography variant='subtitle2'>
                MongoDB provides a wide range of query operators to perform various operations on documents in a collection. Here are some commonly used query operators in MongoDB:
            </Typography>

            <Typography mt={2} variant='subtitle1'>
                Comparison Operator
            </Typography>

            <Process list={list}></Process>


            <Box mt={3}>
                <Typography mt={2} variant='subtitle1'>
                    Logical Operator
                </Typography>

                <Process list={list2}></Process>
            </Box>


            <Box mt={3}>
                <Typography mt={2} variant='subtitle1'>
                Evaluation Operator
                </Typography>

                <Process list={list3}></Process>
            </Box>
        </Box>
    );
};

export default QueryOperator;
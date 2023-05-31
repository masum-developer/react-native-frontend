import { Box, Typography } from '@mui/material';
import React from 'react';

const UserStoryComp = ({ userStory }) => {
    const { title, assignedTo, description, priority, risk, effort, startDate, endDate } = userStory;
    return (
        <Box mt={2} sx={{ border: '1px solid rgba(65,65,65,.15)', padding: "10px 20px", borderRadius: '15px' }}>
            <Typography variant='subtitle2'><b>Title:</b> {title}</Typography>
            <Typography variant='subtitle2'><b>Assigned To:</b> {assignedTo}</Typography>
            <Typography variant='subtitle2'><b>Description: </b> {description?.title} {priority}</Typography>
            <Box className="all_benefits">
                {
                    description?.list?.map((benefit, i) => <ul key={i}>
                        <li>{benefit}</li>
                    </ul>)
                }
            </Box>
            <Typography variant='subtitle2'><b>Priority:</b> {priority}</Typography>
            <Typography variant='subtitle2'><b>Eisk:</b> {risk}</Typography>
            <Typography variant='subtitle2'><b>Effort:</b> {effort}</Typography>
            <Typography variant='subtitle2'><b>Start Date:</b> {startDate}</Typography>
            <Typography variant='subtitle2'><b>End Date:</b> {endDate}</Typography>
        </Box>
    );
};

export default UserStoryComp;
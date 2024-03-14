import { Box, Typography } from "@mui/material";
import React from "react";

const ClassThree = () => {
  return (
    <Box>
      <Typography variant="h3">
        Class 3: TS4U app that we are going to build
      </Typography>
      <Typography variant="h4" mt={2} fontWeight="fontWeightBold">
        Introduction to TS4U App
      </Typography>
      <Typography mt={2}>
        Throughout this course, well be building this TS4U app from scratch
        using React Native. Here is a brief overview of the key features:
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>User Authentication: </span>
        Users can securely sign up and log in to access their personalized
        schedules.
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Task Management: </span>
        Users can create, edit, and delete tasks, categorize them, and set
        reminders.
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Calendar View: </span>
        Tasks will be displayed in a calendar view, allowing users to visualize
        their schedule easily.
      </Typography>
      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Notifications: </span>
        Users will receive notifications for upcoming tasks and reminders.
      </Typography>

      <Typography mt={1}>
        <span style={{ fontWeight: "bold" }}>Data Persistence: </span>
        User data will be stored securely, ensuring accessibility across
        sessions.
      </Typography>
    </Box>
  );
};

export default ClassThree;

import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';


const agileList = [
    "Iterative Development: Instead of following a linear, sequential process, Agile promotes breaking down the development cycle into smaller iterations or sprints. Each iteration typically lasts 1-4 weeks and results in a working, potentially shippable product increment.",

    "User Stories: Agile teams use user stories to capture requirements from the perspective of end-users or customers. User stories describe a specific feature or functionality and serve as the basis for prioritization and development.",

    "Cross-functional Teams: Agile teams are typically self-organizing and cross-functional, meaning they include members with different skills (e.g., developers, testers, designers) who collaborate closely throughout the development process.",

    "Continuous Planning and Adaptation: Agile projects embrace change and regularly reassess priorities and requirements. The team continually plans and adapts based on feedback, learning, and evolving customer needs.",

    "Test-Driven Development: Agile practices often emphasize automated testing, with a focus on creating tests before writing the corresponding code. This approach ensures better code quality and facilitates easier refactoring and maintenance.",

    "Continuous Integration and Delivery: Agile promotes frequent integration of code changes and continuous delivery of working software increments. This enables rapid feedback, early bug detection, and the ability to release valuable features to customers more frequently.",

    "Feedback and Collaboration: Agile methodologies encourage regular interaction and collaboration with customers, stakeholders, and end-users. Their feedback helps refine and validate requirements and ensures that the development efforts align with the intended goals."
]

const phaseList = [
    "Product Backlog: This phase involves creating and maintaining a prioritized list of user stories or requirements, known as the product backlog. The product backlog represents the overall scope of the project and serves as a central repository for all potential features and enhancements.",

    "Sprint Planning: At the start of each sprint, the development team selects a subset of user stories from the product backlog to be included in the upcoming iteration. During the sprint planning meeting, the team discusses and estimates the effort required to complete each user story and creates a sprint backlog—a list of tasks or sub-tasks needed to accomplish those user stories.",

    "Development: The development phase involves coding the features and functionalities identified in the sprint backlog. Developers work on the assigned tasks, collaborating with other team members and following the coding standards and best practices.",

    "Daily Stand-up: The daily stand-up, or daily scrum, is a brief meeting held by the team to synchronize and plan their work. Each team member shares their progress, any challenges or blockers they are facing, and their plans for the day. The goal is to maintain transparency, address any issues promptly, and ensure alignment within the team.",

    "Continuous Integration and Testing: Agile emphasizes continuous integration, where developers frequently integrate their code changes into a shared repository. This allows for early detection of integration issues. Alongside development, testing activities are conducted throughout the sprint, including unit testing, integration testing, and automated testing, to ensure the quality and functionality of the software.",

    "Sprint Retrospective: Following the sprint review, a sprint retrospective takes place. The team reflects on their processes, identifies areas of improvement, and discusses potential actions to enhance productivity, teamwork, and quality. This feedback is used to make adjustments and improvements in the subsequent sprints."
]

const phaseListTools = [
    "Backlog or To-Do: This phase represents the initial stage where all the tasks, user stories, or requirements are captured and organized. It serves as a backlog or to-do list for the project, containing all the items that need to be completed.",

    'In Progress or Active: In this phase, the tasks that are currently being worked on by the development team are moved from the backlog to the "In Progress" column. It indicates that the tasks are actively being worked on or are in progress.',

    "Testing or Quality Assurance (QA): Once the development phase is complete, the tasks or features move to the testing or QA phase. Here, the assigned testers perform various tests, including functional testing, integration testing, regression testing, and other quality assurance activities, to ensure that the software meets the required quality standards.",

    "Review or Approval: This phase represents a stage where completed tasks or features undergo review or approval by relevant stakeholders, such as product owners or clients. It allows for feedback, validation, and confirmation of the completed work before proceeding to the next phase.",

    "Deployment or Release: Once the completed tasks have been reviewed and approved, they move to the deployment or release phase. This phase involves preparing the software for deployment to the production environment or making it available to end-users.",

    "Done or Completed: The final phase signifies that the tasks have been successfully completed, deployed, or released. It indicates that the work has been finished, and the associated deliverables or features are ready for use by the intended users."
];

const team = [
    "Product Owner (PO): The Product Owner represents the voice of the customer or stakeholders. They are responsible for defining the product vision, prioritizing the product backlog, and ensuring that the team delivers value to the customers. The PO works closely with stakeholders to gather requirements, provide clarifications, and make informed decisions about the product's direction.",

    "Scrum Master: In Scrum methodology, the Scrum Master is responsible for facilitating the Agile processes and ensuring the team follows Agile principles and practices. They help remove any impediments or obstacles that may hinder the team's progress and foster a productive and collaborative work environment. The Scrum Master also guides the team in self-organizing and improving their Agile practices.",

    "Development Team: The Development Team comprises individuals with technical expertise and skills required to develop the software product. It typically includes software developers, engineers, programmers, testers, designers, and other relevant roles. The Development Team collaborates closely, taking ownership of tasks, and collectively working towards delivering the product increment.",

    "Agile Coach (optional): In some Agile teams, an Agile Coach may be present to provide guidance and support in adopting Agile practices and mindset. They help the team and the organization understand and implement Agile principles effectively. The Agile Coach assists in overcoming challenges, improving processes, and promoting continuous learning and improvement."
]

const AgileProcess = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageComp image="/agile/agile.png"></ImageComp>
            </Box>

            <Box mt={2}>
                <Typography variant='h3'>What is Agile in Software Development?</Typography>
                <Typography variant='subtitle2'>In the context of software development, Agile is an approach that focuses on iterative and incremental development, allowing teams to respond to changing requirements and deliver value to customers more effectively.  <br /> Agile methodologies aim to increase collaboration, flexibility, and transparency throughout the software development lifecycle.</Typography>

                <Typography variant='subtitle2'>Here are some key characteristics and practices of Agile in software development:</Typography>

                <Box mt={2}>
                    <Process list={agileList}></Process>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageComp image="/agile/agile_process.png"></ImageComp>
            </Box>

            <Box mt={2}>
                <Typography variant='h3'>The Phase of Software Development in Agile Methodology</Typography>
                <Typography variant='subtitle2'>In Agile software development, the phases are typically organized into iterations or sprints, with each iteration encompassing a subset of the overall development phases. <br /> The specific names and durations of these phases may vary depending on the Agile methodology being followed, such as Scrum or Kanban. Here are the common phases in Agile software development:</Typography>

                <Typography variant='subtitle2'>Here are some key phases and practices of Agile in software development:</Typography>

                <Box mt={2}>
                    <Process list={phaseList}></Process>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageComp image="/agile/project_management.png"></ImageComp>
            </Box>


            <Box mt={2}>
                <Typography variant='h3'>The Phase of Software Development in Project Management Tool.</Typography>
                <Typography variant='subtitle2'>In project management tools used in software development, the phases are often represented as different stages or workflows that help track and manage the progress of tasks and activities. <br />  While the specific names and configurations of these phases may vary across different project management tools, here are </Typography>

                <Typography variant='subtitle2'>Here are some common phases typically found in such tools:

                </Typography>

                <Box mt={2}>
                    <Process list={phaseListTools}></Process>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageComp image="/agile/team.png"></ImageComp>
            </Box>

            <Box mt={2}>
                <Typography variant='h3'>Agile Team Structure.</Typography>
                <Typography variant='subtitle2'>In an Agile team, each team member plays a specific role, bringing their unique skills and expertise to contribute to the project's success. </Typography>

                <Typography variant='subtitle2'>Here are some common roles found in Agile teams:

                </Typography>

                <Box mt={2}>
                    <Process list={team}></Process>
                </Box>
            </Box>
        </Box>
    );
};

export default AgileProcess;
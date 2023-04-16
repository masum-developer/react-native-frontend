import { Box, Typography } from '@mui/material';
import React from 'react';
import StepComp from './StepComp';
import ImageComp from './ImageComp';
import Process from './Process';
import Block from '../global/Block';

const list1 = [
    "Go to google and search 'git download'.",
    "Click on the first link (Offical website) that is red marked in the screenshot.",
]

const list2 = [
    "After going to official website you'll be able download Git",
    "You'll have to choose either Windows, Linux or Mac depending on your operating system. (We'll follow for Windows)",
    "Click on windows."
];

const list3 = [
    "After clicking on windows button a new website will be opened",
    "If your windows is 32 bit you'll have to choose '32-bit option' and if you have 64 bit than you can choose '64-bit option'."
]
const list3_2 = [
    "After clicking the x64/x32 button VS Code will start downloading automatically.",
]

const list4 = [
    "You'll see a downloaded Git file with '.exe' extension",
];

const list5 = [
    "Click on the downloaded file to start installing",
    "Click on 'Next' button to continue",
];

const list6 = [
    "You can browse any directory where you want to install or choose the default directory.",
    "Click on 'Next' button to continue",
]
const list7 = [
    "You can select other options (It's Better to keep default option) list",
    "Click on 'Next' button to continue",
];

const list8 = [
    "Choose select start menu folder",
    "Click on 'Next' button to continue",
];

const list9 = [
    "Choose the default editor given by the suggestions.",
    "Click on 'Next' button to continue",
];

const list10 = [
    "Select 'Let Git decide'",
    "Click on 'Install' button to continue",
];

const list11 = [
    "Choose second option 'Git from the command line also from 3rd-party software'",
    "Click on 'Next' button to continue",
];

const list12 = [
    "Choose 'Use budled OpenSSH'",
    "Click on 'Next' button to continue",
];

const list13 = [
    "Choose 'Use openSSL Library'",
    "Click on 'Next' button to continue",
];

const list14 = [
    "Choose 'Checkout Windows-style, commit Unix-style line endings' (given by-default)",
    "Click on 'Next' button to continue",
];

const list15 = [
    "Choose 'Use MinTTY (the default terminal of MSYS2)'",
    "Click on 'Next' button to continue",
];

const list16 = [
    "Choose 'Default (fast-forward or merge)'",
    "Click on 'Next' button to continue",
];

const list17 = [
    "Choose 'Git Credential Manager'",
    "Click on 'Next' button to continue",
];

const list18 = [
    "After that It's getting installed in the machine",
];

const list19 = [
    "Click on 'Finish' button to finish.",
];

const list20 = [
    "Check Git version by 'git -v' command",
    "Happy Installation! 🙂🙂"
];

const whyList = [
    "Collaboration: Git allows multiple developers to work on the same codebase simultaneously, collaborate on changes, and merge those changes back into the main codebase.",
    "Version control: Git tracks changes made to the codebase over time, including who made the changes and when. This allows developers to roll back to previous versions of the code and keep track of changes made by different team members.",
    "Code management: Git provides tools for managing code, including branching and merging, pull requests, code reviews, and issue tracking.",
    "Backup: Git stores a complete copy of the codebase on each developer's local machine, as well as on a central repository. This provides a backup in case of hardware failure or other disasters.",
    "Flexibility: Git can be used with a variety of programming languages and development workflows, making it a flexible tool for software development."
]

const GitCodeComp = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>What is Git</Typography>
            <Typography variant='subtitle2'>Git is a distributed version control system used for tracking changes in source code during software development. It was created by Linus Torvalds in 2005 and has since become one of the most widely used version control systems in the world. Git provides a way for software developers to collaborate on code, manage different versions of a project, and track changes over time. It allows multiple developers to work on the same codebase simultaneously and provides tools for merging changes, resolving conflicts, and managing branches.</Typography>

            <Box mt={7}>
            <Typography variant='h3'>Why Git is used?</Typography>
            <Block list={whyList}></Block>
            </Box>
            <Box mt={7}>
                <Typography variant='h3'>Step-By-Step Installation Guide for Git</Typography>
                <StepComp stepText="Step 1:"></StepComp>
                <ImageComp image={"/git/Screenshot_20.png"} imageTitle={"Screenshot 1: Search on google"}></ImageComp>
                <Process list={list1}></Process>
            </Box>


            <Box mt={7}>
                <StepComp stepText="Step 2:"></StepComp>
                <ImageComp image={"/git/Screenshot_21.png"} imageTitle={"Screenshot 2: Download for windows"}></ImageComp>
                <Process list={list2}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 3:"></StepComp>
                <ImageComp image={"/git/Screenshot_1.png"} imageTitle={"Screenshot 3: Downloading VS Code"}></ImageComp>
                <Process list={list3}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 4:"></StepComp>
                <ImageComp image={"/git/Screenshot_2.png"} imageTitle={"Screenshot 4: Downloaded VS Code"}></ImageComp>
                <Process list={list3_2}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 5:"></StepComp>
                <ImageComp image={"/git/Screenshot_5.png"} imageTitle={"Screenshot 5: Clicking the software"}></ImageComp>
                <Process list={list5}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 6:"></StepComp>
                <ImageComp image={"/git/Screenshot_6.png"} imageTitle={"Screenshot 6: Agree with the agreement"}></ImageComp>
                <Process list={list6}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 7:"></StepComp>
                <ImageComp image={"/git/Screenshot_7.png"} imageTitle={"Screenshot 7: Browse directory"}></ImageComp>
                <Process list={list7}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 8:"></StepComp>
                <ImageComp image={"/git/Screenshot_8.png"} imageTitle={"Screenshot 8: Select start menu folder"}></ImageComp>
                <Process list={list8}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 9:"></StepComp>
                <ImageComp image={"/git/Screenshot_9.png"} imageTitle={"Screenshot 9: Select additional tasks"}></ImageComp>
                <Process list={list9}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 10:"></StepComp>
                <ImageComp image={"/git/Screenshot_10.png"} imageTitle={"Screenshot 10: Ready to install"}></ImageComp>
                <Process list={list10}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 11:"></StepComp>
                <ImageComp image={"/git/Screenshot_11.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list11}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 12:"></StepComp>
                <ImageComp image={"/git/Screenshot_12.png"} imageTitle={"Screenshot 12: Installation Finished"}></ImageComp>
                <Process list={list12}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 13:"></StepComp>
                <ImageComp image={"/git/Screenshot_13.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list1}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 14:"></StepComp>
                <ImageComp image={"/git/Screenshot_14.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list14}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 15:"></StepComp>
                <ImageComp image={"/git/Screenshot_15.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list15}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 16:"></StepComp>
                <ImageComp image={"/git/Screenshot_16.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list16}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 17:"></StepComp>
                <ImageComp image={"/git/Screenshot_17.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list17}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 18:"></StepComp>
                <ImageComp image={"/git/Screenshot_18.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list18}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 19:"></StepComp>
                <ImageComp image={"/git/Screenshot_19.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list19}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 20:"></StepComp>
                <ImageComp image={"/git/Screenshot_23.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list20}></Process>
            </Box>
        </Box>
    );
};

export default GitCodeComp;
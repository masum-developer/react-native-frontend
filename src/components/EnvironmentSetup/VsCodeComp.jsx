import { Box, Typography } from '@mui/material';
import React from 'react';
import StepComp from './StepComp';
import ImageComp from './ImageComp';
import Process from './Process';

const list1 = [
    "Go to google and search 'Vscode download'.",
    "Click on the first link (Offical website) that is red marked in the screenshot.",
]

const list2 = [
    "After going to official website you'll be able download VS Code",
    "You'll have to choose either Windows, Linux or Mac depending on your operating system. (We'll follow for Windows)",
    "Choose User Installer x64/x86 (red marked).",
    "If your windows is 32 bit you'll have to choose x86 and if you have 64 bit than you can choose x64.",
];

const list3 = [
    "After clicking the x64/x86 button VS Code will start downloading automatically.",
    "It'll be completed depending on your internet speed."
]

const list4 = [
    "You'll see a downloaded VS Code file with '.exe' extension",
];

const list5 = [
    "Click on the downloaded file to start installing",
    "Click on 'Run' button to continue",
];

const list6 = [
    "Select 'I accept the agreement'",
    "Click on 'Next' button to continue",
]
const list7 = [
    "You can browse any directory where you want to install or choose the default directory.",
    "Click on 'Next' button to continue",
];

const list8 = [
    "Choose select start menu folder",
    "Click on 'Next' button to continue",
];

const list9 = [
    "You can select other options (It's Better to keep default option)",
    "Click on 'Next' button to continue",
];

const list10 = [
    "Click on 'Install' button to continue",
];

const list11 = [
    "It's getting installed on the machine.",
];

const list12 = [
    "Installation has finished.",
    "Click on 'Finish' to finish",
];

const list13 = [
    "Happy Coding! 🙂🙂",
];

const VsCodeComp = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>Step-By-Step Installation Guide for VS Code</Typography>
            <StepComp stepText="Step 1:"></StepComp>
            <ImageComp image={"/vscode/Screenshot_3.png"} imageTitle={"Screenshot 1: Search on google"}></ImageComp>
            <Process list={list1}></Process>

            <Box mt={7}>
                <StepComp stepText="Step 2:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_1.png"} imageTitle={"Screenshot 2: Download for windows"}></ImageComp>
                <Process list={list2}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 3:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_2.png"} imageTitle={"Screenshot 3: Downloading VS Code"}></ImageComp>
                <Process list={list3}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 4:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_4.png"} imageTitle={"Screenshot 4: Downloaded VS Code"}></ImageComp>
                <Process list={list4}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 5:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_5.png"} imageTitle={"Screenshot 5: Clicking the software"}></ImageComp>
                <Process list={list5}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 6:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_6.png"} imageTitle={"Screenshot 6: Agree with the agreement"}></ImageComp>
                <Process list={list6}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 7:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_7.png"} imageTitle={"Screenshot 7: Browse directory"}></ImageComp>
                <Process list={list7}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 8:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_8.png"} imageTitle={"Screenshot 8: Select start menu folder"}></ImageComp>
                <Process list={list8}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 9:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_9.png"} imageTitle={"Screenshot 9: Select additional tasks"}></ImageComp>
                <Process list={list9}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 10:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_10.png"} imageTitle={"Screenshot 10: Ready to install"}></ImageComp>
                <Process list={list10}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 11:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_11.png"} imageTitle={"Screenshot 11: Installing"}></ImageComp>
                <Process list={list11}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 12:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_12.png"} imageTitle={"Screenshot 12: Installation Finished"}></ImageComp>
                <Process list={list12}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 13:"></StepComp>
                <ImageComp image={"/vscode/Screenshot_13.png"} imageTitle={"Screenshot 13: Happy Coding"}></ImageComp>
                <Process list={list13}></Process>
            </Box>
        </Box>
    );
};

export default VsCodeComp;
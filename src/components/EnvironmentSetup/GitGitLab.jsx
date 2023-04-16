import { Box, Typography } from '@mui/material';
import React from 'react';
import Block from '../global/Block';
import StepComp from './StepComp';
import ImageComp from './ImageComp';
import Process from './Process';

const whyList = [
    "Collaboration: Git allows multiple developers to work on the same codebase simultaneously, collaborate on changes, and merge those changes back into the main codebase.",
    "Version control: Git tracks changes made to the codebase over time, including who made the changes and when. This allows developers to roll back to previous versions of the code and keep track of changes made by different team members.",
    "Code management: Git provides tools for managing code, including branching and merging, pull requests, code reviews, and issue tracking.",
    "Backup: Git stores a complete copy of the codebase on each developer's local machine, as well as on a central repository. This provides a backup in case of hardware failure or other disasters.",
    "Flexibility: Git can be used with a variety of programming languages and development workflows, making it a flexible tool for software development."
];

const gitLab = [
    "Git repository management: GitLab provides powerful tools for managing Git repositories, including code access controls, branch management, and merge requests.",
    "Code reviews: GitLab offers a range of tools for code reviews, including inline commenting, code comparisons, and merge request approvals.",
    "Issue tracking: GitLab includes an issue tracking system for managing bugs, feature requests, and other issues.",
    "Continuous integration: GitLab provides built-in continuous integration and continuous deployment (CI/CD) capabilities, allowing teams to automate their build, test, and deployment processes.",
    "Collaboration: GitLab offers a range of collaboration tools, including wikis, project boards, and group-level dashboards, allowing teams to work together more effectively."
];

const gitGitLab = [
    "Git repository management: Git is a distributed version control system, which means that each developer has a local copy of the codebase on their machine. GitLab provides a central repository where developers can push their changes and collaborate with others. GitLab also provides tools for managing access to the codebase, including code access controls, branch management, and merge requests.",
    "Code reviews: GitLab provides tools for code reviews, including inline commenting, code comparisons, and merge request approvals. Developers can use Git to create branches for new features or bug fixes, and then submit merge requests to GitLab for review and approval by other team members."
];

const collaboration = [
    "Creating a Git repository on GitLab: The first step is to create a Git repository on GitLab. This repository will serve as the central location where developers can push their changes and collaborate with others.",
    "Cloning the repository: Each developer should clone the repository to their local machine using Git. This will create a local copy of the codebase on their machine that they can work on.",
    "Making changes: Developers can make changes to the codebase on their local machine using Git. They can use Git to commit their changes and create a history of the changes they have made.",
    "Pushing changes: Once developers have made their changes, they can push them to GitLab using Git. This will update the central repository and make the changes available to other developers.",
    "Code reviews: Other developers can review the changes using GitLab's code review tools. They can leave comments, suggest changes, and approve or reject merge requests.",
    "Merging changes: Once a merge request has been approved, the changes can be merged into the main codebase on GitLab. This will update the central repository and make the changes available to all developers.",
    "Continuous integration and deployment: GitLab can be configured to automatically run tests and deploy changes when they are merged into the main codebase."
]

const GitGitLab = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>What is Git</Typography>
            <Typography variant='subtitle2'>Git is a distributed version control system used for tracking changes in source code during software development. It was created by Linus Torvalds in 2005 and has since become one of the most widely used version control systems in the world. Git provides a way for software developers to collaborate on code, manage different versions of a project, and track changes over time. It allows multiple developers to work on the same codebase simultaneously and provides tools for merging changes, resolving conflicts, and managing branches.</Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why Git is used?</Typography>
                <Block list={whyList}></Block>
            </Box>

            <Box mt={5}>
                <Typography variant='h3'>What is GitLab</Typography>
                <Typography variant='subtitle2'>GitLab is a web-based Git repository manager that provides Git repository management, code reviews, issue tracking, continuous integration, and continuous deployment (CI/CD) capabilities. It was first released in 2011 and has since become one of the most popular alternatives to GitHub, another web-based Git repository manager.</Typography>

            </Box>

            <Box mt={3}>
                <Typography variant='h3'>Why GitLab is used?</Typography>
                <Block list={gitLab}></Block>
            </Box>

            <Box mt={5}>
                <Typography variant='h3'>Collaboration with Git & GitLab</Typography>
                <Typography variant='subtitle2'>Git and GitLab can be used together to provide a powerful collaboration platform for software development teams. Here are some of the ways Git and GitLab can work together:</Typography>
                <Block list={gitGitLab}></Block>
            </Box>

            <Box mt={5}>
                <Typography variant='h3'>Collaboration Step-By-Step Process: </Typography>

                <Typography variant='subtitle2'>The collaboration process of Git and GitLab involves several steps: </Typography>
                <Block list={collaboration}></Block>
                <Typography mt={2} variant='subtitle2'>Overall, Git and GitLab provide a powerful collaboration platform for software development teams. Developers can use Git for version control and GitLab for collaboration, code reviews, continuous integration, and deployment. This allows teams to work more efficiently and effectively, and ensure that their code is of high quality and meets the needs of their users.</Typography>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 1:"></StepComp>
                <ImageComp image={"/collaboration/Screenshot_2.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Log in to your GitLab account.", "Click on the 'New project' button in the upper right corner of the page."]}></Process>

                <ImageComp image={"/collaboration/Screenshot_3.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Select the type of repository you want to create (e.g. blank project, import project, etc.)."]}></Process>

                <ImageComp image={"/collaboration/Screenshot_1.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Enter a name for your repository.", "(Optional) Enter a description for your repository.", "Choose the visibility level of your repository (e.g. private, internal, public).", "(Optional) Choose a template for your repository, if applicable.", "Click the 'Create project' button to create your new repository."]}></Process>

                <ImageComp image={"/collaboration/Screenshot_4.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Once everything repository is created you'll be able to see this interface."]}></Process>
            </Box>

            <Box mt={7}>
                <StepComp stepText="Step 2:"></StepComp>
                <ImageComp image={"/collaboration/Screenshot_5.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Typography mt={2} variant='subtitle2'>Now follow these commands one-by-one from the above image.</Typography>
                <Process list={["Initialize a new Git repository and initial branch in the existing folder using the command 'git init --initial-branch'.", "Connect the local repository to the remote repository by adding the remote URL using the command 'git remote add origin [url]'", "Add the files in the folder to the staging area using the command 'git add .'.", "Commit the changes using the command 'git commit -m [commit message]'.", "Push the changes to the remote repository using the command 'git push -u origin 'branch name'"]}></Process>
            </Box>

            <Box mt={7}>
                <Typography variant='h3'>
                    What is Fork?
                </Typography>
                <Typography variant='subtitle2'>
                    In Git, a fork is a copy of a Git repository that is hosted on a different account or organization. When you fork a repository, you create a new repository that is linked to the original repository, but has its own separate commit history and branches.

                    Forking is often used in open source software development, where contributors can create their own forks of a project to make changes and submit pull requests to the original repository. This allows multiple developers to work on the same codebase without directly modifying the original repository.

                    When you fork a repository, you can clone it to your local machine and start making changes. You can then push your changes to your forked repository and submit a pull request to the original repository to request that your changes be merged in.
                </Typography>

                <Typography variant='h3'>
                    Process of Forking a Project.
                </Typography>
                <StepComp stepText="Step 1:"></StepComp>
                <ImageComp image={"/collaboration/Screenshot_6.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>


                <Process list={["After forking the project the below interface will appear to fork project."]}></Process>

                <ImageComp image={"/collaboration/Screenshot_7.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
            </Box>

            <Box mt={7}>
                <Typography variant='h3'>
                    What is Clone?
                </Typography>
                <Typography variant='subtitle2'>
                    In Git, cloning is the process of creating a local copy of a remote Git repository. When you clone a repository, you create a complete copy of the repository on your local machine, including all of its branches, commit history, and files.

                    Cloning is often used when you want to contribute to an existing project hosted on a remote Git repository. By cloning the repository to your local machine, you can make changes to the codebase and submit pull requests to the original repository.

                    To clone a Git repository, you can use the "git clone" command followed by the URL of the remote repository. For example, to clone a repository hosted on GitHub, you would use the command:
                </Typography>

                <Typography variant='h3'>
                    Process of Cloning a Project.
                </Typography>
                {/* <StepComp stepText="Step 1:"></StepComp> */}
                <Process list={["Open your command line interface and type 'git clone [url]'"]}></Process>
                <ImageComp image={"/collaboration/Screenshot_8.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
            </Box>

            <Box mt={7}>
                <Typography variant='h3'>
                    What is Pull Request?
                </Typography>
                <Typography variant='subtitle2'>
                    In Git, a pull request (PR) is a request to merge changes from one branch of a Git repository into another branch. Pull requests are commonly used in collaborative software development to allow contributors to submit changes to a project and have them reviewed and merged in by other members of the team.

                    When a pull request is submitted, the changes are typically reviewed by one or more other contributors before being merged in. The reviewer(s) may provide feedback on the changes, suggest improvements, or request further changes before the pull request is accepted.

                    Once the changes are approved and any requested changes have been made, the pull request can be merged into the target branch. This creates a new merge commit that includes the changes from the pull request, which can then be pushed back to the remote repository.

                    Pull requests are a powerful tool for collaborative development, as they allow multiple developers to work on the same codebase in parallel and review each other's changes before they are merged in.
                </Typography>

                <Typography variant='h3'>
                    Process of Doing a Pull Request.
                </Typography>
                {/* <StepComp stepText="Step 1:"></StepComp> */}
                <StepComp stepText="Step 1:"></StepComp>

                <ImageComp image={"/collaboration/Screenshot_9.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Click on 'merge requests' button from the project"]}></Process>
            </Box>
            <Box mt={3}>
                <StepComp mt={3} stepText="Step 2:"></StepComp>

                <ImageComp image={"/collaboration/Screenshot_10.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Click on 'New merge request' button from the project"]}></Process>
            </Box>

            <Box mt={3}>
                <StepComp mt={3} stepText="Step 3:"></StepComp>

                <ImageComp image={"/collaboration/Screenshot_11.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Select target branch and source branch"]}></Process>
            </Box>

            <Box mt={3}>
                <StepComp mt={3} stepText="Step 4:"></StepComp>

                <ImageComp image={"/collaboration/Screenshot_12.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Now click on 'Create merge request' button to make Pull Request"]}></Process>
            </Box>

            <Box mt={3}>
                <ImageComp image={"/collaboration/Screenshot_13.png"} imageTitle={"Screenshot 6: Creating a new project"}></ImageComp>
                <Process list={["Now it is ready to merge", "The owner of the project will review the code and merge with main (upstream) repository"]}></Process>
            </Box>
        </Box>
    );
};

export default GitGitLab;
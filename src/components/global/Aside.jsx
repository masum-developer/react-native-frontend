import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SideMenus } from "../../staticData/menus";
import { AiFillDatabase } from "react-icons/ai";
import IconCom from "./IconCom";
import Side from "./Side";

const Aside = ({ children }) => {
  const courseOutline = {
    weeks: [
      {
        week_number: 1,
        topic: "Introduction to React Native and Environment Setup",
        chapters: [
          {
            chapter_number: 1,
            title: "Understanding React Native",
            classes: [
              {
                class_number: 1,
                title: "Introduction to React Native and Its Ecosystem",
              },
              {
                class_number: 2,
                title:
                  "Overview of React Native vs. Other Mobile Development Frameworks",
              },
              {
                class_number: 3,
                title:
                  "Review course outline and the TS4U app that we are going to build",
              },
            ],
          },
          {
            chapter_number: 2,
            title: "Setting Up the Development Environment",
            classes: [
              {
                class_number: 4,
                title: "Installing Node, expo, and React Native CLI",
              },
              {
                class_number: 5,
                title: "Setting up an Emulator and Testing the Environment",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Project Initialization",
            classes: [
              {
                class_number: 6,
                title: "Creating Your First React Native App named TS4U",
              },
              {
                class_number: 7,
                title:
                  "Understanding the Basic Structure of a React Native App",
              },
            ],
          },
          {
            chapter_number: 4,
            title: "Building the Basic Home Screen of TS4U",
            classes: [
              {
                class_number: 8,
                title: "Designing a Simple Home Screen Layout",
              },
              {
                class_number: 9,
                title:
                  "Introduction to Basic React Native Components (View, Text, etc.)",
              },
            ],
          },
        ],
      },
      {
        week_number: 2,
        topic: "Basic Components and Navigation",
        chapters: [
          {
            chapter_number: 1,
            title: "React Native Components Deep Dive",
            classes: [
              {
                class_number: 1,
                title: "Exploring Basic Components: View, Text, Image",
              },
              {
                class_number: 2,
                title: "Handling User Input with Buttons and Touchables",
              },
            ],
          },
          {
            chapter_number: 2,
            title: "Implementing Navigation",
            classes: [
              {
                class_number: 3,
                title: "Introduction to React Navigation Library",
              },
              {
                class_number: 4,
                title: "Implementing Stack Navigation in the App",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Building the App Skeleton of TS4U",
            classes: [
              {
                class_number: 5,
                title: "Setting Up Navigation to Different Screens",
              },
              {
                class_number: 6,
                title:
                  "Placeholder Screens for Chat, Calendar, Notifications, and Interview and auth screen",
              },
            ],
          },
        ],
      },
      {
        week_number: 3,
        topic: "Styling and Theming",
        chapters: [
          {
            chapter_number: 1,
            title: "Styling in React Native",
            classes: [
              {
                class_number: 1,
                title: "Basics of Styling Components with Stylesheets",
              },
              { class_number: 2, title: "Designing our Home Page" },
            ],
          },
          {
            chapter_number: 2,
            title: "Implementing Themes",
            classes: [
              {
                class_number: 3,
                title: "Introduction to Theming and Global Styles",
              },
              { class_number: 4, title: "Applying Themes in Home page" },
            ],
          },
          {
            chapter_number: 3,
            title: "Enhancing User Interface",
            classes: [
              { class_number: 5, title: "Using Third Party Component Library" },
              {
                class_number: 6,
                title: "Refining the UI with Third Party Component Library",
              },
            ],
          },
        ],
      },
      {
        week_number: 4,
        topic: "Authentication and Security",
        chapters: [
          {
            chapter_number: 1,
            title: "Networking Basics",
            classes: [
              {
                class_number: 1,
                title: "Making Network Requests in React Native",
              },
              { class_number: 2, title: "Handling API Responses and Errors" },
            ],
          },
          {
            chapter_number: 2,
            title: "User Authentication",
            classes: [
              {
                class_number: 3,
                title: "Implementing Login and Sign Up Screen",
              },
              {
                class_number: 4,
                title: "Styling the Login and Sign Up Screen",
              },
              {
                class_number: 5,
                title: "Implementing Login and Logout Functionality",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Securing the App",
            classes: [
              {
                class_number: 6,
                title: "Storing the secret token in Secure Storage",
              },
              { class_number: 7, title: "Managing User Sessions and Security" },
            ],
          },
          {
            chapter_number: 4,
            title: "Implementing Authentication in the App",
            classes: [
              { class_number: 8, title: "Integrating Authentication Flows" },
              {
                class_number: 9,
                title: "Testing and Refining Authentication Features",
              },
            ],
          },
        ],
      },
      {
        week_number: 5,
        topic: "State Management and Props",
        chapters: [
          {
            chapter_number: 1,
            title: "Understanding Props and State",
            classes: [
              { class_number: 1, title: "Basics of Props in React Native" },
              {
                class_number: 2,
                title: "State Management in React Native Components",
              },
            ],
          },
          {
            chapter_number: 2,
            title: "Building Custom Components of Authentication Screen",
            classes: [
              {
                class_number: 3,
                title: "Creating Reusable Components of Authentication Screen",
              },
              {
                class_number: 4,
                title: "Passing Data with Props in Custom Components",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Building Custom Components of Home Screen",
            classes: [
              {
                class_number: 5,
                title: "Creating Reusable Components of Home Screen",
              },
              {
                class_number: 6,
                title: "Passing Data with Props in Custom Components",
              },
            ],
          },
        ],
      },
      {
        week_number: 6,
        topic: "Advanced State Management",
        chapters: [
          {
            chapter_number: 1,
            title: "Advanced State Management Concepts",
            classes: [
              {
                class_number: 1,
                title: "Basic Overview of Redux and Redux Persist",
              },
              {
                class_number: 2,
                title: "Implementing redux and Redux Persist",
              },
            ],
          },
          {
            chapter_number: 2,
            title: "Refactoring the App",
            classes: [
              {
                class_number: 3,
                title: "Implementing Global State Management",
              },
              {
                class_number: 4,
                title: "Connecting Components to the Global State",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Enhancing App Functionality",
            classes: [
              {
                class_number: 5,
                title: "Refactoring Existing Features for State Management",
              },
              {
                class_number: 6,
                title: "Testing and Debugging State Management",
              },
            ],
          },
        ],
      },
      {
        week_number: 7,
        topic: "Implementing Chat",
        chapters: [
          {
            chapter_number: 1,
            title: "Building the UI",
            classes: [
              { class_number: 1, title: "Build the Chat Screen UI" },
              { class_number: 2, title: "Build the Chat Messages UI" },
            ],
          },
          {
            chapter_number: 2,
            title: "Integrating API",
            classes: [
              {
                class_number: 3,
                title: "Make API Request to Display Dynamic Chats",
              },
              {
                class_number: 4,
                title:
                  "Make API Request to Fetch Chat Messages and Render to UI",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "Integrate redux with chat",
            classes: [
              { class_number: 5, title: "Implement global state by redux" },
              { class_number: 6, title: "Consuming data from global state" },
            ],
          },
          {
            chapter_number: 4,
            title: "Working with real-time data",
            classes: [
              { class_number: 7, title: "Implement Socket for Real-time Data" },
              {
                class_number: 8,
                title: "Handling Realtime Message and Update the Redux State",
              },
            ],
          },
        ],
      },
      {
        week_number: 8,
        topic: "Implementing a Calendar",
        chapters: [
          {
            chapter_number: 1,
            title: "Working with Dates and Times",
            classes: [
              {
                class_number: 1,
                title: "Handling Dates and Times in React Native",
              },
              {
                class_number: 2,
                title: "Exploring Third-party Calendar Components",
              },
            ],
          },
          {
            chapter_number: 2,
            title: "Integrating a Calendar Component",
            classes: [
              { class_number: 3, title: "Adding a Calendar to the App" },
              { class_number: 4, title: "Customizing the Calendar Component" },
            ],
          },
          {
            chapter_number: 3,
            title: "Connecting Calendar with App Functionality",
            classes: [
              { class_number: 5, title: "Implementing Calendar Features" },
              {
                class_number: 6,
                title: "Refining the Calendar UI and Functionality",
              },
            ],
          },
          {
            chapter_number: 4,
            title: "Integrate with API",
            classes: [
              {
                class_number: 7,
                title: "Fetch Existing events and Render in UI",
              },
              {
                class_number: 8,
                title: "Storing and Updating new Event by API request",
              },
            ],
          },
        ],
      },
      {
        week_number: 9,
        topic: "Adding Notifications",
        chapters: [
          {
            chapter_number: 1,
            title: "Understanding Notifications",
            classes: [
              {
                class_number: 1,
                title: "Introduction to Local and Push Notifications",
              },
              { class_number: 2, title: "Configuring Notification Settings" },
            ],
          },
          {
            chapter_number: 2,
            title: "Implementing Notifications",
            classes: [
              {
                class_number: 3,
                title: "Getting the Past Notification by API Request",
              },
              { class_number: 4, title: "Creating Notification Handlers" },
            ],
          },
          {
            chapter_number: 3,
            title: "Integrating Notifications with the App",
            classes: [
              { class_number: 5, title: "Designing Notification UI" },
              {
                class_number: 6,
                title: "Testing and Refining Notification Functionality",
              },
            ],
          },
        ],
      },
      {
        week_number: 10,
        topic: "Recording and Storing Interviews",
        chapters: [
          {
            chapter_number: 1,
            title: "Media Recording in React Native",
            classes: [
              { class_number: 1, title: "Introduction to Media Recording" },
              { class_number: 2, title: "Implementing Audio/Video Recording" },
            ],
          },
          {
            chapter_number: 2,
            title: "Building the Interview Record System",
            classes: [
              { class_number: 3, title: "Designing the Interview Record UI" },
              {
                class_number: 4,
                title: "Implementing and Testing the Recording Features",
              },
            ],
          },
          {
            chapter_number: 3,
            title: "File Storage and Management",
            classes: [
              {
                class_number: 5,
                title: "Storing Recorded Interviews by API request",
              },
              {
                class_number: 6,
                title: "Managing and Accessing Recorded Files by API request",
              },
              { class_number: 7, title: "Final Testing and Bug Fixes" },
            ],
          },
        ],
      },
      {
        week_number: 11,
        topic: "Deployment and Publishing",
        chapters: [
          {
            chapter_number: 1,
            title: "Preparing for Deployment",
            classes: [
              {
                class_number: 1,
                title: "Building the App for Production deployment",
              },
              {
                class_number: 2,
                title: "Preparing Assets and Metadata for App Stores",
              },
              { class_number: 3, title: "Adding App icon and Splash screen" },
            ],
          },
          {
            chapter_number: 2,
            title: "Publishing the App",
            classes: [
              { class_number: 3, title: "Deploying to the App Store" },
              { class_number: 4, title: "Deploying to the Google Play Store" },
            ],
          },
          {
            chapter_number: 3,
            title: "Updating the app",
            classes: [
              { class_number: 5, title: "Updating the app via OTA" },
              {
                class_number: 6,
                title:
                  "Updating the app in App Store and Google Play Store with version",
              },
            ],
          },
        ],
      },
    ],
  };
  const matches = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const handlePush = (key, value) => {
    let query = router.query;

    router.push({
      pathname: window.location.pathname,
      query: { ...query, [key]: value },
    });
  };

  function GetSubMenu({ menu }) {
    return menu.hasSubMenu ? (
      <SubMenu label={menu?.title}>
        {menu?.subMenus?.map((item, i) => (
          <GetSubMenu menu={item} key={i}></GetSubMenu>
        ))}
      </SubMenu>
    ) : (
      <MenuItem icon={menu?.icon} onClick={() => handlePush("tab", menu?.slug)}>
        {menu?.title}
      </MenuItem>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={2} md={2} lg={1} xl={1}>
          <ProSidebarProvider>
            <Sidebar
              toggled={matches ? true : false}
              defaultCollapsed={!matches}
              className="sidebar"
              style={{
                height: "90vh",
                position: "fixed",
                paddingBottom: "10px",
              }}
              backgroundColor="#ECE4EC"
              width="250px"
              collapsed={true}
            >
              <Menu
                menuItemStyles={{
                  button: ({ level, active, disabled }) => {
                    // if (level === 0) {
                    return {
                      color: disabled ? "#eee" : "#455A64",
                      backgroundColor: active ? "#3D34E3" : undefined,
                      "&:hover": {
                        backgroundColor: "#D5C9F0  !important",
                        color: "#3D34E3 !important",
                        fontWeight: "bold !important",
                        fontFamily: "Heebo, sans-serif",
                      },
                      //  };
                    };
                  },
                }}
              >
                <MenuItem
                  onClick={() => handlePush("tab", "roadmap")}
                  icon={<IconCom image={"/sidebar/roadmap.svg"} />}
                >
                  Roadmap
                </MenuItem>
                <MenuItem
                  onClick={() => handlePush("tab", "get_started")}
                  icon={<IconCom image={"/sidebar/start.svg"} />}
                >
                  Get Started
                </MenuItem>
                <SubMenu
                  icon={<IconCom image={"/sidebar/git.svg"} />}
                  label="Environment Setup"
                  defaultOpen
                >
                  <MenuItem
                    onClick={() => handlePush("tab", "vscode-installation")}
                  >
                    VS Code Installation
                  </MenuItem>

                  <MenuItem
                    onClick={() => handlePush("tab", "vscode-extentions")}
                  >
                    VS Code Extensions
                  </MenuItem>

                  <MenuItem
                    onClick={() => handlePush("tab", "git-installation")}
                  >
                    Git Installation
                  </MenuItem>

                  <MenuItem onClick={() => handlePush("tab", "git-gitlab")}>
                    Git & GitLab
                  </MenuItem>
                </SubMenu>
                {/* <MenuItem >Agile Scrum</MenuItem> */}

                <SubMenu
                  label="React Native"
                  icon={<IconCom image={"/sidebar/frontend.svg"} />}
                >
                  <SubMenu
                    label="Expo Router"
                    icon={<IconCom image={"/sidebar/react.svg"} />}
                  >
                    <MenuItem
                      onClick={() => handlePush("tab", "react-introduction")}
                    >
                      Introduction
                    </MenuItem>
                    <MenuItem
                      onClick={() => handlePush("tab", "react-installation")}
                    >
                      Installation
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handlePush("tab", "react-project-structure")
                      }
                    >
                      Project Structure
                    </MenuItem>

                    <SubMenu label="Hooks">
                      <MenuItem
                        onClick={() => handlePush("tab", "hooks-introduction")}
                      >
                        Introduction
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "hooks-useState")}
                      >
                        useState
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "hooks-useEffect")}
                      >
                        useEffect
                      </MenuItem>

                      <MenuItem>Custom Hooks</MenuItem>
                    </SubMenu>
                  </SubMenu>

                  <SubMenu
                    label="Redux"
                    icon={<IconCom image={"/sidebar/redux.svg"} />}
                  >
                    <MenuItem
                      onClick={() => handlePush("tab", "redux-introduction")}
                    >
                      Introduction
                    </MenuItem>
                    <MenuItem
                      onClick={() => handlePush("tab", "redux-concepts")}
                    >
                      Core Concepts
                    </MenuItem>
                    <MenuItem onClick={() => handlePush("tab", "redux-usage")}>
                      Usage
                    </MenuItem>
                    <MenuItem
                      onClick={() => handlePush("tab", "redux-installation")}
                    >
                      Setup
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label="Schools Hub App"
                  icon={<IconCom image={"/sidebar/schoolhub.svg"} />}
                >
                  {courseOutline.weeks.map((week) => (
                    <SubMenu
                      key={week.week_number}
                      label={week.topic}
                      title="Introduction to React Native and Environment Setup"
                    >
                      {week.chapters.map((chapter) => (
                        <SubMenu
                          key={chapter.chapter_number}
                          label={
                            "Chapter" +
                            chapter.chapter_number +
                            ":" +
                            chapter.title
                          }
                        >
                          {chapter.classes.map((classItem) => (
                            <MenuItem
                              key={classItem.class_number}
                              onClick={() =>
                                handlePush("tab", "agileALM-register")
                              }
                            >
                              {classItem.title}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>

                {/* <SubMenu
                  label="Schools Hub App"
                  icon={<IconCom image={"/sidebar/schoolhub.svg"} />}
                >
                  <SubMenu
                    label="Week 1: Introduction to React Native and Environment Setup"
                    title="Introduction to React Native and Environment Setup"
                  >
                    <SubMenu
                      label="Chapter 1: Understanding React Native"
                      title="Understanding React Native"
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 1: Introduction to React Native and Its Ecosystem
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 2: Overview of React Native vs. Other Mobile
                        Development Frameworks
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 3: Review course outline and the TS4U app that we
                        are going to build
                      </MenuItem>
                    </SubMenu>
                    <SubMenu
                      label="Chapter 2: Setting Up the Development Environment"
                      title="Setting Up the Development Environment
                      "
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 4: Installing Node, expo, and React Native CLI
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 5: Setting up an Emulator and Testing the
                        Environment
                      </MenuItem>
                    </SubMenu>
                    <SubMenu
                      label="Chapter 3: Project Initialization"
                      title="Project Initialization
                      "
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 6: Creating Your First React Native App named TS4U
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 7: Understanding the Basic Structure of a React
                        Native App
                      </MenuItem>
                    </SubMenu>
                    <SubMenu
                      label="Chapter 4: Building the Basic Home Screen of TS4U"
                      title="Building the Basic Home Screen of TS4U"
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 8: Designing a Simple Home Screen Layout
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 9: Introduction to Basic React Native Components
                        (View, Text, etc.)
                      </MenuItem>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu
                    label="Week 2: Basic Components and Navigation"
                    title="Basic Components and Navigation"
                  >
                    <SubMenu
                      label="Chapter 1: React Native Components Deep Dive
"
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 1: Exploring Basic Components: View, Text, Image
                      </MenuItem>
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 2: Handling User Input with Buttons and Touchables
                      </MenuItem>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu
                    label="Week 2: Basic Components and Navigation"
                    title="Basic Components and Navigation"
                  >
                    <SubMenu
                      label="Chapter 1: React Native Components Deep Dive
"
                    >
                      <MenuItem
                        onClick={() => handlePush("tab", "agileALM-register")}
                      >
                        Class 1: Exploring Basic Components: View, Text, Image
                      </MenuItem>
                    </SubMenu>
                  </SubMenu>
                </SubMenu> */}

                {/* {
                                    SideMenus?.map((menu, i) =>
                                        <GetSubMenu menu={menu} key={i}></GetSubMenu>
                                    )
                                } */}
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
        </Grid>
        <Grid
          item
          xs={10}
          md={8}
          lg={9}
          xl={11}
          sx={{
            marginTop: { xs: "80px", md: "150px" },
            marginLeft: { sm: "300px" },
            height: "100vh",
            padding: { xs: "20px" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aside;

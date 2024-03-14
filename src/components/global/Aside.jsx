import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SideMenus } from "../../staticData/menus";
import { AiFillDatabase } from "react-icons/ai";
import IconCom from "./IconCom";
import courseOutline from "../../staticData/schoolHubContentNew.json";
import { v4 as uuidv4 } from "uuid";
const Aside = ({ children }) => {
  // console.log(uuidv4());

  const matches = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const handlePush = (key, value) => {
    let query = router.query;
    //console.log(query)
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
              width="280px"
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
                  {courseOutline.weeks.map((week, index) => (
                    <SubMenu
                      key={week.week_number}
                      label={week.topic}
                      title={week.topic}
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
                          title={chapter.title}
                        >
                          {chapter.classes.map((classItem) => (
                            <MenuItem
                              key={classItem.class_id}
                              onClick={() =>
                                handlePush("tab", classItem.class_id)
                              }
                            >
                              {classItem.shortTitle}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>

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

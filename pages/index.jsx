import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../src/components/global/Layout";
import Aside from "../src/components/global/Aside";
import Hero from "../src/components/hero/Hero";
import MernRoadmap from "../src/components/roadmap/roadmap";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Introduction from "../src/components/html/Introduction";
import Overview from "../src/components/html/Overview";

import ModulesComp from "../src/components/js/ModulesComp";
import VsCodeComp from "../src/components/EnvironmentSetup/VsCodeComp";
import VScodeExtensions from "../src/components/EnvironmentSetup/VScodeExtensions";
import GitCodeComp from "../src/components/EnvironmentSetup/GitComp";
import GitGitLab from "../src/components/EnvironmentSetup/GitGitLab";

import PageObjectModel from "../src/components/web-automation/PageObjectModel";
import LoginAgileALM from "../src/components/web-automation/LoginAgileALM";
import SelectorsHub from "../src/components/web-automation/SelectorsHub";
import OrganizationAgileALM from "../src/components/web-automation/OrganizationAgileALM";
import ProjectAgileALM from "../src/components/web-automation/ProjectAgileALM";
import UserStoryAgileALM from "../src/components/web-automation/UserStoryAgileALM";
import TaskAgileALM from "../src/components/web-automation/TaskAgileALM";
import RetroAgileALM from "../src/components/web-automation/RetroAgileALM";
import ClassContent from "../src/components/classContent/ClassContent";
import ClassOne from "../src/components/reactNative/weekOne/chapterOne/ClassOne";
import ClassThree from "../src/components/reactNative/weekOne/chapterOne/ClassThree";
import ClassTw from "../src/components/reactNative/weekOne/chapterOne/ClassTw";
import ClassFour from "../src/components/reactNative/weekOne/chapterTwo/ClassFour";
import ClassFive from "../src/components/reactNative/weekOne/chapterTwo/ClassFive";
import ClassSix from "../src/components/reactNative/weekOne/chapterThree/ClassSix";
import ClassSeven from "../src/components/reactNative/weekOne/chapterThree/ClassSeven";
import ClassEight from "../src/components/reactNative/weekOne/chapterFour/ClassEight";
import ClassNine from "../src/components/reactNative/weekOne/chapterFour/ClassNine";
import ClassTen from "../src/components/reactNative/weekTwo/chapterOne/ClassTen";
import ClassEleven from "../src/components/reactNative/weekTwo/chapterOne/ClassEleven";
import ClassTwelve from "../src/components/reactNative/weekTwo/chapterTwo/ClassTwelve";
import ClassThirteen from "../src/components/reactNative/weekTwo/chapterTwo/classThirteen";
import ClassThirteenNew from "../src/components/reactNative/weekTwo/chapterTwo/ClassThirteenNew";
import ClassFourteen from "../src/components/reactNative/weekTwo/chapterThree/ClassFourteen";
import ClassFifteen from "../src/components/reactNative/weekTwo/chapterThree/ClassFifteen";
import ClassSixteen from "../src/components/reactNative/weekThree/chapterOne/ClassSixteen";
import ClassSeventeen from "../src/components/reactNative/weekThree/chapterOne/classSeventeen";
import ClassEighteen from "../src/components/reactNative/weekThree/chapterTwo/ClassEighteen";
import ClassNineteen from "../src/components/reactNative/weekThree/chapterTwo/ClassNineteen";
import ClassTwenty from "../src/components/reactNative/weekThree/chapterThree/ClassTwenty";
import ClassTwentyOne from "../src/components/reactNative/weekThree/chapterThree/ClassTwentyOne";
import ClassTwentyTwo from "../src/components/reactNative/weekFour/chapterOne/ClassTwentyTwo";
import ClassTwentyThree from "../src/components/reactNative/weekFour/chapterOne/ClassTwentyThree";
import ClassTwentyFour from "../src/components/reactNative/weekFour/chapterTwo/ClassTwentyFour";

// import Roadmap from '../src/components/roadmap/roadmap';
// import MernRoadmap from '../src/components/roadmap/roadmap';

const Home = () => {
  const [active, setActive] = useState("get_started");
  const router = useRouter();
  // console.log(router.query?.tab)
  let myArray;
  if (router.query?.tab) {
    myArray = router?.query?.tab.split("-");
  }
  useEffect(() => {
    if (router.query?.tab) {
      if (myArray[0] === "classContent") {
        setActive(myArray[0]);
      } else {
        setActive(router.query?.tab);
      }
    } else {
      setActive("get_started");
    }
  }, [router.query?.tab]);

  return (
    <Layout>
      <Aside>
        {active === "vscode-extentions" ? (
          <VScodeExtensions></VScodeExtensions>
        ) : active === "vscode-installation" ? (
          <VsCodeComp></VsCodeComp>
        ) : active === "git-installation" ? (
          <GitCodeComp></GitCodeComp>
        ) : active === "git-gitlab" ? (
          <GitGitLab></GitGitLab>
        ) : active === "get_started" ? (
          <Hero></Hero>
        ) : active === "week1_chapter1_class1" ? (
          <ClassOne />
        ) : active === "week1_chapter1_class2" ? (
          <ClassTw />
        ) : active === "week1_chapter1_class3" ? (
          <ClassThree />
        ) : active === "week1_chapter2_class4" ? (
          <ClassFour />
        ) : active === "week1_chapter2_class5" ? (
          <ClassFive />
        ) : active === "week1_chapter3_class6" ? (
          <ClassSix />
        ) : active === "week1_chapter3_class7" ? (
          <ClassSeven />
        ) : active === "week1_chapter4_class8" ? (
          <ClassEight />
        ) : active === "week1_chapter4_class9" ? (
          <ClassNine />
        ) : active === "week2_chapter1_class10" ? (
          <ClassTen />
        ) : active === "week2_chapter1_class11" ? (
          <ClassEleven />
        ) : active === "week2_chapter2_class12" ? (
          <ClassTwelve />
        ) : active === "week2_chapter2_class13" ? (
          <ClassThirteenNew />
        ) : active === "week2_chapter3_class14" ? (
          <ClassFourteen />
        ) : active === "week2_chapter3_class15" ? (
          <ClassFifteen />
        ) : active === "week3_chapter1_class16" ? (
          <ClassSixteen />
        ) : active === "week3_chapter1_class17" ? (
          <ClassSeventeen />
        ) : active === "week3_chapter2_class18" ? (
          <ClassEighteen />
        ) : active === "week3_chapter2_class19" ? (
          <ClassNineteen />
        ) : active === "week3_chapter3_class20" ? (
          <ClassTwenty />
        ) : active === "week3_chapter3_class21" ? (
          <ClassTwentyOne />
        ) : active === "week4_chapter1_class22" ? (
          <ClassTwentyTwo />
        ) : active === "week4_chapter1_class23" ? (
          <ClassTwentyThree />
        ) : active === "week4_chapter2_class24" ? (
          <ClassTwentyFour />
        ) : active === "roadmap" ? (
          <MernRoadmap></MernRoadmap>
        ) : (
          ""
        )}
      </Aside>

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            TEst
          </Grid>
          <Grid item xs={4}>
            TEst
          </Grid>
          <Grid item xs={4}>
            TEst
          </Grid>
          <Grid item xs={8}>
          TEst
          </Grid>
        </Grid>
      </Box> */}
    </Layout>
  );
};

export default Home;

import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../src/components/global/Layout';
import Aside from '../src/components/global/Aside';
import Hero from '../src/components/hero/Hero';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import Introduction from '../src/components/html/Introduction';
import Overview from '../src/components/html/Overview';
import BasicTags from '../src/components/html/BasicTags';
import Elements from '../src/components/html/Elements';
import Attributes from '../src/components/html/Attributes';
import Formatting from '../src/components/html/Formatting';
import Images from '../src/components/html/Images';
import Tables from '../src/components/html/Tables';
import Lists from '../src/components/html/Lists';
import TextLinks from '../src/components/html/TextLinks';
import CssIntroduction from '../src/components/css/CssIntroduction';
import Selectors from '../src/components/css/Selectors';
import Colors from '../src/components/css/Colors';
import Background from '../src/components/css/Background';
import Margin from '../src/components/css/Margin';
import Padding from '../src/components/css/Padding';
import BoxModel from '../src/components/css/BoxModel';
import HeightandWidth from '../src/components/css/HeightandWidth';
import Font from '../src/components/css/Font';
import Icons from '../src/components/css/Icons';
import List from '../src/components/css/List';
import CssTables from '../src/components/css/CssTables';
import Display from '../src/components/css/Display';
import IntroductionJs from '../src/components/js/IntroductionJs';
import OverviewJs from '../src/components/js/OverviewJs';
import SyntaxJs from '../src/components/js/SyntaxJs';
import VarJs from '../src/components/js/VarJs';
import LetJs from '../src/components/js/LetJs';
import ConstJs from '../src/components/js/ConstJs';
import Operator from '../src/components/js/Operators';
import Arithmetic from '../src/components/js/Arithmetic';
import Assignment from '../src/components/js/Assignment';
import Comparison from '../src/components/js/Comparisor';
import DataTypes from '../src/components/js/DataTypes';
import Strings from '../src/components/js/Strings';
import Numbers from '../src/components/js/Numbers';
import Arrays from '../src/components/js/Arrays';
import Objects from '../src/components/js/Objects';
import Functions from '../src/components/js/Functions';
import Dates from '../src/components/js/Dates';
import Random from '../src/components/js/Random';
import IfElse from '../src/components/js/IfElse';
import Switch from '../src/components/js/Switch';
import LoopIntro from '../src/components/js/LoopIntro';
import ForLoop from '../src/components/js/ForLoop';
import Sets from '../src/components/js/Sets';
import Maps from '../src/components/js/Maps';
import TypeofComp from '../src/components/js/Typeof';
import ScopeComp from '../src/components/js/ScopeComp';
import TypeConversion from '../src/components/js/TypeConversion';
import JSONComp from '../src/components/js/JSONComp';
import ClassComp from '../src/components/js/ClassComp';
import TryCatchComp from '../src/components/js/TryCatchComp';
import ESFeatures from '../src/components/js/ESFeatures';
import ArrowFunc from '../src/components/js/ArrowFunc';
import DesctructuringComp from '../src/components/js/DesctructuringComp';
import ModulesComp from '../src/components/js/ModulesComp';
import VsCodeComp from '../src/components/EnvironmentSetup/VsCodeComp';
import VScodeExtensions from '../src/components/EnvironmentSetup/VScodeExtensions';
import GitCodeComp from '../src/components/EnvironmentSetup/GitComp';
import GitGitLab from '../src/components/EnvironmentSetup/GitGitLab';
import FuncDeclaration from '../src/components/js/FuncDeclaration';
import FuncExpressions from '../src/components/js/FuncExpressions';
import AnonymousFunc from '../src/components/js/AnonymousFunc';
import CallbackComp from '../src/components/js/CallbackComp';
import AsynchronousComp from '../src/components/js/AsynchronousComp';
import PromisComp from '../src/components/js/PromisComp';
import AsyncAwaitComp from '../src/components/js/AsyncAwaitComp';
import DomIntroduction from '../src/components/DOM/DomIntroduction';
import DomSelectors from '../src/components/DOM/DomSelectors';
import DomStyles from '../src/components/DOM/DomStyles';
import DomEvents from '../src/components/DOM/DomEvents';
import EventListener from '../src/components/DOM/EventListener';
import Position from '../src/components/css/Position';
import ZIndex from '../src/components/css/ZIndex';
import Float from '../src/components/css/Float';
import Blocks from '../src/components/css/Blocks';
import Align from '../src/components/css/Align';
import Dropdown from '../src/components/css/DropDown';
import Form from '../src/components/css/Form';
import CssImages from '../src/components/css/CssImages';
import Units from '../src/components/css/Units';
import Specificity from '../src/components/css/Specificity';
import Important from '../src/components/css/Important';
import Flexbox from '../src/components/css/Flexbox';
import CssGrid from '../src/components/css/CssGrid';
import ReactIntroduction from '../src/components/react/ReactIntroduction';
import ReactInstallation from '../src/components/react/ReactInstallation';
import ReactJSX from '../src/components/react/ReactJSX';
import ReactComponent from '../src/components/react/ReactComponent';
import ReactProps from '../src/components/react/ReactProps';
import ReactEvent from '../src/components/react/ReactEvent';
import CondionalRendering from '../src/components/react/CondionalRendering';
import ReactList from '../src/components/react/ReactList';
import ReactForm from '../src/components/react/ReactForm';
import HooksIntro from '../src/components/react/HooksIntro';
import HooksUseState from '../src/components/react/HooksUseState';
import HooksUseEffect from '../src/components/react/HooksUseEffect';
import HooksUseContext from '../src/components/react/HooksUseContext';
import NodeIntroduction from '../src/components/nodejs/NodeIntroduction';
import NodeServer from '../src/components/nodejs/NodeServer';
import ExpressIntro from '../src/components/express/ExpressIntro';
import InstallSetup from '../src/components/express/InstallSetup';
import ReqObj from '../src/components/express/ReqObj';
import ResObj from '../src/components/express/ResObj';

const Home = () => {
  const [active, setActive] = useState('get_started');
  const router = useRouter();

  useEffect(() => {
    if (router.query?.tab) {
      setActive(router.query?.tab)
    } else {
      setActive('get_started')
    }
  }, [router.query?.tab])

  return (
    <Layout>
      <Aside>
        {
          active === 'vscode-extentions' ?
            <VScodeExtensions></VScodeExtensions> :
            active === 'vscode-installation' ?
              <VsCodeComp></VsCodeComp> :
              active === 'git-installation' ?
                <GitCodeComp></GitCodeComp> :
                active === 'git-gitlab' ?
                  <GitGitLab></GitGitLab> :
                  active === 'get_started' ?
                    <Hero></Hero> :
                    active === 'html_introduction' ?
                      <Introduction></Introduction> :
                      active === 'html_overview' ?
                        <Overview></Overview> :
                        active === 'basic_tags' ?
                          <BasicTags></BasicTags> :
                          active === 'elements' ?
                            <Elements></Elements> :
                            active === 'attributes' ?
                              <Attributes></Attributes> :
                              active === 'formatting' ?
                                <Formatting></Formatting> :
                                active === 'images' ?
                                  <Images></Images> :
                                  active === 'tables' ?
                                    <Tables></Tables> :
                                    active === 'lists' ?
                                      <Lists></Lists> :
                                      active === 'textlinks' ?
                                        <TextLinks></TextLinks> :
                                        active === 'css_introduction' ?
                                          <CssIntroduction></CssIntroduction> :
                                          active === 'selectors' ?
                                            <Selectors></Selectors> :
                                            active === 'colors' ?
                                              <Colors></Colors> :
                                              active === 'background' ?
                                                <Background></Background> :
                                                active === 'margin' ?
                                                  <Margin></Margin> :
                                                  active === 'padding' ?
                                                    <Padding></Padding> :
                                                    active === 'boxmodel' ?
                                                      <BoxModel></BoxModel> :
                                                      active === 'heightandwidth' ?
                                                        <HeightandWidth></HeightandWidth> :
                                                        active === 'font' ?
                                                          <Font></Font> :
                                                          active === 'icons' ?
                                                            <Icons></Icons> :
                                                            active === 'list' ?
                                                              <List></List> :
                                                              active === 'css_table' ?
                                                                <CssTables></CssTables> :
                                                                active === 'display' ?
                                                                  <Display></Display> :
                                                                  active === 'position' ?
                                                                    <Position></Position> :
                                                                    active === 'z-index' ?
                                                                      <ZIndex></ZIndex> :
                                                                      active === 'float' ?
                                                                        <Float></Float> :
                                                                        active === 'block' ?
                                                                          <Blocks></Blocks> :
                                                                          active === 'align' ?
                                                                            <Align></Align> :
                                                                            active === 'dropdown' ?
                                                                              <Dropdown></Dropdown> :
                                                                              active === 'form' ?
                                                                                <Form></Form> :
                                                                                active === "cssimages" ?
                                                                                  <CssImages></CssImages> :
                                                                                  active === "units" ?
                                                                                    <Units></Units> :
                                                                                    active === "specificity" ?
                                                                                      <Specificity></Specificity> :
                                                                                      active === "important" ?
                                                                                        <Important></Important> :
                                                                                        active === 'flexbox' ?
                                                                                          <Flexbox></Flexbox> :
                                                                                          active === 'grid' ?
                                                                                            <CssGrid></CssGrid>:
                                                                  active === 'js_introduction' ?
                                                                    <IntroductionJs></IntroductionJs> :
                                                                    active === 'js_overview' ?
                                                                      <OverviewJs></OverviewJs> :
                                                                      active === 'js_syntax' ?
                                                                        <SyntaxJs></SyntaxJs> :
                                                                        active === 'js_var' ?
                                                                          <VarJs></VarJs> :
                                                                          active === 'js_let' ?
                                                                            <LetJs></LetJs> :
                                                                            active === 'js_const' ?
                                                                              <ConstJs></ConstJs> :
                                                                              active === 'operator_overview' ?
                                                                                <Operator></Operator> :
                                                                                active === 'arithmetic' ?
                                                                                  <Arithmetic></Arithmetic> :
                                                                                  active === 'assignment' ?
                                                                                    <Assignment></Assignment> :
                                                                                    active === 'comparison' ?
                                                                                      <Comparison></Comparison> :
                                                                                      active === 'dataTypes' ?
                                                                                        <DataTypes></DataTypes> :
                                                                                        active === 'string' ?
                                                                                          <Strings></Strings> :
                                                                                          active === 'numbers' ?
                                                                                            <Numbers></Numbers> :
                                                                                            active === 'array' ?
                                                                                              <Arrays></Arrays> :
                                                                                              active === 'objects' ?
                                                                                                <Objects></Objects> :
                                                                                                active === 'function' ?
                                                                                                  <Functions></Functions> :
                                                                                                  active === 'date' ?
                                                                                                    <Dates></Dates> :
                                                                                                    active === 'random' ?
                                                                                                      <Random></Random> :
                                                                                                      active === 'if-else' ?
                                                                                                        <IfElse></IfElse> :
                                                                                                        active === 'switch' ?
                                                                                                          <Switch></Switch> :
                                                                                                          active === 'loop-intro' ?
                                                                                                            <LoopIntro></LoopIntro> :
                                                                                                            active === 'for-loop' ?
                                                                                                              <ForLoop></ForLoop> :
                                                                                                              active === 'set' ?
                                                                                                                <Sets></Sets> :
                                                                                                                active === 'map' ?
                                                                                                                  <Maps></Maps> :
                                                                                                                  active === 'typeof' ?
                                                                                                                    <TypeofComp></TypeofComp> :
                                                                                                                    active === 'scope' ?
                                                                                                                      <ScopeComp></ScopeComp> :
                                                                                                                      active === 'type-conversion' ?
                                                                                                                        <TypeConversion></TypeConversion> :
                                                                                                                        active === 'json' ?
                                                                                                                          <JSONComp></JSONComp> :
                                                                                                                          active === 'class' ?
                                                                                                                            <ClassComp></ClassComp> :
                                                                                                                            active === 'error-handling' ?
                                                                                                                              <TryCatchComp></TryCatchComp> :
                                                                                                                              active === 'es6-introduction' ?
                                                                                                                                <ESFeatures></ESFeatures> :
                                                                                                                                active === 'arrow-function' ?
                                                                                                                                  <ArrowFunc></ArrowFunc> :
                                                                                                                                  active === 'es6-let' ?
                                                                                                                                    <LetJs></LetJs> :
                                                                                                                                    active === 'es6-const' ?
                                                                                                                                      <ConstJs></ConstJs> :
                                                                                                                                      active === 'destructuring' ?
                                                                                                                                        <DesctructuringComp></DesctructuringComp> :
                                                                                                                                        active === 'modules' ?
                                                                                                                                          <ModulesComp></ModulesComp> :
                                                                                                                                          active === 'func_declaration' ?
                                                                                                                                            <FuncDeclaration></FuncDeclaration> :
                                                                                                                                            active === 'func-expressions' ?
                                                                                                                                              <FuncExpressions></FuncExpressions> :
                                                                                                                                              active === 'anonymous-function' ?
                                                                                                                                                <AnonymousFunc></AnonymousFunc> :
                                                                                                                                                active === 'callbacks' ?
                                                                                                                                                  <CallbackComp></CallbackComp> :
                                                                                                                                                  active === 'asynchronous' ?
                                                                                                                                                    <AsynchronousComp></AsynchronousComp> :
                                                                                                                                                    active === 'promise' ?
                                                                                                                                                      <PromisComp></PromisComp> :
                                                                                                                                                      active === 'async-await' ?
                                                                                                                                                        <AsyncAwaitComp></AsyncAwaitComp> :
                                                                                                                                                        active === 'dom-introduction' ?
                                                                                                                                                          <DomIntroduction></DomIntroduction> :
                                                                                                                                                          active === 'selectors' ?
                                                                                                                                                            <Selectors></Selectors> :
                                                                                                                                                            active === 'selectors' ?
                                                                                                                                                              <Selectors></Selectors> :
                                                                                                                                                              active === 'dom-styling' ?
                                                                                                                                                                <DomStyles></DomStyles> :
                                                                                                                                                                active === 'dom-events' ?
                                                                                                                                                                  <DomEvents></DomEvents> :
                                                                                                                                                                  active === 'dom-event-listener' ?
                                                                                                                                                                    <EventListener></EventListener> :
                                                                                                                                                                    active === 'react-introduction' ?
                                                                                                                                                                      <ReactIntroduction></ReactIntroduction> :
                                                                                                                                                                      active === 'react-installation' ?
                                                                                                                                                                        <ReactInstallation></ReactInstallation> :
                                                                                                                                                                        active === 'react-jsx' ?
                                                                                                                                                                          <ReactJSX></ReactJSX> :
                                                                                                                                                                          active === 'react-component' ?
                                                                                                                                                                            <ReactComponent></ReactComponent> :
                                                                                                                                                                            active === 'react-props' ?
                                                                                                                                                                              <ReactProps></ReactProps> :
                                                                                                                                                                              active === 'react-events' ?
                                                                                                                                                                                <ReactEvent></ReactEvent> :
                                                                                                                                                                                active === 'react-conditional-rendering' ?
                                                                                                                                                                                  <CondionalRendering></CondionalRendering> :
                                                                                                                                                                                  active === 'react-list' ?
                                                                                                                                                                                    <ReactList></ReactList> :
                                                                                                                                                                                    active === 'react-form' ?
                                                                                                                                                                                      <ReactForm></ReactForm> :
                                                                                                                                                                                      active === 'hooks-introduction' ?
                                                                                                                                                                                        <HooksIntro></HooksIntro> :
                                                                                                                                                                                        active === 'hooks-useState' ?
                                                                                                                                                                                          <HooksUseState></HooksUseState> :
                                                                                                                                                                                          active === 'hooks-useEffect' ?
                                                                                                                                                                                            <HooksUseEffect></HooksUseEffect> :
                                                                                                                                                                                            active === 'hooks-useContext' ?
                                                                                                                                                                                              <HooksUseContext></HooksUseContext> :
                                                                                                                                                                                              active === 'nodejs-introduction' ?
                                                                                                                                                                                                <NodeIntroduction></NodeIntroduction> :
                                                                                                                                                                                                active === 'nodejs-server' ?
                                                                                                                                                                                                  <NodeServer></NodeServer> :
                                                                                                                                                                                                  active === 'expreejs-introduction' ?
                                                                                                                                                                                                    <ExpressIntro></ExpressIntro> :
                                                                                                                                                                                                    active === 'expreejs-installation' ?
                                                                                                                                                                                                    <InstallSetup></InstallSetup> :
                                                                                                                                                                                                    active === 'req-object' ?
                                                                                                                                                                                                    <ReqObj></ReqObj> :
                                                                                                                                                                                                    active === 'res-object' ?
                                                                                                                                                                                                    <ResObj></ResObj> :
                                                                                                                                                                                                    ''
        }
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
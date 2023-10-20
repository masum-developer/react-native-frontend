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
import NodeInstallation from '../src/components/nodejs/NodeInstallation';
import ExpressIntro from '../src/components/express/ExpressIntro';
import InstallSetup from '../src/components/express/InstallSetup';
import ReqObj from '../src/components/express/ReqObj';
import ResObj from '../src/components/express/ResObj';
import WebsiteLayout from '../src/components/css/WebsiteLayout';
import CssAnimation from '../src/components/css/CssAnimation';
import NavigationBar from '../src/components/css/NavigationBar';
import WhileLoop from '../src/components/js/WhileLoop';
import DoWhileLoop from '../src/components/js/DoWhileLoop';
import StatusCode from '../src/components/express/StatusCode';
import ExpressRouting from '../src/components/express/ExpressRouting';
import HTTPMethods from '../src/components/express/HTTPMethods';
import MiddlewareExpress from '../src/components/express/MiddlewareExpress';
import ErrorHandlingExpress from '../src/components/express/ErrorHandlingExpress';
import DBIntroduction from '../src/components/databases/DBIntroduction';
import GettingStartedMongoDB from '../src/components/databases/GettingStartedMongoDB';
import MongoDBQuery from '../src/components/databases/MongoDBQuery';
import MongoDBAtlas from '../src/components/databases/MongoDBAtlas';
import MongoDBDatabase from '../src/components/databases/MongoDBDatabase';
import MongoDBInsert from '../src/components/databases/MongoDBInsert';
import MongoDBFind from '../src/components/databases/MongoDBFind';
import MongoDBUpdate from '../src/components/databases/MongoDBUpdate';
import MongoDBDelete from '../src/components/databases/MongoDBDelete';
import CoreJs from '../src/components/CoreJavaScript/CoreJs';
import StringJs from '../src/components/CoreJavaScript/StringJs';
import OpacityCSS from '../src/components/css/Opacity';
import CssShadows from '../src/components/css/CssShadows';
import Transition from '../src/components/css/Transition';
import MediaQueries from '../src/components/css/MediaQueries';
import SassIntroduction from '../src/components/sass/SassIntroduction';
import SassInstallation from '../src/components/sass/SassInstallation';
import SassVariable from '../src/components/sass/Variable';
import Nesting from '../src/components/sass/Nesting';
import SassImport from '../src/components/sass/SassImport';
import Mixin from '../src/components/sass/Mixin';
import Extend from '../src/components/sass/Extend';
import SassString from '../src/components/sass/SassString';
import Numberic from '../src/components/sass/Numberic';
import SassList from '../src/components/sass/SassList';
import Map from '../src/components/sass/Map';
import SassSelectors from '../src/components/sass/SassSelectors';
import SassColors from '../src/components/sass/SassColors';
import LoopJs from '../src/components/CoreJavaScript/LoopJs';
import ArrayJs from '../src/components/CoreJavaScript/ArrayJs';
import ObjectJs from '../src/components/CoreJavaScript/ObjectJs';
import AgileLogin from '../src/components/agileALM/module/AgileLogin';
import AgileRegister from '../src/components/agileALM/module/AgileRegister';
import AgileForgetPass from '../src/components/agileALM/module/AgileForgetPass';
import ShowProject from '../src/components/agileALM/module/ShowProject';
import CreateProject from '../src/components/agileALM/module/CreateProject';
import AddUserToProject from '../src/components/agileALM/module/AddUserToProject';
import ItemSearch from '../src/components/agileALM/module/ItemSearch';
import ShowDashboard from '../src/components/agileALM/module/ShowDashboard';
import ItemsFilter from '../src/components/agileALM/module/ItemsFilter';
import WorkItemModal from '../src/components/agileALM/module/WorkItemModal';
import CreateOrganization from '../src/components/agileALM/module/CreateOrganization';
import AddUserToOrg from '../src/components/agileALM/module/AddUserToOrg';
import CreateSprint from '../src/components/agileALM/module/CreateSprint';
import UpdateSprint from '../src/components/agileALM/module/UpdateSprint';
import GetRetroBoard from '../src/components/agileALM/module/GetRetroBoard';
import RetroDelete from '../src/components/agileALM/module/RetroDelete';
import SingleRetro from '../src/components/agileALM/module/SingleRetro';
import CreateRetro from '../src/components/agileALM/module/CreateRetro';
import Responsiveness from '../src/components/css/Responsiveness';
import CreateCommentRetro from '../src/components/agileALM/module/CreateCommentRetro';
import RetroLike from '../src/components/agileALM/module/RetroLike';
import ProjectStructure from '../src/components/react/ProjectStructure';
import ExpressProjectStructure from '../src/components/express/ExpressProjectStructure';
import QueryOperator from '../src/components/databases/QueryOperator';
import AggregationsIntro from '../src/components/databases/Aggregations/AggregationsIntro';
import AggregationGroup from '../src/components/databases/Aggregations/AggregationGroup';
import AggregationsLimit from '../src/components/databases/Aggregations/AggregationsLimit';
import AggregationProject from '../src/components/databases/Aggregations/AggregationProject';

import NextIntroduction from '../src/components/nextjs/NextIntroduction';
import NextInstallation from '../src/components/nextjs/NextInstallation';
import NextProjectStructure from '../src/components/nextjs/NextProjectStructure';
import NextRouting from '../src/components/nextjs/NextRouting';
import NextErrorPage from '../src/components/nextjs/NextErrorPage';
import NextLayouts from '../src/components/nextjs/NextLayouts';
import NextImageComponents from '../src/components/nextjs/NextImageComponents';
import NextScript from '../src/components/nextjs/NextScript';
import NextHead from '../src/components/nextjs/NextHead';
import NextLink from '../src/components/nextjs/NextLink';
import NextStyling from '../src/components/nextjs/NextStyling';
import NextgetStaticProps from '../src/components/nextjs/NextgetStaticProps';
import NextgetServerSideProps from '../src/components/nextjs/NextgetServerSideProps';

import ReduxIntroduction from '../src/components/redux/ReduxIntroduction';
import ReduxInstallation from '../src/components/redux/ReduxInstallation';
import ReduxConcepts from '../src/components/redux/ReduxConcepts';
import ReduxUsage from '../src/components/redux/ReduxUsage';

import CypressIntroduction from '../src/components/cypress/CypressIntroduction';
import CypressPreReqs from '../src/components/cypress/CypressPreReqs';
import CypressSetup from '../src/components/cypress/CypressSetup';
import CypressProjectStructure from '../src/components/cypress/CypressProjectStructure';
import CypressAssertion from '../src/components/cypress/CypressAssertion';
import CypressLocators from '../src/components/cypress/CypressLocators';

import PageObjectModel from '../src/components/web-automation/PageObjectModel';
import LoginAgileALM from '../src/components/web-automation/LoginAgileALM';
import SelectorsHub from '../src/components/web-automation/SelectorsHub';
import OrganizationAgileALM from '../src/components/web-automation/OrganizationAgileALM';
import ProjectAgileALM from '../src/components/web-automation/ProjectAgileALM';


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
                                                                                            <CssGrid></CssGrid> :
                                                                                            active === 'websitelayout' ?
                                                                                              <WebsiteLayout></WebsiteLayout> :
                                                                                              active === 'cssanimation' ?
                                                                                                <CssAnimation></CssAnimation> :
                                                                                                active === 'navigationbar' ?
                                                                                                  <NavigationBar></NavigationBar> :
                                                                                                  active === 'opacity' ?
                                                                                                    <OpacityCSS></OpacityCSS> :
                                                                                                    active === "shadows" ?
                                                                                                      <CssShadows></CssShadows> :
                                                                                                      active === 'transition' ?
                                                                                                        <Transition></Transition> :
                                                                                                        active === 'mediaqueries' ?
                                                                                                          <Transition></Transition> :
                                                                                                          active === 'responsiveness' ?
                                                                                                            <Responsiveness></Responsiveness> :
                                                                                                            active === 'sassintroduction' ?
                                                                                                              <SassIntroduction></SassIntroduction> :
                                                                                                              active === "sassinstallation" ?
                                                                                                                <SassInstallation></SassInstallation> :
                                                                                                                active === "sassvariable" ?
                                                                                                                  <SassVariable></SassVariable> :
                                                                                                                  active === "nesting" ?
                                                                                                                    <Nesting></Nesting> :
                                                                                                                    active === "import" ?
                                                                                                                      <SassImport></SassImport> :
                                                                                                                      active === "mixin" ?
                                                                                                                        <Mixin></Mixin> :
                                                                                                                        active === "extend" ?
                                                                                                                          <Extend></Extend> :
                                                                                                                          active === "sassstring" ?
                                                                                                                            <SassString></SassString> :
                                                                                                                            active === "numberic" ?
                                                                                                                              <Numberic></Numberic> :
                                                                                                                              active === "sasslist" ?
                                                                                                                                <SassList></SassList> :
                                                                                                                                active === "map" ?
                                                                                                                                  <Map></Map> :
                                                                                                                                  active === 'sassselector' ?
                                                                                                                                    <SassSelectors></SassSelectors> :
                                                                                                                                    active === 'sasscolors' ?
                                                                                                                                      <SassColors></SassColors> :
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
                                                                                                                                                                                  active === 'whileloop' ?
                                                                                                                                                                                    <WhileLoop></WhileLoop> :
                                                                                                                                                                                    active === "dowhileloop" ?
                                                                                                                                                                                      <DoWhileLoop></DoWhileLoop> :
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
                                                                                                                                                                                                                                    active === 'dom-selectors' ?
                                                                                                                                                                                                                                      <DomSelectors></DomSelectors> :
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
                                                                                                                                                                                                                                                                                  active === 'status-code' ?
                                                                                                                                                                                                                                                                                    <StatusCode></StatusCode> :
                                                                                                                                                                                                                                                                                    active === 'express-js-routing' ?
                                                                                                                                                                                                                                                                                      <ExpressRouting></ExpressRouting> :
                                                                                                                                                                                                                                                                                      active === 'http-methods' ?
                                                                                                                                                                                                                                                                                        <HTTPMethods></HTTPMethods> :
                                                                                                                                                                                                                                                                                        active === 'middleware' ?
                                                                                                                                                                                                                                                                                          <MiddlewareExpress></MiddlewareExpress> :
                                                                                                                                                                                                                                                                                          active === 'express-error-handling' ?
                                                                                                                                                                                                                                                                                            <ErrorHandlingExpress></ErrorHandlingExpress> :
                                                                                                                                                                                                                                                                                            active === 'db-introduction' ?
                                                                                                                                                                                                                                                                                              <DBIntroduction></DBIntroduction> :
                                                                                                                                                                                                                                                                                              active === 'mongodb-getting-started' ?
                                                                                                                                                                                                                                                                                                <GettingStartedMongoDB></GettingStartedMongoDB> :
                                                                                                                                                                                                                                                                                                active === 'mongodb-query' ?
                                                                                                                                                                                                                                                                                                  <MongoDBQuery></MongoDBQuery> :
                                                                                                                                                                                                                                                                                                  active === 'mongodb-atlas' ?
                                                                                                                                                                                                                                                                                                    <MongoDBAtlas></MongoDBAtlas> :
                                                                                                                                                                                                                                                                                                    active === 'mongodb-database-collection' ?
                                                                                                                                                                                                                                                                                                      <MongoDBDatabase></MongoDBDatabase> :
                                                                                                                                                                                                                                                                                                      active === 'mongodb-insert' ?
                                                                                                                                                                                                                                                                                                        <MongoDBInsert></MongoDBInsert> :
                                                                                                                                                                                                                                                                                                        active === 'mongodb-find' ?
                                                                                                                                                                                                                                                                                                          <MongoDBFind></MongoDBFind> :
                                                                                                                                                                                                                                                                                                          active === 'mongodb-update' ?
                                                                                                                                                                                                                                                                                                            <MongoDBUpdate></MongoDBUpdate> :
                                                                                                                                                                                                                                                                                                            active === 'mongodb-delete' ?
                                                                                                                                                                                                                                                                                                              <MongoDBDelete></MongoDBDelete> :
                                                                                                                                                                                                                                                                                                              active === 'mongodb-query-operator' ?
                                                                                                                                                                                                                                                                                                                <QueryOperator></QueryOperator> :
                                                                                                                                                                                                                                                                                                                active === 'aggregations-introduction' ?
                                                                                                                                                                                                                                                                                                                  <AggregationsIntro></AggregationsIntro> :
                                                                                                                                                                                                                                                                                                                  active === 'aggregations-group' ?
                                                                                                                                                                                                                                                                                                                    <AggregationGroup></AggregationGroup> :
                                                                                                                                                                                                                                                                                                                    active === 'aggregations-limit' ?
                                                                                                                                                                                                                                                                                                                      <AggregationsLimit></AggregationsLimit> :
                                                                                                                                                                                                                                                                                                                      active === 'aggregations-project' ?
                                                                                                                                                                                                                                                                                                                        <AggregationProject></AggregationProject> :
                                                                                                                                                                                                                                                                                                                        active === 'core-javascript' ?
                                                                                                                                                                                                                                                                                                                          <CoreJs></CoreJs> :
                                                                                                                                                                                                                                                                                                                          active === 'js-string' ?
                                                                                                                                                                                                                                                                                                                            <StringJs></StringJs> :
                                                                                                                                                                                                                                                                                                                            active === 'js-loop' ?
                                                                                                                                                                                                                                                                                                                              <LoopJs></LoopJs> :
                                                                                                                                                                                                                                                                                                                              active === 'js-array' ?
                                                                                                                                                                                                                                                                                                                                <ArrayJs></ArrayJs> :
                                                                                                                                                                                                                                                                                                                                active === 'js-object' ?
                                                                                                                                                                                                                                                                                                                                  <ObjectJs></ObjectJs> :
                                                                                                                                                                                                                                                                                                                                  active === 'agileALM-login' ?
                                                                                                                                                                                                                                                                                                                                    <AgileLogin></AgileLogin> :
                                                                                                                                                                                                                                                                                                                                    active === 'agileALM-register' ?
                                                                                                                                                                                                                                                                                                                                      <AgileRegister></AgileRegister> :
                                                                                                                                                                                                                                                                                                                                      active === 'agileALM-forgetPassword' ?
                                                                                                                                                                                                                                                                                                                                        <AgileForgetPass></AgileForgetPass> :
                                                                                                                                                                                                                                                                                                                                        active === 'agileALM-showproject' ?
                                                                                                                                                                                                                                                                                                                                          <ShowProject></ShowProject> :
                                                                                                                                                                                                                                                                                                                                          active === 'agileALM-createproject' ?
                                                                                                                                                                                                                                                                                                                                            <CreateProject></CreateProject> :
                                                                                                                                                                                                                                                                                                                                            active === 'agileALM-addUserToProject' ?
                                                                                                                                                                                                                                                                                                                                              <AddUserToProject></AddUserToProject> :
                                                                                                                                                                                                                                                                                                                                              active === 'agileALM-itemSearch' ?
                                                                                                                                                                                                                                                                                                                                                <ItemSearch></ItemSearch> :
                                                                                                                                                                                                                                                                                                                                                active === 'agileALM-dashboard' ?
                                                                                                                                                                                                                                                                                                                                                  <ShowDashboard></ShowDashboard> :
                                                                                                                                                                                                                                                                                                                                                  active === 'agileALM-itemsFilter' ?
                                                                                                                                                                                                                                                                                                                                                    <ItemsFilter></ItemsFilter> :
                                                                                                                                                                                                                                                                                                                                                    active === 'agileALM-workItemModal' ?
                                                                                                                                                                                                                                                                                                                                                      <WorkItemModal></WorkItemModal> :
                                                                                                                                                                                                                                                                                                                                                      active === 'agileALM-createOrganization' ?
                                                                                                                                                                                                                                                                                                                                                        <CreateOrganization></CreateOrganization> :
                                                                                                                                                                                                                                                                                                                                                        active === 'agileALM-addUserToOrg' ?
                                                                                                                                                                                                                                                                                                                                                          <AddUserToOrg></AddUserToOrg> :
                                                                                                                                                                                                                                                                                                                                                          active === 'agileALM-createSprint' ?
                                                                                                                                                                                                                                                                                                                                                            <CreateSprint></CreateSprint> :
                                                                                                                                                                                                                                                                                                                                                            active === 'agileALM-retro-view' ?
                                                                                                                                                                                                                                                                                                                                                              <GetRetroBoard></GetRetroBoard> :
                                                                                                                                                                                                                                                                                                                                                              active === 'agileALM-retro-delete' ?
                                                                                                                                                                                                                                                                                                                                                                <RetroDelete></RetroDelete> :
                                                                                                                                                                                                                                                                                                                                                                active === 'agileALM-retro-sprint-experience' ?
                                                                                                                                                                                                                                                                                                                                                                  <SingleRetro></SingleRetro> :
                                                                                                                                                                                                                                                                                                                                                                  active === 'agileALM-retro-create' ?
                                                                                                                                                                                                                                                                                                                                                                    <CreateRetro></CreateRetro> :
                                                                                                                                                                                                                                                                                                                                                                    active === 'agileALM-retro-comments' ?
                                                                                                                                                                                                                                                                                                                                                                      <CreateCommentRetro></CreateCommentRetro> :
                                                                                                                                                                                                                                                                                                                                                                      active === 'agileALM-retro-like' ?
                                                                                                                                                                                                                                                                                                                                                                        <RetroLike></RetroLike> :
                                                                                                                                                                                                                                                                                                                                                                        active === 'react-project-structure' ?
                                                                                                                                                                                                                                                                                                                                                                          <ProjectStructure></ProjectStructure> :
                                                                                                                                                                                                                                                                                                                                                                          active === 'express-project-structure' ?
                                                                                                                                                                                                                                                                                                                                                                            <ExpressProjectStructure></ExpressProjectStructure> :
                                                                                                                                                                                                                                                                                                                                                                            active === 'next-introduction' ?
                                                                                                                                                                                                                                                                                                                                                                              <NextIntroduction></NextIntroduction> :
                                                                                                                                                                                                                                                                                                                                                                              active === 'next-installation' ? 
                                                                                                                                                                                                                                                                                                                                                                               <NextInstallation></NextInstallation> :
                                                                                                                                                                                                                                                                                                                                                                               active === 'next-project-structure' ? 
                                                                                                                                                                                                                                                                                                                                                                                <NextProjectStructure></NextProjectStructure> :
                                                                                                                                                                                                                                                                                                                                                                                active === 'next-routing' ? 
                                                                                                                                                                                                                                                                                                                                                                                 <NextRouting></NextRouting> :
                                                                                                                                                                                                                                                                                                                                                                                 active === 'next-error-page' ?
                                                                                                                                                                                                                                                                                                                                                                                  <NextErrorPage></NextErrorPage> :
                                                                                                                                                                                                                                                                                                                                                                                  active === 'next-layouts' ?
                                                                                                                                                                                                                                                                                                                                                                                   <NextLayouts></NextLayouts> :
                                                                                                                                                                                                                                                                                                                                                                                   active === 'next-image-components' ?
                                                                                                                                                                                                                                                                                                                                                                                    <NextImageComponents></NextImageComponents> :
                                                                                                                                                                                                                                                                                                                                                                                    active === 'next-script-components' ?
                                                                                                                                                                                                                                                                                                                                                                                     <NextScript></NextScript> :
                                                                                                                                                                                                                                                                                                                                                                                     active === 'next-head-components' ?
                                                                                                                                                                                                                                                                                                                                                                                      <NextHead></NextHead> :
                                                                                                                                                                                                                                                                                                                                                                                      active === 'next-link-components' ?
                                                                                                                                                                                                                                                                                                                                                                                       <NextLink></NextLink> :
                                                                                                                                                                                                                                                                                                                                                                                       active === 'next-styling' ?
                                                                                                                                                                                                                                                                                                                                                                                        <NextStyling></NextStyling> :
                                                                                                                                                                                                                                                                                                                                                                                        active === 'next-getStaticProps' ?
                                                                                                                                                                                                                                                                                                                                                                                         <NextgetStaticProps></NextgetStaticProps> :
                                                                                                                                                                                                                                                                                                                                                                                         active === 'next-getServerSideProps' ?
                                                                                                                                                                                                                                                                                                                                                                                          <NextgetServerSideProps></NextgetServerSideProps> :
                                                                                                                                                                                                                                                                                                                                                                                          active === 'redux-introduction' ?
                                                                                                                                                                                                                                                                                                                                                                                           <ReduxIntroduction></ReduxIntroduction> :
                                                                                                                                                                                                                                                                                                                                                                                           active === 'redux-installation' ? 
                                                                                                                                                                                                                                                                                                                                                                                            <ReduxInstallation></ReduxInstallation> :
                                                                                                                                                                                                                                                                                                                                                                                            active === 'redux-concepts' ? 
                                                                                                                                                                                                                                                                                                                                                                                             <ReduxConcepts></ReduxConcepts> :
                                                                                                                                                                                                                                                                                                                                                                                             active === 'redux-usage' ?
                                                                                                                                                                                                                                                                                                                                                                                              <ReduxUsage></ReduxUsage> :
                                                                                                                                                                                                                                                                                                                                                                                              active === 'nodejs-installation' ? 
                                                                                                                                                                                                                                                                                                                                                                                              <NodeInstallation></NodeInstallation> :
                                                                                                                                                                                                                                                                                                                                                                                                active === 'cypress-introduction' ? 
                                                                                                                                                                                                                                                                                                                                                                                                <CypressIntroduction></CypressIntroduction> :
                                                                                                                                                                                                                                                                                                                                                                                                  active === 'cypress-pre-reqs' ? 
                                                                                                                                                                                                                                                                                                                                                                                                  <CypressPreReqs></CypressPreReqs> :
                                                                                                                                                                                                                                                                                                                                                                                                    active === 'cypress-setup' ?
                                                                                                                                                                                                                                                                                                                                                                                                    <CypressSetup></CypressSetup> :
                                                                                                                                                                                                                                                                                                                                                                                                      active === 'cypress-project-structure' ?
                                                                                                                                                                                                                                                                                                                                                                                                      <CypressProjectStructure></CypressProjectStructure> :
                                                                                                                                                                                                                                                                                                                                                                                                        active === 'cypress-assertions' ? 
                                                                                                                                                                                                                                                                                                                                                                                                        <CypressAssertion></CypressAssertion> :
                                                                                                                                                                                                                                                                                                                                                                                                          active === 'cypress-locators' ?
                                                                                                                                                                                                                                                                                                                                                                                                          <CypressLocators></CypressLocators> :
                                                                                                                                                                                                                                                                                                                                                                                                            active === 'POM-introduction' ?
                                                                                                                                                                                                                                                                                                                                                                                                            <PageObjectModel></PageObjectModel> :
                                                                                                                                                                                                                                                                                                                                                                                                              active === 'login-automation' ?
                                                                                                                                                                                                                                                                                                                                                                                                              <LoginAgileALM></LoginAgileALM> :
                                                                                                                                                                                                                                                                                                                                                                                                                active === 'selectors-hub' ?
                                                                                                                                                                                                                                                                                                                                                                                                                <SelectorsHub></SelectorsHub> :
                                                                                                                                                                                                                                                                                                                                                                                                                  active === 'create-organization-automation' ?
                                                                                                                                                                                                                                                                                                                                                                                                                  <OrganizationAgileALM></OrganizationAgileALM> :
                                                                                                                                                                                                                                                                                                                                                                                                                   active === 'create-project-automation' ? 
                                                                                                                                                                                                                                                                                                                                                                                                                   <ProjectAgileALM></ProjectAgileALM> :
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
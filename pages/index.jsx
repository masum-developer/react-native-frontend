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
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';
import Process from '../EnvironmentSetup/Process';
import coreJavaScript from '../../staticData/coreJavaScript';
import DesignedTechnicalBox from '../global/DesignedTechnicalBox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { stringData } from '../../staticData/stringData';

const StringJs = () => {
    return (
        <Box pb={2}>
            <Typography variant='h3'>
                Technical Assessment of JavaScript (String)
            </Typography>
            {stringData?.map(data => <DesignedTechnicalBox marginT="20px" key={data?.id}>

                <Accordion sx={{ padding: '10px' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={`panel1a-header_${data?.id}`}
                    >
                        <Typography varient="subtitle1" className={data?.id}><strong>{data?.id}.</strong>{"  "}{data?.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CodeBox codeSnippet={data?.codeSnippet}></CodeBox>
                    </AccordionDetails>
                </Accordion>

            </DesignedTechnicalBox>)}
        </Box>
    );
};

export default StringJs;
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ButtonComp } from '../ui/Button';
import Link from 'next/link';
import ImageComp from '../EnvironmentSetup/ImageComp';
// import Image from 'next/image';


const MernRoadmap = () => {
    return (
    
        <Container >
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ margin: 'auto' }}>
                    <Typography variant='h1'>
                        MERN Stack Bootcamp Roadmap
                    </Typography>
                    
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ maxWidth: '100%' }} src="roadmap/MERN.jpg" alt="My Image" width={500} height={500}></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MernRoadmap;
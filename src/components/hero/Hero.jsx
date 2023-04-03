import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ButtonComp } from '../ui/Button';
import Link from 'next/Link';

const Hero = () => {
    return (
        <Container sx={{ py: 15, margin: '100px' }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ margin: 'auto' }}>
                    <Typography variant='h1'>
                        Learn MERN stack and become a JavaScript developer.
                    </Typography>
                    <Typography variant='subtitle1'>
                        Explore MERN stack courses to expand your web development knowledge
                    </Typography>
                    <ButtonComp sx={{ mt: 2 }} myWidth='150px'>
                        <Link href="?tab=html_introduction">
                            <a style={{ textDecoration: 'none' }}>
                                Learn More
                            </a>
                        </Link>
                    </ButtonComp>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ maxWidth: '100%' }} src='heroCode2.jpeg' alt="hero"></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Hero;
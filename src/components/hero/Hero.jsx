import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ButtonComp } from '../ui/Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <Container sx={{ py: {md: 15}, margin: { md: '100px' } }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ margin: 'auto' }}>
                    <Typography variant='h1'>
                        Learn MERN stack and become a Full-Stack Developer
                    </Typography>
                    <Typography variant='subtitle1' maxWidth={'80%'}>
                        Explore MERN stack course to expand your web development knowledge.
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
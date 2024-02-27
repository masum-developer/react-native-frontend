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
                        Learn React Native and become a Mobile App Developer
                    </Typography>
                    <Typography variant='subtitle1' maxWidth={'80%'}>
                        Explore React Native course to expand your Mobile App development knowledge.
                    </Typography>
                    <ButtonComp sx={{ mt: 2 }} myWidth='150px'>
                        <Link href="?tab=html_introduction">
                            <a style={{ textDecoration: 'none' }}>
                                Learn More
                            </a>
                        </Link>
                    </ButtonComp>
                </Grid>
              
            </Grid>
        </Container>
    );
};

export default Hero;
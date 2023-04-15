import { Box } from '@mui/material';
import React from 'react';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
// import "react-awesome-lightbox/build/style.css";

let images = [
    {
        url:"https://saylordotorg.github.io/text_intermediate-algebra/section_05/538cb1154350e95b228f9cbbd27adb71.png",
        title:"image title 1"
    },
    {
        url:"https://saylordotorg.github.io/text_intermediate-algebra/section_05/538cb1154350e95b228f9cbbd27adb71.png",
        title:"image title 2"
    }
]

const ImageContainer = () => {
    return (
        <Box>
            <Lightbox image="https://saylordotorg.github.io/text_intermediate-algebra/section_05/538cb1154350e95b228f9cbbd27adb71.png" title="Image Title"></Lightbox>
        </Box>
    );
};

export default ImageContainer;
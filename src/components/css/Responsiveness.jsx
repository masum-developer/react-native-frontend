import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import MuiAlert from '@mui/material/Alert';

const list = [
    "Increased Mobile Usage: With the widespread adoption of smartphones and tablets, more people are accessing the internet on mobile devices than ever before. A responsive website ensures that your content is accessible and readable across different screen sizes, providing a positive user experience for mobile users.",

    "Improved User Experience: Responsive design optimizes the layout and usability of your website on different devices. By adapting the design to the screen size, users can easily navigate, read content, and interact with your website, leading to better engagement and increased time spent on your site.",

    "SEO Benefits: Search engines like Google consider mobile-friendliness as a ranking factor. Responsive websites are more likely to rank higher in search engine results pages (SERPs) for mobile searches. Additionally, responsive design avoids issues such as duplicate content or separate mobile URLs, which can negatively impact SEO.",

];

const list1 = [
    "Use Responsive Design Frameworks: Utilize responsive design frameworks like Bootstrap or Foundation that provide pre-built responsive components and a responsive grid system. These frameworks can help you achieve a responsive layout quickly",

    "Apply Fluid Grids: Design your website layout using fluid grids instead of fixed-width layouts. Fluid grids use proportional widths and percentages instead of fixed pixel values, allowing elements to adjust their size based on the screen size.",

    "Use Media Queries: Apply CSS media queries to target different screen sizes and apply specific styles. Media queries allow you to define different CSS rules based on factors such as screen width, height, and device orientation.",

    "Optimize Images: Optimize images for the web by reducing their file size without compromising quality. Use responsive image techniques, such as the <picture> element or CSS background-image, to load different image sizes based on the device's resolution or screen size.",

    "Test Across Devices: Test your website on various devices and screen sizes to ensure it displays and functions correctly. Use browser developer tools, online emulators, or physical devices to simulate different screen sizes and orientations.",

    "Continuous Testing and Refinement: Regularly test your website on different devices, monitor user feedback, and make iterative improvements. Keep up with evolving web standards and technologies to adapt your website's responsiveness over time."
];

const codeblock = `@media media-type and (media-feature: value) {
    /* CSS styles to apply when the media query condition is met */
}`;

const list2 = [
    "@media: This keyword initiates a media query rule.",
    "media-type: It specifies the type of media the query is targeting, such as screen, print, speech, all, or a specific media type like only screen or only print. The most commonly used media type is screen, which targets computer screens and mobile devices.",

    "and: The logical operator used to combine multiple media features within a single media query.",

    "media-feature: It defines a specific characteristic or condition that the media query tests for. Examples of media features include width, height, device-width, orientation, color, resolution, and more. Each media feature has its own set of possible values.",

    "value: It represents the value or range of values for the specified media feature. For example, width: 768px or orientation: landscape.",

    "CSS styles: Within the curly braces {}, you can write the CSS styles that will be applied when the media query condition is met. These styles can modify existing styles or introduce new styles specifically for the targeted devices or screen sizes."
]

const codeblock2 = `@media (max-width: 768px) {
    /* CSS styles to apply for screens with a maximum width of 768 pixels */
    body {
      font-size: 14px;
    }
    .container {
      width: 100%;
    }
  }`

const Responsiveness = () => {
    return (
        <Box>
            <Typography variant='h3'>What is a responsive website?</Typography>
            <Typography variant='subtitle2'>
                A responsive website refers to a website design and development approach that aims to provide an optimal viewing and user experience across various devices and screen sizes. In other words, a responsive website adapts and adjusts its layout, content, and functionality to ensure usability and readability regardless of the device being used, such as desktop computers, laptops, tablets, and smartphones.
            </Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why we need responsive website?</Typography>

                <Block list={list}></Block>

                <Typography variant='subtitle2'>
                    In summary, a responsive website is crucial for catering to the diverse range of devices used by audiences, ensuring a positive user experience, improving search engine visibility, reducing costs, and future-proofing your online presence. It is a fundamental component of modern web design and an important consideration for businesses and organizations of all sizes.
                </Typography>
            </Box>



            <Box mt={3}>
                <Typography variant='h3'>How to make website responsive?</Typography>
                <Typography variant='subtitle2'>
                    To make a website responsive, you can follow these step-by-step processes:
                </Typography>
                <Block list={list1}></Block>
            </Box>

            <Box mt={3}>
                <MuiAlert severity="info" variant="filled">We'll use media queries most of the time.
                </MuiAlert>
            </Box>

            <Box mt={3}>

                <Typography variant='h3'>Media Query Syntax</Typography>
                <Typography variant='subtitle2'>
                    The syntax of a media query in CSS follows the @media rule and has the following structure:
                </Typography>
                <CodeBox codeSnippet={codeblock}></CodeBox>

                <Typography variant='subtitle2'>
                    Let's break down the different parts of the syntax:
                </Typography>
                <Block list={list2}></Block>

                <Typography variant='subtitle2'>
                    Here's an example of a media query that applies specific styles for screens with a maximum width of 768 pixels:
                </Typography>

                <CodeBox codeSnippet={codeblock2}></CodeBox>
            </Box>

        </Box>
    );
};

export default Responsiveness;
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';



const NextRouting = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>Routing in NextJS</Typography>
            <Typography variant='subtitle2'>
                Routing is an essential aspect of any web application, allowing users to navigate between different pages or views. In Next.js, routing is handled through a file-based routing system, making it intuitive and straightforward to define routes for your application.
            </Typography>

            <Typography variant='subtitle2'>
            Next.js provides a convention-based routing mechanism where each file inside the pages directory represents a unique route in your application.
            </Typography>

            <Box pb={3}>
                <Typography mt={2} variant='subtitle2'>Before we get into the different types of routing in Next.js, it is important to understand the <span>Default Route</span>.</Typography>
                <Process list={["The `index.js` file in the pages directory serves as the default route for the root URL of your application."]}></Process>
                <Process list={["What that entails is when you run your application and navigate to `http://localhost:3000` in your browser, Next.js will render the `pages/index.js` in the landing page."]}></Process>
                <Process list={["Go into the `index.js` file in the pages directory and clear out all the boilerplate code. Replace it with `Hello World` in a H1 tag"]}></Process>
                <ImageComp image={"/nextjs/Screenshot_Home.png"} imageTitle={"Home screenshot"}></ImageComp>
                <Process list={["When you access the root URL of your application (e.g., /), the Home component will be rendered."]}></Process>
            </Box>

            <Box pb={3}>
                <Typography mt={2} variant='h4'>1. File-Based Routing:</Typography>
                <Typography mt={2}>
                    Next.js uses a file-based routing approach, which means that each JavaScript file in the pages directory corresponds to a specific URL route. For example, the file `pages/about.js` would be associated with the route `/about`. This allows you to create clean and intuitive URLs that map directly to your application's pages.
                </Typography>
                <ImageComp image={"/nextjs/Screenshot_about.png"} imageTitle={"about codesnippet"}></ImageComp>

                <Typography mt={2} variant='subtitle2'>Now, when you access the route `/about` in your Next.js application, the `About` component will be rendered as follows.</Typography>

            </Box>

            <Box pb={3}>
                <Typography mt={2} variant='h4'>2. Dynamic Routes:</Typography>
                <Typography mt={2}>
                Dynamic pages in Next.js allow you to create web pages that can display different content based on dynamic parameters or variables in the URL. This means you can generate pages that share the same layout or structure but show unique information based on the values provided in the URL.
                </Typography>
                <Typography mt={2}>For example, let's say you have an e-commerce website with product pages. Instead of creating individual pages for each product, dynamic pages allow you to create a single template or layout and dynamically populate it with the relevant product information based on the product ID specified in the URL. </Typography>
                <Typography mt={2}>Let's take a look at this in detail:</Typography>
                <Process list={["Create a `products` folder inside the `pages` directory"]}></Process>
                <Process list={["Create a file named `[productId].js` inside the `pages/products` directory."]}></Process>
                <Process list={["Inside `[productId].js`, you can define the content for a dynamic product page:"]}></Process>
                <ImageComp image={"/nextjs/Screenshot_id.png"} imageTitle={"id"}></ImageComp>
                <Process list={["Note that we are using the useRouter hook to access the dynamic value within the page component"]}></Process>

                <Typography mt={2} variant='subtitle2'>Now, when you access the route `/about` in your Next.js application, the `About` component will be rendered.</Typography>

            </Box>

        </Box>

        
    );
};

export default NextRouting;
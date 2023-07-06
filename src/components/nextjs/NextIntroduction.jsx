import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';

const list = [
    "Improved Performance: Next.js offers server-side rendering (SSR) and static site generation (SSG), resulting in faster page loads and improved performance. SSR allows rendering the initial page on the server, reducing the time it takes for content to be visible to users. SSG generates static HTML files at build time, enabling fast loading times and efficient caching.",
    "SEO Benefits: Server-side rendering is beneficial for search engine optimization (SEO). By providing pre-rendered HTML to search engines, Next.js allows for better indexing and ranking of web pages.",
    "Simplified Development: Next.js provides a streamlined development experience by including built-in routing, hot module replacement (HMR), and other features. It reduces the need for complex configurations, enabling developers to focus more on building features and delivering functionality.",
    "Rich Ecosystem and Community: Next.js has a vibrant ecosystem with extensive documentation, a wide range of plugins and libraries, and an active community. The ecosystem provides tools and resources that make it easier to develop and maintain Next.js applications."
];

const list1 = [
    "Server-side Rendering (SSR): When a user requests a page, Next.js renders the initial HTML on the server and sends it to the client. This approach allows search engines to index the content effectively. Additionally, the pre-rendered HTML provides faster initial page loads for users.",
    "Static Site Generation (SSG): Next.js can also generate static HTML files at build time, which can be served directly from a CDN (Content Delivery Network). This approach eliminates the need to generate pages on the fly for each request, resulting in efficient caching and improved performance.",
    "Client-side React: Once the initial page is loaded, Next.js seamlessly transitions to client-side React. From that point on, the application behaves like a typical React single-page application (SPA), allowing for dynamic updates and interactivity."
]

const NextIntroduction = () => {
    return (
        <Box>
            <Typography variant='h3'>What is NextJS?</Typography>
            <Typography variant='subtitle2'>Next.js is a popular React framework that simplifies the development of server-side rendered and statically generated web applications. It builds upon React and provides additional features and conventions to enhance the development experience. Next.js aims to solve challenges faced by traditional single-page applications (SPAs) built with React by introducing server-side rendering (SSR), static site generation (SSG), and other performance optimizations.</Typography>


                <Box mt={3}>
            <Typography variant='h3'>Why is NextJS used?</Typography>

                    <Typography variant='subtitle2'>Next.js is used for several reasons, including:</Typography>

                    <Block list={list}></Block>
                </Box>

                <Box mt={3}>
            <Typography variant='h3'>How does Next.js work?</Typography>
                    <Typography variant='subtitle2'>Next.js works by combining the benefits of server-side rendering (SSR) and static site generation (SSG) with React. Here's a simplified explanation of how it operates:</Typography>

                    <Block list={list1}></Block>
                </Box>
                <Typography mt={1} variant='subtitle2'>Next.js simplifies the implementation of SSR and SSG by handling the server-side rendering process, managing the client-side hydration, and providing an optimized development experience. It combines the best of both worlds, enabling developers to build high-performance web applications with ease.</Typography>
        </Box>
    );
};

export default NextIntroduction;
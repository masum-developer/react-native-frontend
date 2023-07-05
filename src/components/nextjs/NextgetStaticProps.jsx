import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const code = `// pages/index.js

function HomePage({ posts }) {
  // Render the list of blog posts
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch blog posts from an API
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;

`

const NextgetStaticProps = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">What is Static Generation in NextJS?</Typography>
        
        <Typography mt={1} variant="subtitle2">
        Static Generation is a powerful feature in Next.js that allows you to pre-render pages at build time, serving them as static HTML files. This approach provides excellent performance and SEO benefits, as the pages are fully generated and can be served directly from a CDN (Content Delivery Network), reducing server load and improving loading times. Let's explore one of the key functions in Next.js for static generation: getStaticProps.
        </Typography>

        <Typography mt={3} variant="h3">What is getStaticProps?</Typography>

        <Typography mt={1} variant="subtitle2">getStaticProps is a Next.js function that enables you to fetch data during the build process and pass it as props to a page component. This function is executed at build time, allowing you to dynamically generate pages with data fetched from various sources such as APIs, databases, or static files. It provides a seamless way to create dynamic content within statically generated pages.</Typography>

      </Box>

      <Box>
        <Typography mt={3} variant="h3">Example</Typography>
        <Typography variant='subtitle2'>Lets look at an example for a better understanding. Let's say you have a blog website built with Next.js. You want to fetch a list of blog posts from an external API and display them on the homepage. Here's how you can use getStaticProps to accomplish this:</Typography>
        
        <CodeBox codeSnippet={code}></CodeBox>

        <Typography mt={1} variant='subtitle2'>In this example, the getStaticProps function fetches the list of blog posts from the specified API endpoint. The fetched data (posts) is then passed as props to the HomePage component. Within the component, you can access the posts prop and render the list of blog posts.</Typography>

        <Typography mt={1} variant='subtitle2'>By using getStaticProps, the blog posts are fetched and generated at build time. The resulting HTML page will include the fetched data, making it available to users without any additional server requests. With getStaticProps, you have the flexibility to fetch and pre-render data from various sources, enabling you to build dynamic and performant Next.js applications.</Typography>
      </Box>


    </Box>
  );
};

export default NextgetStaticProps;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Block from "../global/Block";
import CodeBox from "../global/CodeBox";
import ImageComp from "../EnvironmentSetup/ImageComp";
import Process from "../EnvironmentSetup/Process";

const code=`// pages/index.js
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

export async function getServerSideProps() {
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


const NextgetServerSideProps = () => {
  return (
    <Box pb={3}>
      <Box>
        <Typography variant="h3">What is Server-side Rendering in NextJS?</Typography>
        
        <Typography mt={1} variant="subtitle2">
        Server-Side Rendering (SSR) is a rendering technique in Next.js that addresses the limitation of static generation (getStaticProps) by allowing you to fetch data on each request and dynamically generate the page content on the server. While static generation is efficient and ideal for content that doesn't change frequently, it falls short when you need real-time data.
        </Typography>

        <Typography mt={1} variant="subtitle2">The problem with static generation (getStaticProps) is that the data is fetched at build time and becomes static. This means that any updates or changes to the data will not be reflected in the generated page until the next build process. This would be very important in a social media website for example, where there are posts and new content being uploaded onto the site every second. This is where Server-side Rendering and the getServerSideProps function come in.</Typography>

        <Typography mt={3} variant="h3">What is getServerSideProps?</Typography>

        <Typography mt={1} variant="subtitle2">getServerSideProps enables you to fetch data on the server side for each request, ensuring that the content is always up to date. With this approach, you can dynamically generate the page content using the latest data. Whether it's fetching data from an API, or querying a database, getServerSideProps allows you to incorporate real-time data into your pages.</Typography>

        <Typography mt={1} variant="subtitle2">By using getServerSideProps, you can overcome the limitations of static generation and provide a more dynamic and personalized user experience. It ensures that your pages always display the most up-to-date information, making it suitable for scenarios where data changes frequently or depends on user interactions.</Typography>

      </Box>

      <Box>
        <Typography mt={3} variant="h3">Example</Typography>
        <Typography variant='subtitle2'>Lets look at an example for a better understanding. Let's say you have a blog website built with Next.js. You want to fetch a list of blog posts from an external API and display them on the homepage. Here's how you can use getStaticProps to accomplish this:</Typography>
        
        <CodeBox codeSnippet={code}></CodeBox>

        <Typography mt={1} variant='subtitle2'>In this example, the getServerSideProps function is an asynchronous function that fetches blog posts from an API on each request. The fetched data is then passed as props to the HomePage component, which can be accessed as posts within the component.</Typography>

        <Typography mt={1} variant='subtitle2'>Unlike getStaticProps, which fetches data at build time, getServerSideProps fetches data on the server side for every request. This ensures that the page content is always up to date, as the data is fetched dynamically during runtime.</Typography>
      </Box>


    </Box>
  );
};

export default NextgetServerSideProps;

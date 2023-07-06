import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Process from '../EnvironmentSetup/Process';

const home = `function Home() {
    return (
      <>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </>
    );
}
export default Home;`

const about = 
`function About() {
    return <h1>About Page</h1>
}
export default About;`

const profile = 
`function Profile() {
    return <h1>Profile Page</h1>
}
export default Profile;`

const products = `function Products() {
    return <h1>Products Page</h1>
}
  
export default Products;`

const prodId = `import { useRouter } from "next/router";

function Products() {
  const router = useRouter();
  const productId = router.query.productId;

  return(
    <>
        <h1>Product Id: {productId}</h1>
        <p>Product details</p>
    </>
  )
}

export default Products;`

const firstCode=`function firstProduct(){
    return (
        <>
            <h1>First Product Page</h1>
            <p>Product details</p>
        </>
    )
}
export default firstProduct`

const secondCode=`function secondProduct(){
    return (
        <>
            <h1>Second Product Page</h1>
            <p>Product details</p>
        </>
    )
}
export default secondProduct`



const NextRouting = () => {
    return (
        <Box pb={3}>
            <Typography variant='h3'>What is Routing in NextJS?</Typography>
            <Typography variant='subtitle2'>
                Routing is an essential aspect of any web application, allowing users to navigate between different pages. In Next.js, routing is handled through a file-based routing system, making it intuitive and straightforward to define routes for your application.
            Each file inside the `pages` directory represents a unique route in your application.
            </Typography>

            <Box pb={3}>
                <Typography mt={2} variant='subtitle2'>Before we get into the different types of routing in Next.js, it is important to understand the <span>Default Route</span>.</Typography>
                <Process list={["The `index.js` file in the pages directory serves as the default route for the root URL of your application."]}></Process>
                <Process list={["When you run your application and navigate to `http://localhost:3000` in your browser, Next.js will render the `pages/index.js` in the landing page."]}></Process>
                <Process list={["Go into the `index.js` file in the `pages` directory and clear out all the boilerplate code. Replace it with content of your choice."]}></Process>
                <CodeBox codeSnippet={home}></CodeBox>
                <Process list={["When you access the root URL of your application (e.g., /), this `Home` component will be rendered."]}></Process>
                <ImageComp image={"/nextjs/Screenshot_homepage.png"} imageTitle={"HomePage"}></ImageComp>
            </Box>

            <Typography mt={3} variant='h3'>How to implement Routes in NextJS?</Typography>

            <Box pb={3}>
                <Typography mt={2} variant='h4'>1. File-Based Routing:</Typography>
                <Typography mt={2}>
                    Next.js uses a file-based routing approach, which means that each JavaScript file in the `pages` directory corresponds to a specific URL route. For example, the file `pages/about.js` would be associated with the route `/about`. This allows you to create clean and intuitive URLs that map directly to your application's pages.
                </Typography>
                <CodeBox codeSnippet={about}></CodeBox>
                <Typography mt={1} variant='subtitle2'>Now, when you access the route `/about` in your Next.js application, this `About` page will be rendered.</Typography>

                <Typography mt={3} variant='subtitle2'>Similarly, if you'd like to create another page where you want to display profile information, create a file called `profile.js` in the `pages` directory. The code would look something like this:</Typography>
                <CodeBox codeSnippet={profile}></CodeBox>

                <Typography mt={1} variant='subtitle2'>Now, when you access the route `/profile` in your Next.js application, this `Profile` page will be rendered.</Typography>

            </Box>

            <Box pb={3}>
                <Typography mt={2} variant='h4'>2. Nested Routes:</Typography>

                <Typography mt={2} variant='subtitle2'>
                    Nested routes in Next.js allow you to create hierarchical page structures by organizing your pages into subdirectories. This is useful when you have a complex application with multiple levels of routes and want to maintain a logical and organized URL structure.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    With nested routes, you can create parent-child relationships between pages, where the child pages are nested within the parent pages. This helps in structuring your application's content and navigation flow. Let's look at how to create this hierarchical structure:
                </Typography>

                <Process list={['Create a `products` folder inside the `pages` directory.']}></Process>
                <Process list={['Create a `index.js` file inside the `pages/products` directory. This is the page that will be rendered by default when `/products` route is accessed.']}></Process>
                <CodeBox codeSnippet={products}></CodeBox>

                <Process list={['Go into the `/products` route. You will see the page being rendered.']}></Process>
                <ImageComp image={"/nextjs/Screenshot_products.png"} imageTitle={"/products output"}></ImageComp>


                <Process list={['In the `products` directory create a file called `first.js`.']}></Process>
                <CodeBox codeSnippet={firstCode}></CodeBox>

                <Process list={['If you go to the `/products/first` route you will see this component being rendered.']}></Process>
                <ImageComp image={"/nextjs/Screenshot_firstjs.png"} imageTitle={"first.js codesnippet"}></ImageComp>


                <Process list={['In the `products` directory create a file called `second.js`.']}></Process>
                <CodeBox codeSnippet={secondCode}></CodeBox>

                <Process list={['If you go to the `/products/second` route you will see this component being rendered.']}></Process>
                <ImageComp image={"/nextjs/Screenshot_secondjs.png"} imageTitle={"second.js codesnippet"}></ImageComp>


                <Typography mt={2} variant='subtitle2'>When you access '/products' route, the component in `index.js` will be rendered. Accessing '/products/first' route, the `firstProduct` component will be rendered. Similarly in the '/products/second' route, the `secondProduct` component will be rendered.</Typography>
                <Typography mt={2} variant='subtitle2'>The issue with this is that defining routes using predefined paths is not efficient for complex applications. For example if we had a hundred products; we would have had to create that many number of paths to display each product listing.</Typography>

            </Box>

            <Box pb={3}>
                <Typography mt={2} variant='h4'>3. Dynamic Routes:</Typography>
                <Typography mt={2}>
                Dynamic pages in Next.js allow you to create web pages that can display different content based on dynamic parameters or variables in the URL. This means you can generate pages that share the same layout or structure but show unique information based on the values provided in the URL.
                </Typography>
                <Typography mt={2}>For example, let's say you have an e-commerce website with product pages. Instead of creating individual pages for each product, dynamic pages allow you to create a single template or layout and dynamically populate it with the relevant product information based on the product ID specified in the URL. </Typography>
                <Typography mt={2}>Let's take a look at this in detail:</Typography>
                
                <Process list={["Create a `products` folder inside the `pages` directory."]}></Process>
                <Process list={["Create an `index.js` file inside the `pages/products` directory. This is the page that will be rendered by default when `/products` route is accessed."]}></Process>

                <CodeBox codeSnippet={products}></CodeBox>
                <Process list={["Now inside the `pages/products` directory create a file named `[productId].js`."]}></Process>
                
                <Process list={["In the `[productId].js` file, you can define the content for your dynamic product page:"]}></Process>
                <CodeBox codeSnippet={prodId}></CodeBox>
                
                <Process list={["Note we are using the router object in Next.js inorder to extract dynamic route parameters, in this case the productId."]}></Process>

                <Typography mt={1} variant='subtitle2'>When you access a route like `/products/123`, the Product component will be rendered, and the value `123` will be accessible through the productId parameter. Hence we will see `Product Id: 123` being rendered on this route.</Typography>

                <ImageComp image={"/nextjs/Screenshot_123.png"} imageTitle={"second.js codesnippet"}></ImageComp>


            </Box>

            

        </Box>

        
    );
};

export default NextRouting;
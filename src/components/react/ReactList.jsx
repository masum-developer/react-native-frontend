import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "Displaying data: Lists are often used to display data in a structured, organized format. For example, a list of products on an e-commerce site, a list of blog posts, or a list of search results.",
    "Navigation: Lists can be used for navigation menus, such as a dropdown menu or a list of links in a sidebar. Lists can also be used for pagination, allowing users to navigate through a large set of data.",
    "User input: Lists can be used to display checkboxes or radio buttons, allowing users to select one or more items from a list.",
    "Layout: Lists can be used to create columns of content, such as a list of features or benefits of a product or service."
]


const codeblock = `import React from 'react';

function List(props) {
  const items = props.items.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <ul>
      {items}
    </ul>
  );
}

export default List;`;

const ReactList = () => {
    return (
        <Box>
            <Typography variant='h3'>What is list in ReactJs</Typography>
            <Typography variant='subtitle2'>
                A list is an array of data that is rendered as a series of React components or elements. Lists are created using arrays and the map() method, which allows you to iterate over the array and create a new array of components or elements.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                Here's an example of how to create a list in React:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
                {`In this example, we define a List component that takes an array of items as a prop. We then use the map() method to iterate over the items array and create a new array of <li> elements.

                The map() method takes a function as an argument that is called for each item in the array. The function receives the item itself as an argument. In this example, we use the item to create a new <li> element with the item as its content.

                Finally, we render the array of <li> elements inside a <ul> element using curly braces {}.`}
            </Typography>

            <Typography variant='subtitle2'>By using arrays and the map() method, we can easily create dynamic and reusable list components in React that can display any number of items. Lists are an important part of web development that help to organize and display data in a user-friendly way.</Typography>

            <Box mt={3}>
                <Typography variant='h3'>Why list is used?</Typography>

                <Typography variant='subtitle2'>
                Lists are used in web development for a variety of reasons, including:
                </Typography>

                <Block list={list}></Block>

                <Typography variant='subtitle2'>
                In React, lists are commonly used to display data or create navigation menus. By using arrays and the map() method, you can easily create dynamic and reusable list components that can display any number of items. Lists are an important part of web development that help to organize and display data in a user-friendly way.
                </Typography>
            </Box>
        </Box>
    );
};

export default ReactList;
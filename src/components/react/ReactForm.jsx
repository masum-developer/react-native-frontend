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


const codeblock = `import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name: $'{name}');
    console.log('Email: $'{email}');
    console.log('Message: $'{message}');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;`;

const ReactForm = () => {
    return (
        <Box>
            <Typography variant='h3'>What is form in ReactJs</Typography>
            <Typography variant='subtitle2'>
                {`In React, you can create forms using standard HTML form elements, such as <input>, <select>, and <textarea>. When the user interacts with the form elements, you can capture and handle their input using React's state and event system.`}
            </Typography>

            <Typography mt={2} variant='subtitle2'>
            Here's an example of how to create a simple form in React:
            </Typography>
            <CodeBox codeSnippet={codeblock}></CodeBox>

            <Typography variant='subtitle2'>
                {`In this example, we define a Form component that captures the user's name, email, and message input using the useState hook. We also define a handleSubmit function that logs the user's input to the console when the form is submitted.

The component then renders a standard HTML form using the onSubmit event handler to capture the form submission event. Each form element has a value prop that is set to the corresponding state variable, and an onChange event handler that updates the state variable when the user interacts with the element.`}
            </Typography>

            <Typography variant='subtitle2'>Finally, the component renders a submit button that triggers the handleSubmit function when clicked.

By using React's state and event system, we can easily create dynamic and responsive forms in React that capture user input and respond to user actions.</Typography>
        </Box>
    );
};

export default ReactForm;
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';


const codeblock = `function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      </div>
    );
  }`;

const codeblock2 = `function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
      <div>
        {isLoggedIn && <p>Welcome back!</p>}
      </div>
    );
}
  `

const codeblock3 = `function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <p>Welcome back!</p>;
    } else {
      return <p>Please log in.</p>;
    }
}`;

const codeblock4 = `import React, { useState } from 'react';

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome back, {props.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;`

const CondionalRendering = () => {
    return (
        <Box>
            <Typography variant='h3'>What is conditional rendering?</Typography>
            <Typography variant='subtitle2'>
                Conditional rendering is a technique in React that allows you to render different components or elements based on certain conditions. With conditional rendering, you can control what is displayed on the page based on user actions, data, or other factors.
            </Typography>

            <Typography mt={2} variant='subtitle2'>
                In React, you can use conditional rendering in several ways:
            </Typography>

            <Box mt={2}>
                <Typography variant='subtitle2'>
                    1) Using the ternary operator: You can use a ternary operator to conditionally render a component or element based on a boolean expression. For example:
                </Typography>
                <CodeBox codeSnippet={codeblock}></CodeBox>
                <Typography variant='subtitle2'>
                    In this example, the Greeting component renders a different message depending on whether the user is logged in or not.
                </Typography>
            </Box>



            <Box mt={2}>
                <Typography variant='subtitle2'>
                    2) Using the && operator: You can use the && operator to conditionally render a component or element based on a boolean expression. For example:
                </Typography>
                <CodeBox codeSnippet={codeblock2}></CodeBox>
                <Typography variant='subtitle2'>
                    In this example, the Greeting component renders a different message depending on whether the user is logged in or not.
                </Typography>
            </Box>

            <Box mt={2}>
                <Typography variant='subtitle2'>
                    3) Using if-else statements: You can use if-else statements to conditionally render a component or element based on a boolean expression. For example:
                </Typography>
                <CodeBox codeSnippet={codeblock3}></CodeBox>
                <Typography variant='subtitle2'>
                    In this example, the Greeting component uses an if-else statement to render a different message depending on whether the user is logged in or no
                </Typography>
            </Box>

            <Box mt={2}>
                <Typography variant='subtitle2'>
                    Here's an example of conditional rendering in React:
                </Typography>
                <CodeBox codeSnippet={codeblock4}></CodeBox>
                <Typography variant='subtitle2'>
                    In this example, we define a Login component that displays a different message and button depending on whether the user is logged in or not. The component uses the useState hook to manage the isLoggedIn state, and defines two event handlers: handleLogin and handleLogout.

                    When the user clicks the Login button, the handleLogin function is called, which sets the isLoggedIn state to true. When the user clicks the Logout button, the handleLogout function is called, which sets the isLoggedIn state to false.
                </Typography>

                <Typography mt={1} variant='subtitle2'>
                    The component then uses conditional rendering to display a different message and button depending on the isLoggedIn state. If the user is logged in, the component displays a welcome message and a Logout button. If the user is not logged in, the component displays a login message and a Login button. By using conditional rendering in this way, we can create a simple login form that responds to user actions and displays different content depending on the user's state.
                </Typography>
            </Box>


        </Box>
    );
};

export default CondionalRendering;
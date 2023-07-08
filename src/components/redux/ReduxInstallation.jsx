import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';
import CodeBox from '../global/CodeBox';

const store = `import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;`

const reducer = `const initialState = {
    count: 0,
};
  
function counterReducer(state = initialState, action){
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};
  
export default counterReducer;`

const actions = `// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}`

const component = `import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions';
import { Helmet } from 'react-helmet';
import './Counter.css';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div className="counter-container">
      <Helmet>
        <title>Redux Counter</title>
      </Helmet>
      <h1 className="counter-heading">Redux Counter</h1>
      <div className="button-container">
        <button className="counter-button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="counter-button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <span className="counter-value">{count}</span>
    </div>
  );
}

export default Counter;`

const index = `import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);`

const css = `body{
    margin: 0;
}
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2; 
}

.counter-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif; 
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.counter-button {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.counter-button:not(:last-child) {
  margin-right: 10px;
}

.counter-button:hover {
  background-color: #0056b3;
}

.counter-value {
  font-size: 50px;
}
`

const ReduxInstallation = () => {
    return (
        <Box>
            <Typography variant='h3'>How to install Redux?</Typography>
            <Typography variant='subtitle2'>In this section, we will explore the step-by-step process of setting up Redux in a React project by creating a simple counter application. In this application, we will have two buttons: an Increment button and a Decrement button. Clicking the Increment button will increase the counter value by 1, while clicking the Decrement button will decrease it by 1. </Typography>
    
            <Box mt={3}>
                <Typography variant='subtitle2'>Lets go through the installation steps for Redux:</Typography>
                <Process list={["Open your project's terminal or command prompt."]}></Process>
                <Process list={["Set up a React application. You can do this by using npx or any method you prefer."]}></Process>
                <ImageComp image={"/redux/Screenshot_npxredux.png"} imageTitle={"Screenshot: creating redux project"}></ImageComp>

                <Process list={["This will create a React project called `my-redux-app`. Now, change the current working directory to this project folder."]}></Process>
                <ImageComp image={"/redux/Screenshot_cdredux.png"} imageTitle={"Screenshot: CD to redux app"}></ImageComp>

                <Process list={["Run the `npm install` command in your terminal to install the required dependencies:"]}></Process>
                <ImageComp image={"/redux/Screenshot_redux4.png"} imageTitle={"Screenshot: install redux command"}></ImageComp>

                <Process list={["Create a file called `store.js` in the `src` directory to define and configure the Redux store."]}></Process>
                <CodeBox codeSnippet={store}></CodeBox>

                <Process list={["Create a file called `reducers.js` in the `src` directory to define your reducers. In a real-world application, you may have multiple reducers that handle different parts of the state."]}></Process>
                <CodeBox codeSnippet={reducer}></CodeBox>

                <Process list={["Create a file called `actions.js` in the `src` directory to define your actions."]}></Process>
                <CodeBox codeSnippet={actions}></CodeBox>

                <Process list={["These action creator functions simply return action objects with a type property that corresponds to the desired action type."]}></Process>

                <Process list={["Create a folder called `components` in the `src` directory. In `/src/components` directory define a component called 'Counter.js' that will interact with the Redux store."]}></Process>
                <CodeBox codeSnippet={component}></CodeBox>
                
                <Typography mt={1} variant='subtitle2'>useDispatch: The useDispatch hook is imported from the react-redux library and allows you to access the dispatch function. It returns the dispatch function, which is used to send actions to the Redux store. In your code, it is used to dispatch the increment and decrement actions when the corresponding buttons are clicked.</Typography>
                <Typography mt={1} variant='subtitle2'>useSelector: The useSelector hook is also imported from react-redux and allows you to extract data from the Redux store's state. It takes a selector function as an argument, which defines which part of the state you want to access. In your code, it is used to retrieve the count value from the Redux store's state. The component automatically re-renders whenever the count value changes in the Redux store.</Typography>


                <Process mt={1} list={["Inorder to use `Helmet` and set your own title, install it using npm:"]}></Process>
                <ImageComp image={"/redux/Screenshot_helmet.png"} imageTitle={"Screenshot: react helmet"}></ImageComp>


                <Process list={["In the `src` directory, open the `index.js` file and modify it to integrate Redux and the Counter component."]}></Process>
                <CodeBox codeSnippet={index}></CodeBox>
                <Process list={["This code wraps the Counter component with the Provider component from react-redux and passes the Redux store as a prop to provide access to the Redux state."]}></Process>

                <Process list={["Inorder to style the Counter component, create a file called `Counter.css` in the `/src/components` directory and import it into the Counter component. The styling applied to this application is as follows:"]}></Process>
                <CodeBox codeSnippet={css}></CodeBox>

                <Process list={["Finally, start the development server to run your Redux application."]}></Process>
                <ImageComp image={"/redux/Screenshot_npmstart.png"} imageTitle={"Screenshot: npm start codesnippet"}></ImageComp>

                <Process list={["This command will start the development server, and your Redux application will be accessible at `http://localhost:3000`. Once you navigate to the server, you should see something like this:"]}></Process>

                <ImageComp image={"/redux/Screenshot_counter.png"} imageTitle={"Screenshot: redux counter app"}></ImageComp>

                <Process list={["Your project structure for this counter application may look something like this:"]}></Process>
                <ImageComp image={"/redux/Screenshot_projstruc.png"} imageTitle={"Screenshot: counter app project structure"}></ImageComp>



                


            </Box>
        </Box>



        

        
    );
};

export default ReduxInstallation;
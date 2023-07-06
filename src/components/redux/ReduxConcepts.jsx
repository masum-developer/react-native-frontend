import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Block from '../global/Block';
import StepComp from '../EnvironmentSetup/StepComp';
import Process from '../EnvironmentSetup/Process';
import ImageComp from '../EnvironmentSetup/ImageComp';

const concept = ["Store: The store is a centralized container that holds the application state. It represents the single source of truth for your application's data. The store is responsible for managing the state and facilitating state updates.",
                    "Actions: Actions are plain JavaScript objects that describe events or changes in your application. They are the only way to update the state in Redux. Actions are dispatched to the store and contain a type property that indicates the type of action being performed. They can also include additional data as payload.",
                    "Reducers: Reducers are pure functions that specify how the application's state should change in response to dispatched actions. They take the current state and an action as arguments, and return a new state object based on the action type. Reducers ensure that the state transitions are predictable and consistent."]


const ReduxConcepts = () => {
    return (
        <Box>
            <Box>
                <Typography variant='h3'>What are the main Redux concepts?</Typography>

                <Box mt={3}>
                    <Typography variant='subtitle2'>Before we implement Redux into our applications, it is important to understand the three main concepts:</Typography>                
                    <Process list={concept}></Process>
                    <Typography mt={1} variant='subtitle2'>These three concepts work together to enable predictable state management in Redux. Actions trigger updates to the state by being dispatched to the store. Reducers handle the actions and produce a new state based on the current state and the action type. The updated state is then stored in the store, allowing components to access and utilize the new state as needed.</Typography>
                    <Typography mt={1} variant='subtitle2'>By following these core concepts, Redux helps in creating maintainable and scalable applications by providing a clear separation between the state and the UI components. It simplifies state management and facilitates easier debugging and testing of your application.</Typography>
                </Box>
            </Box>

            <Typography mt={3} variant='h3'>Example</Typography>
            <Typography mt={1} variant='subtitle2'>Lets think of a cake shop. Inside there will be a shopkeeper and a shelf where the cakes are kept. When you go to the shop, you will ask the shopkeeper for the cake you would like to buy ('BUY_CAKE'). The shopkeeper will check if the cake is available; if so he will box it for you, deduct the cake from the inventory and print a receipt.</Typography>   

            <Typography mt={1} variant='subtitle2'>If we try to relate this scenario to the concepts we just learned, we can see that the shop is the `store` as it safely keeps all the cakes in the shelf. Similar to how the `store` holds the state of the application.</Typography>             

            <Typography mt={1} variant='subtitle2'>When you go to the shop, you express your intention of buying a cake to the shopkeeper. This intention is what is known as an action in redux. An action describes an event or a change that needs to occur in your application; in our scenario the action describes the number of cakes needs to be reduced by 1.</Typography>             

            <Typography mt={1} variant='subtitle2'>In our case the shopkeeper is the reducer. A reducer is what ties the store and actions together. The shopkeeper receives the action 'BUY_CAKE' from the customer and removes a cake from the shelf, which is the store.</Typography>

        </Box>



        

        
    );
};

export default ReduxConcepts;
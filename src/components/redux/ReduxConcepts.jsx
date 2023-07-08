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
            <Typography mt={1} variant='subtitle2'>Let's imagine a cake shop scenario. Inside the shop, there is a shopkeeper and a shelf where all the cakes are kept. When a customer visits the shop, they ask the shopkeeper for the cake they would like to buy by saying, "BUY_CAKE". The shopkeeper checks if the requested cake is available. If it is, the shopkeeper boxes the cake, deducts it from the inventory, and prints a receipt for the customer.</Typography>   

            <Typography mt={1} variant='subtitle2'>By relating this scenario to the concepts we have just learned, we can draw parallels. The cake shop itself represents the "store" in Redux, as it securely holds all the cakes on the shelf. This is similar to how the Redux store holds the state of our application.</Typography>             

            <Typography mt={1} variant='subtitle2'>When a customer visits the shop, they express their intention of buying a cake to the shopkeeper. In Redux, this intention is known as an "action". An action describes an event or a change that needs to occur in our application. In our scenario, the action is represented by the request to "BUY_CAKE", indicating that we want to reduce the number of available cakes by 1.</Typography>             

            <Typography mt={1} variant='subtitle2'>In this analogy, the shopkeeper represents the "reducer". A reducer is responsible for tying together the store and the actions. Just like the shopkeeper receives the action "BUY_CAKE" from the customer and removes a cake from the shelf (store), a Redux reducer receives actions and updates the state in response.</Typography>

            <Typography mt={1} variant='subtitle2'>By using this cake shop analogy, we can better understand how Redux works and how the store, actions, and reducers interact to manage the state of our application.</Typography>


        </Box>



        

        
    );
};

export default ReduxConcepts;
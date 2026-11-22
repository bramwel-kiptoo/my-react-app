// imagine you're building a website with three components: App, Dashboard and Profile. you want to display the logged in user's 
// name in the profile component, the problem is that the  App needs to pass the user's name to Dashboard and Dashboard must pass it to profile. To achieve this, you can use React's Context API to manage the user's name and make it accessible across the components.
// this is called "prop drilling"

// useContext() is a react hook that allows components to access shared information without passing props through every
// intermediate component.
// Instade of passing every information through every components they can read it directly from the Context

// createContext() it creates a context object that can hold information to be shared between components

import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

function Profile(){
    const user = useContext(UserContext);

    return(
        <div>
            <h2>Student Profile</h2>
            <h3>welcom, {user}</h3>
        </div>
    )
}

export default Profile;

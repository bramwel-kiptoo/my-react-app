import { useReducer } from "react";

// is used to manage state using a function called a useReducer
// imagin in a bank where you deposit, withdraw, transfer money, reset the balance ... with the help of the 
// useReducer() function we can mange all this state


// const [state, dispatch] = useReducer(reducer, initialState);
//     state =========== current data
//     dispatch ======== sends an action to the reducer 
//     Reducer() ========= function that decides how state changes
//     initialState ==== Starting value
// 

function Reducer(state, action){
    if (action === "increase"){
        return state + 1;
    }
    if (action === "decrease"){
        return state - 1;
    }
    if (action === "reset"){
        return 0;
    
    }
    return state;
}

function AppReducer(){
    const [count, dispatch] = useReducer(Reducer, 0);

    return (
        <div>
            <h1>Counter: {count}</h1>

            <button onClick={() => dispatch("increase")}>Increase</button>

            <button onClick={() => dispatch("decrease")}>Decrease</button>

            <button onClick={() => dispatch("reset.")}>Reset</button>
        </div>
    );
}

export default AppReducer;

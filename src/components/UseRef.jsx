import{ useRef } from "react";

// imagine you are creating a login form, when someone clicks a button, you want the cursor to automatically
// move into the email input... the useRef helps us do that

// remember react re-runs your component function every time it redraws. so you have two kings of memory needed:
// the (the useState for screen must update when it changes and the useRef for screen that does not need to change)

// think of useRef() function as the small box where you keep a refrence to something


// useRef == is a react hook that lets you store a value between renders without causing a re-render when that 
// value changes. It is commonly used for two things : Accessing HTML elements directly and storing values that 
// need to persist but shouldn't trigger a re-render

// Render == means react runs your component to determine what the user interface should look like like displaying 
// hello Bramwel in the screen 
// Re-render == means React runs your component again to work out what the updated screen should look like 
// e.g that counter that count number it needs to update the screen when the value changes 
 
//     const emailRef == useRef(null); it creates the Reference
//     useRef(null); it creates the Reference 
//     emailRef == is the variable holding it
//     null == means it doesn't point to anything yet
//     ref={emailRef} == connects the Reference to the HTML input element  
//     emailRef.current.focus(); == Access the input element and calls its built-in focus() method. when you Click
// the button, the input automatically receives focus. This is one of the most common practical uses of useRef()





function App1(){
    const emailRef = useRef(null);
    function focusEmail(){
        emailRef.current.focus();
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input 
                type="email"
                ref={emailRef}
                placeholder="Enter Email"
             />

            <button onClick={focusEmail}>Focus Email</button>
        </div>
    )
}
export default App1;
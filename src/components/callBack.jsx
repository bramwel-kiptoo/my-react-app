import {useState, useCallback} from "react"

// a callback is simply a function that you give to another function
// useCallback() tells React to reuse a function refrence until its dependencies change 
// an empty [] dependencies means keep the same function unless its dependencies change
// whithout useCallback() function there will be a new function on each render while(function is not cached)
// with the useCallback() function there will be same function between renders(the function is cached)
 
function Button({onClick}){
    console.log("Button render");

    return(
        <button onClick={onClick}>Click me</button>
    );
}
function AppCallBack(){
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Counter</button>
            <Button onClick={handleClick} />
        </div>
    );
}
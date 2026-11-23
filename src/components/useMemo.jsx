import { useMemo } from "react";


// imagin building a student management system your application calculate the total marks of a student now 
// imagine your react application has many things happening student name changes, a button is clicked,
// a theme changes, a form is updated... Each time your component re-render, ordinary  javaScript calculation
// inside the componet can run again sometimes a calculation is expensive and takes a lot of time

// useMemo() helps React reuse(remember) a previously calculated value(cache the value) when its dependencies haven't changed
// but if the dependencies changes the calculated value also changes this causes the screen to re-render again
// now the useMemo() is a react hook that remember the result of a calclutation between renders until it's dependencies change

// The useMemo Hook only runs when one of its dependencies update.


function AppMemo(){
    const [marks, setMarks] = useState(50);
    const [name, setName] = useState("Bramwel");

    const total = useMemo(() => {
        console.log("Calculating marks");
        
        return marks * 2;
                  
    }, [marks]);
    return (
        <div>
            <h1>Student</h1>
            <p>Name: {name}</p>
            <p>Marks: {marks}</p>
            <p>Total: {total}</p>
            
            <button onClick={() => setMarks(marks + 1)}>Increace Marks</button>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    );
}

export default AppMemo;


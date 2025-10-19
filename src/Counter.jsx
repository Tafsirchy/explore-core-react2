import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0); //count is the current state, setCount is the function to update the state

    const addCount = () => {
        // setCount(5);
        // setCount(count + 1);
        // setCount(prevCount => prevCount + 1);

        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        color: 'red',
        border: '2px solid blue',
        padding: '10px'
    }

    return (
        <div style={counterStyle}>
            <h1>Count:{count} </h1>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [counter, setCounter] = useState(1);
    const Increment = () => {
        setCounter(counter + 1);
    };
    const Decrement = () => {
        if(counter>0){
            setCounter(counter - 1);
        }
    };
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={Increment}>Increment</button>
            
            <button onClick={Decrement}>Decrement</button>
            
        </div>
    )
}

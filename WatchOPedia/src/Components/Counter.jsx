import { useState } from "react";

const Counter = () => {
    const [counterState, setCounterState] = useState(() => {
        return { counter: 10 };
    });

    const [titleState, setTitleState] = useState(() => {
        return { title: "Fun" };
    });

    const increaseCount = () => {
        setCounterState((prevState) => {
            return { ...prevState, counter: prevState.counter + 1 }
        })
    }

    const decreaseCount = () => {
        setCounterState((prevState) => {
            return { ...prevState, counter: prevState.counter - 1 }
        })
    }

    return (
        <div className="col-12 col-md-4 offset-md-4 border">
            <span className="h2 pt-4 m-2">{titleState.title} Counter </span>
            <br />
            <button className="btn btn-success m-1" onClick={increaseCount}>+1</button>
            <button className="btn btn-danger m-1" onClick={decreaseCount}>-1</button>
            <br />
            <span className="h4">
                Counter: &nbsp;
                <span className="text-success">{counterState.counter}</span>
            </span>
        </div>
    );
};

export default Counter;
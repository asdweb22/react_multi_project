import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function ReduxEx() {


    const dispatch = useDispatch();

    const { c } = useSelector(state => state.custome);

    const addbtn = () => {
        dispatch({
            type: "increment",
        });
    }

    const incrementBy = () => {
        dispatch({
            type: "incrementByValue",
            payload: 10
        });
    }


    const subbtn = () => {
        dispatch({
            type: "decrement",
        });
    }
    return (
        <div>
            <h2>Redux example</h2>
            <hr />

            <h3>{c}</h3>
            <button onClick={addbtn}>Increment</button>
            <button onClick={incrementBy}>Increment By Value</button>
            <button onClick={subbtn}>Decrement</button>
        </div>
    )
}

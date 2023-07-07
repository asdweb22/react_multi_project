import React, { useState } from 'react'
import ChildComp from './ChildComp'
import { createContext } from 'react'

export const Globaldata = createContext();

export default function Parentcomp() {
    const [color, setColor] = useState("green");
    const [day, setDay] = useState("Monday");

    const getDay = (item) => {
        console.warn(item);
        setDay(item);
    }
    return (
        <Globaldata.Provider value={{ Appcolor: color, getDay: getDay }}>
            <div className="bg-primary text-dark py-2 shadow mb-5">
                <h2>Hye i am parent component</h2>
                <p>So we are doing example of use-context</p>
                <p><b>useContext: </b>using this we can easily pass data from one component to another child component or any super child component in to short any component   </p>
                <br />
                <b>{day}</b>
                <ChildComp />
            </div>
        </Globaldata.Provider>
    )
}

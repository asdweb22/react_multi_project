
import React from 'react'
import { useContext } from 'react'
import { Globaldata } from './Parentcomp'


export default function SuperChildComp() {
    const { Appcolor, getDay } = useContext(Globaldata);
    console.warn(Appcolor);

    const day = "sunday";
    return (
        <div className="bg-light text-dark shadow container">
            <h2>Hey I am  SuperChildComp</h2>

            {Appcolor}
            <button className='btn btn-dark' onClick={() => getDay(day)}>click</button>


        </div>
    )
}

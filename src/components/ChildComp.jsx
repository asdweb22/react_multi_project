import React from 'react'
import { useContext } from 'react'
import { Globaldata } from './Parentcomp'
import SuperChildComp from './SuperChildComp';


export default function ChildComp() {
    const { Appcolor } = useContext(Globaldata);
    console.warn(Appcolor);
    return (
        <div className="bg-info text-dark py-2 shadow container">
            <h2>Hey I am  Child coponent</h2>

            {Appcolor}

            <SuperChildComp />
        </div>
    )
}

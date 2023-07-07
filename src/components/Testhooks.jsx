import React, { createContext } from 'react'
import Parentcomp from './Parentcomp'
import UseState from '../HooksExamples.jsx/UseState'

import UseContext from '../HooksExamples.jsx/UseContext'
import UseMemo from '../HooksExamples.jsx/UseMemo';
import UseRef from '../HooksExamples.jsx/UseRef';

const data = createContext();


export default function Testhooks() {

    const name = "asd";

    return (
        <div>
            <h2 className='text-center bg-warning py-2'>Welcome to test hooks</h2>

            <Parentcomp />

            <UseState />

            <hr />
            <data.Provider value={name} >
                <UseContext />
            </data.Provider>

            <UseMemo />
            <hr />
            <UseRef />
        </div>
    )
}

export { data }

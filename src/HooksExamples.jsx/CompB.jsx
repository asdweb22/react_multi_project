import React, { useContext } from 'react'
import CompC from './CompC'

import { data } from '../components/Testhooks'
export default function CompB() {

    const name = useContext(data);
    return (
        <div className='bg-warning px-5 py-2'>
            <h3> i am compB</h3>
            <p>getting value from Grand parent into direct child comp <b>{name} </b></p>
            <CompC />
        </div>
    )
}

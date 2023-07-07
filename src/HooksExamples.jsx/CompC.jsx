import React, { useContext } from 'react'
import { data } from '../components/Testhooks';

export default function CompC() {
    const name = useContext(data);
    return (
        <div className='bg-success'>
            <h2> i am compc</h2>
            <p>getting value from Grand parent into direct child comp <b>{name} </b></p>
        </div>
    )
}

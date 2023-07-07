import React from 'react'
import CompB from './CompB'

export default function CompA() {
    return (
        <div className='bg-info py-5 my-2 px-2'>
            i am compA
            <CompB />
        </div>
    )
}

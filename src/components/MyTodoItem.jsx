import React from 'react'

export default function MyTodoItem({ todoobj, ondelete }) {
    return (
        <div className="shadow py-2 my-2  px-3 rounded">

            <h4>{todoobj.title}</h4>
            <p>{todoobj.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => { ondelete(todoobj) }}>Delete</button>
        </div>

    )
}

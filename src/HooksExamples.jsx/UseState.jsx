
import React, { useEffect, useState } from 'react'

export default function UseState() {

    //managing state
    const [myval, setval] = useState(1);

    useEffect(() => {
        document.title = `chats ${myval}`;
        console.log("Hii");
    }, [myval])


    return (
        <div>
            <div className="container my-3 py-3 shadow">
                <h2 className="text-center bg-primary text-white py-3">Example of Use state Hook</h2>
                <div className="hook1 shadow py-3 d-flex justify-content-around">
                    Example:UseState
                    <button className="btn btn-success  btn-sm" onClick={() => setval(myval + 1)}>+</button>
                    {myval}
                    <button className="btn btn-danger btn-sm" onClick={() => myval > 0 ? setval(myval - 1) : setval(0)}>-</button>
                </div>
                <div className="hook2 shadow py-3 d-flex justify-content-around">
                    Example:useEffect

                </div>
            </div>


        </div >
    )
}

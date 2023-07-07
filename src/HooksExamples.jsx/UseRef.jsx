import React, { useRef, useState } from 'react'

export default function UseRef() {

    const [myname, setMyname] = useState("Asd");

    const useref = useRef("");

    const reset = () => {

        setMyname("");
        useref.current.focus();

    }

    const chnagecolor = () => {
        useref.current.style.color = "blue";
        useref.current.value = "jenny"
    }
    return (
        <div>
            <h2>UseRef Example</h2>
            <input type="text" ref={useref} value={myname} onChange={(e) => setMyname(e.target.value)} />
            <p >{myname}</p>
            <button onClick={reset}>Click</button>
            <button onClick={chnagecolor}>Change color</button>
        </div>
    )
}

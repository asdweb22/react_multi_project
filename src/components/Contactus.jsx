import React, { useState } from 'react'

export default function Contactus() {

    // const name = "Asd";
    const [name, setName] = useState("initial");

    function test(e) {
        // it stops the default behaviour of browser 
        e.preventDefault();
        console.log("test", name);
    }

    return (
        <div>
            <form>
                <h1 className="text-center">Contact Us</h1>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => console.log(setName(e.target.value))} />
                <input type="text" placeholder="Enter Your Email" />
                <input type="text" placeholder="Enter Your Phone" />
                <textarea rows={5} cols={20} placeholder="Enter Your Address"></textarea>
                <button onClick={(e) => test(e)}>Press</button>
                <p>{name}</p>
            </form>
        </div>
    )
}

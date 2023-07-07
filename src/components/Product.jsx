import React from 'react'

export default function Coin({ name, symbol, image, price }) {
    return (
        <div>
            <div className="shadow text-center coin">
                <img src={image} alt={name} />
                <p>{symbol}</p>
                <p>{name} </p>
                <p>₹{price}</p>
            </div>
        </div>
    )
}

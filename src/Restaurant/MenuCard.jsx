import React, { useEffect } from 'react'

export default function MenuCard({ menuData }) {

    useEffect(() => {
        console.log(menuData);
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row py-2">
                    {
                        menuData.map((curele) => {

                            const { id, image, name, category, price, description } = curele;
                            return (

                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 my-2" key={id}>
                                    <div class="card shadow">
                                        <img src={image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">{id}</p>
                                            <h5 class="card-title">{name}</h5>
                                            <p class="card-text">{description}</p>
                                            <p class="card-text">{price}</p>
                                            <p class="card-text">Category :{category}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                </div>
                            );


                        })
                    }

                </div>
            </div>

        </div>
    )
}

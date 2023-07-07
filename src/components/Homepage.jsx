import React, { useEffect, useState } from 'react'

import Coin from './Product';
import Todos from './Todos';
import axios from 'axios';
import Loading from './Loading';

export default function Homepage() {


    const [coin, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllCoin = async () => {

            const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
            console.log(data);
            setCoins(data);
            setLoading(false);
        }

        fetchAllCoin();

    }, []);





    return (
        <>
            {
                loading ? (<Loading />) :
                    (
                        <div>
                            <div className="container">
                                <h2 className="text-center py-2 shadow rounded my-3">BitCoin Data Using API</h2>
                                <div className="row">
                                    {
                                        coin.map((i) => (
                                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                                <center><Coin key={i.id} name={i.name} symbol={i.symbol} image={i.image} price={i.current_price} /></center>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>


                            <hr />
                            <Todos />

                            <br /><br />
                        </div>
                    )
            }
        </>
    )
}

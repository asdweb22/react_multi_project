import React from 'react'

export default function Navbar({ filterdata, menulist }) {
    return (
        <div>
            <nav className="navbar justify-content-center ">
                <div className="btn-group d-flex flex-wrap ">

                    {
                        menulist.map((currele) => {
                            return (
                                <button className="btn btn-outline-primary" onClick={() => filterdata(currele)}>{currele}</button>
                            )
                        })
                    }

                    {/* <button className="btn btn-outline-primary" onClick={() => setMenuData(Menu)}>All</button> */}

                </div>
            </nav>
        </div>
    )
}

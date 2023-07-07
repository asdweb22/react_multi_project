import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';



export default function RestaurantHome() {
    const menucategory = [...new Set(
        Menu.map((item) => {
            return item.category;
        })
    ), "All"];

    //Menu list menudata  set state
    const [menuData, setMenuData] = useState(Menu);
    const [menulist, setMenulist] = useState(menucategory);


    //total category findout and avoid repetation of category from menu list using set  and spread into array 




    //filter data based on onclick of all category buttons
    const filterdata = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return
        }

        const updatelist = Menu.filter((items) => {
            return items.category === category;
        })
        setMenuData(updatelist);
    }

    return (
        <div>
            <Navbar filterdata={filterdata} menulist={menulist} />
            <MenuCard menuData={menuData} />

        </div>





    )
}

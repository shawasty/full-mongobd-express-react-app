

import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';
import apiUrl from "../../apiConfig";

const Items = () => {
    const [items, setItems] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await axios(`${apiUrl}/items`)

          console.log('res', response.data.items)
          setItems(response.data.items)
    
            } catch (error) {
          console.error(error)
            }
        // fetchData()
    }
    useEffect(()=>{
        fetchData()
    },[])

    // set a variable to map the items as below

    const itemsData = items.map((item)=>{
        return <li key={item._id}>
            <NavLink to={`/items/${item._id}`} >{item.title}</NavLink>
        </li>
    })





    return (
        <div>
            <h4>items</h4>
            <ul>

            {itemsData}
            </ul>
        </div>
    );
};

export default Items;
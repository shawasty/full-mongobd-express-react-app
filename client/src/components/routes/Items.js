

import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await axios('http://localhost:3000/api/items')

          console.log('res', response.data.items)
          setItems(response.data.items)
    
            } catch (error) {
          console.log(error)
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
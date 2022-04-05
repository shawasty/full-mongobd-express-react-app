
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Items = () => {
    const [items, setItems] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios ('http://localhost:3000/api/items')

        } catch (error) {
            console.error(error)
        }

        useEffect(()=>{
            fetchData()
        },[]);


        const itemsData = items.map((item)=>{
            return <li key={item._id}>
                <NavLink to ={`/items/${item._id}`}>{item.title}</NavLink>
            </li>
        })
    }
    return (
        <div>
            <h1>Items </h1>
            <ul>
                {itemsData}
            </ul>
        </div>
    );
};

export default Items;
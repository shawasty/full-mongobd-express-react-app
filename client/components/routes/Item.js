import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';


function Item() {
    const [item, setItem] = useState([])
    // sets delete fxns
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    console.log ('params', params)

    let navigate = useEffect();


    useEffect(()=> {
        const fetchData = async () => {
            try {
                // the sequence for 
                const response = await axios(`http://localhost:3000/api/items/${id}`)
                setItem (response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    },[])

    useEffect(()=> {
        if(!item) {
            return <p>Loading....</p>
        }
    },[item])

    const destroy = () => {
        axios({
            url:`http://localhost:3000/api/items/${id}`,
            method: 'DELETE'  

        }).then(()=> setDeleted(true)).catch(console.error)
    }

    useEffect(()=>{
        if (deleted) {
            return navigate('/')
        }
    },[deleted,navigate])

    return (
        <Layout>
            <h4>{item.item.title}</h4>
            <p>Link: {item.item.link}</p>
            <button onClick={() => destroy()}>DELETE ITEM</button>

            <NavLink to={`/items/${id}`}>
                <button>Edit</button>
            </NavLink>
            <NavLink to = "/items">Back To All Items</NavLink>
        </Layout>
    )
}

export default Item;
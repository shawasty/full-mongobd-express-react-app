import { useState, useEffect } from 'react';
import {  useParams,NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Layout from '../shared/Layout';
import apiUrl from '../../apiConfig';


const Item = () => {
    const [item, setItem] = useState({})
    // sets delete fxns
    const [deleted, setDeleted] = useState(false)
    let navigate = useNavigate();

    const { id } = useParams()
    console.log ('params', id)


    useEffect(()=> {
    const fetchData = async () => {
        // try {
        //     // the sequence for 
        //     const response = await axios.get(`http://localhost:3000/api/items/`)
        //     const result = response.data.items;
        //     console.log('res',result )
        //     const uniqItem = result.find(uniq => uniq._id ===id)
        //     setItem(uniqItem)
        //     console.log('j', uniqItem)
        //     return result;
        // } catch (error) {
        //     console.log(error)
        // }
        // OR THE CODE BELOW
        try {
            // the sequence for 
            const response = await axios.get(`${apiUrl}/items/${id}`)
            console.log('response',response)
            const result = response.data;
            console.log('res',result )
            setItem(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
        fetchData()
    },[])
    
    useEffect(()=>{
        if(!item) {
            return <p>Loading...</p>
        }
    },[item])

    const destroy = ()=>{
        axios({
            url: `${apiUrl}/items/${id}`,
            method: 'DELETE'
        }).then(()=> setDeleted(true)).catch(console.error)
    }

    useEffect(()=>{
        if (deleted) {
            return navigate('/')
        }
    },[deleted, navigate])

    return (
        <div>
            <Layout>
            <h4>{item.title}</h4>
            <p>LINK:{item.link}</p>
            <button onClick={()=> destroy()}>Delete Item</button>
            <NavLink to={`/items/${id}/edit`}>
                <button>Edit</button>
            </NavLink>
            <NavLink to='/items'> Back to all items
            </NavLink>
            </Layout>
            
        </div>
    );
};

export default Item;
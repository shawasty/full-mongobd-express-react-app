import { useState, useEffect } from 'react';
import {  useParams } from "react-router-dom";
import axios from 'axios'
// import Layout from '../shared/Layout';

const Item = () => {
    const [item, setItem] = useState({})
    // sets delete fxns
    const [deleted, setDeleted] = useState(false)

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
        try {
            // the sequence for 
            const response = await axios.get(`http://localhost:3000/api/items/${id}`)
            const result = response.data.item;
            console.log('res',result )
            // const uniqItem = result.find(uniq => uniq._id ===id)
            setItem(result)
            // console.log('j', uniqItem)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
        fetchData()
    },[])
    const handleItem = () => {
        // fetchData(id).then(res => {
        //     const uniqItem = res.find(uniq => uniq.id === id);
        //     setItem(uniqItem)
        //     console.log ('id',uniqItem)
        // })
    } 
   

    useEffect(()=>{
        if(!item) {
            return <p>Loading...</p>
        }
    },[item])

    // useEffect(()=>{
    //     handleItem();
    // },[])

       
    
        console.log ('params', id)

        console.log('item', item)

    return (
        <div>
            <p>{item.title}</p>
            <p>{item.link}</p>
            
        </div>
    );
};

export default Item;
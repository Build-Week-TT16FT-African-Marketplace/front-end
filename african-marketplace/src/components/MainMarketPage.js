import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item';
import NewItem from './NewItem'
import SearchForm from "./SearchForm"
import UpdateItem from './UpdateItem';

const MainMarketPage = () => {

const [ items, setItems ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/items')
        .then((res) => {
            console.log('data', res.data);
            setItems(res.data);
        })
        .catch((err) => {
            console.log('Error found: ', err)
        })
    }, []);

return (
    <div>
        <h1>Welcome! Browse products here:</h1>
        <NewItem />
            {items.map((content) => {
                // console.log('map', content.id, index);
                return (
                <Item 
                        key={content.id} 
                        name={content.name}
                        description={content.description} 
                        price={content.price} 
                        location={content.location} 
                        category={content.category}  
                        cid={content.id}
                        />
                        )
            })}
        <SearchForm items={items}/>


    </div>
)
}

export default MainMarketPage;
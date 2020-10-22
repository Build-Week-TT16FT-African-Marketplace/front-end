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
        <h1>SAUTI EAST AFRICA MARKETPLACE</h1>
        <h2>List:</h2>
            <p>Have an item you'd like to sell? Fill out the form below to create the listing!</p>
        <NewItem />
        <h2>Browse:</h2>
            <p>Take a look at all the listings our sellers have created!</p>
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
        <h3>Search:</h3>
            <p>Don't see what you're looking for? Use the search bar below to track down exactly what you need!</p>
        <SearchForm items={items}/>
    </div>
)
}

export default MainMarketPage;
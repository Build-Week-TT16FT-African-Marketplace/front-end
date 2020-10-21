import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item';

const initialItems = []


const MainMarketPage = () => {

    const [ items, setItems ] = useState(initialItems)

    const getItems = () => {
        axiosWithAuth()
            .get('https://african-marketplace-back-end.herokuapp.com/items')
            .then((res) => {
                items.push(res.data[0])
                console.log(items);
            })
            .catch((err) => {
                console.log('Error found: ', err)
            });
    };

    useEffect(() => {
        getItems();
    }, []);

return (
    <div>
        <h1>Welcome! Search products here:</h1>

        <div>
            {items.map((content, index) => {
                console.log('map', content, index)
                return <Item key={index} content={content} />
            })}
        </div>
        {/* <Items data={} />*/}
    </div>
)
}

export default MainMarketPage;
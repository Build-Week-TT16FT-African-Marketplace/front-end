import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import Item from './Item';


const MainMarketPage = () => {

    const [ items, setItems ] = useState([])

    const getItems = () => {
        axiosWithAuth()
            .get('https://african-marketplace-back-end.herokuapp.com/items')
            .then((res) => {
                console.log('data', res.data[0]);
                setItems([res.data[0]]);
                // items.push(res.data[0])
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
           
            {items.map((content, index) => {
                // console.log('map', content.id, index);
                return (<Item key={index} content={content} />)
            })}

    </div>
)
}

export default MainMarketPage;
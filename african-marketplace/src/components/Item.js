import React from 'react';
import axios from 'axios';
import styles from './components-styles/Item.css';

const Item = (props) => {

const { id, name, description, price, location, category, URL, user_id } = props;

return (
  <div className='item-container'>
    <div className='item'>
      <h3>{props.data.name}</h3>
      <h4>{props.data.category}</h4>
      <p>{props.data.price}</p>
      <h4>${props.data.description}</h4>
      <h4>${props.data.location}</h4>
    </div>
  </div>

)


}


export default Item

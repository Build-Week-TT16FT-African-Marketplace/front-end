import React from 'react';
// import styles from './components-styles/Item.css';

const Item = (props) => {

const { name, description, price, location } = props;
// console.log('name', props.content.name);

return (
  <div className='item-container'>
    <div className='item'>
      <h3>{props.content.name}</h3>
      <p>{props.content.description}</p>
      <h4>${props.content.price}</h4>
      <h4>{props.content.location}</h4>
    </div>
  </div>

)
}


export default Item

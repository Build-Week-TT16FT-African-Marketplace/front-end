import React from 'react';
// import styles from './components-styles/Item.css';

const Item = (props) => {

const { name, description, price, location } = props;

console.log('name', name);

return (
  <div className='item-container'>
    <div className='item'>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>${price}</h4>
      <h4>${location}</h4>
    </div>
  </div>

)


}


export default Item

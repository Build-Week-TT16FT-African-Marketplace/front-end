import React from 'react';
import Item from './Item';

const Items = (props) => {

  return (
    <div>
      {props.data.map((content, index) => {
        return <Item key={index} content={content} />
      })}
    </div>


  )
}

export default Items
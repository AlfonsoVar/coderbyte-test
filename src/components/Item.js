import React from 'react';
import { useParams } from 'react-router-dom'
import data from '../data/concerts';

import '../css/Item.css'

const Item =  ({data}) => {

const params = useParams();  
    console.log(params.title)
    const filtered2 = data.filter((list) => {
      return list.title === params.title;
    });
    console.log(filtered2)
    return (
      <div className='item-container'>
        {data = data.filter((item) => {
          return item.title == params.title
        }).map((product) => (
          <div className='item-image'>
          <img src={product.productImageUrl}></img>
          <div className='item-details'>
            <h3 className='item-name'>{product.title}</h3>
            <h2 className='item-price'>{product.price}</h2>
          </div>
        </div>
        ))}
      </div>
    )    
}

export default Item;
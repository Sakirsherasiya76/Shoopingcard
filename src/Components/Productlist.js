import React from 'react'
import '../App.css';

const Productlist = ({product,addToCart}) => {
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
            return(
                <div style={{width:'33%'}}>
                   <div className='product-item'>
                    <img src={productItem.url} width='100%'></img>
                    <p>{productItem.name}</p>
                    <p>{productItem.category}</p>
                    <p>{productItem.seller}</p>
                    <p>Rs.{productItem.price}/-</p>
                    <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                   </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Productlist

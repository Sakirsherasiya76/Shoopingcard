import React, { useEffect, useState } from 'react'
import '../App';
const CartList = ({cart}) => {

    const [CART,setCART] = useState([]);

    useEffect(()=>{
     setCART(cart);
    },[cart]);
  return (
    <div>
      {
            CART?.map((cartItem,cartIndex)=>{
            return(
                <div>
                    <img src={cartItem.url} width={40}  />
                    <span> {cartItem.name} </span>
                    <button
                     onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return cartIndex === index ? {...item,quantity:item.quantity > 0 ? item.quantity - 1 : 0}:item
                        })
                        setCART(_CART);
                    }} 
                    >
                        -</button>
                    <span> {cartItem.quantity} </span>
                    <button
                    onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return cartIndex === index ? {...item,quantity:item.quantity + 1}:item
                        })
                        setCART(_CART);
                    }} 
                    >+</button>
                    <span> Rs.{cartItem.price * cartItem.quantity} </span>
                </div>
            )
        })
      }
      <p> Total : <span></span>
        {
            CART.map(item => item.price * item.quantity).reduce((total,value)=> total + value,0)
        }
      </p>
    </div>
  )
}

export default CartList

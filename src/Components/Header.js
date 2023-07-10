import React from 'react';
import '../App.css';

const Header = (props) => {
  return (
    <div className='flex shopping-card'>
    <div onClick={()=>props.handleShow(false)}>Shopping card app</div>
    <div onClick={()=>props.handleShow(true)}>card
        <sup>{props.count}</sup>
    </div>
    </div>
  )
}

export default Header;

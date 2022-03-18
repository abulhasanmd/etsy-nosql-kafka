import React from 'react';
import './cartitem.css';


function CartItem(props) {
    console.log(props);
    return (
    <div className='cartitem__container'>
        <div className='cartitem__image_container'>
            <img src={props.item.item_pic_url ||             "https://i.etsystatic.com/28277314/r/il/bbe7f1/2979414179/il_794xN.2979414179_ff0j.jpg"
} alt="item-picture" className='cartitem__image'/>
        </div>
        <div className='cartitem__content_container'>
            <div className='cartitem__name'>{props.item.name}</div>
            <div className='cartitem__sellername'>Sold By: {props.item.Shop? props.item.Shop.shop_name:props.item.shop_name}</div>
            <div className='cartitem__quantity'>Quantity: {props.item.quantity || props.item.item_quantity}</div>
            <div className='cartitem__price'>Price: {props.item.price || props.item.unit_price}</div>
            <div className='cartitem__totalprice'>Total Price: {props.item.price? (props.item.price*props.item.quantity) : props.item.unit_price*props.item.item_quantity}</div>
        </div>
    </div>
  )
}

export default CartItem
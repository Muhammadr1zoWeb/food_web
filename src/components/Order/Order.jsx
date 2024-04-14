import React from 'react'
import './Order.scss'

function Order() {
  let locData = JSON.parse(window.localStorage.getItem('localfood'))
  return (
    <div className='order'>
      <h2>Zakazlar</h2>
    <span>
      <button className='btn'>Dine</button>
      <button className='btn'>To Go</button>
      <button className='btn'>Delivery</button>
    </span>
    <div className="order__info">
      <p>Item</p>
      <span>
        <p>Qty</p>
         <p>Price</p>
      </span>
    </div>
    <ul className="order__list">
      {
        locData && locData.map((item, index)=> (
          <li key={index} className="order__item">
          <div className="item__top">
            <img src={item.img} alt="#" />
            <span>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </span>
            <p className='item__count'>2</p>
            <p className="all__prices">$ 4,58</p>
            </div>   
            <div className="item__bot">
              <input type="text" placeholder='Please, just a little bit spicy only.'/>
              <button>
              <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default Order

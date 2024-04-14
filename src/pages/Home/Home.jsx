import React, { useState } from 'react'
import './Home.scss'
import HomeTop from '../../components/HomeTop/HomeTop'
import HomeNav from '../../components/HomeNav/HomeNav'
import { data } from '../../lib/Data'
import Order from '../../components/Order/Order'

function Home() {
  let localFood = []
  const [ category, setCategory] = useState('milliy')
  function setFood(item){
    localFood.push(item);
    window.localStorage.setItem('localfood', JSON.stringify(localFood))
  }
  return (
    <div className='home'>
      <div className="home__inner">
      <HomeTop/>
      <HomeNav category={category} setCategory={setCategory}/>
      <ul className="home__list">
        <div className='home__control'>
        <select>
          <option value="">Dine In</option>
          <option value="">To Go</option>
          <option value="">Delivery</option>
        </select>
        </div>
        {
          data && data.filter((i)=> i.category == category).map((item, index)=>(
            <li onClick={()=> setFood(item)} key={index} className='home__item'>
            <img src={item.img} alt="#" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </li>
          ))
        }
      </ul>
      </div>
      <Order/>
    </div>
  )
}

export default Home

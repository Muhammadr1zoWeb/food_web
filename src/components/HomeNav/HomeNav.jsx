import React, { useState } from 'react'
import './HomeNav.scss'
import { data } from '../../lib/Data' 

function HomeNav() {
    const [category, setCategory] = useState('milliy')
    let categoryArr = []
    data.forEach((item)=> {
        if(!categoryArr.includes(item.category)){
        categoryArr.push(item.category);
        }
    })
    console.log(categoryArr);
  return (
    <div className='home__nav'>
        <ul className='hn__list'>
        {
            categoryArr.map((item, index)=>(
                    <li onClick={()=> setCategory(item)} key={index} className={category == item ? 'hn__item acitve' : 'hn__item'}>
                    {item}
                    </li>
            ))
        }
        </ul>
    </div>
  )
} 

export default HomeNav

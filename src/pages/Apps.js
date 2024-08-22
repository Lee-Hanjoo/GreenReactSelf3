import React from 'react'
import data from '../dataBase/data.json'
import Item from './Item'
import { useLocation, useNavigate } from 'react-router-dom'

const Apps = () => {  

  const nav = useNavigate();
  const move = () => {
    nav(`/`)
  }
  return (
    <div className='wrap'>
      <button onClick={move}>HOME</button>
      <ul>
        {
          data.apps.map((item)=>(
            <Item item={item}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Apps
import React from 'react'
import data from '../dataBase/data.json'
import Item from './Item'
import { useNavigate } from 'react-router-dom'

const Movies = () => {

  const nav = useNavigate();
  const move = () => {
    nav(`/`)
  }

  return (
    <div className='wrap'>
      <button onClick={move}>HOME</button>
      <ul>
        {
          data.movies.map((item)=>(
            <Item item={item} key={item.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Movies
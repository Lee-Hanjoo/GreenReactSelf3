import React from 'react'
import img from '../img'

const Item = ({item}) => {
      let idx;
      if(item.id < 10) {
        idx = String(item.id + 1).padStart(2, "0")
      } else {
        idx = item.id + 1
      }
    return (
      <li>
        <img src={`../img/${idx}.jpg`} />
        <p>{item.name}</p>
        <span>{item.detail}</span>
      </li>
    )
}

export default Item
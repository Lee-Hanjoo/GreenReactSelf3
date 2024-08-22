import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import data from '../dataBase/data.json'
import Item from './Item';

const Media = () => {
    let params = useLocation();

    let page='';
    if(params.state === 'movies') {
        page = data.movies
    } else if(params.state === 'music') {
        page = data.music
    } else if(params.state === 'apps') {
        page = data.apps
    }  else if(params.state === 'software') {
        page = data.software
    } 

    const nav = useNavigate();
    const move = () => {
      nav(`/`)
    }
    
    return (
        <div className='wrap'>
            <button onClick={move}>HOME</button>
            <h3>{params.state}</h3>
            <ul>
                {
                    page.map((item)=>(
                    <Item item={item} key={item.id} />
                    ))
                }
            </ul>
        </div>
        )
    }

export default Media
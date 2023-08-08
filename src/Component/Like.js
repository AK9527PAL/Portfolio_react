import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

export default function Like(props) {
    const [color, setColor]=useState("black")
    const [count,setcount]=useState(parseInt(props.count))
    const like=()=>{
        if(color=="black"){
            setColor("red")
            setcount(count+1)
        }
        else{
            setColor("black")
            setcount(count-1)
        }
    }

  return (
    <div className='ms-5'>
        <span>Like:{count}</span>
        <FontAwesomeIcon icon={faHeart} color={color} onClick={like}   />
    </div>
  )
}

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Rating(props) {
    let rating=props.rating;
    let arr=[];
    for(let i=0;i<5;i++){
        if (i<rating){
            arr.push(<FontAwesomeIcon icon={faStar} color='#F1C40F'/>)

        }
        else{
            arr.push(< FontAwesomeIcon icon={faStar}/>)
        }
    }
  return (
    <div>{arr}</div>
  )
}

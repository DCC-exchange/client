import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Spot() {

    const [ starred, setStarred ] = useState(false)

    const handleStarred = (()=>{
      if(starred){
        setStarred(false)
      }else{
        setStarred(true)
      }
    })
  return (
    <div>
        <h3 onClick={handleStarred}> { starred ? <AiFillStar /> : <AiOutlineStar /> } </h3>
        Spot</div>
  )
}

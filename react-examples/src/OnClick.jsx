

import React from 'react'
import { useState } from 'react'

const OnClick = () => {
    const [number ,setNumber]= useState(0)
    const increament =()=>{
        setNumber(number +1)
    }
    const decreament =()=>{
        if(number>0)
      { setNumber(number-1)} 
    }
  return (
    <div>
    
    <h2>  {number} </h2> 
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  )
}

export default OnClick

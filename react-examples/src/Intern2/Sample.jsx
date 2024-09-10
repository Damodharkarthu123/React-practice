import React from 'react'
import Testcompnent from './Testcompnent'


const Mango=()=>{
    return(
        <h2> Mangoes are good</h2>
    )
}
const Grapees=()=>{
    return(
        <h1>grapees are good </h1>
        
    )
}

function Sample() {
  return (
    <div>
      <h1>samples are good</h1>
      <Mango />
      <Grapees />
      <Testcompnent />
    </div>
  )
}

export default Sample;

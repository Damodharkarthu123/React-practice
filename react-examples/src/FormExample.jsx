

import React, { useState } from 'react'

const FormExample = () => {
    const[username ,setusername]= useState("")

    const getUserName =(event)=>{
        setusername(event.target.value)
    }
    
        return (
    <section className='xy'>
        <h3 className='xa'>{username}</h3>
     <div className='xyz'>
        <input type='text' placeholder='enter your name'onChange={getUserName}/><br/>
      <button className='xyza'>submit</button>
      </div>
    </section>

  )
}

export default FormExample

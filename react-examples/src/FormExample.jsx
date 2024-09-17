

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormExample = () => {

  const notify = () => toast("Notification is important!");
    const[username ,setusername]= useState("")

    

    const getUserName =(event)=>{
        setusername(event.target.value)
        notify()
    }
    
        return (
    <section className='xy'>
        <h3 className='xa'>{username}</h3>
        <ToastContainer />
     <div className='xyz'>
        <input type='text' placeholder='enter your name'onChange={getUserName}/><br/>
      <button className='xyza'>submit</button>
      </div>
    </section>

  )
}

export default FormExample



import React, {useState ,useEffect}from 'react'
const userdetails = "https://jsonplaceholder.typicode.com/posts"

const UserPage = () => {

    const[user,setuser] =useState([])


    const userhandler =async()=>{
        const response = await fetch(userdetails)
        const newdata = response.json()
        setuser(newdata)

    }
    useEffect(()=>{
      

    },[]);
    
  
  return 
    <div>
      {user.map((item)=>{
        return(
            <div className='xy'>{item.title}</div>
        )
      })}
    </div>
  
}

export default UserPage

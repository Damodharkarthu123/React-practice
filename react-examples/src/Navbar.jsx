

import React from 'react'
import {Link, link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='rams'>
        <ul>
            <Link to="/abc"><li>Firstpage</li></Link>
            <Link to="/abcd">  <li>Secondpage</li></Link>
          <Link to='/ab'><li>Thirdpage</li></Link>
            
         <Link to='a'> <li>Fourthpage</li></Link>  
        </ul>
      
    </div>
  )
}

export default Navbar

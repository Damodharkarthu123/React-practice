

import React, { useEffect, useState } from 'react'

const Resize =()=>{

const [screensize, setScreensize] = useState(
    {
        width:window.innerWidth,
        height:window.innerHeight

    }
);
   const updateScreensize =() => {
    setScreensize({
        width:window.innerWidth,
        height:window.innerHeight,

    });
   };


   useEffect(() =>{
    window.addEventListener('resize',updateScreensize);
     return()=>{
        window.removeEventListener('resize',updateScreensize);
     };
   },[]
);

return(  <div>

      <h2>screensize example</h2>
      <p>the coders important for software</p>
      <p style={{color:"pink"}}>width:{screensize.width}Px</p>
      <p style={{color:"pink"}}>height:{screensize.height}Px</p>
    </div>)

  
  
}

export default Resize

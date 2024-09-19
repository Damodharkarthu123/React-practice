

import React, { useState } from 'react'

const Circuit = () => {
    const [game, setgame]=useState(true)

    const MyGame=()=>{
        return(
            <div><h2>I Like Crickter dhoni</h2></div>
        )
    }
  return (
    <div>
      {game&& <MyGame />}
    </div>
  )
}

export default Circuit

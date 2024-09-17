

import React from 'react'
let sampleArray = ["Apple", "Mango", 35, {username: "Damodhar"}]


const SampleArray = () => {
  return (
    <div>
          {sampleArray.map(()=>{})}
  <h2> {sampleArray[0]} is a good fruit</h2>   
  <h2>my age is {sampleArray[2]}</h2>
  <h3> my name is{sampleArray[3].username}
  </h3>
    </div>
  )
}

export default SampleArray

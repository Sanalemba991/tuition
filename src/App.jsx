import React, { useEffect, useState } from 'react'

function App() {
  const[count,setCount]=useState(0);
  useEffect(()=>{
    setCount(1)
  })
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App

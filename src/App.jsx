import React, { useEffect, useState } from 'react'

function App() {
  const [sam,setSam]=useState('0');

  useEffect(()=>{
    setSam(1)
  })
  return (
    <div>
      <h1>Sam is {sam}</h1>
      
    </div>
  )
}

export default App

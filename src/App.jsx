import React, { useEffect, useState } from 'react'

function App() {
  const [sam,setSam]=useState('Ram');

  useEffect(()=>{
    setSam('component')
  },[])
  return (
    <div>
      <h1>Sam is {sam}</h1>
      
    </div>
  )
}

export default App

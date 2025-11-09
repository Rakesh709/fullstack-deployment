
import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
      fetch("http://localhost:4000/api/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => {
          console.log("Error in fetching",err)
        })
  },[])

  return (
    <>
      <h1>Welcome to frontend</h1>
      <h2>{message}</h2>
      <h2> By Rakesh</h2>
    </>
  )
}

export default App

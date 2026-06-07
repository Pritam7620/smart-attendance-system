import React from 'react'
import { data, useNavigate } from 'react-router-dom'

function Home() {
  const tok =  localStorage.getItem("token")
 const mailname = localStorage.getItem("mailname")

  return (
    <div>
      
      <div>
      <h1>Welcome : {mailname}</h1>
      </div>
    </div>
  )
}

export default Home

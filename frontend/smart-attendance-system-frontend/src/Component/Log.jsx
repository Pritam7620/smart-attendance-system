import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Log() {
const navingate = useNavigate()
const [loging , setloging] = useState({

email :"",
password : ""

})


  async function loginfun()
  {
const res = await fetch("http://localhost:4000/student/login",{
  method : "POST",
  headers : { "Content-Type" : "application/json"  },
  body : JSON.stringify(loging)
})

const data = await res.text()


try {
  if(data != "Invalid email and Password"){
localStorage.setItem("token" , data)
localStorage.setItem("mailname" , loging.email)
alert("login successfull")
navingate("/dashboard")
}else{
  alert("login unsuccessfull..........")
}
} catch (error) {
  alert("faild...")
}


  }


  return (
    <div>
      <div>
        <input type="email" placeholder='entet your email' value={loging.email} onChange={(e)=>setloging({...loging  , email : e.target.value})}  /> <br /><br />
        <input type="password" placeholder='enter password' value={loging.password} onChange={(e)=>setloging({...loging , password : e.target.value})} /> <br /><br />
        <button onClick={loginfun}>Login</button>

      
      </div>
      <div>
        <p>New User?<button> <a href="/register">register</a></button></p>
      </div>
    </div>
  )
}

export default Log

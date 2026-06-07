import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const nav = useNavigate()
let [register , setregister] = useState({

 "fullName": "",
  "email": "",
  "mobile": "",
  "rollNo": "",
  "password": "",
  "department": ""
  
}
)

async function registerfun(){

  if(register.fullName.trim() ==="" || register.email.trim() ===""||register.mobile.trim()===""|| register.rollNo.trim() === "" || register.password.trim() ===""){
alert("enter data first.....")
return
  }
const res = await fetch("http://localhost:4000/student/register",{
method : "POST",
headers : {"Content-Type":"application/json"},
body : JSON.stringify(register)
})
const data = await res.json()

if(res.ok){

  alert("register successfully")
nav("/")
}else{
  alert("register unsuccessful....")
}



setregister({
  "fullName": "",
  "email": "",
  "mobile": "",
  "rollNo": "",
  "password": "",
  "department": ""
   
})
}


  return (
    <div>
      <div>
        <input type="text" placeholder='enter name' value={register.fullName} onChange={(e)=>setregister({...register, fullName: e.target.value})} /> <br /><br />
        
        <input type="email" placeholder='enter your email' value={register.email} onChange={(e)=> setregister({
          ...register , email : e.target.value
        })} /> <br /><br />

        <input type="text" placeholder='enter phone no' value={register.mobile} onChange={(e)=>setregister({...register, mobile : e.target.value})} /> <br /><br />

<input type="text" placeholder='enter roll' value={register.rollNo} onChange={(e)=>setregister({...register, rollNo : e.target.value})} /> <br /><br />

        <input type="password" placeholder='enter password' value={register.password} onChange={(e)=>setregister({...register, password : e.target.value})} /> <br /><br />



        <input type="text" placeholder='enter department' value={register.department} onChange={(e)=>setregister({...register, department : e.target.value})} /> <br /><br />

        <button onClick={registerfun}>register</button>
      </div>
      
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const nav = useNavigate()

  const [register, setregister] = useState({
    fullName: "",
    email: "",
    mobile: "",
    rollNo: "",
    password: "",
    department: ""
  })

  async function registerfun() {

    if (
      register.fullName.trim() === "" ||
      register.email.trim() === "" ||
      register.mobile.trim() === "" ||
      register.rollNo.trim() === "" ||
      register.password.trim() === ""
    ) {
      alert("Please enter all details")
      return
    }

    const res = await fetch(
      "http://localhost:4000/student/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(register)
      }
    )

    if (res.ok) {

      alert("Register Successfully")

      setregister({
        fullName: "",
        email: "",
        mobile: "",
        rollNo: "",
        password: "",
        department: ""
      })

      nav("/")

    } else {

      alert("Registration Failed")

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Registration
        </h1>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={register.fullName}
          onChange={(e) =>
            setregister({
              ...register,
              fullName: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={register.email}
          onChange={(e) =>
            setregister({
              ...register,
              email: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={register.mobile}
          onChange={(e) =>
            setregister({
              ...register,
              mobile: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={register.rollNo}
          onChange={(e) =>
            setregister({
              ...register,
              rollNo: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={register.password}
          onChange={(e) =>
            setregister({
              ...register,
              password: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Enter Department"
          value={register.department}
          onChange={(e) =>
            setregister({
              ...register,
              department: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-5"
        />

        <button
          onClick={registerfun}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </button>
<div className="text-center mt-5">
  <p className="text-gray-600">
    Have an account?{" "}
    <Link
      to="/"
      className="text-blue-600 font-semibold hover:underline"
    >
      Login
    </Link>
  </p>
</div>
      </div>

    </div>
  )
}

export default Register
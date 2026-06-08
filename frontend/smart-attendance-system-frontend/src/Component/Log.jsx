import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Log() {

  const navigate = useNavigate()

  const [loging, setloging] = useState({
    email: "",
    password: ""
  })

  async function loginfun() {

    try {

      const res = await fetch(
        "http://localhost:4000/student/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loging)
        }
      )

      const data = await res.text()

      if (data !== "Invalid email and Password") {

        localStorage.setItem("token", data)
        localStorage.setItem("mailname", loging.email)

        alert("Login Successful")

        navigate("/dashboard")

      } else {

        alert("Invalid Email or Password")

      }

    } catch (error) {

      console.log(error)
      alert("Server Error")

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Smart Attendance System
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={loging.email}
          onChange={(e) =>
            setloging({
              ...loging,
              email: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={loging.password}
          onChange={(e) =>
            setloging({
              ...loging,
              password: e.target.value
            })
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={loginfun}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center mt-5">

          New User?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Log
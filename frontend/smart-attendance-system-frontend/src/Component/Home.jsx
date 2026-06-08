import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const mailname = localStorage.getItem("mailname")

  async function markAttendance() {

    const res = await fetch(
      "http://localhost:4000/attendance/mark/1",
      {
        method: "POST"
      }
    )

    if(res.ok){
      alert("Attendance Marked Successfully")
    }else{
      alert("Attendance Already Marked")
    }
  }

  function logOutfun(){

    localStorage.removeItem("token")
    localStorage.removeItem("mailname")

    window.location.href="/"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Smart Attendance System
        </h1>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold">
            Welcome
          </h2>

          <p className="text-gray-700">
            {mailname}
          </p>
        </div>

        <button
          onClick={markAttendance}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Mark Attendance
        </button>

        <Link to="/attendancehistory">
          <button
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Attendance
          </button>
        </Link>

        <button
          onClick={logOutfun}
          className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Home
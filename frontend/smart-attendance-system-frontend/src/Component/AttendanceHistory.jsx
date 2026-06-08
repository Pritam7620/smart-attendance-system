import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Attendance() {

  const [attendance, setAttendance] = useState([])
  const tk = localStorage.getItem("token")

  async function attendanceHis() {

    const res = await fetch(
      "http://localhost:4000/attendance/getAttendance",
      {
        headers: {
          "Authorization": `Bearer ${tk}`
        }
      }
    )

    const data = await res.json()
    setAttendance(data)
  }

  useEffect(() => {
    attendanceHis()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h1 className="text-3xl font-bold text-center mb-6">
            Attendance History
          </h1>

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-300">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-3 border">Student ID</th>
                  <th className="p-3 border">Attendance Date</th>
                  <th className="p-3 border">Attendance Time</th>
                  <th className="p-3 border">Status</th>
                </tr>

              </thead>

              <tbody>

                {
                  attendance.length > 0 ? (

                    attendance.map((e, i) => (

                      <tr
                        key={i}
                        className="text-center hover:bg-gray-100"
                      >
                        <td className="p-3 border">
                          {e.studentId}
                        </td>

                        <td className="p-3 border">
                          {e.attendanceDate}
                        </td>

                        <td className="p-3 border">
                          {e.attendanceTime}
                        </td>

                        <td className="p-3 border font-semibold text-green-600">
                          {e.status}
                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>
                      <td
                        colSpan="4"
                        className="text-center p-5 text-gray-500"
                      >
                        No Attendance Records Found
                      </td>
                    </tr>

                  )
                }

              </tbody>

            </table>

          </div>

          <div className="mt-6 text-center">

            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Dashboard
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Attendance
import React from 'react'
import Student from './Student'
import axios from 'axios'
import generatePDF from './reportGenerator'

export default function App() {
  const [studentData, setStudentData] = React.useState([])

  React.useEffect(() => {
    const getAllStudents = () => {
      axios
        .get('http://localhost:8080/rest/webapi/students')
        .then((res) => {
          setStudentData(res.data)
        })
        .catch((err) => console.log(err))
    }

    getAllStudents()
  }, [])

  return (
    <div className='container mb-4 mt-4 p-3'>
      <div className='row'>
        <button
          className='btn btn-primary'
          onClick={() => generatePDF(studentData)}
        >
          Generate PDF report
        </button>
      </div>
      <Student studentData={studentData} />
    </div>
  )
}

import React from 'react'

export default function Student({ studentData }) {
  return (
    <div className='container'>
      {studentData.length === 0 ? (
        'No Students Found!!'
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Roll Number</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.rollNo}>
                <td>{student.rollNo}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.age}</td>
                <td>Address of the Student</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

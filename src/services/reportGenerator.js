import jsPDF from 'jspdf'
import 'jspdf-autotable'

const generatePDF = (studentData) => {
  const doc = new jsPDF()

  const tableColumn = [
    'Roll Number',
    'First Name',
    'Last Name',
    'Age',
    'Address',
  ]

  const tableRows = []

  studentData.forEach((student) => {
    const reportData = [
      student.rollNo,
      student.firstname,
      student.lastname,
      student.age,
      'Address of the Student',
    ]

    tableRows.push(reportData)
  })

  doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 })

  const date = Date().split(' ')
  doc.text("Student's  Data", 14, 15)
  doc.save(`report_${date[2]}${date[1]}${date[3]}_${date[4]}.pdf`)
}

export default generatePDF

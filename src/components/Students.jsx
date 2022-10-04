import Navbar from "./Navbar"
import Card from "./Card"
import axios from 'axios'
import { useEffect, useState } from "react"

const Students = () => {
  const [students, setStudents] = useState([])

  const fetchStudents = () => axios.get('http://localhost:3000/api/students')
    .then((response) => {
      const students = response.data
      setStudents(students)
    })
    .catch(error => console.error('students api req failed', error))


  const deleteStudent = (id) => {
    axios.delete(`http://localhost:3000/api/students/${id}`)
    .then(fetchStudents)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const newStudentClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true })
  }

  return (
    <div>
    <Navbar />
      <span>
        <div id="header">
          <h2>List of All Students</h2>
          <button
          className="new-student-button"
          type="button"
          onClick={newStudentClickHandler}
          >
          Create New Student
          </button>
        </div>
        {students.length === 0 ?
        <h1>No Students found!</h1> :
        <div>
          {students.map(student => {
          return (
          <Card
            key={student.id}
            id={student.id}
            imgUrl={student.imageUrl}
            name={`${student.firstName} ${student.lastName}`}
            onDelete={deleteStudent}
            // route='students'
            />
          )
        })}
        </div>
        }
      </span>
    </div>
  )
}

export default Students

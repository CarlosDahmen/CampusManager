import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const EditCampus = (props) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [students, setStudents] = useState([])

  const pathname = location.pathname;

  const fetchCampus = () => {
    axios.get(`http://localhost:3000/api${pathname}`)
    .then((response) => {
      const campus = response.data.campus;
      const students = response.data.students;
      setName(campus.name)
      setAddress(campus.address)
      setDescription(campus.description)
      setStudents(students)
    })
    .catch(error => console.error('campuses api req failed', error))
  }

  const updateCampus = (data) => {
    axios.put(`http://localhost:3000/api${pathname}`, data)
    .then(
      setName(''),
      setAddress(''),
      setDescription('')
    )
  }

  const updateStudent = data => {
    axios.put(`http://localhost:3000/api/students/${data.studentId}`, data).then(
      fetchCampus()
    )
  }

  const submitHandler = evt => {
    evt.preventDefault()
    updateCampus({ name, address, description })
  }

  const unsubscribeStudent = (studentId) => {
    updateStudent({ studentId, campusId: null })
  }

  useEffect(() => {
    fetchCampus()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="update-campus-form">
        <form onSubmit={submitHandler}>
          <label htmlFor="campusName">Campus Name:</label>
          <input name="name" onChange={(evt) => setName(evt.target.value)} value={name} />
          <label htmlFor="campusAddress">Campus Address:</label>
          <input name="address" onChange={(evt) => setAddress(evt.target.value)} value={address} />
          <label htmlFor="campusDescription">Campus Description:</label>
          <input name="description" onChange={(evt) => setDescription(evt.target.value)} value={description} />
          <button type="submit">Update</button>
          <h2>Students in this Campus:</h2>
          {
          students.length === 0 ? <h3>No Students assigned to this campus</h3> :
          students.map(student => {
            return (
              <div key={student.id}>
                <h3>{student.firstName} {student.lastName}</h3>
                <button onClick={() => unsubscribeStudent(student.id)} type="button"> Unsubscribe this student from this campus</button>
              </div>
            )
            })
          }
        </form>
      </ div>
    </div>
  )
};

export default EditCampus

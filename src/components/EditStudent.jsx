import React, {useEffect, useState} from "react";
import Navbar from './Navbar';
import axios from "axios";

const pathname = location.pathname;

const EditStudent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [gpa, setGpa] = useState('')
  const [campusId, setCampusId] = useState('')
  const [campuses, setCampuses] = useState([])


  const fetchStudent = () => {
    axios.get(`http://localhost:3000/api${pathname}`).then((response) => {
      const student = response.data
      // const campus = response.date.campus
      console.log('student', student)
      setFirstName(student.firstName)
      setLastName(student.lastName)
      setEmail(student.email)
      setImageUrl(student.imageUrl)
      setGpa(student.gpa)
      setCampusId(student.campusId)
    })
  }

  const fetchCampuses = () => axios.get('http://localhost:3000/api/campuses')
    .then((response) => {
      const campuses = response.data
      setCampuses(campuses)
    })
    .catch(error => console.error('campuses api req failed', error))

  useEffect(() => {
    fetchStudent()
    fetchCampuses()
  }, [])

  const updateStudent = (data) => {
    axios.put(`http://localhost:3000/api${pathname}`, data)
    .then(
      fetchStudent()
    )
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log('campusID', campusId)
    updateStudent({firstName, lastName, email, imageUrl, gpa, campusId})
  }

  return (
    <div>
      <Navbar />
        <div className="update-campus-form">
          <form onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" onChange={(evt) => setFirstName(evt.target.value)} value={firstName} />
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" onChange={(evt) => setLastName(evt.target.value)} value={lastName} />
            <label htmlFor="email">Email:</label>
            <input name="email" onChange={(evt) => setEmail(evt.target.value)} value={email} />
            <label htmlFor="imageUrl">Image URL:</label>
            <input name="imageUrl" onChange={(evt) => setImageUrl(evt.target.value)} value={imageUrl} />
            <label htmlFor="gpa">GPA:</label>
            <input name="gpa" onChange={(evt) => setGpa(evt.target.value)} value={gpa} />
            <button type="submit">Update</button>
            <h2>Assign Student to Campus:</h2>
            {campuses.length === 0 ? <h2>No campuses found</h2> :
              <select onChange={(evt) => setCampusId(evt.target.value)} value={campusId} name="Campus" id="Campuses">
                {campuses.map((campus) => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>
                  })}
              </select>}
          </form>
        </div>
    </div>
  )
}

export default EditStudent

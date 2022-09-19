import Navbar from "./Navbar"
import Card from "./Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Campuses = () => {

  const [campuses, setCampuses] = useState([])
  const [students, setStudents] = useState([])

  const fetchCampuses = () => axios.get('http://localhost:3000/api/campuses')
    .then((response) => {
      const campuses = response.data
      setCampuses(campuses)
      setStudents(students)
    })
    .catch(error => console.error('campuses api req failed', error))

  const deleteCampus = (id) => {
    axios.delete(`http://localhost:3000/api/campuses/${id}`)
    .then(fetchCampuses)
  }

  useEffect(() => {
    fetchCampuses()
  }, [])

  let navigate = useNavigate()

  const newCampusClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true })
  }

  return(
    <div>
    <Navbar />
      <span>
        <h2>All Campuses</h2>
        <button
        className="new-campus-button"
        type="button"
        onClick={newCampusClickHandler}
        >
        Create New Campus
        </button>
        {campuses.length === 0 ?
        <h1>No Campuses in DB</h1> :
        <div>
          {campuses.map(campus => {
          return (
          <Card
            key={campus.id}
            id={campus.id}
            name={campus.name}
            delete={deleteCampus}
            navigate={navigate}
            />
          )
        })}
        </div>
        }
      </span>
    </div>
  )
}

export default Campuses
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const EditCampus = ({ id, onDelete }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [students, setStudents] = useState([]);

  const pathname = window.location.pathname;

  const fetchCampus = () => {
    axios
      .get(`http://localhost:3000/api${pathname}`)
      .then((response) => {
        const campus = response.data.campus;
        const students = response.data.students;
        setName(campus.name);
        setAddress(campus.address);
        setDescription(campus.description);
        setImageUrl(campus.imageUrl);
        setStudents(students);
      })
      .catch((error) => console.error("campuses api req failed", error));
  };

  const updateCampus = (data) => {
    axios
      .put(`http://localhost:3000/api${pathname}`, data)
      .then(setName(""), setAddress(""), setDescription(""));
  };

  const updateStudent = (data) => {
    axios
      .put(`http://localhost:3000/api/students/${data.studentId}`, data)
      .then(fetchCampus());
  };

  const unsubscribeStudent = (studentId) => {
    updateStudent({ studentId, campusId: null });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    updateCampus({ name, address, description });
  };

  useEffect(() => {
    fetchCampus();
  }, []);

  return (
    <div>
      <div className="card">
        <img src={imageUrl} alt="image" />
        <div className="card-text">
          <div className="update-form">
            <form onSubmit={submitHandler}>
              <div className="form-field">
                <label htmlFor="campusName">Campus Name:</label>
                <input
                  name="name"
                  onChange={(evt) => setName(evt.target.value)}
                  value={name}
                />
              </div>
              <div className="form-field">
                <label htmlFor="campusAddress">Campus Address:</label>
                <input
                  name="address"
                  onChange={(evt) => setAddress(evt.target.value)}
                  value={address}
                />
              </div>
              <div className="form-field">
                <label htmlFor="campusDescription">Campus Description:</label>
                <input
                  name="description"
                  onChange={(evt) => setDescription(evt.target.value)}
                  value={description}
                />
              </div>
            </form>
          </div>

          <div className="card-information">
            <div className="card-actions">
              <button type="submit">Update</button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  onDelete(id);
                }}
                className="card-delete-button"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Students in this Campus:</h2>
        {students.length === 0 ? (
          <h3>No Students assigned to this campus</h3>
        ) : (
          students.map((student) => {
            return (
              <div>
                <Card
                  key={student.id}
                  id={student.id}
                  imageUrl={student.imageUrl}
                  name={`${student.firstName} ${student.lastName}`}
                />
                <button
                  onClick={() => unsubscribeStudent(student.id)}
                  type="button"
                >
                  {" "}
                  Unsubscribe this student from this campus
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EditCampus;

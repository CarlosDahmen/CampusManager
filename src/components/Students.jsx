import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const fetchStudents = () =>
    axios
      .get("http://localhost:3000/api/students")
      .then((response) => {
        const students = response.data;
        setStudents(students);
      })
      .catch((error) => console.error("students api req failed", error));

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:3000/api/students/${id}`)
      .then(fetchStudents);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const newStudentClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true });
  };

  return (
    <div>
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
        {students.length === 0 ? (
          <h1>No Students found!</h1>
        ) : (
          <div>
            {students.map((student) => {
              return (
                <Card
                  key={student.id}
                  id={student.id}
                  imageUrl={student.imageUrl}
                  name={`${student.firstName} ${student.lastName}`}
                  onDelete={deleteStudent}
                  navigateTo={() => {
                    navigate(`${student.id}`);
                  }}
                />
              );
            })}
          </div>
        )}
      </span>
    </div>
  );
};

export default Students;

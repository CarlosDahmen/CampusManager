import EditCard from "./EditCampus";
import { useEffect, useState } from "react";
import axios from "axios";

const EditStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [campusId, setCampusId] = useState("");
  const [campuses, setCampuses] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pathname = window.location.pathname;

  const fetchCampuses = () => {
    axios
      .get("http://localhost:3000/api/campuses")
      .then((response) => {
        const campuses = response.data;
        campuses.push({ id: null, name: "Not Assigned" });
        setCampuses(campuses);
      })
      .catch((error) => console.error("campuses api req failed", error));
  };

  const fetchStudent = () => {
    axios.get(`http://localhost:3000/api${pathname}`).then((response) => {
      const student = response.data;
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setEmail(student.email);
      setImageUrl(student.imageUrl);
      setGpa(student.gpa);
      setCampusId(student.campusId);
    });
  };

  const updateStudent = (data) => {
    setIsLoading(true);
    return axios.put(`http://localhost:3000/api${pathname}`, data).then(() => {
      setIsLoading(false);
      fetchStudent();
    });
  };

  const submitHandler = (evt) => {
    console.log("Submitting my opponent");
    evt.preventDefault();
    updateStudent({ firstName, lastName, email, imageUrl, gpa, campusId });
  };

  useEffect(() => {
    fetchStudent();
    fetchCampuses();
  }, []);

  return (
    <div className="card">
      <img src={imageUrl} alt="image" />
      <div className="card-text">
        <div className="update-form">
          {isLoading ? <div>Heloooo I'm loading!!!</div> : null}
          <form onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name:</label>
            <input
              name="firstName"
              onChange={(evt) => setFirstName(evt.target.value)}
              value={firstName}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              name="lastName"
              onChange={(evt) => setLastName(evt.target.value)}
              value={lastName}
            />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
            />
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              name="imageUrl"
              onChange={(evt) => setImageUrl(evt.target.value)}
              value={imageUrl}
            />
            <label htmlFor="gpa">GPA:</label>
            <input
              name="gpa"
              onChange={(evt) => setGpa(evt.target.value)}
              value={gpa}
            />
            <label htmlFor="campus">Campus:</label>
            {campuses.length === 0 ? (
              <h2>No campuses found</h2>
            ) : (
              <select
                onChange={(evt) => {
                  console.log(evt.target.value);
                  setCampusId(evt.target.value);
                }}
                placeholder="No Campus"
                value={campusId || ""}
                name="Campus"
                id="Campuses"
              >
                {campuses.map((campus) => {
                  return (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  );
                })}
              </select>
            )}
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;

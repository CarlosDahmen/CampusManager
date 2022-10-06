import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const NewStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGpa] = useState(0);

  const createNewStudent = (data) => {
    axios
      .post("http://localhost:3000/api/students/", data)
      .catch((error) => console.error("students api post failed", error));
  };

  const createHandler = (evt) => {
    evt.preventDefault();
    createNewStudent({ firstName, lastName, email, imageUrl, gpa });
    setFirstName("");
    setLastName("");
    setEmail("");
    setImageUrl("");
    setGpa(0);
  };

  return (
    <div className="create-student-form">
      <form onSubmit={createHandler}>
        <label htmlFor="studentFirstName">First Name:</label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewStudent;

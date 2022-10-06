import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const NewCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const createNewCampus = (data) => {
    axios
      .post("http://localhost:3000/api/campuses/", data)
      .catch((error) => console.error("campuses api post failed", error));
  };

  const createHandler = (evt) => {
    evt.preventDefault();
    createNewCampus({ name, address, description });
    setName("");
    setAddress("");
    setDescription("");
  };

  return (
    <div className="create-campus-form">
      <form onSubmit={createHandler}>
        <label htmlFor="campusName">Campus Name:</label>
        <input
          name="name"
          onChange={(evt) => setName(evt.target.value)}
          value={name}
        />
        <label htmlFor="campusAddress">Campus Address:</label>
        <input
          name="address"
          onChange={(evt) => setAddress(evt.target.value)}
          value={address}
        />
        <label htmlFor="campusDescription">Campus Description:</label>
        <input
          name="description"
          onChange={(evt) => setDescription(evt.target.value)}
          value={description}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCampus;

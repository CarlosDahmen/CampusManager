import Navbar from "./Navbar";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Campuses = () => {
  const navigate = useNavigate();
  const [campuses, setCampuses] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchCampuses = () =>
    axios
      .get("http://localhost:3000/api/campuses")
      .then((response) => {
        const campuses = response.data;
        setCampuses(campuses);
        setStudents(students);
      })
      .catch((error) => console.error("campuses api req failed", error));

  const deleteCampus = (id) => {
    axios
      .delete(`http://localhost:3000/api/campuses/${id}`)
      .then(fetchCampuses);
  };

  useEffect(() => {
    fetchCampuses();
  }, []);

  const newCampusClickHandler = (evt) => {
    evt.preventDefault();
    navigate("./create", { replace: true });
  };

  return (
    <div>
      <span>
        <div id="header">
          <h2>List of All Campuses</h2>
          <button
            className="new-campus-button"
            type="button"
            onClick={newCampusClickHandler}
          >
            Create New Campus
          </button>
        </div>
        {campuses.length === 0 ? (
          <h1>No Campuses in DB</h1>
        ) : (
          <div>
            {campuses.map((campus) => {
              return (
                <Card
                  key={campus.id}
                  id={campus.id}
                  name={campus.name}
                  delete={deleteCampus}
                  imageUrl={campus.imageUrl}
                  navigateTo={() => navigate(`campuses/${campus.id}`)}
                />
              );
            })}
          </div>
        )}
      </span>
    </div>
  );
};

export default Campuses;

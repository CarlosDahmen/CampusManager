import { useNavigate } from "react-router-dom";

const Card = ({
  id, imgUrl, name, onDelete, route
}) => {

  const navigate = useNavigate()
  const location = window.location.pathname

  return  (
    <div className="card">
        <img src={imgUrl} alt="image" />
        <div className="card-text">
          <div className="card-information">
            <h2>{name}</h2>
            <div className="card-actions">
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  navigate(`${location}/${id}`)
                }} className="card-edit-button" type="button">Edit
              </button>

              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  onDelete(id)
                }} className="card-delete-button" type="button">Delete
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card;

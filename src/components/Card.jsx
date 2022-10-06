import { useNavigate } from "react-router-dom";

const Card = ({ id, imageUrl, name, onDelete, navigateTo }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="image" />
      <div className="card-text">
        <div className="card-information">
          <h2>{name}</h2>
          <div className="card-actions">
            <button
              onClick={(evt) => {
                evt.preventDefault();
                navigateTo();
              }}
              className="card-edit-button"
              type="button"
            >
              Edit
            </button>

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
  );
};

export default Card;

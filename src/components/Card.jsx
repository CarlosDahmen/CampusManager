const Card = props => {
  return  (
    <div className="card">
        <div className="card-text">
          <div className="card-information">
            <h2>{props.name}</h2>
            <div className="card-actions">
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  props.navigate(`./${props.id}`, { replace: true })
                }} className="card-edit-button" type="button">Edit
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  props.delete(props.id)
                }} className="card-delete-button" type="button">Delete
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card;

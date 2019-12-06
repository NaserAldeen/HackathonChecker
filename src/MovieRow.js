import React from "react";
import { watch, unwatch, deleteMovie } from "./redux/actions/actions";
import { connect } from "react-redux";
function MovieRow(props) {
  let buttonText = "Done";

  if (props.watched == false) buttonText = "Done";
  else buttonText = "Undo";

  const watchMovie = () => {
    if (props.watched == false) {
      props.watch(props.title);
      buttonText = "Done";
    } else {
      props.unwatch(props.title);
      buttonText = "Undo";
    }
  };
  return (
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            {!props.watched ? props.title : <strike>{props.title}</strike>}
          </div>
          <div className="col">
            <button className="btn btn-info" onClick={() => watchMovie()}>
              {buttonText}
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-danger"
              onClick={() => props.deleteMovie(props.title)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    watch: movie => dispatch(watch(movie)),
    unwatch: movie => dispatch(unwatch(movie)),
    deleteMovie: movie => dispatch(deleteMovie(movie))
  };
};

export default connect(null, mapDispatchToProps)(MovieRow);

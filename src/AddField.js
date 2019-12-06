import React, { Component } from "react";
import { addMovie } from "./redux/actions/actions";
import { connect } from "react-redux";

class AddField extends Component {
  state = {
    inputValue: ""
  };
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  handleClick = event => {
    if (this.state.inputValue != "") {
      this.props.addMovie(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };
  handleKeyPress = target => {
    if (target.charCode == 13) {
      if (this.state.inputValue != "") {
        this.props.addMovie(this.state.inputValue);
        this.setState({ inputValue: "" });
      }
    }
  };
  render() {
    return (
      <div
        className="input-group mb-5"
        style={{ width: "250px", marginLeft: "85px" }}
      >
        <input
          type="text"
          class="form-control"
          placeholder="Add a task.."
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="input-group-append">
          <button
            className="btn btn-info"
            type="button"
            id="button-addon2"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};

export default connect(null, mapDispatchToProps)(AddField);

import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {
  state = {
    imageURL: "",
    counter: 0,
  };

  style = {
    image: {
      maxWidth: "25%",
      height: "300px"
    },
  };

  componentDidMount() {
    this.getNewDog();
  }

  getNewDog = () => {
    API.getNewDog()
      .then((response) => {
        console.log(response.data);
        this.setState({
          imageURL: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleThumbsUpClick = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    if (randomNumber === 3) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }

    this.getNewDog();
  };

  handleThumbsDownClick = () => {
    this.getNewDog();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {this.state.imageURL && (
              <img
                src={this.state.imageURL}
                alt="pup"
                style={this.style.image}
              ></img>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <button
              className="btn btn-danger"
              onClick={this.handleThumbsDownClick}
            >
              Thumbs Down
            </button>
          </div>
          <div className="col text-right">
            <button
              className="btn btn-success"
              onClick={this.handleThumbsUpClick}
            >
              Thumbs Up
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.counter > 0 && (
              <div className="alert alert-primary text-center" role="alert">
                You currently have {this.state.counter} dog friends!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;

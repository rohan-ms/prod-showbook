import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      homeroute: "",
    };
    this.nameRef = React.createRef();
    this.passRef = React.createRef();
  }
  componentDidMount() {
    alert("Please use your name as username and Admin as  password :)");
  }

  handelClick = (e) => {
    let user = this.nameRef.current.value;
    let pass = this.passRef.current.value;
    console.log(user, pass);
    if (user !== "" && pass === "Admin") {
      this.props.history.replace("/ShowBook/home/" + user);
    } else {
      //   this.props.history.replace("/ShowBook/");

      this.props.history.replace("/ShowBook/home/" + user);
    }
  };
  render() {
    return (
      <React.Fragment>
        <center>
          <div className="loginheader">
            <h1 className="mheader">ShowBook</h1>
            <p className="subd">Find TV Show Info</p>
          </div>
          <div className="middlest"></div>
          <form className="lform" onSubmit={this.handelClick}>
            <input
              type="text"
              ref={this.nameRef}
              placeholder="Username"
              className="bigs"
            />
            <br />
            <br />
            <input
              type="password"
              ref={this.passRef}
              placeholder="Password"
              className="bigs"
            />
            <br />
            <br />
            <input type="submit" value="login" className="sbtn" />
          </form>
        </center>
      </React.Fragment>
    );
  }
}

export default Login;

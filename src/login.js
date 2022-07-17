import React from "react";
import Logo from "./DummyLogo.jpg";

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
      this.props.history.replace("/ShowBook/");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="LoginBackground">
          <div className="loginheader">
            <img className="loginlogoimage" src={Logo} alt="Logo" />
          </div>
          <div className="LoginForm">
            <form className="lform" onSubmit={this.handelClick}>
              <input
                type="text"
                ref={this.nameRef}
                placeholder="Username"
                className="bigs"
              />
              <br />
              <input
                type="password"
                ref={this.passRef}
                placeholder="Password"
                className="bigs"
              />
              <br />
              <input type="submit" value="Login" className="sbtn" />
            </form>
          </div>
        </div>
        <div className="middlest"></div>
      </React.Fragment>
    );
  }
}

export default Login;

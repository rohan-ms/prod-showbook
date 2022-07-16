import React from "react";
import Logo from "./logofinal.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

class Infop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.sid,
      sdata: null,
      hurl: "/ShowBook/home/" + this.props.match.params.uname,
    };
    this.ccount = 0;
  }
  componentDidMount() {
    axios
      .get("https://api.tvmaze.com/shows/" + this.state.id + "?embed=cast")
      .then((result) => this.setState({ sdata: result.data }))
      .catch((error) => console.log(error));
    console.log("pass");
  }

  cleanSumm = (summ) => {
    let csumm = summ.replace(/<[a-z]*>/g, "");
    csumm = summ.replace(/<.[a-z]*>/g, "");

    return csumm;
  };

  castCount() {
    this.ccount += 1;
  }

  fsuccess = () => {
    return (
      <React.Fragment>
        <div className="sbody">
          {console.log(this.state.sdata)}{" "}
          <img
            src={this.state.sdata.image.original}
            alt="ShowPoster"
            width="300px"
            height="400px"
          />
        </div>
        ,
        <div className="sbodydesc">
          <h2>
            {this.state.sdata.name}({this.state.sdata.premiered.slice(0, 4)})
          </h2>
          <h3>
            Rating :{" "}
            {this.state.sdata.rating.average
              ? this.state.sdata.rating.average
              : "Not Available"}
          </h3>
          <h3>Language : {this.state.sdata.language} </h3>
          <h3>
            Genres :{" "}
            {this.state.sdata.genres.map((result) => {
              return result + " ";
            })}
          </h3>
          <h3>
            Type :{" "}
            {this.state.sdata.type ? this.state.sdata.type : "Not Available"}
          </h3>
        </div>{" "}
        <div className="plot">
          <p align="justify">
            <b>Plot</b> : {this.cleanSumm(this.state.sdata.summary)}
          </p>
        </div>
        <br />
        <div className="castinfo">
          <h3>Cast : </h3>{" "}
          {this.state.sdata._embedded.cast.map((res) => {
            return res.person.image
              ? (this.castCount(),
                (
                  <div className="castpho">
                    <img
                      src={res.person.image.medium}
                      alt="castphoto"
                      height="130px"
                      width="100px"
                    />
                    <p>{res.person.name}</p>
                  </div>
                ))
              : null;
          })}
          {this.ccount === 0
            ? (console.log("nt availble"),
              (<p>cast information unavailable</p>))
            : console.log(this.ccount)}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <hr className="topr" />
        <div className="wheader">
          <form>
            {" "}
            <Link to={this.state.hurl}>
              <button type="button" className="bckbtn">
                <i
                  className="fa fa-arrow-circle-left"
                  style={{ color: "white" }}
                ></i>
              </button>
            </Link>
          </form>
          <img
            src={Logo}
            alt="logofinal"
            className="sheader"
            width="500px"
            height="300px"
          />
          <hr className="btmr" />
        </div>
        {this.state.sdata ? this.fsuccess() : console.log("fail")}
      </React.Fragment>
    );
  }
}

export default Infop;

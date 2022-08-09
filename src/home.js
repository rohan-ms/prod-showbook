import React from "react";
import { Link } from "react-router-dom";
//this is a master branch and not changing
// function AccessUname() {
//   const { user } = useParams();
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: this.props.match.params.user, //to be changed
      sdata: [],
      shs: [],
      valid: false,
      strcls: "usual",
      shid: null,
      msg: "Enter your show name above",
    };
    this.srcstr = React.createRef();
  }

  showSearch = async (e) => {
    this.setState({ valid: true });

    let searchstr = this.srcstr.current.value;
    if (searchstr) {
      this.setState({ strcls: "usual" });
      let result = await fetch(
        "https://api.tvmaze.com/search/shows?q=" + searchstr
      );
      let data = await result.json();
      this.setState({ sdata: data });
      this.state.sdata.length !== 0
        ? this.setState({ msg: "Enter your show name above" })
        : this.setState({ msg: "No result found" });
    } else {
      this.setState({ strcls: "warns" });
      alert("Please fill the search field");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="hheader">
          <h1 className="homeheader">Welcome {this.state.uname}</h1>
          <form className="homef">
            <input
              type="text"
              autoFocus
              ref={this.srcstr}
              className={this.state.strcls}
              placeholder="Search..."
            />
            <button type="button" onClick={this.showSearch}>
              <i className="inverted search icon"></i>{" "}
            </button>
          </form>
        </div>
        <div className="sbdy">
          {this.state.sdata.length !== 0 ? (
            this.state.sdata.map((res) => {
              let nurl =
                "/ShowBook/infop/" + this.state.uname + "/" + res.show.id;
              return res.show.image != null && res.show.name != null ? (
                <Link to={nurl}>
                  <div className="gallery">
                    <img
                      src={res.show.image.original}
                      alt="Poster"
                      width="300px"
                      height="400px"
                    />
                    <p className="desc">{res.show.name}</p>
                  </div>{" "}
                </Link>
              ) : null;
            })
          ) : (
            <div className="hmsg">
              <h2>{this.state.msg}</h2>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

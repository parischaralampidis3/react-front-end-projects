import React, { Component } from "react";
import PropTypes from "prop-types"

class Navbar extends Component {


//default props ensure that our information is secure in case of fallback
static defaultProps = {
      title: "Breaking Bad App"
    }
//declare prop types for value validation 
  static propTypes = {
      title:PropTypes.string.isRequired
  }
  render() {
    //destructuring props
    const {title} = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h1>{title}</h1>
          </div>
        </nav>
      </div>
    );
  }
}

  
export default Navbar;

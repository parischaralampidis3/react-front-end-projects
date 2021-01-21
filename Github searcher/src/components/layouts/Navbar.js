import React, { Component } from "react";
import PropTypes from "prop-types";
//create a stateless component because we pass props and we ane not in need for tracking changes from state
export class Navbar extends Component {
  //default props ensure that our information is secure in case of fallback
  static defaultProps = {
    title: "Github Finder",
    icon: "fa fa-github",
  };
  //proptypes ensure that we dont't pass another data types on our properties than the needed ones
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className=' navbar bg-primary'>
        <div className='container-fluid'>
          <h1 className='text-light'>
            {/* we pass data through props on our elements*/}
            <i className={this.props.icon} />
            {this.props.title}
          </h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;

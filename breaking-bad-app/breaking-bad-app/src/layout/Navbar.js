import React from "react";
import PropTypes from "prop-types";

const Navbar = ({title}) => {
  //destructuring props
  return (
    <div>
      <nav className="navbar navbar-light bg-success text-light">
        <div className="container-fluid">
          <h3>{title}</h3>
        </div>
      </nav>
    </div>
  );
};
//default props ensure that our information is secure in case of fallback
Navbar.defaultProps = {
  title: "Breaking Bad App",
};
//declare prop types for value validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;

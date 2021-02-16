import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
//bring proptypes
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  //set a condition for spinner loading
  if (loading) {
    return <Spinner />;
  } else {
    return (
      //this function maps the users through props from user item component
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

//bring prop-types for validating the data value
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
// inline style on the users greed
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;

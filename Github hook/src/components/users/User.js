import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
      
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to={`/`} className="btn btn-dark btn-md my-3 mx-3">
          Back to homepage
        </Link>
        Hireable :{" "}
        {hireable ? (
          <i className="fa fa-check-square text-success" />
        ) : (
          <i className="fa fa-times-circle text-danger" />
        )}

        <div className=" card grid-3 m-5 p-5">
            <div className = "all-center">
                <img src={avatar_url} alt="avatar"  className="round-img " style={{width: "150px"}}/>
                <h1>{name}</h1>
                <p>{location}</p>
            </div>

            <div>
                {bio && <Fragment><h3>Bio</h3><p>{bio}</p></Fragment>}       
                 <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                 <ul>
                     <li>
                         {login && <Fragment> <strong>Login: </strong>{login}
                         </Fragment>}
                     </li>

                     <li>
                         {login && <Fragment> <strong>Company: </strong>{company}
                         </Fragment>}
                     </li>

                     <li>
                         {blog && <Fragment> <strong>Website: </strong>{blog}
                         </Fragment>}
                     </li>



                 </ul>
            </div>
        </div>

        <div className = "card grid-3 p-5 text-light bg-primary"> 
        <div>
            <h1>Stats info</h1>
        </div>

            <div className = " badge-pill badge-primary">followers: {followers}</div>
            <div className = " badge-success">following: {following}</div>
            <div className = "badge-danger">public_repos:{public_repos}</div>
            <div className = "badge-dark">public_gists: {public_gists}</div>
        </div>

      </Fragment>
      
    )
  }
}

export default User;

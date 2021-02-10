import React, { Component } from "react";
import {Link} from 'react-router-dom';
export class UserItem extends Component {
  render() {
    //deconstruct the values
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img m-auto'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
          {/* 
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            more
          </a>*/}
          <Link to = {`/user/${login}`} className='btn btn-dark btn-sm my-1'>more</Link>
        </div>
      </div>
    );
  }
}

export default UserItem;

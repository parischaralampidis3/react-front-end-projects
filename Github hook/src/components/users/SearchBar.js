import React, { Component } from "react";
import PropTypes from "prop-types";

export class SearchBar extends Component {
  //initiate and attach state at the input text
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearUsersResults: PropTypes.func.isRequired,
  };

  //set a function for on change method, that sets the state for handling change value when user types
  //this.setState({ text: event.target.value }); . this outputs the result of user's typing search
  //in order to handle different fields use 'name' ase value on set state to handle these.

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  mySumbitHandler(event) {
   
    event.preventDefault();


    //set alert system 
    //if the input is empty set a prop that takes msg and type as parameterers
    if( this.state.text === ''){
     this.props.setAlert("Please enter Something","light") 
    }
    else{
       //pass props and create a function. through this you create a method in order to search
    this.props.searchUsers(this.state.text);

    //clear the form
    this.setState({ text: " " });
    //console.log("submitted..", this.state.text);
    }
  }
  render() {
    this.handleChange = this.handleChange.bind(this);

    return (
      <div>
        {/* At this point i construct a form in which I set a text area and button for search users */}
        <form
          className='form'
          action='#'
          onSubmit={this.mySumbitHandler.bind(this)}
        >
          <div className='input-group mb-5'>
            <input
              type='text '
              className='form-control m-3'
              name='text'
              placeholder='Search for a user'
              // value is connected with the state of text and the empty string
              value={this.state.text}
              //we need an onChange event when we type something here that updates the state
              onChange={this.handleChange}
            />

            {/* At this point i set a submit button which i''ll click to get the search result of users  */}

            <input
              type='submit'
              value='Search'
              className='btn btn-dark btn-lg m-3
              '
            />
          </div>
        </form>
        {/* Add clear button functionality */}

        <button
          style={buttonStyle}
          type='submit'
          value='Clear'
          className='btn btn-primary  m-3'
          onClick={this.props.clearUsersResults}
        >
          Clear
        </button>
      </div>
    );
  }
}

const buttonStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "1rem",
};

export default SearchBar;

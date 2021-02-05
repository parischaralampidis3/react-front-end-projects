import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/layouts/Alert"
import axios from "axios";

class App extends Component {
  //state declares an empty array where
  state = {
    users: [],
    //set loading for fetching data.loading is set to false when we don't fetch
    loading: false,
    //i added a state for alert 
    alert: null
  };

  async componentDidMount() {
    //although you need to use setState() cycle method to change the status of loading
    this.setState({ loading: true });
    //this makes a request to github api for fetching users
    const res = await axios.get("https://api.github.com/users");

    //once we fetch the data we have setState() to re-set the state to false and get the results
    this.setState({ users: res.data, loading: false });
    //once we get a response, we'll map the API results to our props
    //console.log(res.data);
  }


  //define a function for searching users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    //this makes a request to github api for fetching users
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    //once we fetch the data we have setState() to re-set the state to false and get the results
    this.setState({ users: res.data.items, loading: false });
    // console.log(text);
  };
  //define a function method for clearing users

  clearUsersResults = () => this.setState({ users: [], loading: false });


  //define a function for set alert 

  
  setAlert = (msg,type) =>{
    this.setState({alert:{msg,type}})

    //set timeout for the message appearance 
    setTimeout(()=>{ 
      this.setState ({ alert: null})}, 3000);

  }

  render() {
    //destructure props
    const { users, loading } = this.state;

    return (
      <div>
        <Navbar />
        <div className ="container">
          
       <Alert alert = {this.state.alert}/>
        <SearchBar
          searchUsers={this.searchUsers}
          clearUsersResults={this.clearUsersResults}
          setAlert = {this.setAlert}
        />

        <Users loading={loading} users={users} />
      </div>
      </div>
    );
  }
}

export default App;

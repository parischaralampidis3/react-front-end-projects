import React, { Component, Fragment } from "react";
import Navbar from "./layout/Navbar";
import Characters from "./components/characters/Characters";
import axios from "axios";
class App extends Component {
  //declare an array to store characters


  state = {
    characters: [],
    isLoading: false,
  };

  
  //fetch data
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
    

      this.setState({ characters: response.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Characters characters={this.state.characters} loading={this.state.loading}/>
      </Fragment>
    );
  }
}

export default App;

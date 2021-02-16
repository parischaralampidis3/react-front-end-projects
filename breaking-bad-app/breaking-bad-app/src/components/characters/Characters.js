import React, { Component } from "react";

import CharactersItem from "./CharactersItem";

class Characters extends Component {
 
  

  render() {
    return (
      <div>
        <div style={styleCard}>
          {/*loop through the characters*/}
          {this.props.characters.map((character) => (
            <CharactersItem key={character.char_id} character={character} />
          ))}
        </div>
      </div>
    );
  }
}
//style component with grid
const styleCard = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
};

export default Characters;

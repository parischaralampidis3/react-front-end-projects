import React,{Component} from 'react';
import Navbar from "./layout/Navbar";
import Characters from "./components/Characters"


class App extends Component{

  render(){

    return (
    <div>
      <Navbar/>

      <Characters />
    
    </div>
    )

}
}

export default App;
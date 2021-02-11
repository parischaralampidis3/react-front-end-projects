import React, { Component } from "react"


class Characters extends Component{

    
         //declare a state for passing properties on character object
    state = {
        icon: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        name: "Walter White",
        birthday: "09-07-1958"
    }
        
      
    render(){ 
        
        //destructure state 
        const {icon, name, birthday} = this.state;

        return(
        <div className='container'>
            <div className = "card-body text-center">
                <img className="img-thumbnail img-fluid" width="250" src={icon} alt="avatar"/>
                <h1>{name}</h1>
                <p>{birthday}</p>    
            </div>   
        </div>
        )
    }

}

export default Characters

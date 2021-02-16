import React,{Component} from "react"


class CharactersItem extends Component{
     

render(){  
    
    //destructure state 
           const {img, name, birthday} = this.props.character;

    return(

        <div className='container'>
           
        <div className = "card-body text-center">
            <img src={img} className="img-thumbnail img-fluid" width="150" alt="avatar"/>
            <h1>{name}</h1>
            <p>{birthday}</p>  
         
        </div>   
   
           
 </div>
    )
}

}

export default CharactersItem;
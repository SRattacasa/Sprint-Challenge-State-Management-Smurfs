import React, {useState} from 'react'
import {postAPI} from '../actions/actions'
import { connect } from "react-redux";

const mapStateToProps = state => { 
  return { 
  state
  }
}

const AddSmurf = props => { 

  
  
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formState);
        props.postAPI(formState)
    }
    

      const inputChange = (e) => {
        e.persist();
        
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setformState({ ...formState, [e.target.name]: value });
      };

    const [formState, setformState] = useState({
        name: "",
        age: 22,
        height: "",
        id: "",
      });
      
    return (
        <div>
            <form onSubmit={formSubmit}>
          <label htmlFor="name">
            Name{" "}
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={inputChange}
            />
             
          </label>
          <br></br>
          <label htmlFor="age">
            Age
            <input
              type="text"
              name="age"
              value={formState.age}
              onChange={inputChange}
            />
           
          </label>
          <br></br>
          <label htmlFor="height">
          height{" "}
            <input
              type="height"
              name="height"
              value={formState.height}
              onChange={inputChange}
            />
            
          </label>
          <label htmlFor="id">
          id{" "}
            <input
              type="id"
              name="id"
              value={formState.id}
              onChange={inputChange}
            />
            
          </label>
          
         
  
          <p>
            <button type="submit">SUBMIT BUTTON</button>
          </p>
        </form>
        </div>
    )
}

export default connect(mapStateToProps, {postAPI})(AddSmurf)
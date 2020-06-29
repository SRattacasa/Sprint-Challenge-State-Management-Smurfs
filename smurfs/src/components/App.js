import React from "react";
import "./App.css";
import axios from 'axios'

import SmurfList from "./SmurfList";
import {SmurfContext} from '../contexts/SmurfContext'
import Smurf from "./Smurf";
import NewSmurf from "./NewSmurf";

const App = () =>
   {
     
    

    return (
      <div className="App">
        <Smurf />
      <NewSmurf />
      
        
        
      </div>
    );
  }


export default App;

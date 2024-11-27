//SGN 
import React, {useState} from "react";
import './../styles/App.css';


const ChildComponent2 = ({ selectedOption, onOptionSelect}) => {
    
  
  return (
    <div className="child2">
        {/*ONS Do not remove the main div */}
        <h1>Child Component 2</h1>
        <button onClick={() => onOptionSelect("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2;

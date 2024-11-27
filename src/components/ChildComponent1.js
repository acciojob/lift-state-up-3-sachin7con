//SGN
import React from "react";
import './../styles/App.css';


const ChildComponent1 = ({ selectedOption, onOptionSelect  }) => {
   

  return (
    <div className="child1">
        {/*ONS Do not remove the main div */}
        <h1>Child Component 1</h1>
        <button onClick={() => onOptionSelect("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1;

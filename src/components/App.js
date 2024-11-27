//SGN
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";





const App = () => {
    const [ selectedOption, setselectedOption ] = useState("");

    const handleOption = (option) => {
      setselectedOption(option);
    }

  return (
    <div className="parent">
        {/*ONS Do not remove the main div */}
        <h1>Parent Component</h1>
        
        <ChildComponent1 selectedOption={selectedOption} onOptionSelect={handleOption}></ChildComponent1>
        <ChildComponent2 selectedOption={selectedOption} onOptionSelect={handleOption}></ChildComponent2>

        <p>Selected Option: {selectedOption} </p>
    </div>
  )
}

export default App

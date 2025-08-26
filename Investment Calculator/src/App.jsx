import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
function App() {
  const[userInput1, setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment:12000,
    expectedReturn: 6,
    duration:10
  });

  const inputIsValid = userInput1.duration >=1;


  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>{
      return{
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  

  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput1} />
    {!inputIsValid && <p className="center"> Please enter a duration greater than 0 </p>}
    {inputIsValid && < Results input={userInput1}/>}
    </>
  );
}

export default App

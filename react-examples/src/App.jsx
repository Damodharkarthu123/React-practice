import logo from './logo.svg';
import './App.css';
import Intern from './Intern/Intern';
import Sample from './Intern2/Sample';
import './Sample.css';
import { useState } from 'react';
import Fourthcomp from './Fourthcomp';


function App() {
  const [sampleCondition, setsampleCondition] = useState(true)
  return (
    <div className="App">
      <Intern />
      <Sample />
      <h1> Hello react<br/>{  sampleCondition? <Fourthcomp />: "i am  false statement"  }</h1>
      
    </div>
  );
}

export default App;

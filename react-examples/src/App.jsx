import logo from './logo.svg';
import './App.css';
import Intern from './Intern/Intern';
import Sample from './Intern2/Sample';
import './Sample.css';
import { useState } from 'react';
import Fourthcomp from './Fourthcomp';
import OnClick from './OnClick';
import Doubleclickexample from './Doubleclickexample';
import Resize from './Resize';
import FormExample from './FormExample';
import SampleArray from './SampleArray';
import PeopleList from './PeopleList';
import TempLit from './TempLit';
import UserPage from './UserPage';



function App() {
  const [sampleCondition, setsampleCondition] = useState(true)
  return (
    <div className="App">
      welcome to react
      <Intern />
      <Sample />
      <h1> Hello react<br/>{  sampleCondition? <Fourthcomp />: "i am  false statement"  }</h1>
      <OnClick />
      <Doubleclickexample />
      <Resize />
      <FormExample />
      <SampleArray />
      <PeopleList />
      <TempLit />
      <UserPage />
    

      
    </div>
  );
}

export default App;

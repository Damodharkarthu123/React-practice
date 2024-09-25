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
import Circuit from './Circuit';
import SpreadOp from './SpreadOp';
import MultiSt from './MultiSt';
import Super from './Super';
import Firstpage from './routing/Firstpage';
import Secondpage from './routing/Secondpage';
import Thirdpage from './routing/ Thirdpage';
import Fourthpage from './routing/Fourthpage';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  const [sampleCondition, setsampleCondition] = useState(true)
  return (
    <div className="App">
      welcome to React
      <Navbar />
      <Routes>
        <Route path='/abc' element = {<Firstpage />}/>
        <Route path="/abcd" element ={<Secondpage />}/>
        <Route path="/ab" element ={<Thirdpage />}/>
        <Route path="/a" element={<Fourthpage />}/>
      </Routes>
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
      <Circuit />
      <SpreadOp />
      <MultiSt />
      <Super />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />

    

      
    </div>
  );
}

export default App;



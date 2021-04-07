import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import {Welcome} from './components/Greet'
import Hi from './components/Hi'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ClassClick from './components/ClassClick'
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import Condition from './components/Condition';
import List from './components/List';


function App() {
  return (
    <div className="App">
      {/* <Message/>
      <ClassClick/>
      <FunctionClick/>
      <EventBind/> */}
      <Parent/>
      <Condition/>
      <List/>
      {/* <Counter/> */}
      {/* <Greet/>
      <Welcome/>
      <Hi name="good example"/>
      <Hello name="pranesh">
      <p>this children props</p></Hello>
      <Hello name="prem">
        <button>Action</button>
     </Hello> */}
    </div>
  );
}

export default App;

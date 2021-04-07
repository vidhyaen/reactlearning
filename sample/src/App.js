import React from 'react';
import first from './components/first'
import second from './components/second'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={first}  />
      <Route exact path="/s" component={second}/>
    </Router>
      
    </div>
  );
}

export default App;

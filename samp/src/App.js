import React from 'react';
import './App.css';
import Inline from './component/Inline';
import Stylesheet from './component/Stylesheet';
import './appStyles.css'
import styles from './appStyles.modules.css'
import Form from './component/Form';
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       {/* <Stylesheet primary= {true}/>
       <h1 className='error'>Error</h1>
       <h1 className={styles.success}>Success</h1>
       <Inline/> */}
       {/* <Form/>
       <LifeCycleA/> */}
      <FragmentDemo/>
      {/* </header> */}
    </div>
  );
}

export default App;

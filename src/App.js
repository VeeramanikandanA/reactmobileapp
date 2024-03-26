import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas'
import { useState } from 'react';

function App() {
  const [sign,setSign]= useState();
  const handleclear= ()=>{
    sign.clear();
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi Veeramanikandan A</p>
        <div style={{border:"2px solid black",width: 500, height: 200}}>
          <SignatureCanvas
          ref={data=>setSign(data)}
          canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
          />
        </div>
        <button onClick={handleclear}>Clear</button>
        {/* <button onClick={handlesave}>Save</button> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

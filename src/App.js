import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas'
import { useState } from 'react';

function App() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
  const handleclear = () => {
    sign.clear();
    setUrl('');
  }
  const handlesave = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))

   
  }
  console.log(sign);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hi ArjunVeera</h2>
        <p>Signature</p>
        <div className='sign_box'>
          <SignatureCanvas
            ref={data => setSign(data)}
            canvasProps={{ width: 250, height: 150, className: 'sigCanvas' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
          <button onClick={handleclear} className='can_btn'>Clear</button>
          <button onClick={handlesave} className='save_btn'>Save</button>
        </div>
        <img src={url} alt="logo"/>
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

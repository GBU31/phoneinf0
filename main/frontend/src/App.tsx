import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState("");
  const [timezone, setInfo] = useState('');

  function On_Click() {

    const options = {
      
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
    },
    body:JSON.stringify({val}),
    
    
    };
    fetch('/', options )
      .then(response => response.text())
      .then(response => setInfo(response))
  
  }
  

  return (
    <div className="App">
      
  <div className="field field_v1">
    <label className="ha-screen-reader">Phone number</label>
    <input id="first-name" className="field__input" onChange={e => setVal(e.target.value)} placeholder="e.g.  +1 202 555 0156"></input>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">Phone number</span>
    </span>
  </div>
  <br></br>
  <br></br>
  <button className='bn3637 bn37' onClick={() => On_Click()}>Run</button>
  <br></br>
  <br></br>

  {timezone}
  
<div className="linktr">
  <a href="https://github.com/brookehorizon" target="_blank" className="linktr__goal r-link">GitHub</a>
</div>

      
</div>
  );
}

export default App;

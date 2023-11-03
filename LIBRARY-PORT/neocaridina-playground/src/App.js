import React from 'react';
import './App.css';
import { NEO } from '../../neocaridina-js/main'

function App() {

  let [code, setCode] = React.useState('');
  let [input, setInput] = React.useState('');

  React.useEffect(() => {
    code = NEO.run(input);
    setCode(code);

    document.getElementById('execution-panel').innerHTML = code;
  }, [input]);

  const onInput = (e) => {
    setInput(document.getElementById('editor-panel').value);
  }

  return (
    <div className="App">
      <span id="branding">
        neocaridina 🦞
      </span>

      <div id="editor">
        <div id="panels">
          <textarea id="editor-panel" onKeyUp={e => onInput(e)}></textarea>
          <div id="execution-panel"></div>
        </div>
        <input type="button" id="execute-btn" value="execute" />
      </div>
    </div>
  );
}

export default App;

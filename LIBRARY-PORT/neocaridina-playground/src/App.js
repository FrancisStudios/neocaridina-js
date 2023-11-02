import React from 'react';
import './App.css';
import { NEO } from '../../neocaridina-js/main'

function App() {
  
  let code = NEO.run('# Hello worldöcske');

  return (
    <div className="App">
       <span id="branding">
          neocaridina 🦞
        </span>

        <div id="editor">
          <div id="panels">
            <textarea id="editor-panel"></textarea>
            <div id="execution-panel">{code}</div>
          </div>
          <input type="button" id="execute-btn" value="execute"/>
        </div>
    </div>
  );
}

export default App;

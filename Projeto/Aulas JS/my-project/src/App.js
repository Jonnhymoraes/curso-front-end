//USO DE CLASS import React from "react";
/*USO DE STATE*/ import { useState } from "react"; 

import Title from './Title';
import logo from './logo.svg';
import './App.css';

/* function App() {
  const b = true;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{b ? "Título 1" : "Título 2"}</h1>
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
} */

/* USO DE CLASS 
class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Título 1</h1>
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
} */

//USO DE HOOK -> USESTATE
/* function App() {
  const [title, setTitle] = useState("Título");
  //[value, func]
  const handleClick = () => {
    //console.log("Clicou");
    setTitle("Novo Título");
    console.log("Mudou titulo");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Title text={title}/>
        <Title text= "Parte 2"/>
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
        <button onClick={handleClick}> Troca titulo </button>
      </header>
    </div>
  );
} */

//RENDENRIZAÇÃO CONDICIONAL
function App() {
  const [title, setTitle] = useState("Título");
  const [showTitle, setShowTitle] = useState(false);

  const handleClick = () => {
    setTitle("Novo Título");
    setShowTitle(!showTitle);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        {/* {showTitle ? <Title text={title} /> : null}  ABAIXO O CURTO CIRCUITO*/}
        {showTitle && <Title text = {title} />}
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
        <button onClick={handleClick}> Mostra titulo </button>
      </header>
    </div>
  );
}

export default App;

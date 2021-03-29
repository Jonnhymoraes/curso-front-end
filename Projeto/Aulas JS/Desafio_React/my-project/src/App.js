import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [textoA, setTextA] = useState("Pronto");
  const [textH1, setTextH1] = useState();
  const [stateA, setStateA] = useState(true);

  const handleClick = () => {
    setTextA("Outro texto");
  };
  const handleClick1 = () => {
    setTextH1("Novo Título");
  };

  useEffect(() => {
    stateA ? setStateA(false) : console.log("Nova frase");
  }, [textoA, stateA]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{textH1}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button func={handleClick1} text="Mudar Título" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {textoA}
        </a>
        <p></p>
        <button func={handleClick} text={"Mudar texto do <a> "} />
      </header>
    </div>
  );
}
export default App;

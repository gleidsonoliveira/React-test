import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import ShoppingList from './ShoppingList';

function App() {
  // Função normal
  function Greeting1(props) {
    return <h1>{props.greeting}</h1>
  }

  // Arrow Function com {} e return
  const Greeting2 = props => {
    return <h1>{props.greeting}</h1>
  }

  // Arrow Function sem {} e return implícito
  const Greeting3 = props => <h1>{props.greeting}</h1>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {/* <Welcome name="Sara" />
          <ShoppingList name="Sara02" /> */}
          <Greeting1 greeting="Bosta" />
          <Greeting2 greeting="Bosta2" />
          <Greeting3 greeting="Bosta3" />
        </a>
      </header>
    </div>
  );
}

export default App;

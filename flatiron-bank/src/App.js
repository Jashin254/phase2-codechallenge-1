import logo from './logo.svg';
import './App.css';
import React ,{ useState , useEffect } from 'react';
  // importing json data
// import transactions from 'db.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  // importing json data to be displayed
// useEffect(() => {
//   fetch("http://localhost:3000/transactions")
//     .then((r) => r.json())
//     .then((transactions) => console.log(transactions));
//   }, []);


export default App;

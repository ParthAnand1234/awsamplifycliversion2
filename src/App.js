import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <p>Mr.classy</p>
        <p> ⭐️ best product</p>
        <p> ⭐️high qualitys`` </p>
        <a
          className="App-link"
          href="https://instagram.com/mr.classy_menswears?igshid=uh8octvwycqy"
          target="_blank"
          rel="noopener noreferrer"
        >
         CLICK HERE FOR ONLINE SHOPPING 123
        </a>
         <p>  *contact for any query 👇🏻</p>
        <p>  @8439332229</p>
        <Home/>
      </header>
    </div>
  );
}

export default App;

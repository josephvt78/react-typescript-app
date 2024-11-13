import React from 'react';
import logo from './logo.svg';
import './App.css';


function MyButton() {
  return (
    <button className="avatar" >
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p >Hello there.<br />How do you do?</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>
    </div>
  );
}

export default App;

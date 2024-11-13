import React from 'react';
import logo from './logo.svg';
import './App.css';



const user = {
  name: 'Joseph Varghese',
  imageUrl: process.env.PUBLIC_URL + '/logo192.png',
  imageSize: 90,
};

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
      <h1>{user.name} </h1>
      <img
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
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

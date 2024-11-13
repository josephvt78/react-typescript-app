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
      <h3>{user.name} </h3>
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

const isMyButtonToBeShown = false;

const products = [
  { title: 'Development Environment Setup', id: 1, isPrimary: false },
  { title: 'Application Development', id: 2, isPrimary: true },
  { title: 'Deployment and Support', id: 3, isPrimary: false },
];

const listItems = products.map(product =>
  <li key={product.id} style={{ color: product.isPrimary ? 'green' : 'blue'}} >
    {product.title}
  </li>
);

function ClickMeButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      { isMyButtonToBeShown && <MyButton/>}
      <ClickMeButton/>
      <div><ul>{listItems}</ul></div>
      <AboutPage/>
    </div>
  );
}

export default App;

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
  { title: 'Development Environment Setup', id: 1 },
  { title: 'Application Development', id: 2 },
  { title: 'Deployment and Support', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);


function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      { isMyButtonToBeShown && <MyButton/>}
      <div><ul>{listItems}</ul></div>
      <AboutPage/>
    </div>
  );
}

export default App;

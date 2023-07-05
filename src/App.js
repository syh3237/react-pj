import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="root">
      <h1>Hello World</h1>
      <Sub1 />
    </div>
  );
}

function Sub1() {
  return (
    <div>
      <h1>Sub1</h1>
      <Sub2 />
    </div>
  );
}

function Sub2() {
  return (
    <div>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

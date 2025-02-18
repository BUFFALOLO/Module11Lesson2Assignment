// src/App.jsx
import React from 'react';

function App() {

  const name = "John"
  const greeting = <p>Hello, {name}!</p>
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{greeting}</h2>
    </div>
  );
}
export default App;
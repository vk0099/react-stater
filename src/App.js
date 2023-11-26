import React from 'react';
import './style.css';
import welcome from './components/welcome.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        <welcome />
      </div>
    </div>
  );
}

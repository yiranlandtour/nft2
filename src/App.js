import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Choose your way to mint</h1>
      </div>
    <Button />
      <div className="mint-status">Minted: 2356/5000</div>
      <div className="options">
        <div className="option">
          <img src="aurorium-icon.png" alt="Burn your Aurorium" />
          <p>Burn your Aurorium</p>
        </div>
        <div className="option">
          <img src="gen-zero-icon.png" alt="Burn your Gen Zero" />
          <p>Burn your Gen Zero</p>
        </div>
        <div className="option">
          <img src="classic-mint-icon.png" alt="Classic Mint" />
          <p>Classic Mint 0.1 Sol</p>
        </div>
      </div>
    </div>
  );
}

export default App;

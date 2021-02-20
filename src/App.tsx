import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="header"></div>
        <div className="content-container">
          <div className="beat-visual">
            <div className="circle-shadow-animate"></div>

            <div className="circle">
              <div className="selected-bpm">72</div>
            </div>
          </div>
          <div className="beat-selection"></div>
          <div className="song-description"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

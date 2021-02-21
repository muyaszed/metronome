import React from 'react';
import './App.scss';
import BPMSelectionGroupButtons from './Components/BPMSelectionGroupButtons';

const BPMSelectionOptions = ['72 BPM', '74 BPM', '82 BPM', '84 BPM', '128 BPM', '138 BPM'];

function App() {

  const handleOnClick = () => {

  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="header">
          <div className="header-text">DIGITAL METRONOME</div>
        </div>
        <div className="content-container">
          <div className="beat-visual">
            <div className="circle-shadow"></div>
            <div className="circle">
              <div className="selected-bpm">72</div>
            </div>
          </div>
          <BPMSelectionGroupButtons buttonTitles={BPMSelectionOptions} handleOnClick={handleOnClick} />
          <div className="song-description"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

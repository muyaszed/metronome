import React from 'react';
import './App.scss';
import BPMSelectionGroupButtons, { ButtonInfo } from './Components/BPMSelectionGroupButtons';


const BPMSelectionOptions: ButtonInfo[] = [
  {
    title: '72 BPM',
    active: false
  }, 
  {
    title: '74 BPM',
    active: false
  }, 
  {
    title: '82 BPM',
    active: false,
  }, 
  {
    title:'84 BPM',
    active: false,
  }, 
  {
    title: '128 BPM',
    active: false,
  },
  {
    title: '138 BPM',
    active: false,
  }
];

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
          <BPMSelectionGroupButtons buttons={BPMSelectionOptions} handleOnClick={handleOnClick} />
          <div className="song-description"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

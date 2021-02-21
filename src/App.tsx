import React from 'react';
import './App.scss';
import BeatAnimation, { BeatVisuals, Visuals } from './Components/BeatAnimation';
import BPMSelectionGroupButtons, { ButtonInfo } from './Components/BPMSelectionGroupButtons';
import SongList from './Components/SongList';
import { SongInfo, useGetSongsByBPM } from './Services/API/useGetSongByBPM'

const BPMSelectionOptions: ButtonInfo[] = [
  {
    title: '72 BPM',
    active: false,
    bpmValue: 72
  }, 
  {
    title: '74 BPM',
    active: false,
    bpmValue: 74
  }, 
  {
    title: '82 BPM',
    active: false,
    bpmValue: 82
  }, 
  {
    title:'84 BPM',
    active: false,
    bpmValue: 84
  }, 
  {
    title: '128 BPM',
    active: false,
    bpmValue: 128
  },
  {
    title: '138 BPM',
    active: false,
    bpmValue: 138
  }
];

const visuals: Visuals[] = [
  {
    name: BeatVisuals.VISUAL1,
    active: true,
  },
  {
    name: BeatVisuals.VISUAL2,
    active: false,
  }
];



function App() {
  const [buttonsCurrentStatus, setCurrentButtonsStatus] = React.useState<ButtonInfo[]>(BPMSelectionOptions);
  const [selectedBPM, setSelectedBPM] = React.useState('');
  const [visualActive, setVisualActive] = React.useState(false);
  const [currentVisual, setCurrentVisual] = React.useState(visuals[0]);
  const [songsAreLoading, setSongBPM, songError, songDatas] = useGetSongsByBPM(); 

  const handleOnClick = (selectedIndex: number) => {
    const selectedBPMValue = buttonsCurrentStatus[selectedIndex].bpmValue;
    const duration = 60/selectedBPMValue;
    document.documentElement.style.setProperty('--duration-value', `${duration}s`)

    setCurrentButtonsStatus(
      buttonsCurrentStatus.map((button, index) => selectedIndex === index
        ? {
          ...button,
          active: true,
        }
        : {
          ...button,
          active: false,
        })
    );

    setSelectedBPM(String(selectedBPMValue));
    setVisualActive(true);
    setSongBPM(String(selectedBPMValue));
  };

  const handleVisualClick = () => {
    if(!selectedBPM) {
      return;
    }
    setVisualActive(value => !value);
  }

  const handleChangeVisual = () => {
    const index = visuals.findIndex(visual => visual.name === currentVisual.name);

    if((visuals.length - index) === 1) {
      document.documentElement.style.setProperty('--beat-type', `${visuals[0].name}`)
      setCurrentVisual(visuals[0]);
    } else {
      const nextIndex = index + 1;
      document.documentElement.style.setProperty('--beat-type', `${visuals[nextIndex].name}`)
      setCurrentVisual(visuals[nextIndex]);
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="header">
          <div className="header-text">DIGITAL METRONOME</div>
        </div>
        <div className="content-container">
          <BeatAnimation visualActive={visualActive} handleOnClick={handleVisualClick} selectedBPM={selectedBPM} />
          <BPMSelectionGroupButtons buttons={buttonsCurrentStatus} handleOnClick={handleOnClick} handleChangeVisual={handleChangeVisual} />
          <SongList selectedBPM={selectedBPM} songsAreLoading={songsAreLoading} songDatas={songDatas} />
        </div> 
      </div>
    </div>
  );
}

export default App;

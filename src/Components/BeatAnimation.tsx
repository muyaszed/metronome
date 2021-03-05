import React from 'react'

interface Props {
  selectedBPM: string;
  visualActive: boolean;
  handleOnClick: () => void;

}

export interface Visuals {
  name: BeatVisuals;
  active: boolean;
}

export enum BeatVisuals {
  VISUAL1 = 'circle-beat-1',
  VISUAL2 = 'circle-beat-2',
  VISUAL3 = 'circle-beat-3',
}

const BeatAnimation = ({ selectedBPM, handleOnClick, visualActive }: Props) => {
  return (
    <div className="beat-visual" onClick={handleOnClick}>
      <div className={`${visualActive ? 'bpm-active' : 'circle-shadow'}`}></div>
        <div className={`${visualActive ? 'bpm-active-1' : 'circle'}`}>
          <div className="selected-bpm">{ selectedBPM }</div>
        </div>
    </div>
  )
};

export default BeatAnimation;
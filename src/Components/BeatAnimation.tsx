import React from 'react'

interface Props {
  selectedBPM: string;
}

const BeatAnimation = ({ selectedBPM }: Props) => {
  return (
    <div className="beat-visual">
      <div className="circle-shadow-animate"></div>
        <div className="circle">
          <div className="selected-bpm">{ selectedBPM }</div>
        </div>
    </div>
  )
};

export default BeatAnimation;
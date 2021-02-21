import React from 'react'
import Button from './shared/Button';

interface Props {
  buttonTitles: string[];
  handleOnClick: () => void;
}

const BPMSelectionGroupButtons = ({ buttonTitles, handleOnClick }: Props) => {

  return (
    <div className="beat-selection"> 
      {
          buttonTitles.map((buttonTitle: string, index: number) => (
            <Button 
              key={`button-${index}`}
              className="bpm-selection-button" 
              title={buttonTitle} 
              handleOnClick={handleOnClick}
            />
          ))
      }
    </div>
  )
}

export default BPMSelectionGroupButtons;

import React from 'react'
import Button from './shared/Button';

export interface ButtonInfo {
  title: string;
  active: boolean;
  bpmValue: number;
}

interface Props {
  buttons: ButtonInfo[];
  handleOnClick: (index: number) => void;
  handleChangeVisual: () => void;
}

const BPMSelectionGroupButtons = ({ buttons, handleOnClick, handleChangeVisual }: Props) => {

  const handleBtnOnClick = (currentIndex: number) => {
    handleOnClick(currentIndex); 
  }

  const enableChangeButton = () => {
    return buttons.filter(item => item.active === true).length > 0; 
  }

  return (
    <div className="buttons-container">
      <div className="beat-selection"> 
        {
            buttons.map((buttonInfo: ButtonInfo, index: number) => (
              <Button 
                key={`button-${index}`}
                className="bpm-selection-button" 
                title={buttonInfo.title} 
                handleOnClick={() => handleBtnOnClick(index)}
                active={buttonInfo.active}
                activeClassName="bpm-selection-button-active"
              />
            ))
        }
      </div>
      {enableChangeButton() ? <Button 
        className="visual-change-button" 
        title="CHANGE VISUAL" 
        handleOnClick={handleChangeVisual}
      /> : null}
    </div>
  )
}

export default BPMSelectionGroupButtons;

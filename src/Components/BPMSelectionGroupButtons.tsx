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
  const [buttonsCurrentStatus, setCurrentButtonsStatus] = React.useState<ButtonInfo[]>(buttons);

  const handleBtnOnClick = (currentIndex: number) => {
    setCurrentButtonsStatus(
      buttonsCurrentStatus.map((button, index) => currentIndex === index
        ? {
          ...button,
          active: true,
        }
        : {
          ...button,
          active: false,
        })
    );
    handleOnClick(currentIndex);
  }

  return (
    <div className="buttons-container">
      <div className="beat-selection"> 
        {
            buttonsCurrentStatus.map((buttonInfo: ButtonInfo, index: number) => (
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
      <Button 
        className="visual-change-button" 
        title="CHANGE VISUAL" 
        handleOnClick={handleChangeVisual}
      />
    </div>
  )
}

export default BPMSelectionGroupButtons;

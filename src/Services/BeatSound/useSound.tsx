import React, { useState } from "react";
import sound1 from '../../Assets/sounds/click2.wav';
import sound2 from '../../Assets/sounds/click1.wav';

export const useSound = (visualActive: boolean, selectedBPM: string) => {
  const [beatCount, setBeatCount] = useState(0);
  const [beatPerMeasure] = React.useState(4);
  const [timer, setTimer] = React.useState(0);
  const [firstSound] = React.useState(new Audio(sound1));
  const [otherSound] = React.useState(new Audio(sound2)); 

  const firstUpdate1 = React.useRef(true);
  const firstUpdate2 = React.useRef(true);


  const startSound = (selectedBPMValue: number) => {
    setTimer(window.setInterval(async () => {
      setBeatCount(v => v+1);
    }, (60/selectedBPMValue) * 1000));
}


  const playSound = async () => {
    if (beatCount % beatPerMeasure === 0) {
      await firstSound.play();
    }  else {
      await otherSound.play();
    }
  }

  const resetSound = () => {
    clearInterval(timer);
    setTimer(0); 
  }


  React.useEffect(() => {
    if(!firstUpdate1.current) {
      if(visualActive) {
        startSound(Number(selectedBPM));
      } else {
        resetSound();
      }
    } 

    firstUpdate1.current = false;

  }, [visualActive]);

  React.useEffect(() => {
    if(!firstUpdate2.current) {
      playSound(); 
    }

    firstUpdate2.current = false;
  }, [beatCount])


  return [startSound, resetSound, timer] as const;
}
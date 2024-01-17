import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';


function App() {

  const [timer, setTimer] = useState(undefined);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    return () => {
      console.log('close app');
      if(timer) clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const startTimer = () => {
    if(timer) return; 
    
    setTimer(setInterval( () => {
      setTime(time => time + 1)
    }, 1));
    
    console.log('start', timer, time);
  };

  const stopTimer = () => {
    setTimer(clearInterval(timer));
    console.log('stop', timer, time);
  };

  const restartTimer = () => {
    setTimer(clearInterval(timer));
    setTime(0);
    console.log('reset', time);
  };

  return (
    <div className={styles.app}>
      <Timer time={time}/>
      <div className={styles.controls}>
        <Button name="Start" action={startTimer} />
        <Button name="Stop" action={stopTimer}/>
        <Button name="Reset" action={restartTimer}/>
      </div>
    </div>
  );
}

export default App;

import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles/App.module.css';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

const App: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [splash, setSplash] = useState<string | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, [])

  useEffect(() => {
    playVideo()
  }, [playVideo]);

  const handleCodeSubmit = (code: string) => {
    setSplash(null)

    switch (code.toLowerCase()) {
      case 'forest': {
        setStage(2)
        setSplash('Ура! Сработало!')
        break;
      }
      case 'valley': {
        setStage(3);
        setSplash('Да, это то что надо!')
        break;
      }
      case 'lagoon': {
        setStage(4);
        setSplash('И это правильный ответ!')
        break;
      }
      case 'stream': {
        setStage(5)
        setSplash('Браво! Идем дальше?')
        break;
      }
      case '1208': {
        setStage(6);
        setSplash('Ого! Как ты догадалась?')
        break;
      }
      default: {
        setSplash('Ой-ой, неверный ключ!')
      }
    }
  };

  return (
      <div className={styles.app} onClick={playVideo}>
        {stage === 0 ? (
            <HomePage onStart={() => setStage(1)} onWork={() => setSplash('В этой игре есть только веселье!')}/>
        ) : stage === 6 ? (
            <div className={styles.finalMessage}>
              <img src={'images/final.jpeg'} style={{maxHeight: '50vh', maxWidth: '50vw'}}/>
              <h1>Поздравляю с победой, найди свой приз!</h1>
            </div>
        ) : (
            <GamePage stage={stage} onCodeSubmit={handleCodeSubmit}/>
        )}

        {splash &&
            <div className={styles.splashWrapper}>
                <div className={styles.splash}>
                    <div>{splash}</div>
                    <button onClick={() => setSplash(null)}>Ок</button>
                </div>
            </div>
        }

        <video autoPlay loop muted playsInline className={styles.video}>
          <source src={'images/bg.webm'} type="video/webm"/>
        </video>
      </div>
  );
};

export default App;

import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/App.module.css';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

const App: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [error, setError] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  const handleCodeSubmit = (code: string) => {

    setError(false)
    setShowSplash(true)

    switch (code.toLowerCase()) {
      case 'forest': {
        setStage(2)
        break;
      }
      case 'valley': {
        setStage(3);
        break;
      }
      case 'lagoon': {
        setStage(4);
        break;
      }
      case 'stream': {
        setStage(5)
        break;
      }
      case '1208': {
        setStage(6);
        break;
      }
      default: {
        setError(true)
      }
    }
  };

  return (
      <div className={styles.app}>
        {stage === 0 ? (
            <HomePage onStart={() => setStage(1)}/>
        ) : stage === 6 ? (
            <div className={styles.finalMessage}>
              <img src={'images/final.jpeg'} style={{maxHeight: '50vh', maxWidth: '50vw'}}/>
              <h1>Поздравляю с победой, найди свой приз!</h1>
            </div>
        ) : (
            <GamePage stage={stage} onCodeSubmit={handleCodeSubmit}/>
        )}

        {showSplash &&
            <div className={styles.splashWrapper}>
                <div className={styles.splash}>
                  {error && <div>Ой-ой, неверный ключ!</div>}
                  {!error && <div>Ура! Сработало!</div>}
                    <button onClick={() => setShowSplash(false)}>Ок</button>
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

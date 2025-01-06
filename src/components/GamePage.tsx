import React, {useEffect, useState} from 'react';
import styles from '../styles/GamePage.module.css';
import {coordinates} from '../const.ts'
import {PhotoProvider, PhotoView} from 'react-photo-view'

type GamePageProps = {
  stage: number;
  onCodeSubmit: (code: string) => void;
};

const stageBg = ['black', '#196f3d', '#1c2833', '#3498db', '#9c640c', 'transparent']

const GamePage: React.FC<GamePageProps> = ({stage, onCodeSubmit}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onCodeSubmit(inputValue);
  };

  useEffect(() => {
    setInputValue('')
  }, [stage])

  return (
      <div className={styles.gamePage} style={{background: stageBg[stage]}}>
        {stage === 5 && <h2>Введи финальный ключ</h2>}

        {stage < 5 && <>

            <h2>Ключ №{stage} ищи тут:</h2>
            <div className={styles.coordinates}>{coordinates[stage - 1]}</div>

            <PhotoProvider>
                <div className={styles.images}>
                    <PhotoView key={`images/${stage}/1 Large.jpeg`} src={`images/${stage}/1 Large.jpeg`}>
                        <img src={`images/${stage}/1 Large.jpeg`} className={styles.image}/>
                    </PhotoView>
                    <PhotoView key={`images/${stage}/2 Large.jpeg`} src={`images/${stage}/2 Large.jpeg`}>
                        <img src={`images/${stage}/2 Large.jpeg`} className={styles.image}/>
                    </PhotoView>
                    <PhotoView key={`images/${stage}/3 Large.jpeg`} src={`images/${stage}/3 Large.jpeg`}>
                        <img src={`images/${stage}/3 Large.jpeg`} className={styles.image}/>
                    </PhotoView>
                </div>
            </PhotoProvider>
        </>}

        <input
            type={"text"}
            maxLength={stage === 5 ? 4 : 6}
            value={inputValue}
            onChange={handleChange}
            className={styles.input}
            autoFocus
        />

        <button onClick={handleSubmit} className={styles.submitButton}>
          Проверить
        </button>
      </div>
  );
};

export default GamePage;

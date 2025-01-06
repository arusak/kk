import React, {useEffect} from 'react';
import styles from '../styles/HomePage.module.css';

type HomePageProps = {
  onStart: () => void;
};

const HomePage: React.FC<HomePageProps> = ({onStart}) => {
  useEffect(() => {
    const logo = document.getElementById('logo');
    const title = document.getElementById('title');
    if (logo) logo.classList.add(styles.logoAnimation);
    if (title) title.classList.add(styles.titleAnimation);
  }, []);

  return (
      <div className={styles.homePage}>
        <div id="logo" className={styles.logo}><img src={'images/logo.png'}/></div>
        <div id="title" className={styles.title}>
          <div onClick={onStart}>Играть</div>
        </div>
      </div>
  );
};

export default HomePage;

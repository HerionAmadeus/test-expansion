import React from 'react';
import styles from '../css/app.module.css'; // Importez le fichier CSS

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.textTitle}>Nous vous accompagnons dans votre <span className={styles.orange}>expansion digitale</span></h1>
        <br/>
        <br/>
        <p>
        Le programme Digital Booster d'Expansion est <b>l'atout digital des petites, moyennes et grandes entreprises</b> qui souhaitent développer ou confirmer leur présence en ligne. 
        </p>
        <br/>
        <button className={styles.appointmentButton}>Faites le test sans plus tarder</button>
      </div>
      <div className={styles.animationSection}>
        {/* Placez votre animation ici, par exemple une image animée ou un composant d'animation */}
        <img src="https://via.placeholder.com/300" alt="Animation" className={styles.animation} />
      </div>
    </div>
  );
};

export default App;

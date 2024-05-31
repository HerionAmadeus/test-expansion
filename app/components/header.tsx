import React from 'react';
import styles from '../css/header.module.css'; // Importez le fichier CSS

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <a href="#" className={styles.menuslot}>
          Bienvenue
        </a>
        <a href="#" className={styles.menuslot}>
          Nos métiers
        </a>
        <a href="#" className={styles.menuslot}>
          Notre méthodologie
        </a>
        <a href="#" className={styles.menuslot}>
          L'agence
        </a>
        <a href="#" className={styles.menuslot}>
          Blog
        </a>

      </div>
      <div className={styles.rightSection}>
        <a href='#' className={styles.test}>
          Contact
        </a>
        <button className={styles.appointmentButton}>
          Prendre Rendez-vous
        </button>
      </div>
    </header>
  );
};

export default Header;
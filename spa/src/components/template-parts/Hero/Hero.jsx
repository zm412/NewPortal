import styles from './Hero.module.css';
import heroRight from '../../../assets/img/right.png';

const Hero = () => {
    return (
     <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Altynay</h1>
            <div className={ styles.hero_info }>
              <div>Frontend / Fullstack Developer based in Florida</div>
              <span>U.S. Permanent Resident · Open to remote work</span>
            </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;

import DropdownButtonOutline from "./DropdownButton";
import { useTheme } from '../../../contexts/ThemeContext';
import Logo from './Logo.jsx';
import styles from "./Header.module.css";

const Header = () => {
  const { theme } = useTheme();

  console.log(theme, 'THEME');
  
  return (
    <header className="custom-container">
      <div className={styles["header-inner"]}>
      <div className={styles["logo-img"]}>
        <Logo />
      </div>
        <div className={styles["custom-nav"]}>
          <div className={styles["nav-item"]}>
            <button className={styles["nav-button"]}>
              <img className={styles["nav-icon"]} src="./img/group.svg" alt="" />
              <span className={styles["nav-menu-label"]}>Patients</span>
            </button>
          </div>

          <div className={styles["nav-item"]}>
            <DropdownButtonOutline />
          </div>

       </div>

        <div className={styles["profile-data"]}>
          <img className={styles["profile-img"]} src="./img/doctor.jpg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

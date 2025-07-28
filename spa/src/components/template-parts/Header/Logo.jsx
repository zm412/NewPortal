import styles from "./Header.module.css";

const Logo = () => {
  return (
    <svg
      width="100%" height="100%"
      viewBox="0 0 240 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="21"
        y="55"
        className={styles.logo_style}
      >
        zmUmpi
      </text>
    </svg>
  );
};

export default Logo;

import LinearGradient from "./LinearGradient";
import classNames from 'classnames';
import styles from '../Honeycomb.module.scss';

const CellsHeader = ({headerText, isMobile}) => {
    if (isMobile) {
        return
    }

    return <svg
          x="235"
          y="170"
          width="380"
          height="320"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <LinearGradient id="header" />
          <rect
            x="0"
            y="150"
            width="250"
            height="250"
            rx="30"
            fill={`url(#header` }
            transform="rotate(-45 3.00012 198)"
            className={styles.header_rect}
          />
          <foreignObject
            x="5"
            y="25"
            width="70%"
            height="70%"
            textAnchor="middle"
            className={styles.header_label}
          >
            <div className={styles.cells_header}>{headerText || "Skills"}</div>
          </foreignObject>
        </svg>
 
};

export default CellsHeader;

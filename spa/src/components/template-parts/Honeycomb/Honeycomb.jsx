import { useState, useEffect } from "react";
import styles from "./Honeycomb.module.scss";
import heroRight from "../../../assets/img/right.png";
import FullView from "./FullView.jsx";
import CellsInfoBlock from "./Cells/CellsInfoBlock.jsx";

//const colors = ['#5fb7a0', '#f39c6b', '#c278b4', '#6d9ee6'];

const Honeycomb = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [headerText, setText] = useState("Skills");
    const [currentCell, setCurrentCell] = useState({})
    console.log(currentCell, 'kjljkjlkj')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    console.log(isMobile, 'isMobile')

    return (
        <section className={styles.honeycomb}>
            <div className={styles.honeycomb_block}>
                <FullView isMobile={isMobile} setCurrentCellHandler={setCurrentCell} currentCell={currentCell}/>
            </div>

            <div className={styles.honeycomb_info}>
                <CellsInfoBlock imgUrl={currentCell && currentCell.imgUrl || ''} />
            </div>
        </section>
    );
};

export default Honeycomb;

import { useState } from "react";
import styles from "./Honeycomb.module.scss";
import Cells from "./Cells/Cells.jsx";
import CellsHeader from "./Cells/CellsHeader.jsx";
import { mask2, mask3 } from "./masks.js";

const FullView = ({isMobile, setCurrentCellHandler, currentCell}) => {
    const currentMask = isMobile ? mask3 : mask2;
    console.log(isMobile,'FFFFFFFFFFFFFFFFFFFf')
    console.log(currentMask, "CURR")
    const viewWidth = isMobile ? 280 : 770 
    const viewHeight = isMobile ? 1400 : 620
    const viewBox = `0 0 ${viewWidth} ${viewHeight}`

    return (
        <div className={styles.cells_small}>
            <svg
                width="70%"
                y="20"
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
            >
                <CellsHeader headerText={currentCell.label} isMobile={isMobile} />

                {currentMask.map((row, i) =>
                    row.map((cell, j) => {
                        return (
                            <Cells
                                i={i}
                                j={j}
                                cell={cell}
                                clickHandler={setCurrentCellHandler}
                            />
                        );
                    }),
                )}
            </svg>
        </div>
    );
};

export default FullView

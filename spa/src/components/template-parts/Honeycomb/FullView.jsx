import { useState } from "react";
import styles from "./Honeycomb.module.css";
import Cells from "./Cells/Cells.jsx";
import CellsHeader from "./Cells/CellsHeader.jsx";
import { cellsList } from "./cellsList.js";

const colors = ["devops", "frontend", "tools", "backend"];
const {
    frontend = [],
    devops = [],
    tools = [],
    backend = [],
} = cellsList || {};

const mask2 = [
    [null, null, devops[3], colors[0], devops[0], colors[0], backend[0]],
    [
        null,
        frontend[6],
        colors[0],
        devops[1],
        colors[0],
        devops[2],
        colors[3],
        backend[7],
    ],
    [
        frontend[0],
        colors[1],
        frontend[1],
        null,
        null,
        null,
        backend[6],
        colors[3],
        backend[1],
    ],
    [
        colors[1],
        frontend[2],
        colors[1],
        null,
        null,
        null,
        colors[3],
        backend[2],
        colors[3],
    ],
    [
        frontend[3],
        colors[1],
        frontend[4],
        null,
        null,
        null,
        backend[3],
        colors[3],
        backend[4],
    ],
    [
        null,
        frontend[5],
        colors[1],
        tools[2],
        colors[2],
        tools[1],
        colors[2],
        backend[5],
    ],
    [null, null, frontend[7], colors[2], tools[0], colors[2], tools[3]],
];

const icons = [
  { color: colors[1], single_icon: 'img/cell-finance.svg' },
  { color: colors[0], single_icon: 'img/cell-sales-icon.svg' },
  { color: colors[2], single_icon: 'img/cell-staff.svg' },
  { color: colors[3], single_icon: 'img/cell-production.svg' },
];

const mask4 = [
  [frontend[5], icons[0]],
  [frontend[2], frontend[7]],
  [frontend[6], frontend[3]],
  [frontend[1], frontend[4]],
  [frontend[3], devops[0]],
  [icons[1], devops[1]],
  [devops[2], tools[0]],
  [tools[1], icons[2]],
  [tools[2], backend[0]],
  [icons[3], backend[2]],
  [backend[1], backend[3]],
  [backend[4], backend[5]],
  [backend[6], null]
];

const mask3 = [
    [colors[1], frontend[5], colors[1]],
    [frontend[2], colors[1], frontend[7]],
    [colors[1], frontend[6], colors[1]],
    [frontend[3], colors[1], frontend[1]],
    [colors[1], frontend[4], colors[1]],
    [frontend[3], colors[3], backend[0]],
    [colors[3], backend[1], colors[3]],
    [backend[2], colors[3], backend[3]],
    [colors[3], backend[4], colors[3]],
    [backend[5], colors[3], backend[4]],
    [colors[3], backend[7], colors[3]],
    [devops[0], colors[0], devops[1]],
    [colors[0], devops[2], colors[0]],
    [devops[3], colors[2], tools[0]],
    [colors[2], tools[1], colors[2]],
    [tools[2], colors[2], tools[3]],
]


const FullView = ({isMobile}) => {
    const [headerText, setText] = useState("Skills");
    const currentMask = isMobile ? mask3 : mask2;
    console.log(isMobile,'FFFFFFFFFFFFFFFFFFFf')
    console.log(currentMask, "CURR")
    const viewWidth = isMobile ? 300 : 800 
    const viewHeight = isMobile ? 1500 : 620
    const viewBox = `0 0 ${viewWidth} ${viewHeight}`

    return (
        <div className={styles.cells_small}>
            <svg
                width="70%"
                y="20"
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
            >
                <CellsHeader headerText={headerText} isMobile={isMobile} />

                {currentMask.map((row, i) =>
                    row.map((cell, j) => {
                        return (
                            <Cells
                                i={i}
                                j={j}
                                cell={cell}
                                clickHandler={setText}
                            />
                        );
                    }),
                )}
            </svg>
        </div>
    );
};

export default FullView

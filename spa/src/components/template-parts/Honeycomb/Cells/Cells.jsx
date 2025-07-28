import React from "react";
import CellRect from "./CellRect";
import CellLabel from "./CellLabel";
import CellIcon from "./CellIcon";
import LinearGradient from "./LinearGradient";
import { getCellProps } from "./getCellProps.js";
import classNames from "classnames";
import styles from "../Honeycomb.module.scss";

const Cells = ({ j, i, cell, clickHandler }) => {
    if (!cell || Array.isArray(cell)) return null;

    const isObject = typeof cell === "object";
    const isString = typeof cell === "string";

    const x = j * 80 + (isString ? 45 : 0);
    const y = i * 80 + (isString ? 45 : 0);

    const {
        size,
        rectY,
        labelX,
        labelY,
        label,
        iconUrl,
        transform,
        cellClass,
    } = getCellProps(cell);

    let classN = cell?.color ? '' : cellClass   
    let svgY = iconUrl? "-70" : "0"

    return (
        <svg
            key={`${i}-${j}`}
            x={x}
            y={y}
            width={size}
            height={size}
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
        >
            <LinearGradient id={cell?.color} />

            <CellRect
                y={rectY}
                fill={`url(#${cell?.color})` }
                transform={transform}
                onClick={() => clickHandler(cell)}
                className={classN}
            />
            {iconUrl && <CellIcon iconUrl={iconUrl} />}
            {label && (
                <CellLabel
                    label={label}
                    x={labelX}
                    y={labelY}
                    svgY={svgY}
                    onClick={() => clickHandler(cell)}
                />
            )}
        </svg>
    );
};

export default Cells;

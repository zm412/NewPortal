import styles from "../Honeycomb.module.scss";
import classNames from "classnames";

export function getCellProps(cell) {
    const baseProps = {
        size: 30,
        rectY: 90,
        labelX: 30,
        labelY: -35,
        label: "",
        iconUrl: null,
        transform: "rotate(0)",
        cellClass: "",
    };

    if (typeof cell === "string") {
        return {
            ...baseProps,
            cellClass: classNames(styles[cell]),
        };
    }

    if (typeof cell === "object" && cell !== null) {
        const label = cell.label || "";
        const iconUrl = cell.icon || null;
        const colorClass = styles[cell.color] || "";
        
        return {
            ...baseProps,
            size: 170,
            rectY: 120,
            label,
            iconUrl,
            labelY: iconUrl ? 45 : baseProps.labelY,
            transform: "rotate(-45 3.00012 198)",
            cellClass: classNames(styles.rect, colorClass),
        };
    }

    return baseProps;
}

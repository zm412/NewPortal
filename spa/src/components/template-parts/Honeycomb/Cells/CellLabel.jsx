import styles from "../Honeycomb.module.scss";

const CellLabel = (props) => {
    let { label, x, y, onClick, svgY } = props
    let transform = "rotate(0)";

    return (
        <svg viewBox="0 0 240 80" y={svgY} xmlns="http://www.w3.org/2000/svg">
            <foreignObject
                x={x}
                y={y}
                width="115"
                height="80"
                textAnchor="middle"
                onClick={() => onClick(label)}
            >
                <div
        className={styles.cells_label}
        >
        {label}</div>
            </foreignObject>
        </svg>
    );
};

export default CellLabel;

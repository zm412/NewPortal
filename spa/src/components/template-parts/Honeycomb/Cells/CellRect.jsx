import styles from "../Honeycomb.module.css";

const CellRect = (props) => {
    let { y, fill, transform, onClick, cell, className } = props
    console.log(fill, 'cell')
    return <rect
        x="55"
        y={y}
        fill={fill}
        width="170"
        height="170"
        className={className}
        rx="35"
        transform={transform}
        onClick={onClick}
    />
}

export default CellRect;

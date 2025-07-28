import styles from "../Honeycomb.module.scss";

 const CellsInfoBlock = ({imgUrl}) => {

    return (
        <div className={styles.image_info}>
            <img src={imgUrl} alt="" />
        </div>
    );
};

export default CellsInfoBlock

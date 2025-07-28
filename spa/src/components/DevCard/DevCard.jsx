import Hero from "../template-parts/Hero/Hero.jsx";
import Header from "../template-parts/Header/Header.jsx";
import SwiperLink from "../template-parts/SwiperLink/SwiperLink.jsx";
import Honeycomb from "../template-parts/Honeycomb/Honeycomb.jsx";
import styles from './DevCard.module.css';
import '../../assets/styles/grid.scss'

const DevCard = () => {
    return (
        <div className={styles.card}>
            <Header />
            <Hero />
            <div className="custom-container">
                <SwiperLink />
                <Honeycomb />
                <h1>JJJJJJJJJjjj</h1>
            </div>
        </div>
    );
};

export default DevCard;

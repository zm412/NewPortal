import classNames from 'classnames';
import styles from '../Honeycomb.module.scss';

const colors = {
    frontend: ["#127b5f", "#5fb7a0"],
    backend: ["#f38b6b", "#f3b16b"],
    tools: ["#ff8ce9", "#c278b4"],
    devops: ["#007aff", "#6d9ee6"],
    header: ["#92d9d4", "#91b9ee"]
};

const LinearGradient = (props) => {
    const {id} = props
    const [startColor, endColor] = colors[id] || ["", ""];
       return  <defs>
                <linearGradient
                    id={id}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor={startColor} />
                    <stop offset="100%" stopColor={endColor} />
                </linearGradient>
            </defs>
};

export default LinearGradient;

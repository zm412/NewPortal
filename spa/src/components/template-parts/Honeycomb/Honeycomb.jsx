import { useState } from "react";
import styles from "./Honeycomb.module.css";
import heroRight from "../../../assets/img/right.png";
import Cells from "./Cells/Cells.jsx";
import CellsHeader from "./Cells/CellsHeader.jsx";

//const colors = ['#5fb7a0', '#f39c6b', '#c278b4', '#6d9ee6'];
const colors = ["devops", "frontend", "tools", "backend"];

const cells_list = {
    frontend: [
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "HTML / CSS / SCSS",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "WordPress",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "React",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Next.js / Nuxt / SSR",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Figma",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Redux, MobX",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_uppercase",
            icon: false,
            label: "TypeScript / JavaScript",
            link: "#",
        },
        {
            color: "frontend",
            class: "cell_text_division",
            icon: "/spa_static/img/cat2-icon.svg",
            label: "Frontend",
            link: "#",
        },
    ],

    backend: [
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "JavaScript, Python, PHP",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Bash",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "REST / GraphQL APIs",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "MySQL / PostgreSQL / MongoDB",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Django, Flask, NodeJS",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Kafka",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_uppercase",
            icon: false,
            label: "Authentication",
            link: "#",
        },
        {
            color: "backend",
            class: "cell_text_division",
            icon: "/spa_static/img/cat3-icon.svg",
            label: "Backend",
            link: "#",
        },
    ],

    devops: [
        {
            color: "devops",
            class: "cell_text_uppercase",
            icon: false,
            label: "Docker",
            link: "#",
        },
        {
            color: "devops",
            class: "cell_text_uppercase",
            icon: false,
            label: "CI/CD",
            link: "#",
        },
        {
            color: "devops",
            class: "cell_text_uppercase",
            icon: false,
            label: "Nginx / Apache",
            link: "#",
        },
        {
            color: "devops",
            class: "cell_text_division",
            icon: "/spa_static/img/cat-icon.svg",
            label: "DevOps & Deployment",
            link: "#",
        },
    ],

    tools: [
        {
            color: "tools",
            class: "cell_text_uppercase",
            icon: false,
            label: "Git",
            link: "#",
        },
        {
            color: "tools",
            class: "cell_text_uppercase",
            icon: false,
            label: "JIRA",
            link: "#",
        },
        {
            color: "tools",
            class: "cell_text_uppercase",
            icon: false,
            label: "VS Code / Vim",
            link: "#",
        },
        {
            color: "tools",
            class: "cell_text_division",
            icon: "/spa_static/img/cat4-icon.svg",
            label: "Tools & Workflow",
            link: "#",
        },
    ],
};

const {
    frontend = [],
    devops = [],
    tools = [],
    backend = [],
} = cells_list || {};

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

const FullView = ({ mask2 = [] }) => {
    const [headerText, setText] = useState("Skills");

    return (
        <div className={styles.cells_small}>
            <svg
                width="40%"
                y="20"
                viewBox="0 0 800 620"
                xmlns="http://www.w3.org/2000/svg"
            >
                <CellsHeader headerText={headerText} />

                {mask2.map((row, i) =>
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

const Honeycomb = () => {
    return (
        <section className={styles.honeycomb}>
            <FullView mask2={mask2} />
        </section>
    );
};

export default Honeycomb;

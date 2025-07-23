const colors = {
    frontend: ["#127b5f", "#5fb7a0"],
    backend: ["#f38b6b", "#f3b16b"],
    tools: ["#ff8ce9", "#c278b4"],
    devops: ["#007aff", "#6d9ee6"],
    header: ["#92d9d4", "#aab1ae"]
};

export const getColors = (key) => {
    const [startColor, endColor] = colors[key] || ["", ""];

    return { startColor, endColor };
};

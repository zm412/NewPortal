import { useState } from "react";
import React from "react";
import "./App.css";
import DevCard from "./components/DevCard/DevCard.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <DevCard />
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

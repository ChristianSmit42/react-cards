import "./MainContent.css";

import Card from "./Card";

import React from "react";

export default function MainContent(props) {
    return(
        <main>
            <button>button 1</button><button>button 2</button>
            <div className={"Cards-Collection"}>
                <Card title={"Ersatztitel"} imgsource={"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, illo.
                </Card>
                <Card title={"Ersatztitel"} imgsource={"https://i.pinimg.com/originals/59/30/c8/5930c86254cf1dc8064a63cc4c11f714.jpg"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, illo.
                </Card>
            </div>
        </main>
    );
}
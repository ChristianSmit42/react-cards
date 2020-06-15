import "./MainContent.css";

import Card from "./Card";

import React from "react";

export default function MainContent(props) {
    return(
        <main>
            <button>button 1</button><button>button 2</button>
            <div className={"Cards-Collection"}>
                {
                    props.animals.map(
                        (animal)=> {
                            return <Card title={animal.title} imgsource={animal.imgsource}>{animal.text}</Card>;
                        }
                    )
                }
            </div>
        </main>
    );
}
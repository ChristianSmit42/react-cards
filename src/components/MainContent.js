import "./MainContent.css";

import Card from "./Card";

import React from "react";

export default function MainContent(props) {
    return(
        <main className ={"Main"}>
            <div className={"Main-Content"}>
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
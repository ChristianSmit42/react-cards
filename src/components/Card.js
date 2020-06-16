import "./Card.css";

import React from "react";

export default function Card(props){
    return(
        <div className={"Card"}>
            <div className={"Card-Body"}>
                <h1>{props.title}</h1>
                <p>{props.children}</p>
            </div>
            <div className={"Card-Image"}>
                <img src={props.imgsource} alt=""/>
            </div>
        </div>
    );
}
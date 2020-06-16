import React from "react";
import "./Navigation.css"

export default function Navigation(props){
    return(
        <nav className={"Navigation"}>
            {props.children}
        </nav>
    );
}
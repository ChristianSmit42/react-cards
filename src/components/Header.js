import "./Header.css";

import React from "react";

export default function Header(props){
    return(
        <header className={"Header"}>
            <h1 className={"WebsiteTitle"}>{props.children}</h1>
        </header>
    );
}
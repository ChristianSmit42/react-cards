import "./Footer.css";

import React from "react";
import NewsletterForm from "./NewsletterForm";

export default function Header(props){
    return(
        <footer className={"Footer"}>
            <p>{props.children}</p>
            <NewsletterForm>

            </NewsletterForm>
        </footer>
    );
}
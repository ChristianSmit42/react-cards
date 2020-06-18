import React from "react";
import "./NewsletterForm.css"

export default function NewsletterForm() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    function handleChanges(event) {
        const valueFromEvent = event.target.value;
        return valueFromEvent;
    }

    function handleOnChangeEmail(event) {
        const valueFromEvent = handleChanges(event);
        setEmail(valueFromEvent);
    }

    function handleOnChangeName(event) {
        const valueFromEvent = handleChanges(event);
        setName(valueFromEvent);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(name);
        const user = {
            name: name,
            email: email,
        };
        console.log(user);
    }

    return (
        <form className="newsletterForm" onSubmit={handleSubmit}>
            <div className={"inputFields"}>
                <input type="text" placeholder="email" onChange={handleOnChangeEmail}/>
                <input type="text" placeholder="name" onChange={handleOnChangeName}/>
            </div>
            <button type="submit">submit</button>
        </form>
    );
}
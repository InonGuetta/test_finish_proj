import { useState } from "react";
import "../pages/css/button.css";

export default function Button() {
    const [count, setCount] = useState(0)
    return (
        <>
            <section className="father_button">
                <button
                 className="button_navebr">Add Post</button>
                <button className="button_navebr">Log out</button>
                <button className="button_navebr">Log in</button>
            </section>
            

        </>
    )
}
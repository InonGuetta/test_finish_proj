import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/css/button.css";

export default function Button() {
    const [count, setCount] = useState(0)
    return (
        <>
            <section className="father_button">
                <button className="button_navebr">
                    <Link className="disgn_link" to="/">Home</Link>
                    </button>
                <button className="button_navebr">
                    <Link className="disgn_link" to="/add-post">Add Post</Link>
                </button>
            </section>


        </>
    )
}
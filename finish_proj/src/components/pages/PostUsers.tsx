import { useState } from "react"
import "./css/style.pust_user.css";

const fakeMSG = "hello world from fake msg";
const fakeImg = "https://www.misgeret.co.il/Pics/limorbarak/336104-1804-10-11-19-L.jpg";
const fakeUser = "David"
function formatted_date() {
    let result = "";
    let d = new Date();
    result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
        " " + d.getHours() + ":" + d.getMinutes();
    return result;
}

export default function PostUsers() {
    const [count, setCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);


    return (
        <>
            <section className="design_post">
                <form action="">
                    <h1>name</h1>
                    <p>{fakeUser}</p>
                    <img src={fakeImg} alt="" />
                    <p>{fakeMSG}</p>
                    <section className="design_likes">
                        <p onClick={() => {
                            setCount(count - 1)
                        }}>Dislike</p>
                    <p onClick={() => {
                        setCount(count + 1)
                    }}>👍 {count}</p>
                    </section>
                    <p>time published: {formatted_date()}</p>
                </form>
            </section>
        </>
    )
}
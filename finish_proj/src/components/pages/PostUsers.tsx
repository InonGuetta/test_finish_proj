import { useState } from "react"
import "./css/style.post_user.css";


function formatted_date() {
    let result = "";
    let d = new Date();
    result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() +
        " " + d.getHours() + ":" + d.getMinutes();
    return result;
}


export default function PostUsers(
    props: {
        idMessage: number;
        idUser: string;
        nameUser: string;
        urlImg: string;
        message: string;
    }
) {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="design_post">
                <form className="padding_post"  action="" >
                    <section className="design_to_row">
                    <img src={props.urlImg} alt="" />
                    <p>{props.nameUser}</p>
                    </section>
                    <p className="user_message">{props.message}</p>
                    <section className="design_to_row">
                        <p className="like_to_post"
                         onClick={() => {
                            setCount(count + 1)
                            if(count ===1){
                                setCount(0)
                            }
                        }}>👍 {count}</p>
                        <p> published: {formatted_date()}</p>
                    </section>
                </form>
            </section>
        </>
    )
}
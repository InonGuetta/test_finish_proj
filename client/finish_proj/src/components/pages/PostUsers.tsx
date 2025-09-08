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
        urlMessageImg: string;
    }
) {

    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    return (
        <>
            <section className="design_post">
                <form className="padding_post" action="" >
                    <section className="design_to_row">
                        <img className="logo_user" src={props.urlImg} alt="logo_user" />
                        <h2>{props.nameUser}</h2>
                    </section>
                    <p className="user_message">{props.message}</p>
                    <img className="image_user_public" src={props.urlMessageImg} alt="photo_post" />
                    <section className="design_to_row">
                        <section className="father_design_likes">
                            <p className="like_or_dislike"
                                onClick={() => {
                                    setLike(like + 1)
                                    if (disLike === 1) {
                                        setDisLike(0)
                                    }
                                    if (like === 1) {
                                        setLike(0)
                                        if (disLike === 1) {
                                            setDisLike(0)
                                        }
                                    }
                                }}>👍 {like}</p>
                            <p className="like_or_dislike"
                                onClick={() => {
                                    setDisLike(disLike + 1)
                                    if (like === 1) {
                                        setLike(0)
                                    }
                                    if (disLike === 1) {
                                        setDisLike(0)
                                        if (like === 1) {
                                            setLike(0)
                                        }
                                    }
                                }}>👎 {disLike} </p>
                        </section>
                        <p> published: {formatted_date()}</p>
                    </section>
                </form>
            </section>
        </>
    )
}
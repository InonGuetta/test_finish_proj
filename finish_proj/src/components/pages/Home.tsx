import PostUsers from "./PostUsers";
import userData from "../../Data/fakeData.tsx";

export default function Home() {
    const { id_message, id_user, name_user, url_img, message } = userData;
    return (
        <>
            <main className="design_messages">
                {(() => {
                    const messageCards = [];
                    for (let i = 0; i < id_message.length; i++) {
                        messageCards.push(
                            <PostUsers
                                idMessage={id_message[i]}
                                idUser={id_user[i]}
                                nameUser={name_user[i]}
                                urlImg={url_img[i]}
                                message={message[i]}
                            />
                        );
                    }
                    return messageCards;
                })()}
            </main>
        </>
    )
}
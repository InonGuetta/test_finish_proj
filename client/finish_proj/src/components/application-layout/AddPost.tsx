import { useState } from "react";
// import { postAPI } from "./../../service/apipost.js";
import "../pages/css/button.css";
import Navbar from "./Navbar";

export default function AddPost() {
    const [newPost, setNewPost] = useState({
        id_message: Number,
        id_user: "",
        name_user: "",
        url_img: "",
        message: "",
        url_message_img: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // setIsLoading(true);
        // try {
        //     await postAPI.addRiddle(newPost);
        //     setNewPost({ name: "", taskDescription: "", correctAnswer: "" });
        //     if (onRiddleInserted) {
        //         onRiddleInserted();
        //     }
        // } catch (error) {
        //     console.error("Error adding riddle:", error);
        //     alert("Failed to add riddle. Please try again.");
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <>
        <Navbar/>
        <h1>hello from add post</h1>
            <section>
                {/* <form onSubmit={handleSubmit}>
                    <label className="label_insert">
                        type riddle:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={newPost.name}
                        onChange={handleChange}
                        required
                    />
                    <label className="label_insert">
                        Task Description:
                    </label>
                    <input
                        type="text"
                        name="taskDescription"
                        value={newPost.taskDescription}
                        onChange={handleChange}
                        required
                    />
                    <label className="label_insert">
                        Correct Answer:
                    </label>
                    <input
                        type="text"
                        name="correctAnswer"
                        value={newPost.correctAnswer}
                        onChange={handleChange}
                        required
                    />
                    <button className="submit_insert_riddle" type="submit" disabled={isLoading}>
                        {isLoading ? 'Adding Riddle...' : 'Add Riddle'}
                    </button>
                </form > */}



            </section>
        </>
    )
}
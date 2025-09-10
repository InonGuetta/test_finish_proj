import PostUsers from "./PostUsers.tsx";
import "../pages/css/home.css";
import { getPosts, type Post } from "../../service_client/api.ts";
import Navbar from "../application-layout/Navbar.tsx";
import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const postsData = await getPosts();
            setPosts(postsData);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError('Failed to load posts');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);



    if (isLoading) {
        return (
            <>
                <Navbar />
                <h1>Loading posts...</h1>
            </>
        );
    }
    if (error) {
        return (
            <>
                <Navbar />
                <h1>Error: {error}</h1>
            </>
        );
    }


    return (
        <>
            <Navbar />
            <main className="design_messages">
                {
                    posts.map(item => (
                        <section>
                            <PostUsers
                                idMessage={item.id_message}
                                idUser={item.id_user}
                                nameUser={item.name_user}
                                urlImg={item.url_img}
                                message={item.message}
                                urlMessageImg={item.url_message_img}
                            />
                        </section>
                    ))
                }
            </main>
        </>
    )
}
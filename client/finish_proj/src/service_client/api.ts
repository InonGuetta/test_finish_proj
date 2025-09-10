const API_BASE_URL = 'http://localhost:3000';

export interface Post {
  id_message: number;
  id_user: string;
  name_user: string;
  url_img: string;
  message: string;
  url_message_img:string;
}

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all-posts`);
    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error get posts:', error);
    throw error;
  }
}
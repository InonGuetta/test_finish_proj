const API_BASE_URL = 'http://localhost:3000';


// 
export const postAPI = {
  grtPosts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/all-posts`);
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error get posts:', error);
      throw error;
    }
  },

  addPost: async (riddleData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/add-post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(riddleData),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error add post:', error);
      throw error;
    }
  },
};
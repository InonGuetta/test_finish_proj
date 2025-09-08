import express from "express";
import { getAllPosts, getOnePosts, addPost, deletePost, updatePost } from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/all-posts", getAllPosts);
router.get("/one-post", getOnePosts);
router.post("/add-post", addPost);
router.delete("/delete-post/:id", deletePost);
router.put("/update-post/:id", updatePost);

export default router;
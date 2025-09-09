import express from "express";
import { getAllPosts, getOnePost, addPost } from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/all-posts", getAllPosts);
router.get("/one-post/:id_message", getOnePost);
router.post("/add-post", addPost);

export default router;
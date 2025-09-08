import { readFile } from 'node:fs/promises';

export async function getAllPosts(req, res) {
    try {
        const content = await readFile("./DB/dbPosts.txt", 'utf8');
        const data = JSON.parse(content);
        res.json(data);
    } catch (e) {
        console.error("Error getting riddles:", e.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

export async function getOnePosts(req, res) {
    try {
        
    } catch (e) {

    }
}

export async function addPost(req, res) {
    try {

    } catch (e) {

    }
}

export async function deletePost(req, res) {
    try {

    } catch (e) {

    }
}

export async function updatePost(req, res) {
    try {

    } catch (e) {

    }
}
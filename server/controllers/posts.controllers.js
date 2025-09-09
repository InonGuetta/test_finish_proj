import { toRead, toAdd, toReadOne } from '../service/middle.service.js';

export async function getAllPosts(req, res) {
    try {
        const content = await toRead();
        const data = JSON.parse(content);
        res.json(data);
    } catch (e) {
        console.error("the error it's: ", e.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

export async function addPost(req, res) {
    try {
        const newdata = req.body;
        const data = await toAdd(newdata);
        res.json(data);
    } catch (e) {
        console.error("the error it's: ", e.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

export async function getOnePost(req, res) {
    try {
        const id = req.params.id_message
        const oneData = await toReadOne(id)
        res.json(oneData)
    } catch (e) {
        console.error("server crash because: ", e.message);
        res.status(500).json({ msg: "Server error. Please try again later." });
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
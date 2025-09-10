import express from "express";
import configRoutes from "./router/conifgRouter.js";
import cors from 'cors';

const server = express();
server.use(cors());
const PORT = 3000;
server.use(express.json());

server.use(express.static('public'));
configRoutes(server);

server.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});
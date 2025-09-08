import postRouter from "./post.routes.js";

function configRoutes(app) {
    app.use("/",postRouter)
}

export default configRoutes

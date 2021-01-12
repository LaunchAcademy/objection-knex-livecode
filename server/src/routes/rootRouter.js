import express from "express"
import clientRouter from "./clientRouter.js"
import comicBooksRouter from "./api/v1/comicBooksRouter.js"
const rootRouter = new express.Router()

rootRouter.use("/api/v1/comic-books", comicBooksRouter)
rootRouter.use("/", clientRouter)

export default rootRouter

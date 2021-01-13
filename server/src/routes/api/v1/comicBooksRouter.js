import express from "express"
import objection from "objection"

import ComicBook from "../../../models/ComicBook.js"

const comicBooksRouter = new express.Router()

comicBooksRouter.get("/", async (req, res) => {
  try {
    const comicBooks = await ComicBook.query()
    return res.status(200).json({ comicBooks: comicBooks })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

comicBooksRouter.post("/", async (req, res) => {
  const { body } = req

  try {
    const newComicBook = await ComicBook.query().insertAndFetch(body)
    return res.status(200).json({ newComicBook })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default comicBooksRouter

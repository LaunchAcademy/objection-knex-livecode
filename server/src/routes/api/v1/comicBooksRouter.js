import express from "express"
import objection from "objection"
const { ValidationError } = objection

import ComicBook from "../../../models/ComicBook.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

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
  console.log(body)
  const formInput = cleanUserInput(body)
  console.log("formInput")
  console.log(formInput)

  try {
    const newComicBook = await ComicBook.query().insertAndFetch(formInput)
    return res.status(201).json({ newComicBook })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default comicBooksRouter

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import ComicBookTile from "./ComicBookTile"

const ComicBooksList = (props) => {
  const [comicBooks, setComicBooks] = useState([])

  const getComicBooks = async () => {
    try {
      const response = await fetch("/api/v1/comic-books")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setComicBooks(body.comicBooks)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getComicBooks()
  }, [])

  const comicBookTiles = comicBooks.map((comicBook) => {
    return (
      <ComicBookTile key={comicBook.id} title={comicBook.title} publisher={comicBook.publisher} />
    )
  })

  return (
    <div>
      <h1>Current Comic Book Collection!</h1>
      <ul>{comicBookTiles}</ul>
      <Link to="/comic-books/new">Add a New Comic to your Collection!</Link>
    </div>
  )
}

export default ComicBooksList

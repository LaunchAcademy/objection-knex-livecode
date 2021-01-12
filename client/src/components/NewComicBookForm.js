import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const NewComicBookForm = (props) => {
  const [newComicBook, setNewComicBook] = useState({
    title: "",
    publisher: "",
    genre: "",
    firstEdition: "",
    details: "",
  })
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleInputChange = (event) => {
    setNewComicBook({
      ...newComicBook,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const addComicBook = async () => {
    try {
      const response = await fetch("/api/v1/comic-books", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newComicBook),
      })
      if (!response.ok) {
        if (response.status == 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        clearForm()
        setShouldRedirect(true)
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addComicBook()
  }

  const clearForm = () => {
    setNewComicBook({
      title: "",
      publisher: "",
      genre: "",
      firstEdition: "",
      details: "",
    })
    setErrors({})
  }

  if (shouldRedirect) {
    return <Redirect to="/comic-books" />
  }

  return (
    <div>
      <h1>New Comic Book Form</h1>
      <form onSubmit={handleSubmit} className="callout">
        <ErrorList errors={errors} />

        <label>
          Title:
          <input type="text" name="title" onChange={handleInputChange} value={newComicBook.title} />
        </label>

        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            onChange={handleInputChange}
            value={newComicBook.publisher}
          />
        </label>

        <label>
          Genre:
          <input type="text" name="genre" onChange={handleInputChange} value={newComicBook.genre} />
        </label>

        <div>
          <p>This individual is a vampire:</p>
          <input
            type="radio"
            name="firstEdition"
            value={true}
            value="true"
            checked={newComicBook.firstEdition === "true"}
            onChange={handleInputChange}
          />
          <label>True</label>
          <input
            type="radio"
            name="firstEdition"
            value={false}
            value="false"
            checked={newComicBook.firstEdition === "false"}
            onChange={handleInputChange}
          />
          <label>False</label>
        </div>

        <label>
          Details:
          <input
            type="text"
            name="details"
            onChange={handleInputChange}
            value={newComicBook.details}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default NewComicBookForm

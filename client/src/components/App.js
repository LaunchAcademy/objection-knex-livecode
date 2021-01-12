import React, { useState } from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route } from "react-router-dom"

import "../assets/scss/main.scss"

import ComicBooksList from "./ComicBooksList"
import NewComicBookForm from "./NewComicBookForm"

const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ComicBooksList} />
      <Route exact path="/comic-books" component={ComicBooksList} />
      <Route exact path="/comic-books/new" component={NewComicBookForm} />
    </BrowserRouter>
  )
}

export default hot(App)

import React from "react"

const ComicBookTile = ({ title, publisher }) => {
  return (
    <li>
      {title} published by {publisher}
    </li>
  )
}

export default ComicBookTile

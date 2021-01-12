const Model = require("./Model")

class ComicBook extends Model {
  static get tableName() {
    return "comic_books"
  }
}

module.exports = ComicBook

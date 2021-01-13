const Model = require("./Model")

class ComicBook extends Model {
  static get tableName() {
    return "comicBooks"
  }
}

module.exports = ComicBook

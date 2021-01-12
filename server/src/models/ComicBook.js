const Model = require("./Model")

class Birthday extends Model {
  static get tableName() {
    return "comic_books"
  }
}

module.exports = Birthday

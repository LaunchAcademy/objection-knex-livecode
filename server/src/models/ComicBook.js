const Model = require("./Model")

class ComicBook extends Model {
  static get tableName() {
    return "comicBooks"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "publisher", "genre", "firstEdition"],
      properties: {
        title: { type: "string" },
        publisher: { type: "string" },
        genre: { type: "string" },
        firstEdition: { type: ["boolean", "string"] },
        details: { type: "string" }
      }
    }
  }
}

module.exports = ComicBook

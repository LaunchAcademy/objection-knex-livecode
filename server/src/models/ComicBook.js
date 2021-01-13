const Model = require("./Model")
const uniqueFactory = require("objection-unique")

const unique = uniqueFactory({
  fields: ["title"],
  identifiers: ["id"]
})

class ComicBook extends unique(Model) {
  static get tableName() {
    return "comicBooks"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "publisher", "genre"],
      properties: {
        title: { type: "string", minLength: 1 },
        genre: { type: "string", minLength: 1 },
        publisher: { type: "string", minLength: 1 },
        details: { type: "string" }
      }
    }
  }
}

module.exports = ComicBook

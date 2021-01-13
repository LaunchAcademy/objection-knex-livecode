import { ComicBook } from "../../models/index.js"

class ComicBookSeeder {
  static async seed() {
    const comicBooksData = [
      {
        title: "Batman: Hush",
        publisher: "DC Comics",
        genre: "superhero",
        details: "A family reunion of Robins"
      },
      {
        title: "Action Comics #1",
        publisher: "DC Comics",
        genre: "superhero"
      },
      {
        title: "Locke & Key",
        publisher: "IDW Publishing",
        genre: "horror"
      }
    ]

    for (const singleComicData of comicBooksData) {
      const currentComicBook = await ComicBook.query().findOne({
        title: singleComicData.title
      })
      if (!currentComicBook) {
        await ComicBook.query().insert(singleComicData)
      }
    }
  }
}

export default ComicBookSeeder

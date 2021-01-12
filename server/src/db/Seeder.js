/* eslint-disable no-console */

import { connection } from "../boot.js"
import ComicBookSeeder from "./seeders/ComicBookSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding comic books")
    await ComicBookSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder

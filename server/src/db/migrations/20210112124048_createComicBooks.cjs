/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("comicBooks", (table) => {
    table.bigIncrements("id").primary()
    table.string("title").notNullable()
    table.string("publisher").notNullable()
    table.string("genre").notNullable()
    table.boolean("firstEdition").notNullable()
    table.string("details")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("comicBooks")
}

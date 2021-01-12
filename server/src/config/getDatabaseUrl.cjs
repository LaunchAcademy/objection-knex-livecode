const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development:
        "postgres://postgres:postgres@localhost:5432/comic_books_development",
      test: "postgres://postgres:postgres@localhost:5432/comic_books_test"
    }[nodeEnv] || process.env.DATABASE_URL
  )
}

module.exports = getDatabaseUrl

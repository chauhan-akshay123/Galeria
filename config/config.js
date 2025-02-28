module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:", // Use in-memory database for testing
  },
}

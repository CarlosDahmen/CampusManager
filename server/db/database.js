const Sequelize = require('sequelize')

const dbName = 'campusmanagerdb'
console.log(`Opening database connection to ${dbName}`)

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
})

module.exports = db

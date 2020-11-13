const mysql = require('mysql2')

const defaultConfig = {
  host: 'localhost',
  user: 'root',
  password: '465335830@QQ.com',
  database: 'burgers_db'
}

let connection = mysql.createConnection(defaultConfig)

module.exports = connection.promise()

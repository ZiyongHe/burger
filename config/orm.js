// Get the connection to the database
const connection = require('./connection')

// Object Relational Mapper (ORM)

const orm = {
  selectAll: async () => {
    const sql = 'SELECT * FROM burgers'
    const [rows] = await connection.query(sql)
    return rows
  },

  insertOne: async (burger_name) => {
    const sql = `INSERT INTO burgers (burger_name) VALUES (?)`
    const [result] = await connection.query(sql, [burger_name, devoured])
    //this.id = result.insertId
    return result
  },

  updateOne: async () => {
    this.devoured = 1 
    const sql = `UPDATE burgers SET ? WHERE id = ?`
    const [result] = await connection.query(sql, [this.devoured, this.id])
    return result
  },

  deleteOne: async (id) => {
    const sql = `DELETE FROM burgers WHERE id = ?`
    const [result] = await connection.query(sql, [id])
    return result
  }
}


module.exports = orm

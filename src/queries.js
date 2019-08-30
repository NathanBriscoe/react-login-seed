// Configuration of your PostgreSQL connection.

// In a production environment, you would want to put your configuration details in a separate file with restrictive
// permissions that is not accessible from version control,

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'react-login-db',
  password: 'password',
  port: 5432,
})

const createUser = (request, response) => {
  const { name, email, password } = request.body

  pool.query('INSERT INTO user (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM user ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM user WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE user SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM user WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

module.exports = {
  createUser,

  // getUsers,
  // getUserById,
  // updateUser,
  // deleteUser,
}
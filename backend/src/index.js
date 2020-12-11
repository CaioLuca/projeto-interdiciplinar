const express = require('express')
const { createConnection } = require('mysql')
const cors = require('cors')

const config = {
  host: 'sql10.freemysqlhosting.net', 
  port: '3306', 
  user: 'sql10381417', 
  password: 'irY8Uk1ar9', 
  database: 'sql10381417'
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/unidade', (req, res) => {
  const connection = createConnection(config)

  connection.query('SELECT * FROM unidade', (err, results) => {
    if (err) return res.status(500).json({ err })
    return res.json(results)
  })
  connection.end()
})

app.post('/unidade', (req, res) => {
  const { CNPJ = '', endereco = '', telefone = '', email = '' } = req.body
  const connection = createConnection(config)
  const query = `insert into unidade values ("${CNPJ}", "${endereco}", "${telefone}", "${email}")`
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json({ err })
    return res.json(true)
  })
  connection.end()
})

app.listen(3333, () => console.log('Localhost running on 3333'))
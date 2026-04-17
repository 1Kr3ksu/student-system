const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_managment'
})
connection.connect()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
  res.json({ message: "Hello from Backend" })
})

app.get('/students', (req, res) => {
  const students = [
    { id: 1, name: "Jan Kowalski", email: "jan@example.com" },
    { id: 2, name: " Nowak", email: "anna@example.com" },
  ]
  res.json(students)
})


app.listen(port, () => {
  console.log(`Server działa na http://localhost:${port}`)
})
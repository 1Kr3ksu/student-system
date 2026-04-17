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

app.post('/students', (req, res) => {
  console.log("BODY:", req.body);

  const { name, email } = req.body;

  const sql = "INSERT INTO students (full_name, email) VALUES (?, ?)";

  connection.query(sql, [name, email], (err, result) => {
    if (err) {
      console.log("MYSQL ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json({ id: result.insertId, name, email });
  });
});
app.get('/students', (req, res) => {
  connection.query('SELECT full_name , email  FROM students', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})


app.listen(port, () => {
  console.log(`Server działa na http://localhost:${port}`)
})
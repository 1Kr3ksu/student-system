const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "student_managment" 
});

db.connect((err) => {
  if (err) {
    console.error("Błąd połączenia:", err);
  } else {
    console.log("Połączono z MySQL ");
  }
});

module.exports = db;
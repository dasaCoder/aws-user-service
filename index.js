const mysql = require('mysql2');

// Configure the connection
const connection = mysql.createConnection({
  host: 'database-1.c4bl1jbdhwjw.eu-north-1.rds.amazonaws.com', // Replace with your RDS endpoint
  user: 'YOUR_USERNAME', // Replace with your username
  password: 'YOUR_PASSWORD', // Replace with your password
  database: 'YOUR_DATABASE_NAME' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Run a SELECT query
connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});

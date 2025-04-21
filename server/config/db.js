import mysql from 'mysql';
import 'dotenv/config';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) return console.log(`Connection error: ${err}`);
  console.log(`DB connected successfully.`);
});

export default connection;

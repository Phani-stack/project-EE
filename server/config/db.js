import mysql from 'mysql';
import fs from 'fs';
import 'dotenv/config';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync('./ca.pem') 
  }
});

connection.connect((err) => {
  if (err) return console.log(`Connection error: ${err}`);
  console.log(`✅ DB connected successfully.`);
});

export default connection;

import mysql from 'mysql';
import 'dotenv/config'

const connection = mysql.createConnection({
   host : process.env.HOST,
   user : process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE
})

connection.connect((err) => {
   if (err) return console.log(`Error ${err}`);
   console.log(`db connnected..`)
})

export default connection;

import mysql from 'mysql';

const connection = mysql.createConnection({
   host : `localhost`,
   user : `root`,
   password : ``,
   database : `eapcet_cutoffs`
})

connection.connect((err) => {
   if (err) return console.log(`Error ${err}`);
   console.log(`db connnected..`)
})

export default connection;

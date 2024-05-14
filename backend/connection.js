const mysql = require('mysql');

const db = mysql.createConnection({
    host: "192.168.5.1",
    user: 'root',
    password: 'R00t',
    port: '3307',
    database: 'hospital_dbo'
})

db.connect((err) => {
    if(!err)
        {
            console.log("Database Connected");
        }
        else {
            console.log(err);
        }
})


module.exports = db;
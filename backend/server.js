const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "192.168.5.1",
    user: 'root',
    password: 'R00t',
    port: '3307',
    database: 'hospital_dbo'
})

app.get('/', (req, res) => {
    return res.json("Data from BackEnd!");
})

app.get('/users', (req, res) => {
    const sql = `SELECT count(*) AS 'Total' FROM hperson`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
        // return res.send(data);
    })
})



app.listen(8081, () => {
    console.log("listening on port 8081");
})
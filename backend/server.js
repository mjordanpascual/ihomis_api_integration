const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   const sql = `SELECT count(*) AS 'Total' FROM hperson`;

//   db.query(sql, (err, data) => {
//       if(err) return res.json(err);
//       return res.json(data);
//       // return res.send(data);
//   })
// })

// Routers
// const userRouter = require("./routes/userRoutes");

//Routers
const userRouter = require('./routes/userRoutes');
app.use("/users", userRouter );


app.listen(8081, () => {
  console.log("listening on port 8081");
});



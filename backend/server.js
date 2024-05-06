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

app.get('/users/adm', (req, res) => {
    const sql = `   SELECT distinct hperson.patlast,
                        hperson.patfirst,
                        hperson.patmiddle,
                        hperson.patsex,
                        concat (hperson.patlast, ' , ',hperson.patfirst, '  ' ,ifnull(hperson.patmiddle,'')) AS 'patname',
                    hadmlog.admdate,
                    hadmlog.admtime,
                    concat (hward.wardname, ' - ',hroom.rmname, ' - ',hbed.bdname) AS 'room_assign',
                        (select concat (hpersonal.lastname, ' , ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno)) AS 'admit_doc',
                        (select concat (hpersonal.lastname, ' . ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno2)) AS 'attend_doc',
                        hperson.hpercode,
                    hadmlog.enccode,
                    hward.wardname,
                        (select hphiclog.typemem from hphiclog,hpatcon	where hpatcon.memphicnum = hphiclog.phicnum and  hpatcon.enccode = hadmlog.enccode) as cc_phmem,
                        hadmlog.admclerk/*,
                    fordischarge = (select orcode from hdocord where hdocord.enccode = hadmlog.enccode and orcode='DISCH')*/
                    FROM hadmlog,
                    hpatroom A,
                        hbed, 
                    hroom,   
                    hward,
                    hperson
                    WHERE ( hperson.hpercode = hadmlog.hpercode ) and
                    ( A.bdintkey = hbed.bdintkey ) and  
                    ( A.enccode = hadmlog.enccode ) and  
                    ( hroom.rmintkey = A.rmintkey ) and  
                    ( hward.wardcode = A.wardcode ) and  
                    A.hprdate = (select max(hprdate) from hpatroom where enccode = A.enccode) and
                    ( hadmlog.admstat = 'A' ) ORDER BY hperson.patlast`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        // return res.json(data);
        return res.send(data);
    })
})


app.get('/users/inpatient', (req, res)=>{
    const sqlQuery = `SELECT * FROM api_user_acc;`
    db.query(sqlQuery, (err, data) => {
        if(err) return res.json(err);
        return res.send(data);
    })
})


app.get('/useracc', (req, res)=>{
    const sqlQuery = `SELECT * FROM api_user_acc;`
    db.query(sqlQuery, (err, data) => {
        if(err) return res.json(err);
        return res.send(data);
    })
})


app.post('/insert', (req,res)=>{
    const reqBody = {
        api_userName: req.body.api_userName,
        api_userPass: req.body.api_userPass,
        api_userRole: req.body.api_userRole
    };

    const sql = `INSERT INTO api_user_acc (api_username, api_userPass, api_userRole) VALUES (?, ?, ?)`;
    db.query(sql, [reqBody.api_userName, reqBody.api_userPass, reqBody.api_userRole]);

    res.send("Data inserted successfully!");

})


// app.post('/insert', (req,res) => {
//     let newUser = new User ({
//         api_userName: req.body.api_userName,
//         api_userPass: req.body.api_userPass,
//         api_userRole: req.body.api_userRole 
//     });

//     return newUser.save().then((user,error) => {
//         if(error) {
//             return false;
//         } else {
//             return true;
//         }
//     })
// })


app.listen(8081, () => {
    console.log("listening on port 8081");
})
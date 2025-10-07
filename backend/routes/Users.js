const express = require('express')
const router = express.Router()
const app = express();
const db = require('../connection');

// router.get('/', (req, res) => {
//     return res.json("Data from BackEnd!");
// })


// router.get('/',  (req, res) => {
//     const users = db.query('SELECT * FROM `hperson`', {
//         type: QueryTypes.SELECT,
//       });

//       return users;
// })





app.get('/', (req, res) => {
    const sql = `SELECT count(*) AS 'Total' FROM hperson`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
        // return res.send(data);
    })
})


app.get('/count', (req, res) => {
    const sql = `SELECT count(*) AS 'Total' FROM hperson`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
        //return res.send(data);
    })
})

// app.get('/users/adm', (req, res) => {
//     const sql = `   SELECT distinct hperson.patlast,
//                         hperson.patfirst,
//                         hperson.patmiddle,
//                         hperson.patsex,
//                         concat (hperson.patlast, ' , ',hperson.patfirst, '  ' ,ifnull(hperson.patmiddle,'')) AS 'patname',
//                     hadmlog.admdate,
//                     hadmlog.admtime,
//                     concat (hward.wardname, ' - ',hroom.rmname, ' - ',hbed.bdname) AS 'room_assign',
//                         (select concat (hpersonal.lastname, ' , ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno)) AS 'admit_doc',
//                         (select concat (hpersonal.lastname, ' . ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno2)) AS 'attend_doc',
//                         hperson.hpercode,
//                     hadmlog.enccode,
//                     hward.wardname,
//                         (select hphiclog.typemem from hphiclog,hpatcon	where hpatcon.memphicnum = hphiclog.phicnum and  hpatcon.enccode = hadmlog.enccode) as cc_phmem,
//                         hadmlog.admclerk/*,
//                     fordischarge = (select orcode from hdocord where hdocord.enccode = hadmlog.enccode and orcode='DISCH')*/
//                     FROM hadmlog,
//                     hpatroom A,
//                         hbed, 
//                     hroom,   
//                     hward,
//                     hperson
//                     WHERE ( hperson.hpercode = hadmlog.hpercode ) and
//                     ( A.bdintkey = hbed.bdintkey ) and  
//                     ( A.enccode = hadmlog.enccode ) and  
//                     ( hroom.rmintkey = A.rmintkey ) and  
//                     ( hward.wardcode = A.wardcode ) and  
//                     A.hprdate = (select max(hprdate) from hpatroom where enccode = A.enccode) and
//                     ( hadmlog.admstat = 'A' ) ORDER BY hperson.patlast`;

//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         // return res.json(data);
//         return res.send(data);
//     })
// })


// app.get('/users/inpatient', (req, res)=>{
//     const sqlQuery = `SELECT * FROM api_user_acc;`
//     db.query(sqlQuery, (err, data) => {
//         if(err) return res.json(err);
//         return res.send(data);
//     })
// })


// app.get('/useracc', (req, res)=>{
//     const sqlQuery = `SELECT * FROM api_user_acc;`
//     db.query(sqlQuery, (err, data) => {
//         if(err) return res.json(err);
//         return res.send(data);
//     })
// })


// app.post('/insert', (req,res)=>{
//     const reqBody = {
//         api_userName: req.body.api_userName,
//         api_userPass: req.body.api_userPass,
//         api_userRole: req.body.api_userRole
//     };

//     const sql = `INSERT INTO api_user_acc (api_username, api_userPass, api_userRole) VALUES (?, ?, ?)`;
//     db.query(sql, [reqBody.api_userName, reqBody.api_userPass, reqBody.api_userRole]);

//     res.send("Data inserted successfully!");

// })


// app.get('/username', (req, res) => {

//     // const username = req.query.username; // Assuming the username is passed as a query parameter
//     const username = req.body.api_userName; // Assuming the username is passed as a query parameter

//     // Query to check if username exists
//     const sql = 'SELECT COUNT(*) as count FROM api_user_acc WHERE api_userName = ?';
//     // const sqlQuery = `SELECT * FROM api_user_acc`;
//     db.query(sql, [username], (err, results) => {
//         if (err) {
//             console.error('Error checking username:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         const count = results[0].count;

//         if (count > 0) {
//             // res.send({ exists: true });
//             res.send({ exists: 'Username already exists' });
//         } else {
//             res.send({ exists: false });
//         }
//     });
// });



module.exports = router;
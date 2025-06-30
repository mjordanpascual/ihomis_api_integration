// const db = require('../server')
const db = require('../connection');




// module.exports.loginUser = (reqBody) {
//     const { api_userName, api_userPass } = req.body;

//     if (!api_userName) {
//         return res.status(400).send('Username and password are required.');
//     }

//     const sql = `SELECT * FROM api_user_acc WHERE api_userName = ? AND api_userPass = ?`;

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) return res.sendStatus(401);  

//     // Check credentials from MySQL
//     db.query(sql, [api_userName, api_userPass], (error, results) => {
//         if (error) {
//             return res.status(500).json({ error: 'Database login error' });
//         } 
//         if (results.length > 0){
//             // return res.send(results);
//             return res.status(200).json({ success: 'Database login success' });
//             // return res.status(200).send(results);
//             // return console.log('Success');
//         }
//         else {
//             //  res.send('No record found.');
//             return res.status(404).json({ error: 'Database login error' });
//             // return console.log('Error');
//         }
//     });

// }



// module.exports.checkUser = (reqBody) => {

//     const username = req.body.username;
    
//     const sql =  'SELECT COUNT(*) AS Count FROM api_user_acc WHERE api_userName = ?';

//     db.query(sql, [username], (err, results) => {
//         const count = results[0].count;

//         const userExists = count === 1;

//         response.json({userExists});
//     })
// }


// module.exports.count = (reqBody) => {
//     const sql = `SELECT count(*) AS 'Total' FROM hperson`;

//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//         // return res.send(data);
//     })
// }

// module.exports = {
//     get: (req, res) => {
//         // res.send('Created');
//         const sql = `SELECT count(*) AS 'Total' FROM hperson`;

//         db.query(sql, (err, data) => {
//                 if(err) return res.json(err);
//                 return res.json(data);
//                 // return res.send(data);
//             })
//     }
// }


// module.exports = {
//     get: (req, res) => {
       
//         const username = req.body.username;
        
//         const sql =  'SELECT COUNT(*) AS Count FROM api_user_acc WHERE api_userName = ?';

//         db.query(sql, [username], (err, results) => {
//             const count = results[0].count;

//             const userExists = count === 1;

//             response.json({userExists});
//         })
//     }
// }


// module.exports = {
//     get: (req, res) => {
//         // const sql = `SELECT * FROM api_user_acc`;
//         const sql = `SELECT * FROM hpersonal WHERE employeeid = "ONP0034"`;

//         db.query(sql, (err, results) => {
//             if(err) return res.json(err);
//             return res.json(results);
//         })
        
//     }
// }


// module.exports = {
//     get: (req, res) => {
//         // const sql = `SELECT * FROM api_user_acc`;
//                 const sql = `SELECT distinct hperson.patlast,
//                                     hperson.patfirst,
//                                     hperson.patmiddle,
//                                     hperson.patsex,
//                                     concat (hperson.patlast, ' , ',hperson.patfirst, '  ' ,ifnull(hperson.patmiddle,'')) AS 'patname',
//                                 hadmlog.admdate,
//                                 hadmlog.admtime,
//                                 concat (hward.wardname, ' - ',hroom.rmname, ' - ',hbed.bdname) AS 'room_assign',
//                                     (select concat (hpersonal.lastname, ' , ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno)) AS 'admit_doc',
//                                     (select concat (hpersonal.lastname, ' . ' ,hpersonal.firstname, '  ' ,ifnull(hpersonal.middlename, '')) from hpersonal, hprovider where (hpersonal.employeeid = hprovider.employeeid) and (hprovider.licno = hadmlog.licno2)) AS 'attend_doc',
//                                     hperson.hpercode,
//                                 hadmlog.enccode,
//                                 hward.wardname,
//                                     (select hphiclog.typemem from hphiclog,hpatcon	where hpatcon.memphicnum = hphiclog.phicnum and  hpatcon.enccode = hadmlog.enccode) as cc_phmem,
//                                     hadmlog.admclerk/*,
//                                 fordischarge = (select orcode from hdocord where hdocord.enccode = hadmlog.enccode and orcode='DISCH')*/
//                                 FROM hadmlog,
//                                 hpatroom A,
//                                     hbed, 
//                                 hroom,   
//                                 hward,
//                                 hperson
//                                 WHERE ( hperson.hpercode = hadmlog.hpercode ) and
//                                 ( A.bdintkey = hbed.bdintkey ) and  
//                                 ( A.enccode = hadmlog.enccode ) and  
//                                 ( hroom.rmintkey = A.rmintkey ) and  
//                                 ( hward.wardcode = A.wardcode ) and  
//                                 A.hprdate = (select max(hprdate) from hpatroom where enccode = A.enccode) and
//                                 ( hadmlog.admstat = 'A' ) ORDER BY hperson.patlast`;
//                 db.query(sql, (err, data) => {
//                     if(err) return res.json(err);
//                     // return res.json(data);
//                     return res.send(data);
//                 })
//             }
        
//     }



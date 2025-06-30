// const db = require('../server')
// const db = require('../connection');
const { existsSync } = require('fs');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const { escape } = require('../connection');



const userController = {
    register: async (req, res) => {
        const {api_userName, api_userPass} = req.body;
        const hashedPassword = await bcrypt.hash(api_userPass, 10);
        
        try {
            const userExists = await User.findByUsername(api_userName);
            if(userExists) {
                return res.status(400).json({ message: 'Username already exists' });
            }
            const user = await User.create(api_userName, hashedPassword);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    login: async (req, res) => {
        const { api_userName, api_userPass } = req.body;
        try {
            const user = await User.findByUsername(api_userName);
            if(user && await bcrypt.compare(api_userPass, user.api_userPass)) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = userController;



// module.exports.registerUser = (req, res) => {
//     // const { api_userName, api_userPass } = req.body;
//     const api_userName = req.body;
//     const api_userPass = req.body;

//     User.findByEmail(api_userName, async (err, user) => {
//         if (err) {
//             return res.status(500).json({ message: err.message });
//         }
//         if (user) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const api_userPass = await bcrypt.hash(api_userPass, 10);

//         User.create(api_userName, api_userPass, (err, results) => {
//             if (err) {
//                 return res.status(500).json({ message: err.message });
//             }
//             res.status(201).json({ message: 'User registered successfully' });
//         });
//     });
// };




// module.exports.registerUser = async (reqBody) => {

//     const { api_userName, api_userPass } = reqBody;

//     if (!api_userName || !api_userPass) {
//         // return res.status(400).json({ message: 'Username and password are required' });
//         return { status: 400, message: 'Username and password are required' };
//     }

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(api_userPass, 10);
//         // Store the new user with the hashed password
//         // const checkUsernameExist = `SELECT * FROM api_user_acc WHERE api_userName = ?`;

//         // Check if username already exists
//         const checkUsernameExist = `SELECT * FROM api_user_acc WHERE api_userName = ?`;
//         const [results] = await db.query(checkUsernameExist, [api_userName]);

//         if (results.length > 0) {
//             return { status: 400, message: 'Username already exists' };
//         }

//         // Store the new user with the hashed password
//         const sql = `INSERT INTO api_user_acc (api_userName, api_userPass) VALUES (?, ?)`;
//         db.query(sql, [api_userName, hashedPassword]);
        
//         return { status: 200, message: 'User Registered' };

//         // db.query(checkUsernameExist, [api_userName], (error, results) => {
//         //     if(error) throw error;
//         //     if(results.length > 0) {
//         //         // return res.status(400).send('Error inserting username into database: ');
//         //         // console.log(results)
//         //         // return ('Error inserting username into database:  ');
//         //         return error;
//         //     } else {
//         //         const sql = `INSERT INTO api_user_acc (api_userName, api_userPass) VALUES (?, ?)`;
//         //         db.query(sql, [api_userName, api_userPass], (error, results) => {
//         //             // if(error) throw error;
//         //             if(error) {
//         //                 // return ('Error inserting data!')   
//         //                 return error
//         //             }
//         //             // return res.status(200).send('User Registered')
//         //             // return ('User Registered');
//         //             return results;
//         //         })
//         //     }
//         // })
//         } catch (error) {
//             return { status: 500, message: 'Database error', error: error.message };

//             // return res.status(500).json({ message: 'Database error', error: error.message });
//             // console.log(error)
//             // return false;
//     }
// }

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



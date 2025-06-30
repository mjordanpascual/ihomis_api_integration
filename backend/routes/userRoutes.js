const express = require('express')
const userController = require("../controllers/userController")
const router = express.Router()
const db = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// const JWT_SECRET = 'JWTSecretKey';

// const authenticate = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) {
//         return res.status(401).send('Access denied. No token provided.');
//     }

//     try {
//         const decoded = jwt.verify(token, 'your_jwt_secret');
//         req.user = decoded;
//         next();
//     } catch (ex) {
//         res.status(400).send('Invalid token.');
//     }
// };


router.post('/checkuser', async (req, res) => {
    const {api_userName} = req.body
    const sql = `SELECT * FROM api_user_acc WHERE api_userName = ?`;

    db.query(sql, api_userName, (error, results) => {
        // if (error) {
        //     return res.status(500).json({ error: 'Database query error' });
        // }
        if (results.length > 0) {
            // return res.status(200).json({ userExists: true });
            return res.send(results);
        } else {
            // return res.status(404).json({ userExists: false });
            return res.send(false);
        }

    })
})



router.post('/register', async (req, res) => {
    const { api_userName, api_userPass } = req.body;

    if (!api_userName || !api_userPass) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(api_userPass, 10);
        // Store the new user with the hashed password
        const checkUsernameExist = `SELECT * FROM api_user_acc WHERE api_userName = ?`;

        db.query(checkUsernameExist, [api_userName], (error, results) => {
            if(error) throw error;
            if(results.length > 0) {
                return res.status(400).send('Error inserting username into database: ');
            } else {
                const sql = `INSERT INTO api_user_acc (api_userName, api_userPass) VALUES (?, ?)`;
                db.query(sql, [api_userName, api_userPass], (error, results) => {
                    if(error) throw error;
                    return res.status(200).send('User Registered')
                })
            }
        })
        } catch (error) {
            res.status(500).json({ message: 'Database error', error: error.message });
    }
});



router.get('/getuser', async (req, res) => {
    const sql = `SELECT * FROM api_user_acc`;
    db.query(sql, (error, results) => {
        if(error) return res.json(error);
        return res.json(results);
    }) 
})



// router.post('/login', (req, res) => {
//     userController.loginUser(req.body)
//     .then(resultFromController => res.send(resultFromController));
// })



router.post('/login', async (req, res) => {

    // Authenticate user from database
    const { api_userName, api_userPass } = req.body;

    // if (!api_userName) {
    //         return res.status(400).send('Username and password are required.');
    //     }

    // const sql = `SELECT * FROM api_user_acc WHERE api_userName = ? AND api_userPass = ?`;
    //  SELECT * FROM users WHERE username = ? AND password = ?
    const sql = `SELECT * FROM api_user_acc WHERE api_userName = ? AND api_userPass = ?`;

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // const isPasswordValid = await (api_userName, user.api_userPass);
    // if (!isPasswordValid) return res.sendStatus(401);  
    
    // const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
    // res.json({ token });

    // Check credentials from MySQL
    db.query(sql, [api_userName, api_userPass], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database login error' });
        } 
        if (results.length > 0){
            // return res.send(results);
            return res.status(200).json({ success: 'Database login success' });
            // return res.status(200).send(results);
            // return console.log('Success');
        }
        else {
            //  res.send('No record found.');
            return res.status(404).json({ error: 'Database login error' });
            // return console.log('Error');
        }

        // if (error) return res.status(500).json({ error: err });
        // if (results.length === 0) return res.sendStatus(401);
    
        // const user = results[0];
        // const isPasswordValid = await bcrypt.compare(api_userPass, user.api_userPass);
        // if (!isPasswordValid) return res.sendStatus(401);

        // const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
        // res.json({ token });

        // if (err) {
        //     res.status(500).send('Error authenticating user');
        //     return;
        // }
        // if (results.length > 0) {
        //     // Generate JWT token
        //     const token = jwt.sign({ username }, JWT_SECRET);
        //     res.json({ token });
        // } else {
        //     res.status(401).send('Invalid username or password');
        // }

        // if(error) {
        //     res.status(500).send('Error authenticating user');
        //     return;
        // }
        // if (results.length > 0) {
        //     // Generate JWT Token
        //     const token = jwt.sign({ api_userName }, JWT_SECRET);
        //     res.json({ token });
        // } else {
        //     res.status(401).send('Invalid username and password');
        // }

    });

    

    // router.post('/protected', (req, res) => {
    //     // Verify JWT Token
    //     const token = req.headers['authorization'];
    //     if(!token) {
    //         res.status(401).send('Token no provided');
    //         return;
    //     }
    //     jwt.verify(token, JWT_SECRET, (error, decoded) => {
    //         if(error) {
    //             res.status(403).send('Invalid token');
    //             return;
    //         }
    //         res.send('You have accessed protected route');
    //     });
    // });



    // db.query('SELECT * FROM api_user_acc WHERE api_userName = ?', [api_userName, api_userPass], async (err, results) => {
    //     if (err) {
    //         console.error('Error querying the database:', err);
    //         return res.status(500).send('Server error.');
    //     } 

    //     // if (results.length === 0) {
    //     //     return res.status(401).send('Invalid credentials.');
    //     //     // const result = console.log('Error in logged ');
    //     //     // return false;
    //     // }
    //     if(results == null){
    //         return false;   
    //     }
    //     else {
    //         const user = results[0];
    //         // const isMatch = await bcrypt.compare(api_userPass, user.api_userPass);
    //         const isMatch = [api_userPass];
    
    //         if (!isMatch) {
    //             return res.status(401).send('Invalid credentialssss.');
    //         } else {
    //             const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    //             res.status(200).json({ token });
    //         }    
    //     }
        
    // });
});




// router.get('/getuser', async (req, res) => {
//     const sql = `SELECT * FROM user_acc`;
//     try {
//         const [results] = await db.promise().query(sql);
//         res.json(results);
//     } catch (error) {
//         res.json(error);
//     }
// });




// router.post('/checkuser', (req, res) => {
//     userController.checkUser(req.body).then(resultFromController => res.send(resultFromController));
// })


// router.get('/count', (req, res) => {
//     userController.count(req.body).then(resultFromController => res.send(resultFromController));
// })

// router.get('/adm', userController.get )
// router.get('/count', userController.get )


// router.get('/', (req, res) => {
//     return res.json("Data from BackEnd!");
// })


// router.get('/',  (req, res) => {
//     const users = db.query('SELECT * FROM `hperson`', {
//         type: QueryTypes.SELECT,
//       });

//       return users;
// })





// router.get('/', (req, res) => {
//     const sql = `SELECT count(*) AS 'Total' FROM hperson`;

//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//         // return res.send(data);
//     })
// })


// router.get('/count', (req, res) => {
//     const sql = `SELECT count(*) AS 'Total' FROM hperson`;

//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//         // return res.send(data);
//     })
// })

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
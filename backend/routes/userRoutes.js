const express = require('express')
// const userController = require("../controllers/userController")
const router = express.Router()
const db = require('../connection');
const bcrypt = require('bcrypt');
const { error } = require('console');


// router.post('/register', (req,res)=>{
//     const  {api_userName, api_userPass, api_userRole} = req.body

//     try {
//         const sql = `INSERT INTO api_user_acc (api_username, api_userPass) VALUES (?, ?)`;
//         db.query(sql, [api_userName, api_userPass, api_userRole]);

//         res.status(200).send("Data inserted successfully!");
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })



router.post('/register', async (req, res) => {
    const { api_userName, api_userPass } = req.body;

    if (!api_userName || !api_userPass) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(api_userPass, 10);

        // Store the new user with the hashed password
        const sql = 'INSERT INTO api_user_acc (api_username, api_userPass) VALUES (?, ?)';
        await db.query(sql, [api_userName, hashedPassword]);

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Database error', error: error.message });
    }
});




// router.get('getuser', async (req, res) => {
//     try {
//         const data = await db.promise().query(
//             `SELECT * FROM user_acc`
//         );
//         res.status(202).json({
//             users: data[0],
//         });
//     } catch(error) {
//         res.status(500).json({
//             message: error,
//         });
//     }
// })

router.get('/getuser', async (req, res) => {
    const sql = `SELECT * FROM user_acc`;
    db.query(sql, (error, results) => {
        if(error) return res.json(error);
        return res.json(results);
    }) 
})


// router.post('/login', (req, res) => {
//     const  { api_userName, api_userPass } = req.body

//     // Basic validation
//     if (!api_userName || !api_userPass) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     const sql = `SELECT api_userName, api_userPass FROM api_user_acc WHERE api_userName = ? and api_userPass = ?`;
//     db.query(sql, [api_userName, api_userPass], (error, results) => {
//         if(error) {
//             return res.json({message: 'Login successful'});
//             // return false;
//         }
//         else {
//             return res.json(results);        
//         }
//     })
// })



router.post('/login', async (req, res) => {
    const { api_userName } = req.body;

    // Basic validation
    if (!api_userName) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // SQL query to check for user
    const sql = 'SELECT api_userName FROM api_user_acc WHERE api_user_name = ?';
    
    try {
        // Execute the query
        // const ['[-]'] = await db.promise().query(sql, [user_name, user_pass]);
       db.query(sql, (error, results));

        // Check if user exists
        if (results.length > 0) {
            // User found
            res.json({ message: 'Login successful', user: results[0] });
        } else {
            // User not found
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: 'Database error', error: error.message });
    }
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
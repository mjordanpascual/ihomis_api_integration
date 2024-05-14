// const db = require('../server')
const db = require('../connection');


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


module.exports = {
    get: (req, res) => {
        // const sql = `SELECT * FROM api_user_acc`;
        const sql = `SELECT * FROM hprovider WHERE employeeid = "ONP0034"`;

        db.query(sql, (err, results) => {
            if(err) return res.json(err);
            return res.json(results);
        })
        
    }
}
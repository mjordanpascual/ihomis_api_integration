const mysql2 = require('mysql2/promise')
const db = require('../connection');

const User = {
    create: async (api_userName, api_userPass) => {
        const [rows] = await db.query('INSERT INTO api_user_acc (api_userName, api_userPass) VALUES (?, ?)', [api_userName, api_userPass]);
        return rows;
    },
    findByUsername: async (api_userName) => {
        const [rows] = await db.query('SELECT * FROM api_user_acc WHERE api_userName = ?', [api_userName]);
        return rows[0];
    }
};

// const User = {
//     create: (api_userName, api_userPass, callback) => {
//         const query = 'INSERT INTO api_user_acc (api_userName, api_userPass) VALUES (?, ?)';
//         db.query(query, [api_userName, api_userPass], (err, results) => {
//             if (err) {
//                 callback(err);
//             } else {
//                 callback(null, results);
//             }
//         });
//     },
//     findByEmail: (api_userName, callback) => {
//         const query = 'SELECT * FROM api_user_acc WHERE api_userName = ?';
//         db.query(query, [api_userName], (err, results) => {
//             if (err) {
//                 callback(err);
//             } else {
//                 callback(null, results[0]);
//             }
//         });
//     }
// };

module.exports = User;
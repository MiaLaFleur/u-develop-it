const mysql = require('mysql2');
const myInfo = require('../myInfo');

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: myInfo.user,
        password: myInfo.password,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
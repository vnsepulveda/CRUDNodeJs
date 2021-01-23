const mysql = require('mysql');
const { database } = require('./keys')
const { promisify } = require('util');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('CONEXION CERRADA');
        }
        if (err.code === 'ER_CON_COUND_ERROR') {
            console.error('MUCHAS CONEXIONES');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB esta conectada');
    return;
});

promisify(pool.query);
module.exports = pool;
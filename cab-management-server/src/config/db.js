const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '123456',
     connectionLimit: 5
});
module.exports = { pool };

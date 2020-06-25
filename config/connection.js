const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tlv12sf19!",
    database: "todo_db",
});


connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;


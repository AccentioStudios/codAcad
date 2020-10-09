const mysql2 = require('mysql2');

module.exports = {
    "development": {
        "username": "login_system_cod_acad",
        "password": "xQ5lJ8nJSfKeZmYL",
        "database": "login_system_cod_acad",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "dialectModule": mysql2
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "dialectModule": mysql2
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "dialectModule": mysql2
    }
};
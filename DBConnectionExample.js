const sqlite3 = require('sqlite3');
 
let db = new sqlite3.Database('./sample.db');
 
db.run('CREATE TABLE Player(name text)');
 
db.close();
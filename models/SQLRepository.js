const Repository = require('./Repository')
const sqlite3 = require('sqlite3').verbose()

const path = require('path')

class SQLRepository extends Repository {
    loadDatabase() {
        const dbPath = path.resolve(__dirname, '../db/Players.db')
        this.db = new sqlite3.Database(dbPath)
        console.log(this)
        this.players = new Array()
        this.selectPlayers()
    }

    selectPlayers() {
        this.db.all('SELECT * FROM Players', (err, rows) => {
            if (err) throw err
            rows.forEach(row=>console.log(row))
            this.players.push(row.name)
        })
        this.db.close()
    }
}

module.exports = SQLRepository
const Repository = require('./repository')
const sqlite3 = require('sqlite3').verbose()

const path = require('path')

class SQLRepository extends Repository {
    async loadDatabase() {
        const dbPath = '/home/daniel/Code/Javascript/DAMapp/db/Players.db'
        this.db = new sqlite3.Database(dbPath)
        this.players = new Array()
        return new Promise((resolve, reject) => {
            this.db.each('SELECT * FROM Players', (err, row) => {
                if (err) reject(err)
                console.log(row)
                this.players.push(row)
            }, (err, n) => {
                if (err) reject(err)
                resolve()
            })
        })
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

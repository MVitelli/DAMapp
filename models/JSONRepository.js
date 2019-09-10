const fs = require('fs')
const Repository = require('./Repository').default

class JSONRepository extends Repository {

    loadDatabase() {
        let data = fs.readFileSync('Players.json', 'utf8')
        this.players = JSON.parse(data)
    }

    save() {
        fs.writeFileSync('Players.json', JSON.stringify(this.players), 'utf8')
    }

}

module.exports = JSONRepository;
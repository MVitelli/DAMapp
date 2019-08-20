const fs = require('fs')

class Repository {

    loadDatabase() {
        let data = fs.readFileSync('Players.json', 'utf8')
        this.players = JSON.parse(data)
    }

    listTeams() {
        return this.players.map(player => player.team)
    }

    listPlayers() {
        return this.players.map(player => player.name + ' ' + player.lastname)
    }

    addPlayer(player) {
        this.players.push(player)
        this.save()
        console.log('Player added')
    }

    save() {
        fs.writeFileSync('Players.json', JSON.stringify(this.players), 'utf8')
    }

}

module.exports = Repository;
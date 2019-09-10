class Repository {

    loadDatabase() {
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
    }

}

module.exports = Repository;
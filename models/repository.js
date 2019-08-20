const fs = require('fs')

class Repository{

    loadDatabase() {
        let players;
        fs.readFile('Players.json','UTF8', (err,data)=>{
            if(err) throw err;
            players = JSON.parse(data)
            console.log(players)
        });
        this.players = players;
    }

    listTeams() {
        return this.players.map(player => player.team)
    }

    listPlayers() {
        return this.players.map(player => player.name + ' ' + player.lastname)
    }

}

module.exports = Repository;
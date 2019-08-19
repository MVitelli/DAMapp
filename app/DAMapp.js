#!/usr/bin/nodejs
let fs = require('fs')

console.log(process.argv)
/*
let players

fs.readFileSync(process.cwd() + "/../Players.json", function (err, data) {
    if (err) {
        console.error('asd')
    }

    players = JSON.parse(data)
    console.log(players)
    console.log('Loaded')
});

console.log(players)
*/
if (process.argv.length < 3) {
    console.error('I need at least an argument')
    process.exit()
}

if (process.argv[2] == '--help') {
    console.log('This is a futbol app for managment of tournaments')
    console.log('Usage:')
    console.log('list teams')
    console.log('list players')
    process.exit()
}

class Repository{

    constructor() {
        this.loadDatabase()
    }

    loadDatabase() {
        this.players = JSON.parse('[{"name":"Agustin","lastname":"Roman","team":"SuperMeatBoy","age":"25"},{"name":"Dani","lastname":"Guerrero","team":"Furaibo","age":"25"},{"name":"Maxi","lastname":"Vitelli","team":"Maincra","age":"25"}]')
    }

    listTeams() {
        return this.players.map(player => player.team)
    }

    listPlayers() {
        return this.players.map(player => player.name + ' ' + player.lastname)
    }

}

let repository = new Repository()

function isListingTeams(arguments) {
    return arguments[2] == 'list' && arguments[3] == 'teams'
}

function isListingPlayers(arguments) {
    return arguments[2] == 'list' && arguments[3] == 'players'
}

if (isListingTeams(process.argv)) {
    let teams = repository.listTeams()
    console.log(teams)
    process.exit()
}

if (isListingPlayers(process.argv)) {
    let players = repository.listPlayers()
    console.log(players)
    process.exit()
}
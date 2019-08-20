let fs = require('fs');
let Repository = require('./models/repository')

class DAMConsole{

    run(){
        let repository = new Repository();
        repository.loadDatabase();

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

        if (this.isListingTeams(process.argv)) {
            let teams = repository.listTeams()
            console.log(teams)
            process.exit()
        }
        
        if (this.isListingPlayers(process.argv)) {
            let players = repository.listPlayers()
            console.log(players)
            process.exit()
        }
    }
        
    isListingTeams(keyWords) {
        return keyWords[2] == 'list' && keyWords[3] == 'teams'
    }
    
    isListingPlayers(keyWords) {
        return keyWords[2] == 'list' && keyWords[3] == 'players'
    }
}

module.exports = DAMConsole
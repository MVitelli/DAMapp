let fs = require('fs');
let SQLRepository = require('./models/SQLRepository')

class DAMConsole{

    async run(){
        // let repository = new Repository();
        let repository = new SQLRepository();
        await repository.loadDatabase();

        if (process.argv.length < 3) {
            console.error('I need at least an argument')
            process.exit()
        }
        
        if (process.argv[2] == '--help') {
            console.log('This is a futbol app for managment of tournaments')
            console.log('Usage:')
            console.log('list teams')
            console.log('list players')
            console.log('add player - Needs name,lastName,team and age ')
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

        if (this.isAddingAPlayer(process.argv)) {
            let player = {}
            player.name = process.argv[4]
            player.lastname = process.argv[5]
            player.team = process.argv[6]
            player.age = process.argv[7]
            repository.addPlayer(player)
            process.exit()
        }

    }
        
    isListingTeams(keyWords) {
        return keyWords[2] == 'list' && keyWords[3] == 'teams'
    }
    
    isListingPlayers(keyWords) {
        return keyWords[2] == 'list' && keyWords[3] == 'players'
    }

    isAddingAPlayer(keyWords) {
        return keyWords[2] == 'add' && keyWords[3] == 'player'
    }

}

module.exports = DAMConsole

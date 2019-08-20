#!/usr/bin/nodejs
let fs = require('fs')
let DAMConsole = require('./DAMConsole')


async function main (){
    let damConsole = new DAMConsole();
    damConsole.run();
}

main();


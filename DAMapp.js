#!/usr/bin/nodejs
let fs = require('fs')
let DAMConsole = require('./DAMConsole')

let damConsole = new DAMConsole();
damConsole.run().then().catch();

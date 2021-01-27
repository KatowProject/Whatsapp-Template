const { Client } = require('whatsapp-web.js');
const Util = require('./util.js');

module.exports = class Kato extends Client {

    constructor(opt) {
        super(opt);

        this.util = new Util();
        this.config = require('../config.json');
        this.commands = new Map();
        this.cooldown = new Map();
        this.aliases = new Map();
        this.recent = new Set();
        
    }

}


const Discord = require('discord.js');
const bot = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const config = require("../config.json");

const antiSpam = new AntiSpam({
    warnThreshold: 3,
    maxInterval: 200,
    warnMessage: '{@user},  Cuidado com o flood..',
    kickMessage: '**{user_tag}** foi kikado por SPAM.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** foi banido por SPAM.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7,
    exemptPermissions: [ 'ADMINISTRATOR'], 
    ignoreBots: true,
    ignoredUsers: [],
});

bot.on('message', (message) => antiSpam.message(message)); 
bot.login(config.token)
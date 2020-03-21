const Discord = require('discord.js')
const config = require("../config.json");

module.exports.run = (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
        message.channel.send("Fazendo a montagem...").then(m => m.delete(2500)); 
        let avatar = message.author.avatarURL;
        message.channel.send({
            file: {
                attachment: "https://eclyssia-api.tk/api/v1/triggered?url=" + avatar,
                name: "triggered.gif"
            }
        });
    }
module.exports.help = {
    name: "trigger",
    aliases: []
}
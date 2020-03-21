const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
    if (!message.content.startsWith(config.prefix)) return;

    let pEmbed = new Discord.RichEmbed()
    .setTitle("190")
    .addField("OPA, OPA, OPA", `${message.author} foi preso!`)
    .setColor("BLACK")
message.channel.send(pEmbed)
    let avatar = message.author.avatarURL;
    message.channel.send({
        file: {
            attachment: "https://eclyssia-api.tk/api/v1/prison?url=" + avatar,
            name: "triggered.gif"
        }
    });
}
exports.help = {
    name: `preso`,
    aliases: []
}
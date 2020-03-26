const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;

    message.delete().catch(O_o => { });

    let ipEmbed = new Discord.RichEmbed()
        .setTitle("Conecte no servidor")
        .setDescription(`IP: 192.99.83.199:30120 \n connect 192.99.83.199:30120`)
        .setColor("GREEN")
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(ipEmbed)
}
exports.help = {
	name: 'ip',
	aliases: []
}
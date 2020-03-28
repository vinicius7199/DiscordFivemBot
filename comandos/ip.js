const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;

    message.delete().catch(O_o => { });

    let ipEmbed = new Discord.RichEmbed()
        .setTitle("Conecte no servidor")
        .setDescription(`IP: cfx.re/join/985xya \n connect cfx.re/join/985xya`)
        .setColor("GREEN")
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(ipEmbed)
}
exports.help = {
	name: 'ip',
	aliases: []
}
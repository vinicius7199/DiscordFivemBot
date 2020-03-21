const Discord = require('discord.js');
const config = require("../config.json");
exports.run = async (bot, message) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Gado")
        .addField("Quem é o mais gado?", `${message.author} é o mais gado`)
        .setColor("RANDOM")
    message.channel.send(pEmbed)
        .then(m => {
            setTimeout(function () { m.react("688756853693480962") }, 200);
        });
}
exports.help = {
    name: 'gado',
    aliases: []
}
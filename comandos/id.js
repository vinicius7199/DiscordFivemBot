const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });

    let canals = message.channel
    let mande = bot.channels.get("657353459015614487")
    if(canals =! "657353459015614487") return message.reply(`Este comando só pode ser executado no canal ${mande}`)
    .then(m => m.delete(10000))

    if (!args[0]) return message.reply("Digite o ID na frente do comando!");

    let id = args[0];

    let Embed = new Discord.RichEmbed()
        .setTitle("ID")
        .setColor("RANDOM")
        .setDescription(message.author + `, Seu ID (${id}) foi recebido com sucesso, aguarde para ser liberado!`)
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(Embed)
    .then(m => m.delete(15000))

    message.author.send(Embed)

    let canal = bot.channels.get('690745637590794242')
    let pEmbed = new Discord.RichEmbed()
        .setTitle("ID PARA LIBERAR")
        .setColor("RANDOM")
        .setDescription(message.author + " \nID " + id)
        .setFooter('Newark Roleplay')
        .setTimestamp()
    canal.send(pEmbed)
}
module.exports.help = {
    name: 'id',
    aliases: []
}
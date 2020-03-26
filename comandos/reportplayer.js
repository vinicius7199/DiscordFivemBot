const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });

    let canals = message.channel
    let mande = bot.channels.get("691029601073233920")
    if(canals =! "691029601073233920") return message.reply(`Este comando só pode ser executado no canal ${mande}`)

    let autor = message.author
    let channel = bot.channels.get('691030052657430589');
    let motv = args.slice(1).join(" ");
    let ID = args[0]
    if(!motv) return message.reply(`Você se esqueceu de dizer o bug..`).then(m => m.delete(10000))
    if(!ID) return message.reply(`Você se esqueceu de dizer o ID do reportado..`).then(m => m.delete(10000))

    let embed = new Discord.RichEmbed()
        .setTitle(`Reporte Player enviado`)
        .setColor("GREEN")
        .setDescription(`Seu reporte de player foi enviado e será analisado pela Staff!`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    message.channel.send(embed).then(m => m.delete(15000))

    let embed2 = new Discord.RichEmbed()
        .setTitle(`Reporte de Player recebido`)
        .setThumbnail(avatarr)
        .setColor("RANDOM")
        .setDescription(`ID: ${ID} \n Motivo: ${motv}`)
        .addField(`Reporte enviado por`, `${autor.tag}`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    channel.send(embed2).then(m => {
        m.react('688756853672509565')
        m.react('688756853622177812')
    })
}
exports.help = {
    name: `rplayer`,
    aliases: []
}
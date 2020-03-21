const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });

    let autor = message.author
    let channel = bot.channels.get('691029771207049218');
    let bug = args.slice(0).join(" ");
    //let grav = args.slice(0).join(" ");
    if(!bug) return message.reply(`Você se esqueceu de dizer o bug..`).then(m => m.delete(10000))

    let avatarr = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setTitle(`Bug enviado`)
        .setThumbnail(avatarr)
        .setColor("GREEN")
        .setDescription(`Seu reporte de bug foi enviado e será analisado pela Staff!`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    message.channel.send(embed).then(m => m.delete(15000))

    let embed2 = new Discord.RichEmbed()
        .setTitle(`Reporte de Bug recebido`)
        .setThumbnail(avatarr)
        .setColor("RANDOM")
        .setDescription(`${bug}`)
        .addField(`Bug enviado por`, `${autor.tag}`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    channel.send(embed2).then(m => {
        m.react('688756853672509565')
        m.react('688756853622177812')
    })
}
exports.help = {
    name: `rbug`,
    aliases: []
}
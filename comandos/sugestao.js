const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });

    let autor = message.author
    let channel = bot.channels.get('691018824484388964');
    let sugest = args.slice(0).join(" ");
    if(!sugest) return message.reply(`Você se esqueceu de dizer a sugestão..`).then(m => m.delete(10000))

    let avatarr = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setTitle(`Sugestão enviada - Newark Bot`)
        .setThumbnail(avatarr)
        .setColor("GREEN")
        .setDescription(`Sua sugestão foi enviada e será lida pela Staff!`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    message.channel.send(embed).then(m => m.delete(15000))

    let embed2 = new Discord.RichEmbed()
        .setTitle(`Sugestão recebida`)
        .setThumbnail(avatarr)
        .setColor("RANDOM")
        .setDescription(`${sugest}`)
        .addField(`Sugestão enviada por`, `${autor.tag}`)
        .setFooter(`Newark Bot`)
        .setTimestamp();
    channel.send(embed2).then(m => {
        m.react('688756853672509565')
        m.react('688756853622177812')
    })
}
exports.help = {
    name: `sugestao`,
    aliases: []
}
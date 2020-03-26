const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;

    let canals = message.channel
    if(canals == "657353466100056074") return message.reply(`Não precisa trocar o nome agora, eu irei trocar para você quando for liberado :)`)

    let mande = bot.channels.get("691519552269320202")
    if(canals =! "691519552269320202") return message.reply(`Este comando só pode ser executado no canal ${mande}`)

    let msgs = args.join(' ')

    message.delete().catch(O_o => { });
    let avatarr = message.author.iconURL;
    let pEmbed = new Discord.RichEmbed()
        .setThumbnail(avatarr)
        .setTitle("Troca de nome")
        .addField(`${message.author.tag}`, ` Trocou seu nome para ` + msgs)
        .setColor("ff6600")
        .setFooter('Newark Bot')
        .setTimestamp()
    message.channel.send(pEmbed)
    .then(m => {
        m.react("✅");
    });
    message.member.setNickname(msgs)
}
exports.help = {
    name: "nick",
    aliases: []
}
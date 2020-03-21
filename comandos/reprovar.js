const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });
    if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Sem permissão para liberar, ${message.author}`)

    if (!args[0]) return message.reply("Mencione as pessoa à ser reprovada!");

    if (!args[1]) return message.reply("Informe o ID!");

    if (!args[2]) return message.reply("Diga o motivo!");

    let motivo = args.slice(2).join(" ");

    let id = args[1];

    let user = message.mentions.members.first();
    if (!user) return message.reply("Usuário não encontrado!");

    let pEmbed = new Discord.RichEmbed()
        .setTitle("Liberação ID")
        .setDescription(`${user} ID: (${id}) Foi reprovado`)
        .addField("Motivo", motivo)
        .addField("Reprovação feita por", `${message.author.tag}`)
        .setColor("RED")
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(pEmbed)
    message.author.send(pEmbed)
}
module.exports.help = {
    name: 'reprovar',
    aliases: []
}
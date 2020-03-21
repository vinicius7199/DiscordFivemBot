const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
        message.delete().catch(O_o => { });
        if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Sem permissão para liberar, ${message.author}`)

        if (!args[0]) return message.reply("Mencione as pessoa à ser reprovada!");

        if (!args[1]) return message.reply("Diga o motivo!");

        let motivo = args.slice(1).join(" ");

        let user = message.mentions.members.first();

        if (!user) return message.reply("Usuário não encontrado!");

            let pEmbed = new Discord.RichEmbed()
                .setTitle("Liberação ID")
                .setDescription(user + " Foi reprovado")
                .addField("Motivo", motivo)
                .addField("Reprovação feita por", `${message.author.tag}`)
                .setColor("GREEN")
                .setFooter('Newark Roleplay')
                .setTimestamp()
            message.channel.send(pEmbed)
}
module.exports.help = {
    name: 'reprovar',
    aliases: []
}
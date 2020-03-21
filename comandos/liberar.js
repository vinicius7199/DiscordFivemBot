const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
        message.delete().catch(O_o => { });
        if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Sem permissão para liberar, ${message.author}`)

        if (!args[0]) return message.reply("Mencione as pessoa à ser liberada!");

        let user = message.mentions.members.first();
        if (!user) return message.reply("Usuário não encontrado!");

        let visitante = '657353354304946176';
        let cidadao = '657353350102384694';
        user.addRole(cidadao);
        user.removeRole(visitante);

            let pEmbed = new Discord.RichEmbed()
                .setTitle("Liberação ID")
                .setDescription(user + " Foi liberado")
                .addField("Liberação feita por", `${message.author.tag}`)
                .setColor("GREEN")
                .setFooter('Newark Roleplay')
                .setTimestamp()
            message.channel.send(pEmbed)
}
module.exports.help = {
    name: 'liberar',
    aliases: []
}
const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
        message.delete().catch(O_o => { });

        if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Sem permissão para liberar, ${message.author}`)

        if (!args[0]) return message.reply("Digite o ID na frente do comando!");

        let id = args[0];
        
        let Embed = new Discord.RichEmbed()
        .setTitle("ID")
        .setDescription(message.author + `, Seu ID (${id}) foi recebido com sucesso, aguarde para ser liberado!`)
        .setFooter('Newark Roleplay')
        .setTimestamp()
        message.channel.send(Embed)

        let canal = bot.channels.get('690745637590794242')
            let pEmbed = new Discord.RichEmbed()
                .setTitle("ID PARA LIBERAR")
                .setDescription(message.author + " ID - " + id)
                .setFooter('Newark Roleplay')
                .setTimestamp()
            canal.send(pEmbed)
}
module.exports.help = {
    name: 'id',
    aliases: []
}
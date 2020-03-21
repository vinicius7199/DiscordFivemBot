const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (bot, message, args, comando) => {
    if (!message.content.startsWith(config.prefix)) return;
    
        message.delete().catch(O_o => { });

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Sem permissão para apagar, ${message.author}`)
        let mensagemDeletar = args.slice(0).join(" ")
        if (mensagemDeletar < 1) return message.reply("Calma lá... Só posso apagar no minímo 1 mensagem!");
        if (mensagemDeletar > 100) return message.reply("Calma lá... Só posso apagar até 100 mensagens!");
        if (isNaN(args[0])) return message.reply("Coloque o número de mensagens à serem apagadas!");
        {
            message.channel.bulkDelete(mensagemDeletar).catch(err => console.log(err));
            let pEmbed = new Discord.RichEmbed()
                .setTitle("Limpeza")
                .addField("Chat foi limpo por", `${message.author.tag}`)
                .setColor("GREEN")
                .setFooter('Newark Roleplay')
                .setTimestamp()
            message.channel.send(pEmbed)
        };
    }
module.exports.help = {
    name: 'delete',
    aliases: []
}
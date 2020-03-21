const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
        if (!message.content.startsWith(config.prefix)) return;
        message.delete().catch(O_o => { });

        const name = `Ticket ${message.author.id}`;

        if (name.toLowerCase().replace(" ", "-") != message.channel.name) return message.channel.send(`Lugar errado, amigo...${message.author}`);
        let pEmbed = new Discord.RichEmbed()
                .setThumbnail(bot.user.displayAvatarURL)
                .setTitle("Ticket")
                .setDescription(`Fim do suporte!`)
                .setColor("RED")
                .addField(`Obrigado!`, `Em instantes, este canal será apagado!`)
                .setFooter('Newark Roleplay')
                .setTimestamp()
        message.channel.send(pEmbed)
                .then(m => m.delete(8000))
                .then(m => message.channel.delete())
}
exports.help = {
        name: "fimticket",
        aliases: []
}
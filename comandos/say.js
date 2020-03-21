const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });
    if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`Você não tem permissão, ${message.author}`)

    if (args.length < 1)
        return message.reply("Não tem nada para dizer?").then(m => m.delete(6000));
    let channel = message.mentions.channels.first()
    if (args[1] === "embed") {
        let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle('Anúncio')
            .setDescription(args.slice(2).join(" "))
            .setThumbnail(bot.user.displayAvatarURL)
            .setFooter('Newark Roleplay')
            .setTimestamp()
        channel.send(embed);
    } else {
        if (!channel) return channel = message.channel
        channel.send(args.slice(1).join(" "));
    }
}
exports.help = {
    name: `dizer`,
    aliases: []
}

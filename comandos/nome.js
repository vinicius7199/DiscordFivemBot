const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {

    if (!message.content.startsWith(config.prefix)) return;
    let msgs = args.join(' ')

    if (message.content.toLowerCase() === `!nick`, msgs) {  

    message.delete().catch(O_o => { });
    let avatarr = message.author.iconURL;
    let pEmbed = new Discord.RichEmbed()
        .setThumbnail(avatarr)
        .setTitle("Troca de nome")
        .addField(`${message.author.tag}`, ` Trocou seu nome para ` + msgs)
        .setColor("ff6600")
        .setFooter('Vyth')
        .setTimestamp()
    message.channel.send(pEmbed)
    message.member.setNickname(msgs)
        .then(m => {
            m.react("✅");
        });

}
}
exports.help = {
    name: "nick",
    aliases: []
}

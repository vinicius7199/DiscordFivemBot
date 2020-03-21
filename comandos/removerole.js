const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {

    if (!message.content.startsWith(config.prefix)) return;

    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);

    message.delete().catch(O_o => { });

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Sem permissão para setar, ${message.author}`)

    let reMember = message.mentions.members.first();
    if (!reMember) return message.reply("Usuário não encontrado!");

    let role = msgs[2];
    if (!role) return message.guild.roles.reply("Digite o nome do cargo corretamente");

    let tiraRole = message.guild.roles.find("name", role) || message.mentions.roles.first();
    if (!tiraRole) return message.reply("Cargo não encontrado!");
    if (! !!reMember.roles.has(tiraRole.id)) return message.reply("Usuário não possui este cargo!");

    reMember.removeRole(tiraRole.id);
    let avatarr = reMember.displayAvatarURL;
    let pEmbed = new Discord.RichEmbed()

        .setThumbnail(avatarr)
        .setTitle("Setagem")
        .addField(`Olá!`, `@${reMember.user.tag} perdeu o cargo de ${tiraRole.name}`)
        .addField(`Setagem feita por `, ` ${message.author}`)
        .setColor("RED")
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(pEmbed)
        .then(m => {
            m.react("✅");
        });
}
exports.help = {
    name: 'removerole',
    aliases: []
}
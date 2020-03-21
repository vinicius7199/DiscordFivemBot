const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
    if(!message.content.startsWith(config.prefix)) return;
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    message.delete().catch(O_o => { });
    
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Sem permissão para setar, ${message.author}`)
    let rMember = message.mentions.members.first();

    if (!rMember) return message.reply("Usuário não encontrado!");
    let role = msgs[2];
    if (!role) return message.guild.roles.reply("Digite o nome do cargo corretamente");

    let recebeRole = message.guild.roles.find("name", role) || message.mentions.roles.first();
    if (!recebeRole) return message.reply("Cargo não encontrado!");
    if (rMember.roles.has(recebeRole.id)) return message.reply("Usuário já possui este cargo!");

    rMember.addRole(recebeRole.id);

    let avatarr = rMember.user.displayAvatarURL;

    let pEmbed = new Discord.RichEmbed()
        .setThumbnail(avatarr)
        .setTitle("Setagem")
        .addField(`Olá!`, `@${rMember.user.tag} foi setado de ${recebeRole.name}`)
        .addField(`Setagem feita por `, ` ${message.author}`)
        .setColor("RANDOM")
        .setFooter('Newark Roleplay')
        .setTimestamp();
    message.channel.send(pEmbed)
        .then(m => {
            m.react("✅");
        });
}
exports.help = {
    name: 'addrole',
    aliases: []
}
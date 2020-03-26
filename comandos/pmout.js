const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("../config.json");
const moment = require ("moment")
moment.locale('pt-br');

var currentHour = new Date().getHours();
var currentMin = new Date().getMinutes();

exports.run = async (bot, message, args) => {
if (!message.content.startsWith(config.prefix)) return;
message.delete().catch(O_o => { });

if (!message.member.roles.find(role => role.name === 'LSPD')) return message.reply("Você não tem permissão!")

    let canal = bot.channels.get("657353530163593217")
    let nome = message.author
    let avatarr = message.author.displayAvatarURL;

        let pEmbed = new Discord.RichEmbed()
        .setTitle("Fim Expediente")
        .setThumbnail(avatarr)
        .setDescription(`Oficial - ${nome}\n\n Saída: - ${moment().format('L')} as ${moment().format('LT')}`)
        .setColor("RED")
        .setFooter('Newark Roleplay')
        .setTimestamp()
      canal.send(pEmbed) 
}
exports.help = {
    name: `expout`,
    aliases: []
}
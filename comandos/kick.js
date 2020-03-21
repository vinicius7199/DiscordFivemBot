const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
    if (!message.content.startsWith(config.prefix)) return;

	const member = message.mentions.members.first();

	if (!member) {
		return message.reply('Primeiro você precisa mencionar ele, né?!')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 6000);
			})
	}
	if (!member.kickable) {
		return message.reply('Não consigo dar kick neste usuário.')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 6000);
			})
	}


	let Embed = new Discord.RichEmbed()
	.setTitle("Kick")
	.setDescription(`${member.user.tag} foi expulso do servidor.`)
	.addField(`Kick efetuado por` , ` ${message.author}`)
	.setColor("RED")
	.setFooter('Newark Roleplay')
	.setTimestamp()

	return member
		.kick()
		.then(() => message.channel.send(Embed))
}
exports.help = {
	name: 'kick',
	aliases: []
}
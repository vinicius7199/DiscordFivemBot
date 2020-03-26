const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
	if (!message.content.startsWith(config.prefix)) return;
	message.delete().catch(O_o => { });
	
	if (!message.member.hasPermission("MANAGE_ROLES")) {
		return message.reply('Você não tem permissão para banir')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 10000);
			})
	}
	
    let mande = bot.channels.get("691519552269320202")
	if(message.channel !== "691519552269320202") return message.reply(`Este comando só pode ser executado no canal ${mande}`)
	
	const member = message.mentions.members.first();
	if (!member) {
		return message.reply('Primeiro você precisa mencionar ele, né?!')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 10000);

			})
	}

	let Embed = new Discord.RichEmbed()
		.setTitle("Banimento")
		.setDescription(`${member.user.tag} foi banido do servidor.`)
		.addField(`Banimento efetuado por`, `${message.author}`)
		.setColor("RED")
		.setFooter('Newark Roleplay')
		.setTimestamp()


	return member
		.ban()
		.then(() => message.channel.send(Embed))
}
exports.help = {
	name: 'banir',
	aliases: []
}
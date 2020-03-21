const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args, comando) => {
	if (!message.content.startsWith(config.prefix)) return;
	const member = message.mentions.members.first();

	if (!member) {
		return message.reply('Primeiro você precisa mencionar ele, né?!')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 10000);

			})
	}

	if (!message.member.hasPermission("MANAGE_MEMBERS")) {
		return message.reply('Não consigo banir ele, sou fraco :C ')
			.then(m => {
				setTimeout(function () { m.delete().catch(O_o => { }) }, 10000);
			})
	}

	let Embed = new Discord.RichEmbed()
	.setTitle("Banimento")
	.setDescription(`${member.user.tag} foi banido do servidor.`)
	.addField(`Banimento efetuado por` , `${message.author}`)
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
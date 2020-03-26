const Discord = require("discord.js");
const config = require("../config.json");
const bot = new Discord.Client();

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
})

bot.on('ready', () => {
  setInterval(function () { bot.user.setActivity(`Newark Roleplay - Precisa de ajuda? !ajuda`); }, 10000);
})

bot.on("guildMemberAdd", member => {
  let avatarr = member.user.displayAvatarURL;
  let embeda = new Discord.RichEmbed()
    .setThumbnail(avatarr)
    .setDescription(member.user + ` Chegou no **${member.guild.name}**. Seja bem vindo! \n \n Agora estamos com ${bot.users.size} usuários!`)
    .setColor("RANDOM")
    .setTimestamp()
  const channel = member.guild.channels.get("690582506101145670"); channel.send(embeda)
});
bot.on("guildMemberRemove", member => {
  let avatarr = member.user.displayAvatarURL;
  let embedr = new Discord.RichEmbed()
    .setThumbnail(avatarr)
    .setDescription(member.user + ` Saiu do **${member.guild.name}**. Espero que volte :C`)
    .setColor("RANDOM")
    .setTimestamp()
  const channel = member.guild.channels.get("690582506101145670"); channel.send(embedr)
});
bot.login(config.token)

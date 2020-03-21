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
  const channel = member.guild.channels.get("690582506101145670"); channel.send(member.user + ` Chegou no **${member.guild.name}**. Bem vindo(a)!`);
});
bot.on("guildMemberRemove", member => {
          const channel = member.guild.channels.get("690582506101145670"); channel.send(member.user + ` Saiu do **${member.guild.name}**. Espero que volte :C`);
});
bot.login(config.token)

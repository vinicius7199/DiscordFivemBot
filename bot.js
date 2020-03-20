const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} ✅`)
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(function (alias) {
      bot.aliases.set(alias, props.help.name)
      
    })

  });

});

bot.on("message", async message => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const exports = msgs.shift().toLowerCase();

  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  let prefix = config.prefix;
  let arquivocmd = bot.commands.get(command.slice(prefix.length));

  if (arquivocmd) arquivocmd.run(bot, message, args);

});

fs.readdir("./func/", (err, func) => {
  if (err) console.error(err);

  let funcjs = func.filter(f => f.split(".").pop() == "js");
  funcjs.forEach((f, i) => {
    let props = require(`./func/${f}`);
    console.log(`Funçao ${f} ✅ `)
  })

});
bot.login(config.token)
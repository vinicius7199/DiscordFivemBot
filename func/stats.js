const Discord = require("discord.js");
const config = require("../config.json");
const bot = new Discord.Client();
//const firebase = require("firebase");

//const firebaseConfig = require("../config.json")
//if(!firebase.apps.length){
//firebase.initializeApp(config.firebaseConfig);
//}
//const database = firebase.database();

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
})

bot.on('ready', () => {
  setInterval(function () { bot.user.setActivity(`Newark Roleplay - Precisa de ajuda? !ajuda`); }, 10000);
})

bot.on("guildMemberAdd", member => {

  //database.ref(`Servidores/adv/newark/${member.id}`)
  //.once('value').then(function (snap) {
  //    const role = snap.val().cargo
  //    console.log(role)

//      if (snap.val() == null) {
  let avatarr = member.user.displayAvatarURL;
  let embeda = new Discord.RichEmbed()
    .setThumbnail(avatarr)
    .setDescription(member.user + ` Chegou no **${member.guild.name}**. Seja bem vindo! \n \n Agora estamos com ${bot.users.size} usuários!`)
    .setColor("RANDOM")
    .setTimestamp()
  const channel = member.guild.channels.get("690582506101145670"); channel.send(embeda)
//}else{
//  const cargo = member.guild.roles.get(role.id)
//  console.log(cargo)
  //let avatarr2 = member.user.displayAvatarURL;
  //let embed2 = new Discord.RichEmbed()
  //.setThumbnail(avatarr2)
 // .setDescription(member.user + ` Chegou no **${member.guild.name}**. Seja bem vindo! \n \n Agora estamos com ${bot.users.size} usuários!`)
 // .addField("\nUsuário já tinha um cargo anteriormente", cargo)
//  .setColor("RANDOM")
//  .setTimestamp()
//const channel = member.guild.channels.get("690582506101145670"); channel.send(embed2)
//  member.addRole(cargo)
//  console.log(`Usuário com advertencia entrou no servidor`)
//}
//})
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

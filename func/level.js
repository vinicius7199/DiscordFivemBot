const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("../config.json");
const firebase = require("firebase");
const firebaseConfig = require("../config.json")

firebase.initializeApp(config.firebaseConfig);
const database = firebase.database();

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    global.xp = '';
    global.nextLevel = '';
    global.canal = '';
    let addpontos = Math.floor(Math.random() * 7) + 8;

    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
        .once('value').then(async function (snap) {
            if (snap.val() == null) {
                database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                    .set({
                        xp: 0,
                        level: 1
                    })
            } else {
                xp = snap.val().xp + addpontos;
                nextLevel = snap.val().level * 1500;
                database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                    .update({
                        xp: xp
                    })
                if (nextLevel <= xp) {
                    nextLevel = snap.val().level + 1;
                    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                        .update({
                            level: nextLevel
                        })
                    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                        .once('value').then(function (snap) {
                            let servidor = message.guild.id;
                            let server = bot.guilds.get(message.guild.id)
                            const levell = snap.val().level
                            let avatarr = message.author.avatarURL;
                            let lEmbed = new Discord.RichEmbed()
                                .setThumbnail(avatarr)
                                .setTitle("Nível")
                                .setDescription(`${message.author.tag}`)
                                .addField(`Subiu de nível!`, `Nível: ${levell} \nServidor: ${message.guild.name}`)
                                .setColor("RANDOM")
                                .setFooter('Vyth')
                                .setTimestamp()

                            if (servidor) {
                                
                            const channel = server.channels.get(''); channel.send(lEmbed)
                            }
                        })
                        }
                if (message.content.toLowerCase() === '!level') {

                    message.delete().catch(O_o => { });
                    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                        .once('value').then(function (snap) {
                            const levell = snap.val().level
                            const xpp = snap.val().xp
                            let avatarr = message.author.avatarURL;
                            let lEmbed = new Discord.RichEmbed()
                                .setThumbnail(avatarr)
                                .setTitle("``Nível``")
                                .setDescription(`${message.author.tag}`)
                                .addField(`Nível atual:`, `${levell}`)
                                .addField(`XP`, `${xpp}/${nextLevel}`)
                                .setColor("ff6600")
                                .setFooter('Vyth')
                                .setTimestamp()
                            message.channel.send(lEmbed)

                        })
                }
            }
        })
})
bot.login(config.token)

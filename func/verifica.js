const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("../config.json");

bot.on('raw', async dados => {  
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if (dados.d.message_id != "690659056658153482") return

    let servidor = bot.guilds.get("657352699758772242") 

    let membro = servidor.members.get(dados.d.user_id)

    let visitante = "657353354304946176"

    if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.id === "690654870356754552") {
            if (membro.roles.has(visitante)) return
            membro.addRole(visitante)
        }
    }
})

bot.login(config.token)
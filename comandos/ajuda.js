const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message) => {
    if (!message.content.startsWith(config.prefix)) return;
    let avatarr = message.author.displayAvatarURL;
    message.delete().catch(O_o => { });


    let pages = [`Moderação`, `Fun`, `Outros`]
    let mensagem =
        [
            `
    !banir - Banir alguém do servidor **(apenas ADM)**
    !kick - Kikar alguém do servidor **(apenas ADM)**
    !addrole - Adicionar cargo **(apenas ADM)**
    !removerole - Remover cargo **(apenas ADM)**
    !delete - Deletar msgs **(apenas ADM)**
    !dizer - Para fazer um anunciamento**(apenas ADM)**
    `,

            `
    !gado - Para saber quem é o mais gado
    !trigger - Montagem trigger
    `,

            `
     !nick - Para mudar de nome
     !server - Para mais informações sobre o servidor
     !level - Para saber seu level atual
     `]

    const Embed = {
        color: 0x0099ff,
        title: `Olá`,
        author: {
            name: 'Newark Roleplay',
            icon_url: 'https://cdn.discordapp.com/avatars/671389178805747731/83eed4f3bc40dd409557d547fa56d52b.png?size=128',
            url: 'http://viniciusbot.ddns.net/dashboard/',
        },
        description: 'Está perdido? Calma, eu posso te ajudar.',
        thumbnail: {
            url: 'https://cdn.discordapp.com/avatars/671389178805747731/83eed4f3bc40dd409557d547fa56d52b.png?size=128',
        },
        fields: [
            {
                name: 'IP DO SERVIDOR',
                value: '0.0.0.0:30120',
            },
            {
                name: 'Precisa de ajuda?',
                value: 'Eu irei te ajudar! Reaja com 🔰 para abrir um ticket ou Reaja com 💡 para lhe dizer meus comandos!',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `Solicitado por ${message.author.tag}`,
            icon_url: `${avatarr}`,
        },
    };
    message.channel.send({ embed: Embed })
        .then(m => {
            m.react("🔰");
            m.react("💡");
            m.delete(360000)
            const filter = (reaction, user) => {
                return ['🔰', '💡'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            m.awaitReactions(filter, { max: 1, time: 80000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '💡') {
                        m.clearReactions()
                        let page = 1;
                        const embed = new Discord.RichEmbed()
                            .setTitle(pages[page - 1])
                            .setDescription(mensagem[page - 1])
                            .setColor("RED")
                            .setFooter(`Página ${page} de ${pages.length}`)
                        m.edit(embed).then(msg => {
                            msg.react('⬅️').then(r => {
                                msg.react('➡️')

                                const trasfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
                                const frentefilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;

                                const tras = msg.createReactionCollector(trasfilter, { time: 360000 });
                                const frente = msg.createReactionCollector(frentefilter, { time: 360000 });
                                tras.on('collect', async r => {
                                    if (page === 1) return;
                                    page--;
                                    embed.setTitle(pages[page - 1]);
                                    embed.setDescription(mensagem[page - 1])
                                    embed.setFooter(`Página ${page} de ${pages.length}`)
                                    msg.edit(embed)
                                })
                                frente.on('collect', async r => {
                                    if (page === pages.length) return;
                                    page++;
                                    embed.setTitle(pages[page - 1]);
                                    embed.setDescription(mensagem[page - 1])
                                    embed.setFooter(`Página ${page} de ${pages.length}`)
                                    msg.edit(embed)
                                })
                            })
                        })

                    } if (reaction.emoji.name === '🔰') {
                        {
                            if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
                                message.channel.send(`Não tenho permissão para criar canais. Entre em contato direto com um staff!`);
                            } else {
                                let everyone = message.guild.defaultRole;

                                const nome = `Ticket ${message.author.id}`;

                                if (message.guild.channels.find(channel => channel.name === nome.toLowerCase().replace(" ", "-"))) return message.channel.send(`${message.author}, Já há um ticket em aberto! Entre em contato com algum staff.`);

                                message.guild.createChannel(nome, 'text').then(r => {
                                    r.overwritePermissions(everyone, { VIEW_CHANNEL: false })
                                    r.overwritePermissions(message.author.id, { VIEW_CHANNEL: true })

                                    let pEmbed = new Discord.RichEmbed()
                                        .setThumbnail(bot.user.displayAvatarURL)
                                        .setTitle(`Ticket ${message.author.tag}`)
                                        .setColor("RED")
                                        .setDescription(`Um canal foi criado!`)
                                        .addField(`Aguarde...`, `Algum staff irá te atender`)
                                        .setFooter('Newark Roleplay')
                                        .setTimestamp()
                                    message.channel.send(pEmbed)
                                        .then(m => {
                                            message.react("682047276759384112")
                                            m.delete(15000);
                                        });
                                    let Staff = '690636656860069909';
                                    r.send(`${message.author}, aguarde por um <@${Staff}>`)
                                    r.send(` **Atenção! ao final do suporte, dê !fimticket** `)
                                })
                            }
                        }
                    }
                })
        })
}
exports.help = {
    name: 'ajuda',
    aliases: []
}

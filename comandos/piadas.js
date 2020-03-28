const Discord = require('discord.js');
const config = require("../config.json");

exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(config.prefix)) return;
    message.delete().catch(O_o => { });

    let Tiozao = [
        'Porque a velinha não usa relógio?\n -Porque? \n Porque ela é uma SENhora',
        'Você sabe qual é o rei dos queijos? \n -Não, qual? \n O reiqueijão',
        'Eu peguei a barbie da minha irmã e passei no rosto do meu pai\n -Pra que? \n Eu estava barbiando ele',
        'EI! tem um cara passando nas ruas vendendo peneira, não compre, é furada!',
    ];
    let Negro = [
        'Ônibus lotado em horário de pico: até o cadeirante fica de pé.',
        'Porque na casa da Isabella Nardoni não tem internet? Porque o pai dela cortou a rede',
        'Porque a menina caiu do balanço? Porque ela não tinha braço',
        'Na África, todo uber é black',
    ];
    let Joaoz = [
        'Joãozinho qual é o tempo da frase: Eu procuro um homem fiel?\n E então Joãozinho responde\n - É tempo perdido!',
        'Joãozinho, me dê um exemplo de energia desperdiçada! \n - Contar uma história de arrepiar os cabelos para um careca!',
        'Chamou o táxi e perguntou: - Moço, quanto o senhor cobra para me levar para o aeroporto? \n- R$ 25,00. \n- E as malas? \n- As malas eu não cobro nada. \n- Então leve as malas que eu vou a pé.',
        'O professor pergunta o Joãozinho: - Arroz é com S ou com Z? \n- Aqui na escola eu não sei, mas lá em casa é com feijão.',
    ];
    let Charadas = [
        'P: Qual o cachorro do fazendeiro?\n R: É o cãopeão.',
        'P: É redondo, tem um buraquinho no meio, tem apenas 2 letras cuja a primeira é C \nR: CD!',
        'P: O que o coador disse para o café? \nR: Lá vem esse pretinho enxer meu saco!',
        'P: O que tem 4 patas e fica em cima do telhado? \n R: O fogão... o fogão é meu eu coloco ele onde eu quiser',
    ];
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Piadas")
        .setDescription("Reaja com qual o tipo de piada \n 1-Tiozao \n 2-Humor Negro \n 3-Joaozinho \n 4-Charadas")
        .setColor("GREEN")
        .setFooter('Newark Roleplay')
        .setTimestamp()
    message.channel.send(pEmbed)
        .then(m => {
            setTimeout(function () { m.react("682293619054477362") }, 200);
            setTimeout(function () { m.react("682293619964772354") }, 500);
            setTimeout(function () { m.react("682293620396916795") }, 600);
            setTimeout(function () { m.react("682293620166098973") }, 900);
            const filter = (reaction, user) => {
                return ['682293619054477362', '682293619964772354', '682293620166098973', '682293620396916795'].includes(reaction.emoji.id) && user.id === message.author.id;
            };

            m.awaitReactions(filter, { max: 1, time: 80000, errors: ['time'] }) // tiozao
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.id === '682293619054477362') {
                        m.clearReactions()
                        let piadarandom = Tiozao[Math.floor(Math.random() * Tiozao.length)];
                        let Embedt = new Discord.RichEmbed()
                            .setTitle("Tiozão")
                            .setDescription(piadarandom)
                            .setColor("GREEN")
                            .setFooter('Newark Roleplay')
                            .setTimestamp()
                        m.edit(Embedt)
                    }
                })
            m.awaitReactions(filter, { max: 1, time: 80000, errors: ['time'] }) // humor negro
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.id === '682293619964772354') {
                        m.clearReactions()
                        let piadarandom = Negro[Math.floor(Math.random() * Negro.length)];
                        let Embedn = new Discord.RichEmbed()
                            .setTitle("Humor negro")
                            .setDescription(piadarandom)
                            .setColor("GREEN")
                            .setFooter('Newark Roleplay')
                            .setTimestamp()
                        m.edit(Embedn)
                    }
                })

            m.awaitReactions(filter, { max: 1, time: 80000, errors: ['time'] }) //joaozinho
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.id === '682293620166098973') {
                        m.clearReactions()
                        let piadarandom = Joaoz[Math.floor(Math.random() * Joaoz.length)];
                        let Embedj = new Discord.RichEmbed()
                            .setTitle("Joãozinho")
                            .setDescription(piadarandom)
                            .setColor("GREEN")
                            .setFooter('Newark Roleplay')
                            .setTimestamp()
                        m.edit(Embedj)
                    }
                })

            m.awaitReactions(filter, { max: 1, time: 80000, errors: ['time'] }) // charada
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.id === '682293620396916795') {
                        m.clearReactions()
                        let piadarandom = Charadas[Math.floor(Math.random() * Charadas.length)];
                        let Embedc = new Discord.RichEmbed()
                            .setTitle("Charada")
                            .setDescription(piadarandom)
                            .setColor("GREEN")
                            .setFooter('Newark Roleplay')
                            .setTimestamp()
                        m.edit(Embedc)
                    }
                })
        })
}
exports.help = {
    name: "humor",
    aliases: []
}
const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setColor(3066993)
    .setTitle("Atencion")
    .setDescription("Half Bloody y AXO Tags Se Juntan.\nA partir de ahora, AXO Tags, es un sv de Tags.\nAgradeceriamos tu Boost en AXO Tags")
    .setAuthor({
        name: "Bot Bloody.",
})
    .setFooter({
        text: "Atentamente Equipo de AXO Tags",
    });

module.exports = embed;

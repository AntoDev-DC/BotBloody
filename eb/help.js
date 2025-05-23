const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setColor(3066993)
    .setTitle("Help")
    .setDescription("Comandos:\n/eb-m1, envia un Embed Construido\n/embed, envia un Embed que lo haces Tu en Discohook")
    .setAuthor({
        name: "Bot Bloody.",
});

module.exports = embed;

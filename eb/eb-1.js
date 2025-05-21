const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setColor(15277598)
    .setTitle("Anuncio")
    .setDescription("Al server le queda poco.\nCuando se abra, todos los que estaban antes,\nrecibiran un rol llamado. <@&1374410173564850317>.\nQue es exclusivo de los Beta Tester")
    .setAuthor({
        name: "Half Bloody",
});

module.exports = embed;

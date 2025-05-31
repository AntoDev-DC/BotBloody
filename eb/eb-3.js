const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setColor(16180118)
    .setTitle("Funcion temporal")
    .setDescription("Atencion Bloddys, el\nserver crea una categoria para\nsugerencias. Ya esta abierta.\nPero solo los del rol\n<@&1377008930751905954>\npueden hacer cosas.")
    .setAuthor({
        name: "Bot Bloody",
})
    .setFooter({
        text: "Atentamente, el equipo de Bloody",
    });

module.exports = embed;
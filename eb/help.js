import { EmbedBuilder } from 'discord.js';

const embed = new EmbedBuilder()
    .setColor(3066993)
    .setTitle("Help")
    .setDescription("Ayuda.\nComandos:\n/eb-m1, envia un Embed Construido\n/embed, envia un Embed que lo haces Tu")
    .setAuthor({
        name: "Bot Bloody.",
});

export default embed;

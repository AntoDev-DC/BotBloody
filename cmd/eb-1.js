const { SlashCommandBuilder } = require('discord.js');
const embed = require('../eb/eb-1.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eb-1')
    .setDescription('Envía un embed desde un archivo separado'),

  async execute(interaction) {
    // Mensaje solo visible para quien usa el comando
    await interaction.reply({
      content: '✅ Embed enviado correctamente.',
      ephemeral: true,
    });

    // Mensaje público con el embed
    await interaction.channel.send({ embeds: [embed] });
  },
};

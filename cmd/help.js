const { SlashCommandBuilder } = require('discord.js');
const embed = require('../eb/help.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Comando de Ayuda'),

  async execute(interaction) {
    // Mensaje solo visible para quien usa el comando
    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};

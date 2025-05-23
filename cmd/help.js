// filepath: c:\Users\priva\git\Bot-Anto\cmd\help.js
const { SlashCommandBuilder } = require('discord.js');
const embed = require('../eb/help.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Ayuda del Bot'),

  async execute(interaction) {
    await interaction.reply({
      embeds: [embed],
      ephemeral: true // Solo tú lo ves
    });
  }
};
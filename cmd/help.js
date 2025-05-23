import { SlashCommandBuilder } from 'discord.js';
import embed from '../eb/help.js';

export default {
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

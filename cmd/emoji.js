const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('emoji')
    .setDescription('Muestra un emoji personalizado por nombre e ID')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Nombre del emoji')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('id')
        .setDescription('ID del emoji')
        .setRequired(true)
    ),

  async execute(interaction) {
    const name = interaction.options.getString('name');
    const id = interaction.options.getString('id');

    const emoji = `<:${name}:${id}>`;

    await interaction.reply({
      content: `Enviado`,
      ephemeral: true
    });
    await interaction.channel.send({ content: `${emoji}` });
  }
};

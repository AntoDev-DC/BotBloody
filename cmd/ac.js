// cmd/ac.js (rename from .mjs back to .js if it was .mjs)

// Change this from import to require
const { SlashCommandBuilder } = require('discord.js');

// Change this from export default to module.exports
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ac')
    .setDescription('Establece la actividad del bot')
    .addIntegerOption(option =>
      option.setName('type')
        .setDescription('Tipo de actividad (0=JUGANDO, 1=TRANSMITIENDO, 2=ESCUCHANDO, 3=VIENDO, 4=CUSTOM, 5=COMPITIENDO)')
        .setRequired(true)
        .addChoices(
          { name: 'Jugando', value: 0 },
          { name: 'Transmitiendo', value: 1 },
          { name: 'Escuchando', value: 2 },
          { name: 'Viendo', value: 3 },
          { name: 'Personalizado', value: 4 },
          { name: 'Compitiendo', value: 5 }
        )
    )
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Texto de la actividad (ej. "Jugando a un juego")')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('status')
        .setDescription('Estado del bot')
        .setRequired(true)
        .addChoices(
          { name: 'online', value: 'online' },
          { name: 'idle', value: 'idle' },
          { name: 'dnd', value: 'dnd' },
          { name: 'invisible', value: 'invisible' }
        )
    ),

  async execute(interaction) {
    const name = interaction.options.getString('name');
    const status = interaction.options.getString('status');

    const activity = { type: 0, name: name };

    await interaction.client.user.setPresence({
      activities: [activity],
      status
    });

    await interaction.reply({
      content: `✅ Actividad establecida como \`${name}\`, estado: \`${status}\`.`,
      ephemeral: true
    });
  }
};
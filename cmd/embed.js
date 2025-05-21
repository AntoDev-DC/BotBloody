const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Envía un embed usando JSON (se pedirá luego)'),

  async execute(interaction) {
    await interaction.reply({ content: '📥 Por el JSON EDITOR de tu embed. Escribe el JSON a continuación:', ephemeral: true });

    const filter = (m) => m.author.id === interaction.user.id;
    const collector = interaction.channel.createMessageCollector({ filter, time: 60000, max: 1 });

    collector.on('collect', async (m) => {
      try {
        const json = JSON.parse(m.content);

        let embedsData = [];

        if (Array.isArray(json.embeds)) {
          embedsData = json.embeds;
        } else if (Array.isArray(json)) {
          embedsData = json;
        } else {
          embedsData = [json];
        }

        const embeds = embedsData.map((e) => EmbedBuilder.from(e));

        await m.delete();
        await interaction.channel.send({ embeds });

      } catch (err) {
        console.error(err);
        await interaction.channel.send('❌ Error al procesar el JSON. Asegúrate de que esté bien escrito.');
      }
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) {
        interaction.followUp({ content: '⏰ Tiempo agotado. Usa `/embed` nuevamente.', ephemeral: true });
      }
    });
  },
};

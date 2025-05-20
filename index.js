const { Client, GatewayIntentBits, Partials, EmbedBuilder, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel],
});

client.once('ready', () => {
  console.log(`✅ Bot listo como ${client.user.tag}`);

  client.user.setPresence({
    status: 'idle', // 🟡 Aparece como "Ausente"
    activities: [
      {
        name: '📄 Bloody',
        type: 4, // 4 = Custom Status
      },
    ],
  });
});


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'embed') {
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
        console.log("El mensaje entregado, no es correcto. Por favor, indica un mensaje correcto");
      }
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) {
        interaction.followUp({ content: '⏰ Tiempo agotado. Vuelve a usar `/embed` si deseas intentarlo de nuevo.', ephemeral: true });
      }
    });
  }
});

client.login(process.env.TOKEN);

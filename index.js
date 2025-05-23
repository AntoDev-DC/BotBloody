const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Partials, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel],
});

client.commands = new Collection();
const cmdPath = path.join(__dirname, 'cmd');
const commandFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
  const command = require(`./cmd/${file}`);
  client.commands.set(command.data.name, command);
}


client.once('ready', () => {
  console.log(`✅ Bot listo como ${client.user.tag}`);

  client.user.setPresence({
    status: 'idle',
    activities: [{ name: '🩸 Bloody', type: 4}],
  });
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: '❌ Hubo un error al ejecutar este comando.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);

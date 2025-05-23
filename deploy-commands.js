require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');

console.log('Token:', process.env.DISCORD_TOKEN ? 'CARGADO' : 'NO CARGADO');
console.log('ClientID:', process.env.CLIENT_ID || 'NO CARGADO');

const commands = [];
const commandsPath = path.join(__dirname, 'cmd');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    commands.push(command.data.toJSON());
  }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(`Registrando ${commands.length} comandos globalmente...`);
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );
    console.log('¡Comandos registrados globalmente!');
  } catch (error) {
    console.error(error);
  }
})();

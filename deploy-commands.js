const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const commands = [];
const cmdPath = path.join(__dirname, 'cmd');
const commandFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./cmd/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('⏳ Registrando comandos...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('✅ Comandos registrados con éxito');
  } catch (err) {
    console.error(err);
  }
})();

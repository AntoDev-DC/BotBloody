const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('node:child_process');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reload')
    .setDescription('Reinicia el bot (requiere permisos)'),

  async execute(interaction) {
    // Asegúrate de que solo el dueño o roles específicos puedan usarlo
    if (interaction.user.id !== '1314979601319198730') {
      return await interaction.reply({
        content: '❌ No tienes permiso para usar este comando.',
        ephemeral: true,
      });
    }

    await interaction.reply({
      content: '♻️ Reiniciando el bot...',
      ephemeral: true,
    });

    // Ejecuta el archivo restart.sh
    exec('sh init.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`⚠️ Stderr: ${stderr}`);
      }
      console.log(`✅ Stdout: ${stdout}`);
    });
  },
};

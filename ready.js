const { ActivityType } = require("discord.js")

module.exports = async bot => {
  (await bot.guilds.fetch("1076521186739097721").catch(() => 0))?.commands?.set(bot.commands.map(command => command));
  bot.user.setPresence({
    status: 'dnd',
    activities: [{
      name: "/serveur",
      type: ActivityType.Playing,
    }]
  });
  console.log(`${bot.user.tag} est bien en ligne !`);
}
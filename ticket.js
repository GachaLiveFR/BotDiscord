const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
  run: (bot, interaction) => {
    return interaction.reply({
      embeds: [new EmbedBuilder()
        .setTitle("__Nous sommes la pour t'aider__")
        .setDescription("• Ne pas ouvrir de ticket si vous n'avez pas de REEL problème\n• Il est interdit d'insulter ou d'envoyer des liens dans le salon ticket")
        .setColor(0xFFFDFD)],
      components: [new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
        .setCustomId("select_ticket")
        .setPlaceholder("Veuillez choisir l'option de votre ticket.")
        .addOptions([
          {
            label: "Ticket", description: "Permet de crée un ticket normal.", emoji: "<:ouvrir: 1077279140031508610>", value: "select_ticket_normal"
          },
          {
            label: "Report", description: "Permet de créer un ticket de report.", emoji: "<:Report: 1077279423440617493>", value: "select_ticket_report"
          }
        ]))]
    });
  },
  name: 'ticket',
  description: 'Créer le systeme de ticket.',
  permissions: ["ManageGuild"],
}
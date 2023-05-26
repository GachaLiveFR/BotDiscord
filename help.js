const { EmbedBuilder } = require("discord.js");

module.exports = {
  run: (bot, interaction) => {
    return interaction.reply({
      embeds: [new EmbedBuilder()
        .setTitle("__Commande /help__")
        .setDescription("**------------------------------------------------------------**\n\n**`😊`┆/blague** **Permet  qu'un bot vous fasse une blague.**\n**`🍬`┆/serveur** **Permet  d'affiché le serveur qui sera fais pour VOUS.**\n\n**------------------------------------------------------------**\n\n**`🛝`┆/chifoumi** **Permet de faire un chifoumi avec moi même.**\n\n**------------------------------------------------------------****\n\n**`😊`┆/ban** **Permet de bannir une personne.")
        .setColor("#fffdfd")
        .setImage("https://cdn.dribbble.com/users/1388237/screenshots/5920802/untitled-3.gif")]
    });
  },
  name: "help",
  description: 'Je vous aide.',
  permissions: ["SendMessages"]
}
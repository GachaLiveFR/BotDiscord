const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  run: (bot, interaction) => {
    const random = ["pierre", "feuille", "ciseaux"];
    const result = random[Math.floor(Math.random() * random.length)];
    const choix = interaction.options.getString("choix");
    if (choix === "ciseaux" & result === "pierre") {
      interaction.reply(`❌ ${result}, j'ai gagné !`);
    }
    if (choix === "ciseaux" & result === "ciseaux") {
      interaction.reply(`⭕ ${result}, égalité !`);
    }
    if (choix === "pierre" & result === "pierre") {
      interaction.reply(`⭕ ${result}, égalité !`);
    }
    if (choix === "feuille" & result === "feuille") {
      interaction.reply(`⭕ ${result}, Égalité !`);
    }
    if (choix === "pierre" & result === "ciseaux") {
      interaction.reply(`👏 ${result}, Tu a gagné !`);
    }
    if (choix === "ciseaux" & result === "pierre") {
      interaction.reply(`❌ ${result}, J'ai gagné !`);
    }
    if (choix === "pierre" & result === "feuille") {
      interaction.reply(`❌ ${result}, J'ai gagné !`);
    }
    if (choix === "feuille" & result === "pierre") {
      interaction.reply(`👏 ${result}, Tu a gagné !`);
    }
    if (choix === "feuille" & result === "ciseaux") {
      interaction.reply(`❌ ${result}, J'ai gagné !`);
    }
    if (choix === "ciseaux" & result === "feuille") {
      interaction.reply(`👏 ${result}, Tu a gagné !`);
    }
    if (choix === "feuille" & result === "ciseaux") {
      interaction.reply(`❌ ${result}, J'ai gagné !`);
    }
  },
  name: 'chifoumi',
  description: 'Jeux pierre, feuille, ciseaux',
  permissions: ["SendMessages"],
  options: [
    {
      name: "choix",
      description: "pierre, feuille, ciseaux",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: "Pierre",
          value: "pierre"
        },
        {
          name: "Feuille",
          value: "feuille"
        },
        {
          name: "Ciseaux",
          value: "ciseaux"
        }
      ]
    }
  ]
}
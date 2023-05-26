const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    run: async (bot, interaction) => {
        switch (interaction.options.getString("type-de-serveur")) {
            case "premium": {
                await interaction.member.send({ content: `test premium` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations de serveurs !", ephemeral: true });
            }
            case "communautaire": {
                await interaction.member.send({ content: `test communautaire ` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations des serveurs !", ephemeral: true });
            }
            case "jeux_vidéo": {
                await interaction.member.send({ content: `test jeux vidéo ` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations des serveurs !", ephemeral: true });
            }
            case "pub": {
                await interaction.member.send({ content: `test pub ` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations des serveurs !", ephemeral: true });
            }
            case "autre": {
                await interaction.member.send({ content: `test autre ` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations des serveurs !", ephemeral: true });
            }
			case "NoName": {
                await interaction.member.send({ content: `test NoName ` }).catch(() => 0);
                return interaction.reply({ content: "Regarde tes dm pour avoir les invitations des serveurs !", ephemeral: true });
            
        }
    },
    name: 'serveur',
    description: 'Permet de voir nos serveur partenaire',
    permissions: ["SendMessages"],
    options: [
        {
            name: "type-de-serveur",
            description: "test",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: "Premium.",
                    value: "premium"
                }, {
                    name: "Communautaire.",
                    value: "communautaire"
                }, {
                    name: "Pub.",
                    value: "pub"
                }, {
                    name: "Jeux vidéo.",
                    value: "jeux_vidéo"
                }, {
                    name: "Autre.",
                    value: "autre"}
					, {
                    name: "NoName.",
                    value: "NoName"
                },
                }
            ]
        }
    ]
}
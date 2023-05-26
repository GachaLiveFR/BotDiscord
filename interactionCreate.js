const { EmbedBuilder, ChannelType, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = async (bot, interaction) => {

  if (interaction.isChatInputCommand()) {
    const command = bot.commands.get(interaction.commandName);
    if (!command) return;
    if (!command.permissions.some(permission => interaction.member.permissions.has(permission))) return interaction.reply({ embeds: [new EmbedBuilder().setColor(0xFF0000).setDescription("Vous n'avez pas la permission de faire ceci !")], ephemeral: true });
    command.run(bot, interaction);
  }

  async function Ticket(type) {
    const ticketAlreadyCreate = await new Promise(resolve => {
      bot.db.all(`SELECT * FROM tickets WHERE MemberID = ${interaction.user.id} AND Type = "${type}"`, (err, data) => {
        if (err) return console.log(err);
        resolve(data);
      })
    })
    if (ticketAlreadyCreate.length > 0) return interaction.reply({ content: `Vous avez déjà un ticket ${type} d'ouvert !`, ephemeral: true });

    let channel = await interaction.guild.channels.create({
      name: `ticket-${interaction.user.username}`,
      type: ChannelType.GuildText,
      parent: "1076522089307185244",
      topic: `Identifiant : ${interaction.user.id} | Type : ${type}`

    });

    await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
      ViewChannel: false
    });

    await channel.permissionOverwrites.create(interaction.user, {
      ViewChannel: true,
      EmbedLinks: true,
      SendMessages: true,
      ReadMessageHistory: true,
      AttachFiles: true
    });

    await channel.permissionOverwrites.create("1076909002572714005", {
      ViewChannel: true,
      EmbedLinks: true,
      SendMessages: true,
      ReadMessageHistory: true,
      AttachFiles: true
    });
    await bot.db.run("INSERT INTO tickets (ChannelID, MemberID, Type) VALUES (?, ?, ?)", channel.id, interaction.user.id, type);
    await channel.send({
      embeds: [new EmbedBuilder()
        .setTitle(`:envelope_with_arrow: VOUS AVEZ OUVERT UN TICKET ${type}`)
        .setDescription("**Vous avez ouvert un ticket**\nRe crée un ticket pour contacter notre support **rapidement**.\n\n• En fermant votre ticket vous ne pourez plus parler au staff\n\n**Clic ci-dessous pour fermé un ticket un ticket**")
        .setColor(0x00CCFF)],
      components: [new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId("close")
        .setLabel("Fermé votre ticket")
        .setStyle("Danger")
        .setEmoji("🔒"))]
    });

    await interaction.reply({ content: `Votre ticket est crée: ${channel}`, ephemeral: true });
  }

  if (interaction.isStringSelectMenu()) {
    switch (interaction.values[0]) {
      case "select_ticket_normal": {
        Ticket("NORMAL");
        break;
      }

      case "select_ticket_report": {
        Ticket("REPORT");
        break;
      }
    }
  }
  if (interaction.isButton()) {
    if (interaction.customId === "close") {
      bot.db.all(`SELECT * FROM tickets WHERE ChannelID = ${interaction.channel.id}`, async (err, data) => {
        if (err) return console.log(err);
        (await interaction.guild.members.fetch(data[0]?.MemberID).catch(() => 0))?.send({ content: "**Le ticket a bien été fermée**" }).catch(() => 0);
        await bot.db.get(`DELETE FROM tickets WHERE ChannelID = ${interaction.channel.id}`);
        return interaction.channel.delete().catch(() => 0);
      })
    }
  }
}
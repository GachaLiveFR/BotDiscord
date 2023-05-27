const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('message', message => {
  if (message.content === '!ban') {
    const users = message.mentions.users.array();
    if (users.length > 0) {
      const members = message.guild.members.cache.filter(member => users.includes(member.user));
      if (members.size > 0) {
        const reasons = users.map(user => Banned by ${message.author.tag} for violating server rules);
        message.guild.members.ban(members, { reason: reasons }).then(() => {
          message.reply(Successfully banned ${members.size} members);
        }).catch(err => {
          message.reply('I was unable to ban the members');
          console.error(err);
        });
      } else {
        message.reply('None of the mentioned users are in this guild!');
      }
    } else {
      message.reply('You didn't mention any users to ban!');
    }
  }
});

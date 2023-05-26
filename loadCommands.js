const { readdir } = require("fs");

module.exports.loadCommands = bot => {
  readdir("./Commandes", (err, files) => {
    if (err) return console.log(err);
    files.filter(file => file.endsWith(".js")).forEach(files => {
      const command = require(`../Commandes/${files}`);
      try {
        if (!command.name || !command.description) throw new TypeError(`Une ou plusieurs propriétées sont manquantes dans un ou des fichiers commandes !`);
        bot.commands.set(command.name, command);
        console.log(`Commande ${files} chargée avec succès !`);
      } catch (err) {
        return console.log(err);
      }
    })
  })
}
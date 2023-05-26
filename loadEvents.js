const { readdir } = require("fs");

module.exports.loadEvents = bot => {
  readdir("./Events", (err, files) => {
    if (err) return console.log(err);
    files.filter(file => file.endsWith(".js")).forEach(files => {
      const event = require(`../Events/${files}`);
      try {
        bot.on(files.split(".")[0], event.bind(null, bot));
        console.log(`Evènement ${files} chargé avec succès !`);
      } catch (err) {
        return console.log(err);
      }
    })
  })
}
const { Client, Collection } = require("discord.js");
const bot = new Client({ intents: [3276799] });
const dotenv = require("dotenv"); dotenv.config();
const { Database } = require("sqlite3");
const { loadCommands } = require("./Loaders/loadCommands");
const { loadEvents } = require("./Loaders/loadEvents");

bot.commands = new Collection();
bot.db = new Database("db.sqlite", (err) => {
    if (err) return console.log(err);
    console.log("Base de donnée connecté avec succès !")
})

bot.db.exec("CREATE TABLE IF NOT EXISTS tickets (ChannelID VARCHAR(21), MemberID VARCHAR(20), Type VARCHAR(20))")
bot.login(process.env.TOKEN);
loadCommands(bot);
loadEvents(bot);

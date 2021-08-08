require("dotenv").config();
const { Client } = require("discord.js");
const keepAlive = require('./server');

const client = new Client();

require("./core/loadWidgetListeners")(client);

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);

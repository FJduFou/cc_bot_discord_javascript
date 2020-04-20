//module discord.js demandé (il appelle l'API de discord)
const Discord = require("discord.js");
//permet de récup un objet de l'utilisateur client (=bot)
const bot = new Discord.Client();

bot.on("ready", fuction () {
    //le bot est près
    console.log("Carapuce est dans les places !");
});

bot.login("MON_TOCKEN");


const Discord = require('discord.js');
const client = new Discord.Client();

// START
client.on('ready', () => {
    client.user.setActivity('Minecraft - Rinaorc', [0]);
    console.log('Le bot a été charger avec succès !');
});


// Nouveaux utilisateur
client.on("guildMemberAdd", members => {
    members.guild.channels.find("name", "bienvenue").send("Bienvenue à **" + members.displayName +"** sur le serveur de la NoobIse !");
    members.createDM().then(channel => {
      return channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur de la NoobIse !\n \n _JeSuisUnNoobV1_")
   });
});


// $INFO
client.on('message', msg => {
  if (msg.content === '$info') {
    msg.channel.send(({embed: {
      color : 12745742,
      description: "```Makerdown\nNoobBot \nVersion : Beta 1.9\nCréateur : legameur6810#4488 \nSortie le : 20/11/2018```"
    }}))
  }
});


// HELP
client.on('message', msg => {
  if(msg.content === "$help") {
    msg.reply(({embed: {
      color: 12745742,
      description: "                  NoobBot\nVoici les commandes disponible :\n`$help` Donne toutes les commandes disponible\n`$aide` Donne toutes les commandes disponible\n`$info`  Donne des infos sur le bot"
    }}))
  }
});


// Login
client.login(process.env.TOKEN);

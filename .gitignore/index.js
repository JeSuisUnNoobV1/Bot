const Discord = require('discord.js');
const client = new Discord.Client();
const activities_list = [
  "Minecraft - Rinaorc", 
  "La beta 1.9.3 est sortie",
  "$aide est a votre disposition !"
  ]; 
const username_list = [
  "",
  "N",
  "No",
  "Noo",
  "Noob",
  "NoobB",
  "NoobBo",
  "NoobBot",
  "NoobB",
  "Noob",
  "Noo",
  "No"
]


// START
client.on('ready', () => {
    console.log('Le bot a été charger avec succès !');
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 2500);
  setInterval(() => {
    const index2 = Math.floor(Math.random() * (username_list.length - 1) + 1); 
    client.user.setUsername("NEWNAMEHERE")(username_list[index2]);
}, 150);
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
      description: "Version : Beta 1.9.3\nCréateur : legameur6810#4488 \nSortie le : 20/11/2018"
    }}))
  }
});


// HELP
client.on('message', msg => {
  if(msg.content === "$help") {
    msg.reply(({embed: {
      color: 12745742,
      description: "Voici les commandes disponible :\n`$help` Donne toutes les commandes disponible\n`$aide` Donne toutes les commandes disponible\n`$info`  Donne des infos sur le bot"
    }}))
  }
});
client.on('message', msg => {
  if(msg.content === "$aide") {
    msg.reply(({embed: {
      color: 12745742,
      description: "Voici les commandes disponible :\n`$help` Donne toutes les commandes disponible\n`$aide` Donne toutes les commandes disponible\n`$info`  Donne des infos sur le bot"
    }}))
  }
});


// Login
client.login(process.env.TOKEN);

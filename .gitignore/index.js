const Discord = require('discord.js');
const client = new Discord.Client();

// START
client.on('ready', () => {
    console.log('Le bot a été charger avec succès !');
});



// Generateur de nombre entre 1 et 3
function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Fait la demande toute les miutes
var interval = setInterval (function () {
  var entier = entierAleatoire(1, 3);
}, 1 * 1000); 


// Si c'est egale a 1
if(entier === 1) {
  client.user.setActivity('Minecraft - Rinaorc', [0]); 
}

// Si c'est egale a 2
if(entier === 2) {
  client.user.setActivity('La beta 1.9.3 est sortie', [0]);
}

// Si c'est egale a 3
if(entier === 3) {
  client.user.setActivity('$aide est a votre disposition !', [0]); 
}


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

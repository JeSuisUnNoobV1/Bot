const Discord = require('discord.js');
const client = new Discord.Client();
const activities_list = [
  "",
  "Des questions ?", 
  "Un projet ?",
  "Un site internet ?",
  "De l'aide automatique",
  "votre disposition"
  ];

var questionName = false;

// START
client.on('ready', () => {
    console.log('Roboto ready');
	client.user.setActivity("CRASH");
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 2500);
});

// Nouveaux utilisateur
client.on("guildMemberAdd", members => {
    members.guild.channels.find("id", "539842703467479051").send("Bienvenue à **" + members.displayName +"**, tu es maintenant connecté au serveur discord !\n Pour avoir accès accès à tout le serveur discord, merci de suivre les instructions disponible à l'url suivant : https://modulobot.xyz/verify/539738715707408385");
    members.createDM().then(channel => {
      return channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur de Théotime ! \n\n _Cordialement, le staff_");
   });
});

client.on('message', msg => {
	m = msg.content.toLowerCase();

function isInsult(msg){
  var arr = [
    "batard"
  ];

  for (var i = 0; i<arr.length; i++) {
    if (msg.indexOf(arr[i]) != undefined) {
      return true;
    }
  }
}

if(isInsult(m)) {
msg.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
  msg.channel.send({embed: {
    color: 16057630,
    description: "Hop Hop Hop, évitez les insultes s'il vous plait."
  }});
}
/*
if (m == "roboto") {
  msg.channel.send("Oui ? c'est moi. \n Je peux vous aidez si vous en avez besoin. \n Mais avant de commencer, qui êtes-vous ?");
  questionName = true;
}

if (m.indexOf('je suis') === 0 && questionName == true) {
  msg.channel.send("D'accord "+m.replace('je suis ', '')+", maintenant, que voulez-vous ?");
  questionName = false;
}*/
});


// Login
client.login(process.env.TOKEN);

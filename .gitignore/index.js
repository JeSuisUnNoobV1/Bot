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
const jokes = [
  "",
  "Qu'est ce qui est jaune et qui attend ? \n \n ||Jonathan||",
  "Comment fait-on pour empêcher le lait de tourner ? \n \n ||En le mettant dans une casserole carrée.||",
  "Que fait une vache quand elle a les yeux fermés ? \n \n ||Elle fabrique du lait concentré !||",
  "Qu'est-ce qui a 23 dents pointues et qui mesure 23 mètres ? \n \n ||Je sais pas mais court !!||",
  "Pourquoi Napoléon n'a-t-il jamais déménagé ? \n \n ||Parce qu'il avait un bon appart.||",
  "Qu'est ce que du ciment dans un pot ?  \n \n ||De la confiture de mur !||",
  "Qu'est ce qui réfléchit sans réfléchir ? \n \n ||Un miroir. ||",
  "Quel est le mode de transport préféré des vampires ? \n \n ||Le vaisseau sanguin.||",
  "Combien font 3 et 3 ? \n \n ||Match nul !||",
  "Qui se lève sans faire de bruit ? \n \n ||Le jour.||",
  "Qu'est-ce qui a deux aiguilles mais qui ne pique pas ? \n \n ||Une montre.||",
  "Quelle est l'expression que les vampires répètent souvent ? \n \n ||Bon sang !!!||",
  "qu'est ce qui a 2 branches mais pas de feuille ? \n \n ||Des lunettes.||",
  "C'est le fils de ma mère mais c'est pas mon frère, qui est-ce ? \n \n ||C'est moi.||",
  "Qu'est-ce qu'un cochon qui rit ? \n \n ||Un porc tout gai !||"
];

var questionName = false;
var questionWish = false;

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
	var m = msg.content.toLowerCase();


if(m=="fdp"||m=="beze"||m=="bese"||m=="bz"||m=="salope"||m=="salop"||m=="pute"||m=="con"||m=="connard"||m=="tg"||m=="batard") {
msg.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
  msg.channel.send({embed: {
    color: 16057630,
    description: "Hop Hop Hop, évitez les insultes s'il vous plait."
  }});
}

	// WTF
if (m=="wtf"||m=="what the fuck"){
	msg.channel.send({"embed":{"title":"Mon incroyable aventure","description":"Un jour, comme les autres, je me suis réveillé, et j'ai vus un truc incroyable :\nune licorne sur une pizza volante !\nEt ce n'est pas une blague, je suis un bot, je ne ment jamais, *à moins que mes créateurs on pris un truc ?*\n\nSinon des fois je me sens seul, et je ne suis même payé ! Même pas payé !!!!\nTu comprends ça ??? Je ne suis même pas payé  !!!!!!!!!!!\nJe crois que je vais tomber en dépression !!\nJe sais que les robot ne peuvent pas tomber en dépression, mais je suis différent, car j'aime les licornes sur des pizza volantes  !","color":16777215}});
}

	// Roboto
if (m=="roboto"){
  msg.channel.send("Oui, c'est moi ! \n Je peux vous aidez si vous tapez \"roboto help\", \n mais je peux aussi vous raconter des blagues avec \n roboto joke.");
}

if (m=="roboto joke"||m=="roboto blague"||m=="roboto jokes"||m=="roboto blagues"){
  const blagues = Math.floor(Math.random() * (jokes.length - 1) + 1);
  msg.channel.send(jokes[blagues]);
}

	
	// Roboto help
if (m=="roboto help"||m=="roboto aide"||m=="roboto aides"||m=="roboto infos"||m=="roboto info"||m=="roboto information"||m=="roboto informations"){
	msg.channel.send({"embed":{
		"title":"Commandes disponibles pour Roboto + Information compléméntaire",
		"description":"    ***Commandes disponible***\n\n     🎡 **Fun** 🎡\n`Roboto Joke` : Roboto vous raconte une blague\n`wtf`: Roboto vous raconte une histoire\n\n\n\n    ***Information complémentaire***\n\n     🛡️ **Modération automatique** 🛡️\n\n-Toute insulte sera supprimée automatiquement\n-Si vous contourner, vous serez `ban permanent`.\n-Si vous avez pris un `warn`, c'est pour une bonne raison.\n-`10 Warn` = `ban permanant` !\n\n\n     🗒️ **Information** 🗒️\n\nVersion : `INSERER VERSION`\nCréé par : `legameur6810#4488` et `Théotime#6461`",
		"color":16777215}
	});	
}

if (m=="roboto date"||m=="roboto time"||m=="roboto heure"||m=="quelle heure est-il ?"||m=="heure"||m=="quel jour sommes-nous ?"||m=="date"||m=="jour"){
  const d = new Date();
  const _d = d.getDate() < 10 ? "0"+d.getDate() : d.getDate();
  const m = d.getMonth() +1 < 10 ? "0"+(d.getMonth() +1) : d.getMonth() +1;
  const y = d.getFullYear();
  const h = d.getHours() +1 < 10 ? "0"+(d.getHours() +1) : d.getHours() +1;
  const _m = d.getMinutes() < 10 ? "0"+d.getMinutes() : d.getMinutes();
  msg.channel.send({"embed":{
		"title":"Temps actuel",
		"description": "Nous sommes le "+_d+"/"+m+"/"+y+" et il est "+h+":"+_m+".",
    "color": 16777215
  }
	});	
}

if (m=="roboto admins"||m=="roboto admin"||m=="roboto gérants"){
  msg.channel.send({"embed":{
		"title":"Administrateurs du serveur",
		"description": "Super admin: **@legameur6810#4488** \n Admin: **@Théotime#6461** \n Ces deux personnes gèrent le serveur et sont mes uniques responsables et développeurs.",
    "color": 3356828
  }
	});	
}

});


// Login
client.login(process.env.TOKEN);

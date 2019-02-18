const 	Discord = require('discord.js'),
		fs = require('fs');
		goCodes = require('./codes.json'),
		client = new Discord.Client(),

activities_list = [
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

const salutations = [
	"",
	"Salut USERNAME, ça va ou quoi ?",
	"Wsh USERNAME bien ou bien ?",
	"Hey USERNAME !",
	"Bienvenue USERNAME !",
	"Hello, ça va ou quoi ?"
];

// START
client.on('ready', () => {
    console.log('Roboto ready');
    client.channels.find("id", "539847850666885131").send("Hey, je suis prêt à faire feu !");
    client.user.setAvatar('https://theotime.me/logo.png');
	client.user.setActivity("Reload ...");
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 2500);
});

// Nouveaux utilisateur
client.on("guildMemberAdd", members => {
    members.createDM().then(channel => {
      return channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur de Théotime !\nOn y parle de développement, partageons nos habitudes de développeurs, sans poublier de partager du code source pour qu'il profite à tous. Ainsi chacun pourra parler de ses projets pour les faire évoluer. Si vous souhaitez inviter quelqu'un, utilisez ce lien: https://discord.gg/PuU3BSJ \n\n Amicalement, Roboto.");
   });
});

client.on('message', msg => {
	var m = msg.content.toLowerCase();

if(m.includes("fdp")||m.includes("beze")||m.includes("bese")||m.includes("bz")||m.includes("salope")||m.includes("salop")||m.includes("pute")||m === "con"||m.includes("connard")||m.includes("tg")||m.includes("batard")||m.includes("putain")||m.includes("tes morts")||m.includes("merde")||m.includes("merd")||m.includes("couilles")||m.includes("abruti")||m.includes("nique") && (msg.author.id != "512326722352578560" && msg.channel.id != "547042040068833300" && msg.channel.id != "547044092878520330" && msg.channel.id != "547044109261471744")) {
if (!msg.author.bot) {
  if (msg.author.id != "483335511159865347" && msg.author.id != "467630539898224661") {
	msg.delete().then(msg => {
		client.channels.find("id", "545230202914078720").send({embed: {
			title: "Insulte",
			color: 16777215,
			description: msg.author+"a insulté dans le channel "+msg.channel+" en disant ```"+msg.content+"```"
		}});
	});
    msg.channel.send({embed: {
      color: 16057630,
      description: "Hop Hop Hop, évitez les insultes s'il vous plait."
    }});
  } else {
	client.channels.find("id", "539847850666885131").send("Bon, tu es admin donc tu peux dire ce que tu veux, même des gros mots !");
  }
}
}

	// WTF
if (m=="wtf"||m=="what the fuck"){
	msg.channel.send({"embed":{"title":"Mon incroyable aventure","description":"Un jour, comme les autres, je me suis réveillé, et j'ai vus un truc incroyable :\nune licorne sur une pizza volante !\nEt ce n'est pas une blague, je suis un bot, je ne ment jamais, *à moins que mes créateurs on pris un truc ?*\n\nSinon des fois je me sens seul, et je ne suis même payé ! Même pas payé !!!!\nTu comprends ça ??? Je ne suis même pas payé  !!!!!!!!!!!\nJe crois que je vais tomber en dépression !!\nJe sais que les robot ne peuvent pas tomber en dépression, mais je suis différent, car j'aime les licornes sur des pizza volantes  !","color":16777215}});
}

	// Roboto
if (m=="roboto"){
  msg.channel.send("Oui, c'est moi ! \n Je peux vous aidez si vous tapez \"roboto help\", \n mais je peux aussi vous raconter des blagues avec \n roboto joke.");
}

if (m=="roboto joke"||m=="roboto blague"||m=="roboto jokes"||m=="roboto blagues"||m=="raconte-moi une blague"||m=="blague"||m=="joke"){
  const blagues = Math.floor(Math.random() * (jokes.length - 1) + 1);
  msg.channel.send(jokes[blagues]);
}

	
	// Roboto help
if (m=="roboto help"||m=="roboto aide"||m=="roboto aides"||m=="roboto infos"||m=="roboto info"||m=="roboto information"||m=="roboto informations"){
	msg.channel.send({"embed":{
		"title":"Aide du serveur",
		"description":"    ***Commandes disponible***\n\n     🎡 **Fun** 🎡\n`Roboto Joke` : Roboto vous raconte une blague\n`wtf`: Roboto vous raconte une histoire\n`Roboto date` : Roboto vous donne la date\n`Roboto admins` : Affiche les admins du serveur\n\n\n\n    ***Information complémentaire***\n\n     🛡️ **Modération automatique** 🛡️\n\n-Toute insulte sera supprimée automatiquement\n-Si vous contourner, vous serez `ban permanent`.\n-Si vous avez pris un `warn`, c'est pour une bonne raison.\n-`10 Warn` = `ban permanant` !\n\n\n     🗒️ **Information** 🗒️\n\nVersion : `INSERER VERSION`\nCréé par : `legameur6810#4488` et `Théotime#6461`",
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

if (m=="roboto admins"||m=="roboto admin"||m=="roboto gérants"||m=="admins"||m=="admin"){
  msg.channel.send({"embed":{
		"title":"Administrateurs du serveur",
		"description": "Super admin: <@467630539898224661> \n Admin: <@483335511159865347> \n Ces deux personnes gèrent le serveur et sont mes uniques responsables et développeurs.",
    "color": 3356828
  }
	});	
}

if (m=="roboto channel"){
	msg.channel.send("Vous êtes sur le salon `"+msg.channel.name+"`");	
}

if (m=="roboto invite"||m=="invite"||m.startsWith("invitation")){
  	msg.channel.send("Oki, voilà une invitation, juste pour vous ^^\n https://discord.gg/PuU3BSJ");	
}

if (m.startsWith("roboto say")||m.startsWith("say")){
	msg.delete();
	if (msg.author.id == 483335511159865347 || msg.author.id == 467630539898224661) {
		msg.channel.send(msg.content.replace(/roboto say |say |Say |sAy |saY |Roboto say |Roboto Say |roboto Say/, ''));
	} else {
		msg.channel.send({embed: {
			color: 16057630,
			description: "Non, tu n'est pas admin et n'a donc, par conséquent pas les permissions requises pour effectuer cette commande."
		}});
	}
}

if (m.startsWith("code")){
	msg.delete();
	if (msg.author.id == 483335511159865347 || msg.author.id == 467630539898224661) {
		msg.channel.send("```"+msg.content.replace("code ", '')+"```");
	} else {
		msg.channel.send({embed: {
			color: 16057630,
			description: "Non, tu n'est pas admin et n'a donc, par conséquent pas les permissions requises pour effectuer cette commande."
		}});
	}
}

if (m.startsWith("roboto me")||m=="me"){
  const dispo = msg.author.presence.status == "online" ? "est disponible" : msg.author.presence.status == "idle" ? "est inactif" : msg.author.presence.status == "dnd" ? "ne veut pas être dérangé" : "est invisible";
		msg.channel.send({embed: {
			color: 16777215,
			description: "Tu es <@"+msg.author.id+"> et tu "+dispo+". Pour les developpeurs, ton id est ```"+msg.author.id+"```"
    	}});
}

if (m.startsWith("roboto dog")||m.startsWith("roboto chien")||m=="dessine-moi un chien"){
    msg.channel.send("https://theotime.me/discord/dog.jpeg");
}

if (m.startsWith("flip")||m.startsWith("roboto flip")){
	if (msg.author.id == 483335511159865347 || msg.author.id == 467630539898224661) {
		if (m == "roboto flip" || m == "flip") {
			send(Math.floor(Math.random() * 2));
		} else {
			send(isNaN(parseInt(m.replace(/roboto flip |flip /, ""))) ? m.replace(/roboto flip |flip /, "") == "pile" ? 0 : 1 : parseInt(m.replace(/roboto flip |flip /, "")));
		}
	} else {
		send(Math.floor(Math.random() * 2));
	}

function send(index){
	msg.channel.send({embed: {
		title: "Pile ou face ?",
		color: 16777215,
		description: "Ah ah ! c'est "+(index == 0 ? "pile" : "face")+" !\nCe n'est pas moi qui le dit, c'est le hasard."
	}});
}

}

if ((m.startsWith('bonjour') || m.startsWith('salut') || m.startsWith('hey') || m.startsWith('hello') || m.startsWith('wesh') || m.startsWith('wsh') || m.startsWith('bjr') || m.startsWith('slt') || m.startsWith('coucou') || m.startsWith('cc')) && (msg.author.id != "512326722352578560" && msg.channel.id != "547042040068833300" && msg.channel.id != "547044092878520330" && msg.channel.id != "547044109261471744")) {
	const destinataire = msg.content.replace(/bonjour|salut|hey|hello|wesh|wsh|bjr|slt|coucou|cc| /, ""),
		  str = salutations[Math.floor(Math.random() * (salutations.length - 1) + 1)];
	 var  username = msg.author;

	if (destinataire != "") {
		username = destinataire;
	}


	setTimeout(function(){
		msg.channel.send(str.replace("USERNAME", username));
	}, 1800);
}

if (m.startsWith("roboto insult")){
	msg.channel.send("Pffff... T'as cru quoi ? Je vais pas me mute moi-même. Par contre toi tu vas y avoir droit :smile:");
}

if (m.startsWith("my guilds")||m.startsWith("mes grades")||m.startsWith("roboto guilds")||m.startsWith("roboto grades")||m.startsWith("guilds")||m.startsWith("grades")){
	var toSend = "";
	for (var i = 0; i<client.guilds.roles.array().length; i++) {
		toSend += client.guilds.array()[i];
		msg.member.addRole(['muted']);
	}

	msg.channel.send({embed: {
		title: "Grades",
		color: 16777215,
		description: "Voilà les grades de "+msg.author+": "+toSend
	}});
}

if (m.startsWith('upgrade') && (msg.channel.type === "dm" || msg.channel.id == 544811429467914241)) {
	msg.delete();
	var qr = m.replace(/upgrade |upgrade/, "");

	if (!isNaN(parseInt(qr))){
		qr = parseInt(qr);
	}

	const questions = {
		q1: [
			"",
			"Comment colorer un élément ?\n **1**: Attribut bg-color\n **2**: En CSS background-color"
		],

		q2: [

		],

		q3: [

		],

		q4: [

		],

		q5: [

		],

		q6: [

		]

};

var q;


	switch (qr) {
		case 1: qr = "Développeur"; q = questions.q1; break;
		case 2: qr = "Ultra dev"; q = questions.q2; break;
		case 3: qr = "Minecraft"; q = questions.q3; break;
		case 4: qr = "DJ"; q = questions.q4; break;
		case 5: qr = "Modérateur"; q = questions.q5; break;
		case 6: qr = "Admin"; q = questions.q6; break;
	}


	msg.author.createDM().then(channel => {
		return channel.send("OK, je vais t'envoyer un **questionnaire** pour que tu obtienne le grade **"+qr+"**, "+msg.author.username+". Tu devras y répondre correctement. Je te laisse le droit de faire **3 erreurs**\nQuand tu est prêt, entre \"upgrade go\"");
	});
}

if (m.startsWith('go')||m.startsWith('!g')||m.startsWith('@')) {
	let nb = parseInt(m.replace(/[^0-9]/g, ""));
		if (!isNaN(nb) && goCodes[nb] != undefined) {
			let link = goCodes[nb].lk;
			msg.channel.send({embed: {
				title: "GO code",
				color: 16777215,
				description: "Voici le lien: "+link
			}});
		}
}

if (m.startsWith('set go')) {
	if (msg.author.id == "483335511159865347" || msg.author.id == "467630539898224661") {
		let lk = m.replace(/set go /, ""),
			cd = goCodes.length < 1000 ? goCodes.length < 100 ? goCodes.length < 10 ? "000"+goCodes.length : "00"+goCodes.length : "0"+goCodes.length : goCodes.length;

			goCodes.push({lk: lk});
				
			var json = JSON.stringify(goCodes); 
			fs.writeFileSync('./codes.json', json); 

			msg.channel.send({embed: {
				title: "GO code ajouté",
				color: 16777215,
				description: "Voici le code de votre lien: ```go "+cd+"```"
			}});

	} else {
		msg.channel.send({embed: {
			color: 16057630,
			description: "Non, tu n'est pas admin et n'a donc, par conséquent pas les permissions requises pour effectuer cette commande."
		}});
	}
}

if (msg.channel.id == "547042040068833300") {
	msg.delete().then(
	client.channels.find("id", "547043406971535370").send({embed: {
		title: "message de "+msg.author.tag,
		color: 16777215,
		description: "Contenu du message:\n"+msg.content
	}}));
}

if (msg.channel.id == "547044092878520330") {
	msg.delete().then(
		client.users.find("id", "483335511159865347").createDM().then(channel => {
			return channel.send({embed: {
				title: "message de "+msg.author.tag,
				color: 16777215,
				description: "Contenu du message:\n"+msg.content
			}});
		})
	);
}

});


// Login
client.login(process.env.TOKEN);

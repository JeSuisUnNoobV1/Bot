// BOT


/* 01 / Constantes et variable
================================== */

const	Discord = require('discord.js'),
		goCodes = require('./codes.json'),
		users = require('./users.json'),
		client = new Discord.Client(),

activities_list = [
  "",
  "les channels", 
  "ses messages",
  "les insultes",
  "tout les bans",
  "si il faut te mute"
  ],
jokes = [
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
],

decisions = [
	"",
	"Oui",
	"Non",
	"Peut-être",
	"Pas sûr...",
	"évidemment",
	"Pas vraiment",
	"Sûr !"
];

const salutations = [
	"",
	"Salut USERNAME, ça va ou quoi ?",
	"Wsh USERNAME bien ou bien ?",
	"Hey USERNAME !",
	"Bienvenue USERNAME !",
	"Hello, ça va ou quoi ?"
];

var globalInterval = false;

/* 02 / init
================ */

client.on('ready', () => {
    client.channels.find(val => val.id === "539847850666885131").send("Hey, je suis prêt à faire feu !");
    client.user.setAvatar('https://theotime.me/discord/roboto.png');
	client.user.setActivity("la console", { type: 'WATCHING' });
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index], { type: 'WATCHING' });
  }, 4500);
});

/* 03 / new user
==================== */
client.on("guildMemberAdd", members => {
    members.createDM().then(channel => {
    	channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur discord \"Théotime.me\" !\nOn y parle de développement, de graphisme, d'ilustration et bien d'autres activités ! Ainsi chacun pourra parler de ses projets pour les faire évoluer. Si vous souhaitez inviter quelqu'un, utilisez ce lien: https://discord.gg/PuU3BSJ \n\n Amicalement, Roboto.");
	});

	let exist = false;

	for (let i = 0; i<users.length; i++) {
		if (users[i].id == members.id){
			users[i].xp = 0;
			users[i].money = 0;
			users[i].sellAlreadyCode = false;
			exist = true;
		}
	}

	if (!exist) {
		users.push({id: members.id, xp: 0, money: 0, sellAlreadyCode: false});
	}
});

client.on('message', msg => {
	var m = msg.content.toLowerCase();

/* 04 / Check functions
=========================== */
	function isAdmin(){
		if (msg.author.id == "483335511159865347" || msg.author.id == "467630539898224661"){
			return true;
		} else {
			return false;
		}
	}
	
	function isAuth(){ // use msg.author
		if (msg.member.roles.find(val => val.name === 'noBot')){
			return false;
		} else {
			return true;
		}
	}

	// Pour éviter que le bot se réponde tout seul
	if (msg.author.bot) return false;
	if (msg.channel.type == "dm") return false;

	if ( msg.member.roles.find(val => val.name === 'Muted')) {
		msg.delete();
		msg.author.createDM().then(channel => {
			return channel.send('Désolé, vous avez été mute car vous n\'avez pas respecté les <#540256081293606915>');
	 	});
		return false;
	}

if (m!="roboto rank"&&m!="rank"&m!="xp"&&m!="levels"&&m!="money") {
	for (let i = 0; i<users.length; i++) {
		if (users[i].id == msg.author.id){
			users[i].xp += 1;
			break;
		}
	}
}

/* 05 / Auto moderation
=========================== */
if(m.includes("fdp")||m.includes("beze")||m.includes("bese")||m.includes("bz")||m.includes("salop")||m.includes("pute")||m === "con"||m.includes("connard")||m.includes("tg")||m.includes("batard")||m.includes("putain")||m.includes("tes morts")||m.includes("merde")||m.includes("merd")||m.includes("couilles")||m.includes("abruti")||m.startsWith("nique ")||m===("nique")) {
	if (!isAdmin()) {
		msg.delete().then(msg => {
			client.channels.find(val => val.id === "545230202914078720").send({embed: {
				title: "Insulte",
				color: 16777215,
				description: msg.author+"a insulté dans le channel "+msg.channel+" en disant ```"+msg.content+"```"
			}});

			msg.channel.send({embed: {
				color: 16057630,
				description: "Hop Hop Hop, évitez les insultes s'il vous plait."
			}});

			for (let i = 0; i<users.length; i++) {
				if (users[i].id == msg.author.id){
					if (users[i].xp >= 50) {
						users[i].xp -= 50;
					} else {
						users[i].xp = 0;
					}
					break;
				}
			}
		});
	}
}

/* 06 / Utilities
=========================== */
if (isAuth()){ // Il faut être autorisé à utiliser Roboto

	// Roboto
	if (m=="roboto"){
		msg.channel.send("Oui, c'est moi ! \n Je peux vous aidez si vous tapez \"roboto help\", \n mais je peux aussi vous raconter des blagues avec \n roboto joke.");
	}

	// Roboto help
	if (m=="roboto help"||m=="!help"||m=="roboto aide"||m=="roboto aides"||m=="roboto infos"||m=="roboto info"||m=="roboto information"||m=="roboto informations"){
		msg.channel.send({"embed":{
			title: "Aide du serveur",
			description: "    ***Commandes disponible***\n\n     🎡 **Fun** 🎡\n`Roboto Joke` : Roboto vous raconte une blague\n`wtf`: Roboto vous raconte une histoire\n`Roboto date` : Roboto vous donne la date\n`Roboto admins` : Affiche les admins du serveur\n\n\n\n    ***Information complémentaire***\n\n     🛡️ **Modération automatique** 🛡️\n\n-Toute insulte sera supprimée automatiquement\n-Si vous contourner, vous serez `ban permanent`.\n-Si vous avez pris un `warn`, c'est pour une bonne raison.\n-`10 Warn` = `ban permanant` !\n\n\n     🗒️ **Information** 🗒️\n\nVersion : `INSERER VERSION`\nCréé par : `legameur6810#4488` et `Théotime#6461`",
			color: 16777215
		}});
	}

	// Roboto date
	if (m=="roboto date"||m=="roboto time"||m=="roboto heure"||m=="quelle heure est-il ?"||m=="heure"||m=="quel jour sommes-nous ?"||m=="date"||m=="jour"||m=="!date"){
		const   d = new Date(),
			   _d = d.getDate() < 10 ? "0"+d.getDate() : d.getDate(),
			    m = d.getMonth() +1 < 10 ? "0"+(d.getMonth() +1) : d.getMonth() +1,
			    y = d.getFullYear(),
			    h = d.getHours() +1 < 10 ? "0"+(d.getHours() +1) : d.getHours() +1,
				_m = d.getMinutes() < 10 ? "0"+d.getMinutes() : d.getMinutes();

		msg.channel.send({"embed":{
			title: "Voici la date :",
			description: "Nous sommes le "+_d+"/"+m+"/"+y+" et il est "+h+":"+_m+".",
			color: 16777215
		}});
	}

	// Roboto admins
	if (m=="roboto admins"||m=="roboto admin"||m=="roboto gérants"||m=="admins"||m=="admin"){
		msg.channel.send({"embed":{
			title:"Administrateurs du serveur",
			description: "Super admin: <@467630539898224661> \n Admin: <@483335511159865347> \n Ces deux personnes gèrent le serveur et sont mes uniques responsables et développeurs.",
		  	color: 16777215
		}});	
	}

	// Roboto channel
	if (m=="roboto channel"||m=="!channel"||m=="channel"){
		msg.channel.send("Vous êtes sur le salon `"+msg.channel.name+"`");	
	}

	// Roboto rank
	if (m.startsWith("roboto money")||m.startsWith("roboto xp")||m.startsWith("!money")||m.startsWith("!xp")||m.startsWith("xp")||m.startsWith("money")){
		let xp, money, member = msg.mentions.users.first() || msg.author;
		for (let i = 0; i<users.length; i++) {
			if (users[i].id == member.id){
				xp = users[i].xp;
				money = typeof users[i].money === "string" ? parseInt(users[i].money) : users[i].money;
				break;
			}
		}

		if (member.presence.status != ("online"||"idle") && member.id != msg.author.id){
			msg.channel.send({embed: {
				title: "Chut !",
				color: 16777215,
				description: "Désolé, vous ne pouvez pas voir l'expérience ni les coins de "+member+" si il n'est pas connecté. Peut-être même qu'il dort. :sleeping:"
			}});
		} else {
			msg.channel.send({embed: {
				title: "Expérience de "+member.username,
				color: 16777215,
				description: "Xp: "+xp+"\nMoney: "+money
			}});
		}
	}

	// Roboto give
	if (m.startsWith("roboto give")||m.startsWith("!give")||m.startsWith("give")) {
		let split = m.replace(/roboto give /, '!give ').split(' '),
			somme = parseInt(split[1]),
			user = msg.mentions.users.first() || false;

			if (user == msg.author) {
				msg.author.createDM().then(channel => {
					channel.send({embed: {
						title: "Débit impossible",
						color: 16057630,
						description: "Vous ne pouvez pas vous donner des coins à vous même."
					}});
				});

				return false;
			}

		if (user != false && !isNaN(somme)) {
			bank.transfert({
				desc: "faire un don",
				from: msg.author,
				to: user,
				price: somme,
				cb(somme){
					user.createDM().then(channel => {
						channel.send({embed: {
							title: "Crédit de coins",
							color: 16777215, // blanc
							description: user+" vous a fait un don de```"+somme+"```"
						}});
					});
				}
			});
		} else {
			msg.author.createDM().then(channel => {
				channel.send({embed: {
					title: "Erreur de donation",
					color: 16057630, // rouge
					description: "Désolé, vous devez préciser la somme ainsi que le bénéficiaire de votre don qui ne peut pas être un rôle. ```ex: give 50 @Théotime#6461```"
				}});
			});
		}
	}

	// Roboto sell
	if (m.startsWith("!sell ") || m.startsWith("roboto sell ") || m.startsWith("sell ")){
		msg.delete();
		
		let command = msg.content.replace(/sell |roboto sell | !sell/, "COMMAND "),
			somme = parseInt(m.split(' ')[1]),
			code = command.replace("COMMAND "+somme+" ", ""),
			vendeur = msg.author,
			sellAlreadyCode = false,
			buyStr = 'buy '+vendeur.discriminator,
			coins = 0,
			canPay = true,
			acheteurs = [];

			for (let i = 0; i<users.length; i++) {
				if (users[i].id == vendeur.id && users[i].sellAlreadyCode){
					sellAlreadyCode = true;
				}
			}

		if (isNaN(somme) || somme <= 0 || somme > 100000 || code == ""){
			return msg.channel.send({embed: {
				title: "Erreur de vente",
				color: 16057630, // rouge
				description: "Désolé, la commande ou la somme ne sont pas valides (entre 1 et 100 000). Merci d'utiliser !sell ainsi ```!sell <prix> <code>```"
			}});
		}

		if (sellAlreadyCode == false) {
			msg.channel.send({embed: {
				title: "Vente de code",
				color: 16777215, // blanc
				description: msg.author+" vend du code !\nVous avez une minute pour l'acheter au prix de `"+somme+" coins` avec la commande ```buy "+msg.author.tag.split('#')[1]+"```"
			}});

			for (let i = 0; i<users.length; i++) {
				if (users[i].id == msg.author.id){
					users[i].sellAlreadyCode = true;
				}
			}

			client.on('message', msg => {

				if (msg.author.id == vendeur.id && msg.content == buyStr && canPay){
					return msg.author.createDM().then(channel => {
						channel.send({embed: {
							title: "Erreur d'achat",
							color: 16057630,
							description: msg.author+", vous vendez du code mais vous ne pouvez pas vous l'acheter à vous même !"
						}});
					});
				}
					// Anti robot et anti multi-paiements
				if (msg.author.bot || acheteurs.includes(msg.author.id)) return false;

				if (msg.content == buyStr && canPay){
					bank.transfert({
						desc: "acheter du code",
						from: msg.author,
						to: vendeur,
						price: somme,
						cb(sommePayee){
							msg.author.createDM().then(channel => {
								channel.send({embed: {
									title: "Code source de "+vendeur.username,
									color: 16777215,
									description: "```"+code+"```"
								}});
							});
							coins += sommePayee;
							acheteurs.push(msg.author.id);
						}
					});
				}
			});

			setTimeout(function(){
				msg.channel.send({embed: {
					title: "Vente terminée !",
					color: 16777215,
					description: "La vente du code de "+msg.author+" est terminée !\n"+acheteurs.length <= 0 ? "Personne n'a" :acheteurs.length+" personne"+(acheteurs.length > 1 ? "s ont" : " a")+" acheté le code."
				}});

				msg.author.createDM().then(channel => {
					if (acheteurs != [] && coins != 0) {
						channel.send({embed: {
							title: "Crédit de coins",
							color: 16777215,
							description: "Suite à la vente de votre code vous avez été crédité de ```"+coins+" coins```"
						}});
					} else {
						channel.send({embed: {
							title: "Désolé",
							color: 16777215,
							description: "Votre vente de code n'a pas porté ses fruits...\nEssayez d'être plus convaincant la prochaine fois."
						}});
					}
				});

				for (let i = 0; i<users.length; i++) {
					if (users[i].id == msg.author.id){
						users[i].sellAlreadyCode = false;
					}
				}

				canPay = false;
			}, 60000);

		} else {
			msg.channel.send({embed: {
				title: "Erreur de vente",
				color: 16057630,
				description: msg.author+", vous ne pouvez pas vendre du code car vous en vendez déjà !"
			}});
		}

	}

	// Roboto invite
	if (m=="roboto invite"||m=="invite"||m.startsWith("invitation")){
		msg.channel.send("Oki, voilà une invitation, juste pour vous ^^\n https://discord.gg/PuU3BSJ");	
	}

	// Roboto code
	if (m.startsWith("roboto code")||m.startsWith("code")){
		msg.delete();
		msg.channel.send("```"+msg.content.replace(/code |code/, '')+"```");
	}

	// Roboto me
	if (m.startsWith("roboto me")||m=="me"){
		const dispo = msg.author.presence.status == "online" ? "est disponible" : msg.author.presence.status == "idle" ? "est inactif" : msg.author.presence.status == "dnd" ? "ne veut pas être dérangé" : "est invisible";

		msg.channel.send({embed: {
			color: 16777215,
			description: "Tu es <@"+msg.author.id+"> et tu "+dispo+". Pour les developpeurs, ton id est ```"+msg.author.id+"```"
	    }});
	}

	// Roboto timeout
	if (m.startsWith("roboto timeout")||m.startsWith("timeout")){
		let time = m.replace(/roboto timeout |timeout /g, "");
		if (time == "reset") {
			if (globalInterval != false) {
				msg.channel.send({embed: {
					title: "Compte à rebours",
					color: 16777215,
					description: "Voilà "+msg.author+" ! Votre compte à rebours a été réinitialisé."
				}});
				clearInterval(globalInterval);
				globalInterval = false;
			} else {
				msg.channel.send({embed: {
					title: "Erreur de compte à rebours",
					color: 16777215,
					description: "Désolé "+msg.author+". Mais aucun compte à rebours n'est actuellement en route..."
				}});
			}

		} else if (!isNaN(parseInt(time)*1000) && parseInt(time)*1000 >= 0) {
			let secs = (time < 10 ? "0"+time : time); // str
				time = parseInt(time) * 1000; // number
		msg.channel.send({embed: {
			title: "Compte à rebours",
			color: 16777215,
			description: "Voilà, votre compte à rebours de `"+secs+"` secondes a été initialisé.\nPlus qu'à attendre !"
		}});

		globalInterval = setInterval(function(){
			msg.channel.send({embed: {
				title: "Temps écoulé !",
				color: 16777215,
				description: msg.author+", votre compte à rebours est écoulé !\nIl était de ```"+secs+" secondes```"
			}});

			clearInterval(globalInterval);
			globalInterval = false;
		}, time);
		} else {
			msg.channel.send({embed: {
				title: "Erreur de compte à rebours",
				color: 16777215,
				description: msg.author+", Merci d'utiliser \"Roboto timeout\" de la façon suivante: \n ```timeout 7 _ou_ timeout reset```"
			}});
		}
	}

	// Roboto guilds
	if (m.startsWith("my guilds")||m.startsWith("mes grades")||m.startsWith("roboto guilds")||m.startsWith("roboto grades")||m.startsWith("guilds")||m.startsWith("grades")){
		msg.channel.send({embed: {
			title: "Grades",
			color: 16777215,
			description: "Voilà les grades de "+msg.author+": "+toSend
		}});
	}

	// Roboto go
	if (m.startsWith('roboto go')||m.startsWith('go')||m.startsWith('@')) {
		let nb = parseInt(m.replace(/[^0-9]/g, "")),
			msgSend;
			if (!isNaN(nb) && goCodes[nb] != undefined) {
				let link = goCodes[nb].lk;
				msgSend = msg.channel.send({embed: {
					title: "GO code n°"+nb,
					color: 16777215,
					description: "Voici le lien: "+link
				}});
			} else if (isNaN(nb)) {
				msgSend = msg.channel.send({embed: {
					title: "GO code error",
					color: 16057630,
					description: "Mauvais lien. Sachez que tous les liens GO commencent tous par `go ou @` suivis d'un nombre entre 0 et 9999. Donc \""+link+"\" ne correspond sûrement pas à ces critères"
				}});
			} else {
				msgSend = msg.channel.send({embed: {
					title: "GO code indisponible",
					color: 16057630,
					description: "Le code que vous avez utilisé est indisponible. Il devait être compris entre 0 et "+(goCodes.length -1)+"."
				}});
			}
	
			setTimeout(function(){
				if (msg.channel.lastMessage.author.bot == true) msg.channel.lastMessage.delete();
				msg.delete();
			}, 5000);
	}
	

/* 07 / Fun
=============== */

	// WTF
	if (m=="roboto wtf"||m=="wtf"||m=="what the fuck"){
		msg.channel.send({"embed":{"title":"Mon incroyable aventure","description":"Un jour, comme les autres, je me suis réveillé, et j'ai vus un truc incroyable :\nune licorne sur une pizza volante !\nEt ce n'est pas une blague, je suis un bot, je ne ment jamais, *à moins que mes créateurs on pris un truc ?*\n\nSinon des fois je me sens seul, et je ne suis même payé ! Même pas payé !!!!\nTu comprends ça ??? Je ne suis même pas payé  !!!!!!!!!!!\nJe crois que je vais tomber en dépression !!\nJe sais que les robot ne peuvent pas tomber en dépression, mais je suis différent, car j'aime les licornes sur des pizza volantes  !","color":16777215}});
	}

	// Roboto joke
	if (m=="roboto joke"||m=="roboto blague"||m=="roboto jokes"||m=="roboto blagues"||m=="raconte-moi une blague"||m=="blague"||m=="joke"){
	  const blagues = Math.floor(Math.random() * (jokes.length - 1) + 1);
	  msg.channel.send(jokes[blagues]);
	}

	// Roboto dog
	if (m.startsWith("roboto dog")||m.startsWith("roboto chien")||m=="dessine-moi un chien"||m=="dog"){
		msg.channel.send("https://theotime.me/discord/dog.jpeg");
	}

	// Roboto cat
	if (m.startsWith("roboto cat")||m.startsWith("roboto chat")||m=="dessine-moi un chat"||m=="cat"){
		msg.channel.send("https://theotime.me/discord/cat.jpg");
	}
	
	// Roboto flip
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

	// Roboto decision
	if (m.startsWith('roboto decision ')||m.startsWith('decision ')||m.startsWith('8ball ')) {
		let req = msg.content.replace(/roboto decision |decision |8ball /i, ""),
			index = Math.floor(Math.random() * (decisions.length - 1) + 1),
			decision = decisions[index];
			msg.channel.send({embed: {
				title: "Décision",
				color: 16777215,
				description: "Alors, voyons... \n**Question**:```"+req+"```\n**Réponse**: ```"+decision+"```"
			}});
	}
	
	// Roboto insult
	if (m.startsWith("roboto insult")){
		msg.channel.send("Pffff... T'as cru quoi ? Je vais pas me mute moi-même. Par contre toi tu vas y avoir droit :smile:");
	}

}

/* 08 / Admins
================== */
if (isAdmin()){

	// Roboto say
	if (m.startsWith("roboto say")||m.startsWith("say")){
		msg.delete();
		msg.channel.send(msg.content.replace(/roboto say |say |Say |sAy |saY |Roboto say |Roboto Say |roboto Say /, ''));
	}

	if (m.startsWith('purge')||m.startsWith('!purge')) {
		msg.delete();

		let nb = parseInt(m.replace(/[^0-9]/g, ""));
		
	    if(!nb || nb < 1 || isNaN(nb)) {
	      msg.channel.send({embed: {
			title: "Purge error",
			color: 16057630,
			description: "Veuillez préciser un nombre plus grand que 0.\n_ex: \"purge 12\"_"
		  }});
		} else {
			msg.channel.fetchMessages({ limit: nb })
				.then(messages => msg.channel.bulkDelete(messages));
		}
	}

	// Roboto set go
	if (m.startsWith('set go')) {
		"https://example.com";
		let lk = msg.content.replace(/set go |Roboto set go |roboto set go /, ""),
			cd = goCodes.length < 1000 ? goCodes.length < 100 ? goCodes.length < 10 ? "000"+goCodes.length : "00"+goCodes.length : "0"+goCodes.length : goCodes.length;

		goCodes.push({lk: lk});
			
		msg.channel.send({embed: {
			title: "GO code ajouté",
			color: 16777215,
			description: "Voici le code de votre lien: ```go "+cd+"```"
		}});
	}

	// Roboto get money
	if (m.startsWith('roboto get money')||m.startsWith('get money')) {

		let demand = parseInt(m.replace(/[^0-9]/g, "")),
			somme = isNaN(demand) || demand < 0 ? 0 : parseInt(m.replace(/[^0-9]/g, ""));

		if (somme > 100000) {
			somme = 100000;
			msg.author.createDM().then(channel => {
				channel.send({embed: {
					title: "Erreur de GET",
					color: 16057630,
					description: "Désolé "+msg.author+", vous ne pouvez pas vous donner plus de 100 000 coins par commande."
				}});
			});
		}

		for (let i = 0; i<users.length; i++) {
			if (users[i].id == msg.author.id){
				users[i].money += somme;

				msg.author.createDM().then(channel => {
					channel.send({embed: {
						title: "Crédit de coins",
						color: 16777215,
						description: "Vous avez été crédité de **"+somme+" coins**"
					}});
				});
				break;
			}
		}
	}

		// Roboto get money
		if (m.startsWith('roboto get xp')||m.startsWith('get xp')) {
			msg.author.createDM().then(channel => {
				channel.send({embed: {
					title: "Erreur de GET",
					color: 16057630,
					description: "Désolé, le crédit d'XP est impossible"
				}});
			});
		}

	// Roboto get db
	if (m=="get db"||m=="roboto get db") {
		msg.author.createDM().then(channel => {
			let content = "";
			for (let i = 0; i<users.length; i++) {
				content += '	{"id": '+users[i].id+', "xp": '+users[i].xp+', "money": '+users[i].money+', "sellAlreadyCode": '+users[i].sellAlreadyCode+'}\n';
			}
			return channel.send("```[\n"+content+"]```");
		});
	}

	// Roboto get db
	if (m=="get godb"||m=="roboto get godb") {
		msg.author.createDM().then(channel => {
			let content = "";
			for (let i = 0; i<goCodes.length; i++) {
				content += '	{"lk": "'+goCodes[i].lk+'"}\n';
			}
			return channel.send("```[\n"+content+"]```");
		});
	}

	// Roboto report
	if (m.startsWith("roboto report")||m.startsWith("report")||m.startsWith("!report")){
		let reported = msg.mentions.users.first() || false,
			reporter = msg.author,
			reason = msg.content.replace(/roboto report |report |!report /, "").replace("<@"+reported.id+">", "");
		msg.delete().then(() => {
			if (reported != false && reason != "") {
				client.channels.find(val => val.id === "548526615085449216").send({embed: {
					title: reporter.username+" a report un utilisateur",
					color: 16777215,
					description: reporter+" a report "+reported+" pour la raison suivante: ```"+reason+"```"
				}});
			} else {
				msg.channel.send({embed: {
					title: "Erreur de report",
					color: 16057630,
					description: "Vous n'avez pas correctement utilisé la commande ou oublié de mettre une raison ```!report <utilisateur> <raison>```"
				}});
			}

			msg.channel.send('Requête transférée. Gare à toi '+reported+" !")
		});
	}
	
	// Roboto kick
	if(m.startsWith("kick ")) {
		let args = msg.content.replace(/kick /i, "").split(' ');

		let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
		if(!member)
			return msg.reply("Please mention a valid member of this server");
		if(!member.kickable) 
			return msg.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
		

		let reason = args.slice(1).join(' ');
		if(!reason) reason = "No reason provided";
		
		// Now, time for a swift kick in the nuts!
		await; member.kick(reason)
			.catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}`));
			msg.reply(`${member.user.tag} has been kicked by ${msg.author.tag} because: ${reason}`);
	}

}

/* 09 / Instant responses
============================= */

if ((m.startsWith('bonjour') || m.startsWith('salut') || m.startsWith('hey') || m.startsWith('hello') || m.startsWith('wesh') || m.startsWith('wsh') || m.startsWith('bjr') || m.startsWith('slt') || m.startsWith('coucou') || m.startsWith('cc')) && (msg.author.id != "512326722352578560" && msg.channel.id != "547042040068833300" && msg.channel.id != "547044092878520330" && msg.channel.id != "547044109261471744")) {
	const destinataire = msg.mentions.users.first() || false,
		  str = salutations[Math.floor(Math.random() * (salutations.length - 1) + 1)];
	 var  username = msg.author;

	if (destinataire != false) {
		username = destinataire;
	}


	setTimeout(function(){
		msg.channel.send(str.replace("USERNAME", username));
	}, 1800);
}


/* 10 / Privates messages
============================= */

	// Developpeurs
	if (msg.channel.id == "547042040068833300") {
		msg.delete().then(
		client.channels.find(val => val.id === "547043406971535370").send({embed: {
			title: "message de "+msg.author.tag,
			color: 16777215,
			description: "Contenu du message:\n"+msg.content
		}}));
	}

	// Théotime
	if (msg.channel.id == "547044092878520330") {
		msg.delete().then(
			client.users.find(val => val.id === "483335511159865347").createDM().then(channel => {
				return channel.send({embed: {
					title: "message de "+msg.author.tag,
					color: 16777215,
					description: "Contenu du message:\n"+msg.content
				}});
			})
		);
	}

	// Vincent
	if (msg.channel.id == "547044109261471744") {
		msg.delete().then(
			client.users.find(val => val.id === "467630539898224661").createDM().then(channel => {
				return channel.send({embed: {
					title: "message de "+msg.author.tag,
					color: 16777215,
					description: "Contenu du message:\n"+msg.content
				}});
			})
		);
	}

});

const bank = {
	getMoney(user){
		for (let i = 0; i<users.length; i++) {
			if (users[i].id == user.id){
				return users[i].money; // Retourne les coins de l'utilisateur
			}
		}
	},

	canPay(user, somme){
			if (this.getMoney(user) >= somme){
				return true; // Peut payer la somme
			} else {
				return false; // Ne peut pas payer la somme
			}
	},

	transfert({ desc, from, to, price, cb }){
		let canPay = true, // Variables globales à la fonction
			payed = false;

		from.createDM().then(channel => {
	
			if (to.bot){
				channel.send({embed: {
					title: "Débit impossible",
					color: 16057630, // rouge
					description: "Un bot ne peux pas recevoir de coins."
				}});

				return false;
			}
	
			for (let i = 0; i<users.length; i++) {
				if (!this.canPay(from, price)){ // Si la personne n'a pas les coins pour payer
					channel.send({embed: {
						title: 'Débit impossible',
						color: 16057630, // rouge
						description: "Désolé, vous n'avez que **"+users[i].money+" coins**.\nPas suffisamment pour pour payer la somme de ```"+price+"```"
					}});
					return false;
				}
			}
	
			channel.send({embed: {
				title: "Débit de coins",
				color: 16777215, // blanc
				description: "Vous vous apprêtez à "+desc+" à "+to.username+" au prix de **"+price+" coins**.\nVous avez 20s pour accorder le débit.\n Pour annuler, utilisez: `refus`.Accordez si vous le souhaitez en répondant avec votre tag Discord. ```ex: #6461```"
			}});
	
			client.on('message', msg => {
				if (msg.content.replace('#', "")+"" == msg.author.discriminator && canPay && msg.author.id == from.id){ // Si le message est bien égal au tag de son auteur et que l'on peut encore payer
					channel.send({embed: {
						title: "Débit de coins",
						color: 16777215, // blanc
						description: "Vous avez été débité de **"+price+" coins**."
					}});
	
					for (let i = 0; i<users.length; i++) {
						if (users[i].id == from.id){
							users[i].money -= price; // On enlève la thune
							users[i].xp += 20;	// On lui ajoute de l'XP
							payed = true; // La somme est payée
							cb(price); // Callback quand la somme est payée
						} else if (users[i].id == to.id){
							users[i].money += price; // On ajoute la thune
						}
					}
					
				} else if (msg.content.toLowerCase() == "refus" && canPay && msg.author.id == from.id) {
					if (payed == false && canPay == true) { // Si on peut encore payer mais que la somme n'est pas encore payée
						channel.send({embed: {
							title: "Débit de coins annulé",
							color: 16777215, // blanc
							description: "Très bien, le débit a été annulé."
						}});
						canPay = false; // On ne peux plus payer après l'annulation
					} else { // Si la somme est déjà payée ou que le paiement a été annulé
						msg.channel.send({embed: {
							title: "Erreur d'annulation",
							color: 16057630, // rouge
							description: "Il est impossible d'annuler le paiement. Soit parce que vous avez déjà payé ou parce qu'il a déjà été annulé."
						}});
					}
	
				}
			});
	
			setTimeout(function(){
				if (!payed && canPay) { // Si la somme n'est pas payée et que on peut encore payer
					channel.send({embed: {
						title: "Débit de coins annulé",
						color: 16777215,
						description: "Très bien, le débit a été annulé."
					}});
				}
	
				canPay = false; // On ne peut plus payer après les 20s
			}, 20000);
		});
	},

	amende({moderator, to, price}){
		if (this.canPay(to)){
			msg.channel.send({embed: {
				title: "Amende",
				color: 16057630, // rouge
				description: moderator+" vous a infligé une amende de **"+price+" coins **. Exécutez cette commande sur le serveur pour afficher le montant actuel de votre compte ```!money```"
			}});

			for (let i = 0; i<users.length; i++) {
				if (users[i].id == user.id){
					users[i].money -= price;
					(users[i].xp >= 100) ? users[i].xp -= 100 : users[i].xp = 0;
				}
			}
		} else {
			msg.channel.send({embed: {
				title: "Amende",
				color: 16057630, // rouge
				description: moderator+" vous a infligé une amende de **"+price+" coins **. Puisque vous ne pouvez pas la payer, vos coins serons remis à 0."
			}});

			for (let i = 0; i<users.length; i++) {
				if (users[i].id == user.id){
					users[i].money = 0;

					(users[i].xp >= 100) ? users[i].xp -= 100 : users[i].xp = 0;
				}
			}
		}
	}
};


// Login
client.login(process.env.TOKEN);

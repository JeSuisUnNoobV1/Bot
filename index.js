const Discord = require('discord.js');
const client = new Discord.Client();
const activities_list = [
  "",
  "Des questions ?", 
  "Un projet ?",
  "Un site internet ?",
  "De l'aide automatique",
  "à votre disposition"
  ];

// START
client.on('ready', () => {
    console.log('Roboto ready');
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 2500);
});

// Nouveaux utilisateur
client.on("guildMemberAdd", members => {
    members.guild.channels.find("name", "bienvenue").send("Bienvenue à **" + members.displayName +"** sur le serveur de la NoobIse !");
    members.createDM().then(channel => {
      return channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur de la NoobIse !\n \n _JeSuisUnNoobV1_")
   });
});

client.on('message', msg => {
	m = msg.content.toLowerCase();

	if(m === "Abruti") {
    msg.reply(({embed: {
      color: 12745742,
      description: "Bah ça va les insultes !"
    }}));
  } else if (msg.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new Discord.RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

  switch (msg.content) {
    case "Roboto help": case "Roboto -h":
    	msg.reply(({embed: {
			color: 12745742,
			description: "Voici les commandes disponible :\n`$help` Donne toutes les commandes disponible\n`$aide` Donne toutes les commandes disponible\n`$info`  Donne des infos sur le bot"
		}}));
	break;
	case "embed test":
	message.channel.send({embed: {
		color: 3447003,
		author: {
		  name: client.user.username,
		  icon_url: client.user.avatarURL
		},
		title: "This is an embed",
		url: "http://google.com",
		description: "This is a test embed to showcase what they look like and what they can do.",
		fields: [{
			name: "Fields",
			value: "They can have different fields with small headlines."
		  },
		  {
			name: "Masked links",
			value: "You can put [masked links](http://google.com) inside of rich embeds."
		  },
		  {
			name: "Markdown",
			value: "You can put all the *usual* **__Markdown__** inside of them."
		  }
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: "© Example"
		}
	  }
	});
	break;
  }
});


// Login
client.login(process.env.TOKEN);

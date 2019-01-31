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

function checkArr(arr, str){
    for (var i = 0; i<arr.length; i++){
	if (arr[i] === str) {
	    break;
	    return true;
	}
    }
}

// START
client.on('ready', () => {
    console.log('Roboto ready');
	client.user.setActivity("Bot reload");
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 2500);
});

// Nouveaux utilisateur
client.on("guildMemberAdd", members => {
    members.guild.channels.find("id", "539842703467479051").send("Bienvenue à **" + members.displayName +"**, tu es maintenant connecté au serveur discord !\n Pour avoir accès accès à tout le serveur discord, merci de suivre les instructions disponible à l'url suivant : https://modulobot.xyz/verify/539738715707408385");
    members.createDM().then(channel => {
      return channel.send('Bienvenue **' + members.displayName+ "**,\n Tu as maintenant accès au serveur de Théotime ! \n\n _Cordialement, le staff_")
   });
});

client.on('message', msg => {
	m = msg.content.toLowerCase();

	if(m == "tg" || m == "abruti") {
    msg.reply(({embed: {
      color: 12745742,
      description: "Bah ça va les insultes !"
    }}));
  } else if (m === 'how to embed') {
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
});


// Login
client.login(process.env.TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Minecraft - Rinaorc', [0]);
    console.log('Le bot a été charger avec succès !');
});

client.on("guildMemberAdd", members => {
    members.guild.channels.find("name", "bienvenue").send("Bienvenue à *" + members.displayName +"* sur le serveur de la NoobIse !");
    members.createDM().then(channel => {
      return channel.send('Bienvenue *' + members.displayName+ "*,\n Tu as maintenant accès au serveur de la NoobIse !\n \n _JeSuisUnNoobV1_")
    });
  });

client.on('message', msg => {
  if (msg.content === '$info') {
    msg.channel.send("```Makerdown\nNoobBot \nVersion : Beta 1.9\nCréateur : legameur6810#4488 \nSortie le : 20/11/2018```");
  }
});

client.login(process.env.TOKEN);

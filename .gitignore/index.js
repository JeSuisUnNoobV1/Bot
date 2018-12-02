const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Minecraft - Rinaorc', [0]);
    console.log('Le bot a été charger avec succès !');
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send("Bienvenue à toi sur le serveur de la NoobIse !");
});

client.on('message', msg => {
  if (msg.content === '$info') {
    msg.channel.send("```Makerdown\nNoobBot \nVersion : Beta 1.8\nCréateur : legameur6810#4488 \nSortie le : 20/11/2018```");
  }
});

client.login(process.env.TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Rinaorc en GolemRush', [0]);
    console.log('Le bot a été charger avec succès !');
});

// NB
client.on('message', msg => {
  if (msg.content === 'nb') {
    msg.channel.send("NoobUtility"),
    msg.channel.send("Version : Alpha 0.4 "),
    msg.channel.send("Développé par : legameur6810"),
    msg.channel.send("Langue : Français");
  }
});

// GOLEMRUSH
client.on('message', msg => {
    if (msg.content === 'nb/golemrush') {
        msg.reply("Le golemrush est un mode de jeu disponible sur le serveur minecraft rinaorc. Le but du jeu est : Deux team de 5 s'affronte (5v5). Une ile pour chaque équipe et une ile centrale. Chaque équipe dispose d'un golem. Au millieu un golem (GolemBbooster) donne un effet (sois 2x plus d'oir ou 2x plus d'émeraude) à l'équipe qui le tue. L'effet dure 30secondes.");
    }
});

// RINAORC
client.on('message', msg => {
    if (msg.content === 'nb/rinaorc') {
        msg.reply("Ip du serveur : play.rinaorc.com"),
        msg.reply("Voir le site de Rinaorc : https://rinaorc.com");
    }
});
client.on('message', msg => {
    if (msg.content === 'nb/rina') {
        msg.reply("Ip du serveur : play.rinaorc.com"),
        msg.reply("Voir le site de Rinaorc : https://rinaorc.com");
    }
});

// FORM
client.on('message', msg => {
    if (msg.content === 'nb/recrutement') {
        msg.reply("Voici le forumlaire : https://goo.gl/MVoxY4")
    }
});

// HELP
client.on('message', msg => {
    if (msg.content === 'nb/help') {
        msg.reply("Tu peut voir la documentation ici : http://textup.fr/297296vF")
    }
});

client.on('message', msg => {
    if (msg.content === 'nb/aide') {
        msg.reply("Tu peut voir la documentation ici : http://textup.fr/297296vF")
    }
});

// CHANGELOGS

client.on('message', msg => {
    if (msg.content === 'nb/change') {
        msg.reply("Voir les nouveauté ici : http://textup.fr/297591Hz")
    }
});
client.on('message', msg => {
    if (msg.content === 'nb/changelogs') {
        msg.reply("Voir les nouveauté ici : http://textup.fr/297591Hz")
    }
});

client.login(process.env.TOKEN);

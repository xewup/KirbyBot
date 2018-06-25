const Discord = require('discord.js');
const { token, token1 } = require('config.json');
const kirby = new Discord.Client();
const paul = new Discord.Client();

var prefix = ("/")
var randnum = 0


kirby.login(token);
paul.login(token1);

// Démarrage.
kirby.on('ready', function() {
  console.log(`Kirby Prêt !`);
  kirby.user.setActivity("manger tout ce qu'il trouve");
});

paul.on('ready', function() {
  console.log(`Paul Prêt !`);
  paul.user.setActivity("chasser le dino");
  
});

// Surtout au mois de mai !
paul.on('message', message => {
  if(message.content.startsWith("Mais")) {
         message.channel.send("Oui car il y a toujours un mais.");
  }
});

kirby.on('message', message => {
  if(message.content === "Oui car il y a toujours un mais." ) {
         message.channel.send("Surtout au mois de Mai.");
  }
});

  // la danse de kirby !
kirby.on('message', message => {
  if(message.content === "Kirby, peux-tu danser s'il te plait ?" ) {
         kirby.user.setActivity("DANSER");
         message.channel.send("(>^^)> <(^^<)");
         message.channel.send("v(^-^)v v(^-^)^ ^(^-^)v");
         message.channel.send("^(^-^)^");
         kirby.user.setActivity("manger tout ce qu'il trouve");
  }
});

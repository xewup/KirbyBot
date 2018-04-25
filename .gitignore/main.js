const Discord = require('discord.js');
const kirby = new Discord.Client();
const paul = new Discord.Client();

var prefix = ("/")
var randnum = 0

kirby.login("Mzg0NzkzNjkwNDE5NDk0OTMy.DUUumA.cVam-1ZsawNxKHXi6WzZD6YV35g");
paul.login("Mzg0Nzk3MDQyNDc3ODkxNTg0.DUU1TQ.2U84LXbB_7CkPC56FwpyJRS0A3Y");

// Démarrage.
kirby.on('ready', function() {
  console.log(` Kirby Prêt !`);
  kirby.user.setActivity("manger tout ce qu'il trouve");
});

paul.on('ready', function() {
  console.log(`Paul Prêt !`);
  paul.user.setActivity("chasser le dino");
  
});

// Surtout au mois de mai !
paul.on('message', message => {
  if(message.content === "Mais" ) {
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

// Un membre arrive.

function Abonnes(guildMemberAdd, member) {
member.addRole('398895794771722265');
};

kirby.on("guildMemberAdd", member => {
  member.guild.channels.find("name","general").send(`Bienvenue sur le serveur ${member.user.username}. N'Hésite pas à faire un tour sur les #regles et à te présenter dans #presentations.`);
  member.addRole('438381490255036437');
  member.createDM().then(channel => {
      return channel.send(`Salut ${member.user.username}. Je suis Kirby du serveur Discord de XeWuP que tu viens de rejoindre. \nPour l'instant, tu n'as seulement accès qu'au salon textuel #regles afin de les lire et de comprendre le fonctionnement. \nNe t'inquiète pas, dans 5 minutes tu pourras accéder librement au serveur. \n \n Sur ce, moi et l'équipe de modération te souhaite la bienvenue sur le serveur !\n - Kirby. `)
    });
  var leMembre = member;
  setTimeout(function (leMembre) {
  member.removeRole('438381490255036437');
  member.addRole('398895794771722265'); }, 300000);
});

// Un membre part.
paul.on("guildMemberRemove", member => {
     member.guild.channels.find("name","general").send(`Au revoir ${member.user.username} ! Encore un qui quitte le serveur.. Kirby tu pues trop de la bouche !`);
      });

// Lancer de dé

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    randnum = Math.floor(Math.random() * (max - min + 1) + min);
}

paul.on('message', message => {
  random();
if (message.content === prefix + "roll"){
  message.reply(`Tu as tiré un ${randnum}`);
  console.log(randnum);
}
});

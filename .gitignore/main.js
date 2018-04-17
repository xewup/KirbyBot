const Discord = require('discord.js');
const kirby = new Discord.Client();
const paul = new Discord.Client();

var prefix = ("!")

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
         message.channel.sendMessage("Oui car il y a toujours un mais.");
  }
});

kirby.on('message', message => {
  if(message.content === "Oui car il y a toujours un mais." ) {
         message.channel.sendMessage("Surtout au mois de Mai.");
  }
});

  // la danse de kirby !
kirby.on('message', message => {
  if(message.content === "Kirby, peux-tu danser s'il te plait ?" ) {
         kirby.user.setActivity("DANSER");
         message.channel.sendMessage("(>^^)> <(^^<)");
         message.channel.sendMessage("v(^-^)v v(^-^)^ ^(^-^)v");
         message.channel.sendMessage("^(^-^)^");
         kirby.user.setActivity("manger tout ce qu'il trouve");
  }
});

// Un membre arrive.
kirby.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Abonnés");
    member.guild.channels.find("name","general").send(`Bienvenue sur le serveur ${member.user.username}. N'Hésite pas à faire un tour sur les #regles et à te présenter dans #presentations.`);
    member.addRole(role);
    });

// Un membre part.
paul.on("guildMemberRemove", function(member) {
     member.guild.channels.find("name","general").send(`Au revoir ${member.user.username} ! Encore un qui quitte le serveur.. Kirby tu pues trop de la bouche !`);
      });

// Ajout de rôles avec la commande !iam
kirby.on('message', message => {
if(message.content === prefix + "fortnite") {
    let role = member.guild.roles.find("name", "Fortnite");
    member.guild.channels.find("name","multijoueur").send(`${member.user.username} possède Fortnite. Rôle ajouté !`);
    member.addRole(role);
  })
});

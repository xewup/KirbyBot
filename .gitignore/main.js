const Discord = require('discord.js');

const kirby = new Discord.Client();
const paul = new Discord.Client();
const rudolph = new Discord.Client();
kirby.login("Mzg0NzkzNjkwNDE5NDk0OTMy.DUUumA.cVam-1ZsawNxKHXi6WzZD6YV35g");
paul.login("Mzg0Nzk3MDQyNDc3ODkxNTg0.DUU1TQ.2U84LXbB_7CkPC56FwpyJRS0A3Y");
rudolph.login("NDUwMjE3NjU2Njc5NzkyNjQw.DewBaw.nkPZbBe6IXsIigHTs4fXdez2Mgc");

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("/")
var randnum = 0


// Démarrage.
kirby.on('ready', function() {
  console.log(`Kirby Prêt !`);
  kirby.user.setActivity("manger tout ce qu'il trouve");
});

paul.on('ready', function() {
  console.log(`Paul Prêt !`);
  paul.user.setActivity("chasser le dino");
  
});

rudolph.on('ready', function() {
  console.log(`Rudolph Prêt !`);
  rudolp^h.user.setActivity("chercher sa maman");
  
});

// Salut
rudolph.on('message', message => {
  if(message.content === "Salut" ) {
         message.channel.send("Salut les copains !");
  }
});

rudolph.on('message', message => {
  if(message.content === "salut" ) {
         message.channel.send("Coucou ! :)");
  }
});

rudolph.on('message', message => {
  if(message.content === "bonsoir" ) {
         message.channel.send("Coucou ! :)");
  }
});

rudolph.on('message', message => {
  if(message.content === "Bonsoir" ) {
         message.channel.send("Salut les amis ! :3");
  }
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

  // Tous les jeux !

// Fortnite

  paul.on('message', message => {
    
    if (message.content === prefix + "fortnite"){
      console.log(`Fortnite donné à ${message.member.user.username}`);
      message.member.addRole('435715421325361152');
      message.channel.send(`${message.member.user.username} a maintenant le rôle "Fortnite" :) !`);
      }
});

// CS:GO

paul.on('message', message => {
  
  if (message.content === prefix + "csgo"){
    console.log(`CS:GO donné à ${message.member.user.username}`);
    message.member.addRole('435715658307600385');
    message.channel.send(`${message.member.user.username} a maintenant le rôle "CS:GO" :) !`);
    }
});

// THUG PRO

kirby.on('message', message => {
  
  if (message.content === prefix + "thugpro"){
    console.log(`THUG Pro donné à ${message.member.user.username}`);
    message.member.addRole('435716845664993280');
    message.channel.send(`${message.member.user.username} a maintenant le rôle "THUG Pro" ^^ !`);
    }
});

// Unreal Tournament

kirby.on('message', message => {
  
  if (message.content === prefix + "unrealtournament"){
    console.log(`UT99 donné à ${message.member.user.username}`);
    message.member.addRole('438790253503840277');
    message.channel.send(`${message.member.user.username} a maintenant le rôle "Unreal Tournament" ^^ !`);
    }
});

// PAYDAY 2

paul.on('message', message => {
  
  if (message.content === prefix + "payday2"){
    console.log(`PAYDAY2 donné à ${message.member.user.username}`);
    message.member.addRole('437608969813622795');
    message.channel.send(`${message.member.user.username} a maintenant le rôle "PAYDAY 2" :^D !`);
    }
});

// Minecraft

paul.on('message', message => {
  
  if (message.content === prefix + "minecraft"){
    console.log(`Minecraft donné à ${message.member.user.username}`);
    message.member.addRole('435720619301142528');
    message.channel.send(`${message.member.user.username} a maintenant le rôle "Minecraft" :^D !`);
    }
});

// PUBG

kirby.on('message', message => {
  
  if (message.content === prefix + "pubg"){
    console.log(`PUBG donné à ${message.member.user.username}`);
    message.member.addRole('435715926579609600');
    message.channel.send(`${message.member.user.username} est désormais un joueur "PUBG".`);
    }
});

// Rocket League

kirby.on('message', message => {
  
  if (message.content === prefix + "rocketleague"){
    console.log(`RL donné à ${message.member.user.username}`);
    message.member.addRole('435715738993557505');
    message.channel.send(`${message.member.user.username} est désormais un joueur "Rocket League".`);
    }
});

// Garry's Mod

rudolph.on('message', message => {
  
  if (message.content === prefix + "gmod"){
    console.log(`gmod donné à ${message.member.user.username}`);
    message.member.addRole('435715379738968065');
    message.channel.send(`${message.member.user.username} a le jeu "Garry's Mod", n'hésitez pas à le solliciter pour jouer avec lui !`);
    }
});

// GTA V

paul.on('message', message => {
  
  if (message.content === prefix + "gtav"){
    console.log(`GTA V donné à ${message.member.user.username}`);
    message.member.addRole('435715361401208842');
    message.channel.send(`${message.member.user.username} a le jeu "GTA V", n'hésitez pas à le solliciter pour jouer avec lui !`);
    }
});

// overwatch

rudolph.on('message', message => {
  
  if (message.content === prefix + "overwatch"){
    console.log(`Overwatch donné à ${message.member.user.username}`);
    message.member.addRole('435715315339362304');
    message.channel.send(`Overwatch ? ${message.member.user.username} ne pouvait pas ne pas l'avoir !`);
    }
});

const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const spam = new Set();
const userDb = require('./users.json');
const prefix = "/";

bot.on("ready", () => {
    console.log("Bot başlatıldı.");
});

bot.on("message", (message) => {
if (message.author.bot) return;
if ( message.mentions &&
  message.mentions.has("711074841394151464",
  { ignoreEveryone: true }))
  return message.channel.send("**My prefix is** ``" + prefix + "``");
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


function frame(title, description, color){
  let frame = new Discord.MessageEmbed().setTitle(title).setDescription(description).setColor(color);
  message.channel.send(frame);
}


const spamCheck = () => {
    spam.add(message.author.id);
    setTimeout(() => {
      spam.delete(message.author.id);
    }, 1500);
  }
  

  if (spam.has(message.author.id)) return;
  if (command) {
      spamCheck();
    }
  
    switch (command) {

       case "balance":
         const User = userDb.users.find(user => user.id === message.author.id);          
         const result =  User ? ("You have " + User.gems + " gems.") : "You don't have an account.";
         message.channel.send(result);
       break;

       case "help":
         frame(":grey_question: **Commands**", config.help.join("\n"), "#000000"); 
       break;

       case "time":
         let zaman  = new Date();
         frame(":clock1: **Time**", zaman, "#000000");
       break;

        case "spin":
          let rulet = (`<@${message.author.id}> ` + "**Spun at the wheel and got number** " + Math.floor(Math.random() * 37)); //
          frame(":white_circle: **Roulette Wheel**", rulet, "#000000");
        break;
        
        case "slot":
          const sayı1 = (Math.floor(Math.random()* 4));
          const sayı2 = (Math.floor(Math.random()* 4));
          const sayı3 = (Math.floor(Math.random()* 4));
          const bosluk = (" ");
          const masal = (`<@${message.author.id}> **Spun the slot machine and got these numbers:**`);
          if(sayı1 === sayı2 && sayı2 === sayı3){
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "**Won** at the slots!");
          frame(":slot_machine: **Slot Machine**", beep, "#5BFF62");
          } else {
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "Lost at the slots!");
          frame(":slot_machine: **Slot Machine**", beep, "#E20338");}
        break;

        case "rosh":
          let kelimes = ['Rock', 'Paper', 'Scissors'];
          let secler = kelimes[Math.floor(Math.random() * kelimes.length)];
          let esonuc = (`<@${message.author.id}> **Used his skills and made this hand gesture:** ` + secler);
          frame(":scissors: **Roshambo Game**", esonuc, "#000000");
        break;

        case "dice":
          let dicesayi = (Math.floor(Math.random() * (7 - 1) ) + 1);
          let dices = (`<@${message.author.id}> **Rolled the dice and this number came:** ` + dicesayi);
          frame(":game_die: **Dice**", dices, "#000000");
        break;

        case "legendquest":
          frame(":woman_mage: **Legend Quests**", config.legendquest.join("\n"), "#000000");
        break;

        case "ltitle":
          frame(":angel: **Legendary Title Quests**", config.ltitle.join("\n"), "#000000");
        break;

        case "ldrag":
          frame(":dragon: **Dragon of Legend Quests**", config.ldrag.join("\n"), "#000000");
        break;

        case "lbot":
          frame(":robot: **Legendbot-009 Quests**", config.lbot.join("\n"), "#000000");
        break;

        case "lwings":
          frame(":wind_blowing_face: **Legendary Wings Quests**", config.lwings.join("\n"), "#000000");
        break;

        case "lkatana":
          frame(":crossed_swords: **Legendary Katana Quests**", config.lkatana.join("\n"), "#000000");
        break;

        case "lwhip":
          frame(":dizzy: **Whip of Truth Quests**", config.lwhip.join("\n"), "#000000");
        break;

        case "lknight":
          frame(":maple_leaf: **Legendary Dragon Knight's Wings Quests**", config.lknight.join("\n"), "#000000");
        break;

        case "growtopia":
          frame(":deciduous_tree: **Growtopia Page**", config.growtopia.join("\n"), "#000000");
        break;

        case "games":
          frame(":video_game: **Games Page**", config.games.join("\n"), "#000000");
        break;

        case "tech":
          frame(":wrench: **Technical Page**", config.tech.join("\n"), "#000000");
        break;

        case "about":         
          const embed = new Discord.MessageEmbed()
          .setTitle(":registered: **About Modest**")         
          .setDescription(":white_small_square:"+config.about.join("\n:white_small_square:"))
          .setColor("#000000")
          .setImage("https://i.pinimg.com/originals/83/e9/e4/83e9e43f354947bd6dd230068c60e158.jpg")
          message.channel.send(embed);
        break;

        case "rules":
          frame(":grey_exclamation: **Rules**", config.rules.join("\n"), "#000000");
        break;

        case "oli6":
          let oli = ("Olimpos 6 Seviliyorsunuz -Zaccs :hearts:");
          frame("", oli, "#000000");
        break;

        case "invite":
          frame(":e_mail: **Invite**", config.invite.join("\n"), "#000000");
        break;



       default:
       break;
    }


 });


bot.login(config.token);

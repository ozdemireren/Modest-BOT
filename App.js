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
         frame(":scroll: **Commands**", config.help.join("\n"), "#DF8600"); 
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
          let picks = [':cherries:', ':banana:', ':pineapple:', ':kiwi:'];
          let won = (`\n<@${message.author.id}> ` + "**Won** at the slots! :partying_face:");
          let lost = (`\n<@${message.author.id}> ` + "Lost at the slots! :sob:");
          const num1 = picks[Math.floor(Math.random() * picks.length)];
          const num2 = picks[Math.floor(Math.random() * picks.length)];
          const num3 = picks[Math.floor(Math.random() * picks.length)];
          const spacex = (" ");
          const reword = (`<@${message.author.id}> **Spun the slot machine and...**`);
          if(num1 === num2 && num2 === num3){
          let beep = (reword + spacex + num1 + spacex + num2 + spacex + num3);
          frame(":slot_machine: **Slot Machine**", beep, "#FF008B");
          frame("", won, "5BFF62");
          } else {
          let beep = (reword + spacex + num1 + spacex + num2 + spacex + num3);
          frame(":slot_machine: **Slot Machine**", beep, "#FF008B")
          frame("", lost, "E20338");}
        break;

        case "rosh":
          let kelimes = ['**Rock! **:rock:', '**Paper! **:roll_of_paper:', '**Scissors! **:scissors:'];
          let secler = kelimes[Math.floor(Math.random() * kelimes.length)];
          let esonuc = (`<@${message.author.id}> **made hand gesture and became...** `);
          frame(":confetti_ball: **Roshambo Game**", esonuc, "#5BFF62");
          frame("", secler, "#5BFF62");
        break;

        case "dice":
          let dicesayi = (Math.floor(Math.random() * (7 - 1) ) + 1);
          let dices = (`<@${message.author.id}> **rolled the dice and this number came:** ` + dicesayi);
          frame(":game_die: **Dice**", dices, "#000000");
        break;

        case "legendquest":
          frame("**Legend Quests**", config.legendquest.join("\n"), "#FF008B");
        break;

        case "ltitle":
          frame(":orange_circle: **Legendary Title Quests**", config.ltitle.join("\n"), "#5BFF62");
        break;

        case "ldrag":
          frame(":dragon: **Dragon of Legend Quests**", config.ldrag.join("\n"), "#5BFF62");
        break;

        case "lbot":
          frame(":robot: **Legendbot-009 Quests**", config.lbot.join("\n"), "#5BFF62");
        break;

        case "lwings":
          frame(":wind_blowing_face: **Legendary Wings Quests**", config.lwings.join("\n"), "#5BFF62");
        break;

        case "lkatana":
          frame(":crossed_swords: **Legendary Katana Quests**", config.lkatana.join("\n"), "#5BFF62");
        break;

        case "lwhip":
          frame(":dizzy: **Whip of Truth Quests**", config.lwhip.join("\n"), "#5BFF62");
        break;

        case "lknight":
          frame(":maple_leaf: **Legendary Dragon Knight's Wings Quests**", config.lknight.join("\n"), "#5BFF62");
        break;

        case "growtopia":
          frame(":deciduous_tree: **Growtopia Page**", config.growtopia.join("\n"), "#5BFF62");
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
          .setImage("https://media.giphy.com/media/Zdf5IzI6eYOQ4aNHs9/giphy.gif")
          message.channel.send(embed);
        break;

        case "rules":
          frame(":grey_exclamation: **Rules**", config.rules.join("\n"), "#000000");
        break;

        case "oli6":
          let oli = ("`Zaccs'den bir mesajınız var!`");
          const olimpos6 = new Discord.MessageEmbed()
          .setTitle(":heart: Olimpos 6")
          .setDescription(oli)
          .setColor("#000000")
          .setImage("https://cdn.discordapp.com/attachments/757660777820979372/758832848542892052/unknown.png")
          message.channel.send(olimpos6);
        break;

        case "invite":
          frame(":e_mail: **Invite**", config.invite.join("\n"), "#000000");
        break;

        case "dersprogrami":
          const dersprogram = new Discord.MessageEmbed()
          .setTitle(":books: Peyzaj Mimarlığı Ders Programı")
          .setDescription(config.ders.join("\n"))
          .setColor("#DF8600")
          message.channel.send(dersprogram);
        break;

        case "kiss":
          let user = message.mentions.users.first();
          if (user) {
          const kisses = new Discord.MessageEmbed()
          .setDescription("**You kissed the <@" + user.id + ">!**")
          .setImage("https://i.pinimg.com/originals/52/60/3e/52603e1ceb05f757af73ab69be05b5bc.gif")
          message.channel.send(kisses);
          } else { 
          message.channel.send("**Please tag someone!**")};
        break;

        case "kill":
          let user2 = message.mentions.users.first();
          if (user2) {
          const kills = new Discord.MessageEmbed()
          .setDescription("**You kill the <@" + user2.id + ">!**")
          .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/890/995/e1c.gif")
          message.channel.send(kills);
          } else { 
          message.channel.send("**Please tag someone!**")};
        break;


        default:
       break;
    }


 });


bot.login(config.token);

const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const spam = new Set();
const userDb = require('./users.json');
const {token} = require("./token.json");
const prefix = "/";

bot.on("ready", () => {
    bot.user.setActivity({
      name:"Merry Christmas! || Type /help || linktr.ee/modestbot",
      type:"PLAYING"
    });
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
         frame(":arrow_forward: **Commands**", config.help.join("\n"), "#1771F1"); 
       break;

       case "time":
         let zaman  = new Date();
         frame(":clock1: **Time**", zaman, "#000000");
       break;

        case "spin":
          let rulet = (`<@${message.author.id}> ` + "**Spun at the wheel and got number** " + Math.floor(Math.random() * 37)); //
          frame(":red_circle: **Roulette Wheel**", rulet, "#FF0000");
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
          let dices = (`<@${message.author.id}> **Rolled the dice and this number came:** ` + dicesayi);
          frame(":game_die: **Dice**", dices, "#FF0000");
        break;

        case "legendquest":
          frame(":four_leaf_clover: **Legend Quests**", config.legendquest.join("\n"), "#5BFF62");
        break;

        case "ltitle":
          frame(":green_book: **Legendary Title Quests**", config.ltitle.join("\n"), "#5BFF62");
        break;

        case "ldrag":
          frame(":green_book: **Dragon of Legend Quests**", config.ldrag.join("\n"), "#5BFF62");
        break;

        case "lbot":
          frame(":green_book: **Legendbot-009 Quests**", config.lbot.join("\n"), "#5BFF62");
        break;

        case "lwings":
          frame(":green_book: **Legendary Wings Quests**", config.lwings.join("\n"), "#5BFF62");
        break;

        case "lkatana":
          frame(":green_book: **Legendary Katana Quests**", config.lkatana.join("\n"), "#5BFF62");
        break;

        case "lwhip":
          frame(":green_book: **Whip of Truth Quests**", config.lwhip.join("\n"), "#5BFF62");
        break;

        case "lknight":
          frame(":green_book: **Legendary Dragon Knight's Wings Quests**", config.lknight.join("\n"), "#5BFF62");
        break;

        case "about":         
          const embed = new Discord.MessageEmbed()
          .setTitle(":registered: **About Modest**")         
          .setDescription(":white_small_square:"+config.about.join("\n:white_small_square:"))
          .setColor("#000000")
          .setImage()
          message.channel.send(embed);
        break;

        case "rules":
          frame(":grey_exclamation: **Rules**", config.rules.join("\n"), "#000000");
        break;

        case "invite":
          frame(":e_mail: **Invite**", config.invite.join("\n"), "#000000");
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
          .setDescription("**You killed the <@" + user2.id + ">!**")
          .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/890/995/e1c.gif")
          message.channel.send(kills);
          } else { 
          message.channel.send("**Please tag someone!**")};
        break;

        case "serverinfo":
          (message.content === `${prefix}server`)
          const server = new Discord.MessageEmbed()
          .setTitle(":red_envelope: ***Server Info***")
          .setColor("#FF0000")
          .setDescription(`:small_red_triangle: **Server name:  **` + message.guild.name + `\n` +
          `:small_red_triangle: **Total members:  **` + message.guild.memberCount + `\n` +
          `:small_red_triangle: **Server Region:  **` + message.guild.region + `\n` + `\n` + 
          `**Create Date:  **` + message.guild.createdAt + `\n`);
          message.channel.send(server);
        break;

        case "profileinfo":
          let profile = message.mentions.users.first() ? message.mentions.users.first() : message.author;
          const profile1 = new Discord.MessageEmbed()
          .setTitle(":scroll: ***" + profile.username + "'s Profile***")
          .setColor("#FFC46B")
          .setDescription(`:small_orange_diamond: **Username:  **` + profile.username + `\n` +
          `:small_orange_diamond: **Tag:  **` + profile.discriminator + `\n` +
          `:small_orange_diamond: **ID:  **` + profile.id + `\n` + `\n` +
          `**Create date:  **` + profile.createdAt)  
          message.channel.send(profile1);          
        break;
        
        case "memory":
          const used = process.memoryUsage().heapUsed / 1024 / 1024;
          message.channel.send(`Current memory usage ${Math.round(used * 100) / 100} MB`);
        break;
        
        case "say":            
          const content = args[0] ? args.join(" ") : "***Tip:***\n/say Something."
          message.channel.send(content);
        break;

        default:
       break;
    }


 });


bot.login(token);

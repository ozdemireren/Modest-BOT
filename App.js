const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const spam = new Set();


bot.on("ready", () => {
    console.log("Bot başlatıldı.");
    });

bot.on("message", (message) => {
if (message.author.bot) return;
const mesaj = message.content;
const reply = c => message.channel.send(c);

function cerceve(title, description, color){
  let frame = new Discord.MessageEmbed().setTitle(title).setDescription(description).setColor(color);
  reply(frame);
}

const spamCheck = () => {
    spam.add(message.author.id);
    setTimeout(() => {
      spam.delete(message.author.id);
    }, 1500);
  }
  
  if (spam.has(message.author.id)) return;
  if (mesaj) {
      spamCheck();
    }
  
    switch (mesaj) {
       case "/help":
         cerceve(":question: **__Commands:__**", config.help.join("\n"), "#FF008B"); 
       break;

       case "/time":
         let zaman  = new Date();
         cerceve(":clock1: **__Time:__**", zaman, "#41B619");
       break;

        case "/spin":
          let rulet = (`<@${message.author.id}> ` + "**Spun at the wheel and got number** " + Math.floor(Math.random() * 37)); //
          cerceve(":red_circle: **__Roulette Wheel:__**", rulet, "#F85C50");
        break;
        
        case "/slot":
          const sayı1 = (Math.floor(Math.random()* 4));
          const sayı2 = (Math.floor(Math.random()* 4));
          const sayı3 = (Math.floor(Math.random()* 4));
          const bosluk = (" ");
          const masal = (`<@${message.author.id}> **Spun the slot machine and got these numbers:**`);
          if(sayı1 === sayı2 && sayı2 === sayı3){
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "**Won** at the slots!");
          cerceve(":slot_machine: **__Slot Machine:__**", beep, "#70E852");
          } else {
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "Lost at the slots!");
          cerceve(":slot_machine: **__Slot Machine:__**", beep, "#E20338");}
        break;

        case "/rosh":
          let kelimes = ['Rock', 'Paper', 'Scissors'];
          let secler = kelimes[Math.floor(Math.random() * kelimes.length)];
          let esonuc = (`<@${message.author.id}> **Used his skills and made this hand gesture:** ` + secler);
          cerceve(":scissors: **__Roshambo Game:__**", esonuc, "#17F1D7");
        break;

        case "/dice":
          let dicesayi = (Math.floor(Math.random() * (7 - 1) ) + 1);
          let dices = (`<@${message.author.id}> **Rolled the dice and this number came:** ` + dicesayi);
          cerceve(":game_die: **__Dice:__**", dices, "#2D1457");
        break;

        case "/legendquest":
          cerceve(":woman_mage: **__Legend Quests__**", config.legendquest.join("\n"), "#CA1A8E");
        break;

        case "/ltitle":
          cerceve(":angel: **__Legendary Title Quests__**", config.ltitle.join("\n"), "#A7E541");
        break;

        case "/ldrag":
          cerceve(":dragon: **__Dragon of Legend Quests__**", config.ldrag.join("\n"), "#A7E541");
        break;

        case "/lbot":
          cerceve(":robot: **__Legendbot-009 Quests__**", config.lbot.join("\n"), "A7E541");
        break;

        case "/lwings":
          cerceve(":wind_blowing_face: **__Legendary Wings Quests__**", config.lwings.join("\n"), "A7E541");
        break;

        case "/lkatana":
          cerceve(":crossed_swords: **__Legendary Katana Quests__**", config.lkatana.join("\n"), "A7E541");
        break;

        case "/lwhip":
          cerceve(":dizzy: **__Whip of Truth Quests__**", config.lwhip.join("\n"), "A7E541");
        break;

        case "/lknight":
          cerceve(":maple_leaf: **__Legendary Dragon Knight's Wings Quests__**", config.lknight.join("\n"), "A7E541");
        break;


       default:
       break;
    }


 });


bot.login(config.token);

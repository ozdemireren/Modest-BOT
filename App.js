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
  message.channel.send(frame);
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
         cerceve(":grey_question: **Commands**", config.help.join("\n"), "#000000"); 
       break;

       case "/time":
         let zaman  = new Date();
         cerceve(":clock1: **Time**", zaman, "#000000");
       break;

        case "/spin":
          let rulet = (`<@${message.author.id}> ` + "**Spun at the wheel and got number** " + Math.floor(Math.random() * 37)); //
          cerceve(":white_circle: **Roulette Wheel**", rulet, "#000000");
        break;
        
        case "/slot":
          const sayı1 = (Math.floor(Math.random()* 4));
          const sayı2 = (Math.floor(Math.random()* 4));
          const sayı3 = (Math.floor(Math.random()* 4));
          const bosluk = (" ");
          const masal = (`<@${message.author.id}> **Spun the slot machine and got these numbers:**`);
          if(sayı1 === sayı2 && sayı2 === sayı3){
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "**Won** at the slots!");
          cerceve(":slot_machine: **Slot Machine**", beep, "#5BFF62");
          } else {
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "Lost at the slots!");
          cerceve(":slot_machine: **Slot Machine**", beep, "#E20338");}
        break;

        case "/rosh":
          let kelimes = ['Rock', 'Paper', 'Scissors'];
          let secler = kelimes[Math.floor(Math.random() * kelimes.length)];
          let esonuc = (`<@${message.author.id}> **Used his skills and made this hand gesture:** ` + secler);
          cerceve(":scissors: **Roshambo Game**", esonuc, "#000000");
        break;

        case "/dice":
          let dicesayi = (Math.floor(Math.random() * (7 - 1) ) + 1);
          let dices = (`<@${message.author.id}> **Rolled the dice and this number came:** ` + dicesayi);
          cerceve(":game_die: **Dice**", dices, "#000000");
        break;

        case "/legendquest":
          cerceve(":woman_mage: **Legend Quests**", config.legendquest.join("\n"), "#000000");
        break;

        case "/ltitle":
          cerceve(":angel: **Legendary Title Quests**", config.ltitle.join("\n"), "#000000");
        break;

        case "/ldrag":
          cerceve(":dragon: **Dragon of Legend Quests**", config.ldrag.join("\n"), "#000000");
        break;

        case "/lbot":
          cerceve(":robot: **Legendbot-009 Quests**", config.lbot.join("\n"), "#000000");
        break;

        case "/lwings":
          cerceve(":wind_blowing_face: **Legendary Wings Quests**", config.lwings.join("\n"), "#000000");
        break;

        case "/lkatana":
          cerceve(":crossed_swords: **Legendary Katana Quests**", config.lkatana.join("\n"), "#000000");
        break;

        case "/lwhip":
          cerceve(":dizzy: **Whip of Truth Quests**", config.lwhip.join("\n"), "#000000");
        break;

        case "/lknight":
          cerceve(":maple_leaf: **Legendary Dragon Knight's Wings Quests**", config.lknight.join("\n"), "#000000");
        break;

        case "/growtopia":
          cerceve(":deciduous_tree: **Growtopia Page**", config.growtopia.join("\n"), "#000000");
        break;

        case "/games":
          cerceve(":video_game: **Games Page**", config.games.join("\n"), "#000000");
        break;

        case "/tech":
          cerceve(":wrench: **Technical Page**", config.tech.join("\n"), "#000000");
        break;

        case "/about":
          cerceve(":registered: **About Modest**", config.about.join("\n"), "#000000");
        break;

        case "/rules":
          cerceve(":grey_exclamation: **Rules**", config.rules.join("\n"), "#000000");
        break;
        
        case "/prefix":
          cerceve(":white_heart: **Prefix**", config.prefix.join("\n"), "#000000");
        break;

        case "/oli6":
          let oli = ("Olimpos `6` Seviliyorsunuz -Zaccs :hearts:");
          cerceve("", oli, "#000000");
        break;



       default:
       break;
    }


 });


bot.login(config.token);

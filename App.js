const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NzExMDc0ODQxMzk0MTUxNDY0.XsLs-g.46HCIXp_lcscqddkb46tczvSmgw";
const spam = new Set();


bot.on("ready", () => {
    console.log("Bot başlatıldı.");
    });

bot.on("message", (message) => {
if (message.author.bot) return;
const mesaj = message.content;
const reply = c => message.channel.send(c);

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
          let yardim = ("***/spin :***  Allows you to spin the roulette\n***/time :***  Shows date and time\n***/slot :***  Allows you to spin the Slot Machine\n***/rosh :***  Allows you to play roshambo game");
          reply(yardim);
       break;

       case "/time":
          let zaman  = new Date();
          reply(zaman.toLocaleString());
       break;

        case "/spin":
          let rulet = (`<@${message.author.id}> ` + "***Spun at the wheel and got number***  "+ Math.floor(Math.random() * 37)); //
          reply(rulet);
        break;
        
        case "/slot":
          const sayı1 = (Math.floor(Math.random()* 4));
          const sayı2 = (Math.floor(Math.random()* 4));
          const sayı3 = (Math.floor(Math.random()* 4));
          const bosluk = (" ");
          const masal = (`<@${message.author.id}> ***Spun the slot machine and got these numbers :***  `);
          if(sayı1 === sayı2 && sayı2 === sayı3){
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "***Won*** at the slots!");
          reply(beep);
          } else {
          let beep = (masal + bosluk + sayı1 + bosluk + sayı2 + bosluk + sayı3 + bosluk + `\n<@${message.author.id}> `+ "Lost at the slots!");
          reply(beep);}
        break;

        case "/rosh":
          let kelimes = ['Rock', 'Paper', 'Scissors'];
          let secler = kelimes[Math.floor(Math.random() * kelimes.length)];
          let esonuc = (`<@${message.author.id}> ***Used his skills and made this hand gesture :***  ` + secler);
          reply(esonuc);
        break;


       default:
       break;
    }
    

 });


bot.login(token);

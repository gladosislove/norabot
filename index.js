const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setGame('Sigma') //
  });


  bot.on('message', (message) => {
    if (message.content === '!rules12345') {
        message.delete()
        message.channel.send('beans')
    }
  });



bot.login(process.env.BOT_TOKEN);

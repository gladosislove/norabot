const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setGame('Sigma') //
  });

  List<String> lines = new String(Files.readAllBytes(Paths.get(rules.txt)));

  bot.on('message', (message) => {
    if (message.content === '!rules12345') {
        message.delete()
        message.channel.send(content)
    }
  });



bot.login(process.env.BOT_TOKEN);

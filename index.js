const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.'

//resource creator

bot.on('message', async message => {

    if(message.content.startsWith(PREFIX + 'resource create')) {

        let cont = message.content.slice(PREFIX.length).split(' ');
        let args = cont.slice(2);
        let title = args.slice(2).join(' ');

        if(!title) {
            message.channel.send('Please add a title to the resource before creating it.')
        }

        message.delete()
        message.channel.send(title)

    };

});

bot.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.'

//resource creator

bot.on('message', async message => {

    if(message.content.startsWith(PREFIX + 'resource create')) {

        //this part only allows the original message author to add to the resource and splits the title from the command

        const filter = m => m.author.id === message.author.id;
        let cont = message.content.slice(PREFIX.length).split(' ');
        let args = cont.slice(1);
        let title = args.slice(1).join(' ');

        message.delete()

        //if the user hasn't entered a title, leave

        if(!title) {
            return message.reply('Please add a title to the resource before creating it.');
        }

        message.reply('Please enter a description for this resource.')

        message.channel.awaitMessages(filter, {max: 1}).then(() => {

            bot.on('message', async message => {
                let description = message.content
                message.delete()
                message.reply(description)
            })
        
        });

    };

});

bot.login(process.env.BOT_TOKEN);

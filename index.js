const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.'

//resource creator

bot.on('message', async message => {

    if(message.contentstartsWith(PREFIX + 'resource')) {

        let userResource = message.content.split(' ').slice(1).join(' ');

        if (!message.content.find(', ')) {
            message.channel.send('Hold on a second! Please separate your fields using the "," key.');
            return;
        }

        let userArray = userResource.split(', ')
            

        let embed = new Discord.RichEmbed()
                    .setTitle('New Resource')
                    .setDescription(`Added by @${message.author.tag}`)
                    .setColor('#ffd63c')
                    .addField(userArray[1], userArray[2], true)
                    .setTimestamp();
                
        bot.channels.get('578993596544450561').send({embed});

    };

});

bot.login(process.env.BOT_TOKEN);

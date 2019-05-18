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
            return message.reply('Please add a title to the resource before creating it.').then(msg => {
                msg.delete(5000)
            })
        };

        message.reply('Please enter a description for this resource.')

        message.channel.awaitMessages(filter, {max: 1}).then((collected) => {

            let description = collected.first().content;
            bulkDelete(2); //collected.first().delete()
            message.reply('Please link the resource.')

            message.channel.awaitMessages(filter, {max:1}).then((collected) => {

                let link = collected.first().content;
                bulkDelete(2);
                message.reply('Add some keywords to make this post easier to find.')

                message.channel.awaitMessages(filter, {max:1}).then((collected) => {

                    let tags = collected.first().content;
                    bulkDelete(2);

                    let embed = new Discord.RichEmbed()
                        .setTitle(title)
                        .setDescription(description)
                        .setColor('#fde13f')
                        .addField('Link:', link)
                        .addField('Keywords:', tags)
                        .addField('Added by:', `@${message.author.tag}`)
                        .setTimestamp();

                    bot.channels.get('579285970755518475').send({embed});

                })
            })

        })
    }

});

bot.login(process.env.BOT_TOKEN);

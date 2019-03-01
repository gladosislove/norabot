const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.'

// misc arrays

const flip = ['you flipped a coin, it landed on heads.', 'you flipped a coin, it landed on tails.'];

const eightball = [
    'maybe.', 'nah.', 'I hope so.', 'not today, friend.',
    'perhaps.', 'I think so.', 'I hope not.',
    'I hope so.', 'never!', 'forget about it.', 'really?',
    'sorry, friend.', 'hell yeah.', 'hell no.', 'don\'t get your hopes up',
    'uh... I guess?', 'maybe? Maybe not. It\'s hard to tell.', 'yes..? Maybe?'
];

bot.on('ready', () => {
    bot.user.setGame('your heart <3')
    console.log('Online.')
});

bot.on('message', async message => {

    // avoiding bot spam

    if(message.author.bot) return;

    // flirt command

    if (message.content.startsWith(PREFIX + 'flirt')) {
        message.reply(romance[Math.floor(Math.random()*romance.length)])
    }

    // coin flip command

    if (message.content.startsWith(PREFIX + 'coinflip')) {
        message.reply(flip[Math.floor(Math.random()*flip.length)])
    }

    // 8ball command

    if (message.content.startsWith(PREFIX + '8ball')) {
        let cont = message.content.slice(PREFIX.length).split(' ');
        let args = cont.slice(1);

        if(!args[0]) return message.reply('please ask a full question.');

        message.reply(eightball[Math.floor(Math.random()*eightball.length)])
    }

    // rules command
    
    if (message.content.startsWith(PREFIX + 'rules')) {
        if (!message.member.roles.find('name', 'thot supreme')) {
            return;
        }
        
        var fs = require("fs");
        var rules = fs.readFileSync("rules.txt", {"encoding": "utf-8"});
        message.channel.send(rules)
        
    }

});

bot.login(process.env.BOT_TOKEN);

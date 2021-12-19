require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

const token = process.env.API_TOKEN;

const help = '```\nAvailable command : \n\n \
- !rip : show this message\n\n \
- !fuckMscPro : MSC PRO FUCKING BITCH\n\n \
- !d : react with carafonc emoji\n\n \
\
The bot reacts automatically to the message you send if there is specific messages or emoji\n\n \
```'

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', message => {
    switch (message.content) {
        case '!rip':
            message.reply(help);
            break;
        case '<:carafonc:859449437906010142>':
            message.react('<:carafonc:859449437906010142>');
            break;
        case '!fuckMscPro':
            message.reply('Cheh');
            break;

        case '!d':
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:carafonc:859449437906010142>');
            break;

        case 'J\'ai envie de mourir':
            message.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            break;

        case 'Ah':
            message.reply('https://tenor.com/view/ah-denis-brognart-tf1-koh-lanta-gif-7256068');
            break;

        case 'ah':
            message.reply('https://tenor.com/view/ah-denis-brognart-tf1-koh-lanta-gif-7256068');
            break;

        case 'AH':
            message.reply('https://tenor.com/view/ah-denis-brognart-tf1-koh-lanta-gif-7256068');
            break;

        case 'aled':
            message.reply('<:carafonc:859449437906010142>');
            break;

        case 'Aled':
            message.reply('<:carafonc:859449437906010142>');
            break;

        case 'pull':
            message.channel.send('<:WorryAmusing:884715867659730954>');
            break;

        case 'Pull':
            message.channel.send('<:WorryAmusing:884715867659730954>');
            break;

        case 'ok':
            message.reply('FAUT PAS DIRE OK');
            break;
        
        case 'Ok':
            message.reply('FAUT PAS DIRE OK');
            break;

        case 'Gg':
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            break;

        case 'gg':
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            break;

        case 'ping':
            message.channel.send('<@&890148685068005406>');
            break;

        case 'spam':
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.channel.send('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            message.reply('<:ReallyReallyReally:884715867156398151> ');
            message.react('<:carafonc:859449437906010142>');
            break;
    }
});

bot.login(token);

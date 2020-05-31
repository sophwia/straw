const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')


client.on('ready', () => {
    console.log(`Sophia bot is ${client.user.tag} has logged in `)
      client.user.setActivity('minecwaft', {type: 'playing' });
  });

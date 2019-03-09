const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('hi');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('no')
  }
  if (msg.content === 'pizza shirt') {
    msg.reply(`i have crippling depression, ${msg.author.username}`)
  }
  if (msg.content === 'eric') {
    msg.reply('master is very awake')
  }
  if (msg.content === "how is the animation doing") {
    msg.reply('terrible')
  }
  if (msg.content === 'how is hell') {
    msg.reply('better than work')
  }
  if (msg.content === 'how is work') {
    msg.reply('worse than hell')
  }
  if (msg.content === "how's your family") {
    msg.reply('i havent seen them in years')
  }
  if (msg.content === 'void') {
    msg.reply('https://cdn.discordapp.com/attachments/339115320646041601/554029852995354625/image_6117_1e-Intermediate-Mass-Black-Hole.png')
    msg.reply(`god dammit, look at what you d`)
    msg.reply(`id, ${msg.author.username}, now o`)
    msg.reply('ur messages are scattered through space and time!')
  }
  if (msg.content === 'pizza') {
    msg.reply('yo')
  }
  if (msg.content === 'help') {
    msg.reply ('i asked myself that several years ago, now im stuck here for life.')
  }
  if (msg.content === 'a') {
    msg.reply('e lol')
  }
  if (msg.content === 'famous is gay') {
    msg.reply('no u')
  }
});

client.login(process.env.BOT_TOKEN);

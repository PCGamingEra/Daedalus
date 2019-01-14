// require the discord.js module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
//create a new Discord Client
const client = new Discord.Client();

//when the discord client is ready, run the code and display message ready
client.once('ready', () => {
    console.log('Ready!');
});
//token needed for client login,get this at discordapp.com/developers and put it in config.json
client.login(config.token);

client.on('message', message =>{
  console.log(message.content);
});

if (message.content === 'ping') {
  //send back "Pong" to the channel the message was sent in
  message.channel.send('Pong.');
};

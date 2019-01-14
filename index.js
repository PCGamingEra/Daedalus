// require the discord.js module
const Discord = require('discord.js');
const { prefix, token, gamekey } = require('./config.json');
//create a new Discord Client
const client = new Discord.Client();

//when the discord client is ready, run the code and display message ready
client.once('ready', () => {
    console.log('Ready!');
});
//token needed for client login,get this at discordapp.com/developers and put it in config.json
client.login(token);

client.on('message', message =>{

if (message.content.startsWith(`${prefix}ping`)) {
  //send back "Pong" to the channel the message was sent in
message.channel.send('Pong.');
}
else if (message.content.startsWith(`${prefix}Catherine`)) {
  message.channel.send('Baa Baa');
}
else if (message.content.startsWith(`${prefix}Lambgame`)) {
  message.channel.send(gamekey)
}
else if (message.content.startsWith(`${prefix}Discord`)) {
  message.channel.send('discord')
}
});

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.login('OTEyNTQxNTYzODY1OTM1OTMz.YZxcjw.Clb41g98J618bXCwqOqpBImPMt8')

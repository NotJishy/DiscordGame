const Discord = require('discord.js')
const client = new Discord.Client()

const login = require('./token.json')
const package = require('./package.json')

// Bot enabled
client.once('ready', async () => {

    console.log('-----------------------------------------------------------------\n\n' +
                'Bot is now online!\n' +
                `Total Guilds: ${client.guilds.cache.size}\n` +
                new Date() + '\n\n' +
                '-----------------------------------------------------------------')

})

// Bot joins guild
client.on('guildCreate', (guild) => {
console.log('----------------------------------------------------------------- \n\n' +
            '                     NEW GUILD JOINED                              \n' +
            `Guild Name: ${guild.name}\n` +
            `Guild ID: ${guild.id}\n\n` +
            `Total Guilds: ${client.guilds.cache.size}\n` +
            `${new Date()}\n\n` +
            '-----------------------------------------------------------------')
})
  
// Bot leaves guild
client.on('guildDelete', (guild) => {
 console.log('----------------------------------------------------------------- \n\n' +
            '                        GUILD REMOVED                             \n' +
            `Guild Name: ${guild.name}\n` +
            `Guild ID: ${guild.id}\n\n` +
            `Total Guilds: ${client.guilds.cache.size}\n` +
            `${new Date()}\n\n` +
            '-----------------------------------------------------------------')
})

// Message sent
client.on('message', (msg) => {
    // CODE HERE
})

client.login(login.token)
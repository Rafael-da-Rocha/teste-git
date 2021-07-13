const discord = require ('discord.js')  
const envs = require ('./envs.json')
const client = new discord.Client()

client.login(envs.API_Key)

client.on('message', (mensagem) => {
    if (mensagem.content.startsWith(envs.prefix)){
        mensagem.channel.send('Tô lendo sua mensagem')
    }
}

)
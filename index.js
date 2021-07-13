const discord = require ('discord.js')  
const envs = require ('./envs.json')
const client = new discord.Client()

client.login(envs.API_Key)

client.on ('ready', ()=>{
    let txtReady = `Iniciando sistema em ${new Date ()}\n`
    txtReady += `usando o Token ${envs.API_Key}\n`
    txtReady += `Conectando-se com o Servidor do Discord`;
    console.log(txtReady)

})

client.on('message', (mensagem) => {
    if (mensagem.content.startsWith(envs.prefix)){
        mensagem.channel.send('Tô lendo sua mensagem')
    }
}

)
const Discord = require('discord.js');
// const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const token = process.env.token;

// Requires all dependencies
bot.on("ready", async()=>{    
    bot.user.setActivity("Tacticool with bots", {type: "PLAYING"});    
    console.log(`${bot.user.username} está online!`)
});

//bot.on("guildCreate", guild => {
//    // This event triggers when the bot joins a guild.
//    console.log(`New guild joined: //${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
//    bot.user.setActivity(`Serving $//{bot.guilds.size} servers`);
//});//
//  //
//bot.on("guildDelete", guild => {//
//    // this event triggers when the// bot is removed from a guild.
//    console.log(`I have been remove//d from: ${guild.name} (id: ${guild.id})`);
//    bot.user.setActivity(`Serving $//{bot.guilds.size} servers`);
//});//


bot.on("message", (message) => {
    
    const saludos = [
        "buenos d",
        "Buenos d",
        "buenos d",
        "buen d",
        "buen d"];

    const palabrotas = [
        "cabron", "Cabron", "Cabrón", "cabrón", "cabroncete",
        "Coño", "coño", 
        "Mierda", "mierda", 
        "Puta", "puta", 
        "chocho", "Chocho", 
        "joder", "Joder", 
        "cago", "Cago", 
        "culo", "Culo", 
        "Follar", "follar"];
    
    const risas = [
        "je je", "jeje", 
        "ja ja", "jaja",
        "jo jo", "jojo",
        "ji ji", "jiji"];
    
    const me = ["bot", "Bot"];

    if(palabrotas.some(word => message.content.includes(word))) {
        message.reply("Cuidadito con el hocico, puede haber menores en el chat!!");
        // Or just do message.delete();
    }

    if(me.some(word => message.content.includes(word))) {
        message.channel.send(`Sospecho que estáis hablando de mí. ${message.member}, tengo que mejorar aún 😥`);
    }
   
    if (message.content.startsWith("hola") || message.content.startsWith("Hola") || message.content.startsWith("ola")) {
      var x = Math.floor((Math.random() * 10) + 1);

      switch (x) {
        case 1:   
            message.reply(`Me alegra verte de nuevo!!`);
            message.react('👋');           
            break;
        case 2:    
            message.reply(`Se te echaba de menos por aquí.`);
            message.react('👋');
            break;
        case 3:   
            message.reply(`Chaval, que tal.`);
            message.react('😎');           
            break;
        case 4:    
            message.reply(`Eso es un saludo?, pues Hola.`);
            message.react('🤙');
            break;    
        case 5:              
            message.reply(`Hola que tal!!`);
            message.react('👋');
            break;
        case 6:    
            message.reply(`Hola, te echábamos de menos.`);
            message.react('🤙');
            break;
        case 7:   
            message.reply(`Saludos!!`);
            message.react('🤙');
            break;
        case 8:    
            message.reply(`Que hay!!`);
            message.react('🤙');
            break;
        case 9:              
            message.reply(`Muy buenas!!`);
            message.react('🤙');
            break;
        case 10:    
            message.reply(`El clan te saluda también.`);
            message.react('😎');
            break;
      }
    }

    if (message.content.startsWith("que tal") || message.content.startsWith("Que tal")) {
        message.channel.send("Que hay chaval!");        
    }

    if (message.content.startsWith("ayuda") || message.content.startsWith("Ayuda")) {
        message.channel.send(`Comando no disponible ${message.member}, de momento.`);
    }

    if (message.content.startsWith("gamemode") || 
        message.content.startsWith("codigos") || 
        message.content.startsWith("CODIGOS") || 
        message.content.startsWith("Códigos")) {

        message.channel.send(`Usa estos códigos para seleccionar un mapa y un modo de juego ${message.member}`);
        message.channel.send("dm depot — Old Depot (Deathmatch)\n" +
                                "dm tlensk — Tlensk City (Deathmatch)\n"+
                                "dm area — Area 39 (Deathmatch)\n"+
                                "dm ship — Cargo Ship (Deathmatch)\n"+
                                "dm station — McReady Station (Deathmatch)\n"+
                                "dm sky — Skyscraper (Deathmatch)\n"+
                                "ct depot — Old Depot (Control)\n"+
                                "ct area — Area 39 (Control)");
    }
    
    if (message.content.startsWith("op-comunes") || message.content.startsWith("Op-comunes") ) {
        message.channel.send(
                            "Operadores Comunes\n" +
                            "============================================\n" +
                            "Nombre     Salud   Combate Características\n" +
                            "============================================\n" +
                            "Rookie     1,400   None\n" +
                            "Hawk       1,900   +20%    movement speed and aim speed\n" +
                            "Jason      2,100   +60%    clip capacity and reload speed\n" +
                            "Boris      2,000   -20%    any damage taken\n" +
                            "Thor       2,000   -20%    bullet spread\n" +
                            "Rick       1,900   +25%    fire rate\n" +
                            "Mishka     2,000   -60%    melee damage taken Quick cooldown of dash");
    }
});

bot.login(token).catch(err => console.log("Err en el bot al intentar hacer login: " +err));


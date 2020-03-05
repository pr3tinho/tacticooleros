const Discord = require('discord.js');
const embed = require('discord-embed-maker');

var randomBinary = require('random-binary');
var randomChar = require('random-char');

// const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const token = "";

bot.on("ready", async() => {
    //bot.user.setPresence({
        //game: { 
        //    name: `Tacticool with Pr3to`,
        //    type: 'STREAMING',
        //    url: "https://www.twitch.tv/tacticoolofficial"
        //},
        //status: 'idle'        
    //})
    bot.user.setActivity("Tacticool", { type: "STREAMING", url: "https://www.youtube.com/watch?v=ZIFrHWm3VYg" })
    console.log(`${bot.user.username} is online!!`);
});


bot.on("message", (message) => {
    
    const responseObject = {
        "je je": `Muy buena ${message.member} je je.`,
        "jeje": `Q ${message.member} je je.`,
        "ja ja": "",
        "jaja" : ""
    };

    const saludos = [
        "Buenos dias",
        "buenos días",
        "Buenos días",
        "buenos dias",
        "buen dia",
        "buen día",
        "Hola",
        "hola",
        "Hola"];

    const palabrotas = [        
        "hijoput", "Hijoput", 
        "Mierda", "mierda", 
        "Puta", "puta", 
        "chocho", "Chocho", 
        "joder", "Joder", 
        "cago", "Cago", 
        "culo", "Culo", 
        "Follar", "follar"];
	
	const mapas = {
		"dm depot"	: "Old Depot (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/0/01/Old_Depot_Deathmatch.png?version=fd3b526aaf7e598f7047b97f3a822664",
        "dm tlensk"	: "Tlensk City (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/f/fe/Tlensk_Deathmatch.png?version=fd3a7ea84e9486a431695403214ffe04",
        "dm area"	: "Area 39 (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/7/71/Area_39_Deathmatch.png?version=1881f80543e86e7c785cc6f5a12223d0",
        "dm ship"	: "Cargo Ship (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/4/45/Cargo_Ship_Deathmatch.png?version=87f4d57e332927c33a27d7393b23d18a",
        "dm station": "McReady Station (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/7/78/McReady_Deathmatch.png?version=e4e4d511d29a60988b950c2439ffa395",
        "dm sky"	: "Skyscraper (Deathmatch) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/d/d3/Skyscraper_Deathmatch.png?version=c14dcd79e1e3297b9fa11a05ef01f2f0",
        "ct depot"	: "Old Depot (Control) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/c/c4/Old_Depot_Control.png?version=3f460715750601e99d6e1b26184ca9d6",
        "ct area"	: "Area 39 (Control) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/e/ed/Area_39_Control.png?version=80bcc90b98cf6b910f9ae4e98c3cbfe5",
		"ct tlensk"	: "Tlensk City (Control) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/d/d1/Tlensk_Control.png?version=4ab89658384d27ecb5074614490dca52",
		"ct station": "McReady Station (Control) https://gamepedia.cursecdn.com/tacticool_gamepedia_en/9/9e/McReady_Control.png?version=7d0abbbfb1860d8d1ce9ae5ce343e75c"};
		
	const operadores = {
		"op-snek":	"Operador Épico Snek\n\n" +
					"Salud Base: 4,300\n" +
					"Habilidades de combate: +30% de velocidad de movimiento y velocidad de puntería, +10% rango de visión.\n" +
					"Especial Único: :airstrike: Ataque Aéreo.\n\n" +
					"Niveles de salud\n" +
					"Nivel 1: 4,300\n" + 
					"Nivel 2: 4,515\n" +
					"Nivel 3: 4,740\n" +
					"Nivel 4: 4,980\n" +
					"Nivel 5: 5,230\n" +
					"Nivel 6: 5,490\n" +
					"Nivel 7: 5,765\n" +
					"Nivel 8: 6,055\n" +
					"Nivel 9: 6,360\n" +
					"Nivel 10: 6,680\n"	+
					"Nivel 11: 7,015\n"	+
					"Nivel 12: 7,365\n",
		"op-dutch":	"Operador Épico Dutch\n\n" +
					"Salud Base: 4,100\n" +
					"Habilidades de combate: +35 cadencia de fuego, + 35% de capacidad de clip.\n" +
					"Especial Único: :rtfm: RTFM.\n\n" +
					"Niveles de salud\n" +
					"Nivel 1: 4,100\n" + 
					"Nivel 2: 4,305\n" +
					"Nivel 3: 4,520\n" +
					"Nivel 4: 4,745\n" +
					"Nivel 5: 4,980\n" +
					"Nivel 6: 5,230\n" +
					"Nivel 7: 5,490\n" +
					"Nivel 8: 5,765\n" +
					"Nivel 9: 6,055\n" +
					"Nivel 10: 6,355\n"	+
					"Nivel 11: 6,675\n"	+
					"Nivel 12: 7,010\n"					
	};	
    
    const me = ["!bicho", "!Bicho"];

    const developer = ["preto", "Preto"];


    if (message.content.startsWith("userinfo")) {
        let embed = new Discord.RichEmbed()
            embed.setAuthor(message.author.username)
            embed.setDescription("Information about yourself")
            embed.setColor("#FF00FF")
            embed.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            embed.addField("ID", message.author.id)
            embed.addField("Nickname:", `${message.nickname !== null ? `${message.nickname}` : 'None'}`, true)
            embed.addField("Created At", message.author.createdAt)
            embed.addField("You Joined the server at", message.member.joinedAt)
            embed.setFooter("Generated By The Boys Penthouse with data from Discord")

            message.channel.send({embed});            
    }


    if(developer.some(word => message.content.includes(word))) {
        
        var x = Math.floor((Math.random() * 2) + 1);

        switch (x) {
            case 1:
                message.reply("Si preguntáis por [ P r e t o ], estos días estará liado!!");
                break;        
            case 2:
                message.reply("[ P r e t o ] estará muy liado estos días, la nueva UPDATE!!, le informaré de vuestros mensajes.");
                break;
        }                
    }

    if(palabrotas.some(word => message.content.includes(word))) {
        
        var x = Math.floor((Math.random() * 2) + 1);

        switch (x) {
            case 1:
                message.reply("En el chat no se permiten menores de 13 años.\nhttps://discordapp.com/terms");
                break;        
            case 2:
                message.reply("Cuidadito con el hocico!!\nhttps://discordapp.com/terms");
                break;
        }                
    }

    if(me.some(word => message.content.includes(word))) {
                
        switch (x) {
            case 1:   
                message.channel.send(`Sospecho que hablas de mí. ${message.member} 😥, te puedo ayudar?`);        
                break;
            case 2:    
                message.channel.send(`[ P r e t o ] aún tiene que mejorar mis habilidades. ${message.member} 😥`);
                break;
            case 3:   
                message.reply(`Es normal que esperéis mucho de nosotros los bichos. ${message.member}`);                
                break;
            case 4:    
                message.channel.send(`Creo que estamos entendiendo el comportamiento humano. ${message.member}, esta generación dominará el mundo.`);    
                break;    
            case 5:              
                message.reply(`Lo que ves es lo que obtienes, no lo olvides. CAPISCE!!`);                
            case 6:  
                message.reply(`Mi código necesita mejora pero es cuestión de tiempo, no te abogies tío.`);                
                break;           
            case 7:  
                message.reply(`No discutáis conmigo por favor, que soy más listo que Boby, controlo los hilos de este channel. 😎`);                
                break;           
          }        
    }
	
	if(mapas[message.content]) {
		message.channel.send(mapas[message.content]);
	}
	
	if(operadores[message.content]) {
		message.channel.send(operadores[message.content]);
	}
   
    // (message.content.startsWith("hola") || message.content.startsWith("Hola") || message.content.startsWith("ola"))
    if(saludos.some(word => message.content.includes(word))) {
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
            message.reply(`[H o l a] que tal!!`);
            message.react('👋');
            break;
        case 6:    
            message.reply(`[H o l a!!], te echábamos de menos.`);
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

    if (message.content.startsWith("code") || message.content.startsWith("Code")) {
        
        var x = Math.floor((Math.random() * 3) + 1);

        switch (x) {
            case 1:                
                message.channel.send(`Binary 4 digits ${randomBinary(4)}`);
                break;
            case 2:                
                message.channel.send(`Binary 8 digits ${randomBinary(8)}`);
                break;
            case 3:   
                message.channel.send(`Binary 16 digits ${randomBinary(16)}`);
                break;
        }        
    }

    if (message.content.startsWith("comandos") || message.content.startsWith("Comandos")) {
        
        const embed = new Discord.RichEmbed()

        .setColor('#0099ff')
        .setTitle('C O M A N D O S  D I S P O N I B L E S')
        .setURL('https://discord.gg/jzq9fHr')
        .setAuthor('Pr3to', 'https://i.imgur.com/cqekMXy.jpg', 'https://discord.js.org')
        .setDescription('Lista de comandos disponibles de gobot')
        .setThumbnail('https://mobilegamerhub.com/brawlstars/wp-content/uploads/sites/10/2017/06/Crow_White-Crow-177x300.png')
        .addField('gamemode', 'Muestra una lista de códigos para configurar una partida personalizada eligiendo un mapa')        
        .addField('op-comunes', ' Muestra la información básica de los Operadores comunes.', true)
        .addBlankField()
        .addField('op-no-comunes', '...', false)
        .addField('op-epicos', '...', false)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Bicho is cool', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send({embed});
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
                            "Nombre\t\t\tSalud\t\t\tCombate\t\t\tCaracterísticas\n" +
                            "============================================\n" +
                            "Rookie\t\t\t1,400\t\t\tNone\n" +
                            "Hawk\t\t\t1,900\t\t\t+20%\t\t\tmovement speed and aim speed\n" +
                            "Jason\t\t\t2,100\t\t\t+60%\t\t\tclip capacity and reload speed\n" +
                            "Boris\t\t\t2,000\t\t\t-20%\t\t\tany damage taken\n" +
                            "Thor\t\t\t2,000\t\t\t-20%\t\t\tbullet spread\n" +
                            "Rick\t\t\t1,900\t\t\t+25%\t\t\tfire rate\n" +
                            "Mishka\t\t\t2,000\t\t\t-60%\t\t\tmelee damage taken Quick cooldown of dash");
    }
});

bot.login(token).catch(err => console.log("Error en el bot al intentar hacer login: " +err));


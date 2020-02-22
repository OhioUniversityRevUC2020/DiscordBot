var Discord = require('discord.js');
var auth = require('./auth.json');
var jsonfile = require('jsonfile');
var file = "teams.json"
var fs = require('fs');
var rp = require('request-promise');
// We are not affiliated with OU ACM

var client = new Discord.Client();


client.on ("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    console.log(message.author.username);
    var result = "";
    console.log("Message Received!");
    let parameters = message.content.split(" ");
    console.log(parameters[0]);
    length = parameters.length;
    switch(parameters[0].toLowerCase()){
        case "!mc":
            if(length >= 2){
                switch(parameters[1].toLowerCase()){
                    case "start":

                        break;
                    case "link":
                        console.log(link(message, "Please reply with your username: "));
                        break;
                    case "unlink":

                        break;
                }
            }else{
                message.channel.send("!mc - Display this help page\n!mc start - Start your Minecraft server" +
                "\n!mc link - Link your account to your Discord Id\n!mc create - Instantly boot up a vanilla minecraft server" +
                "\n!mc credits - Display your remaining credits before you git fucked");
            }
            break;
        default: 
    }
});

function link(message, script){
    message.author.send(script);
    name = client.on("message", (message) => {
        return message;
    });
    var options = {
        method: 'POST',
        uri: 'https://google.com/user/link',
        body: { 
            userId: message.author.id,
            minecraftName: name
        }
    }
    rp(options);
    return n;
}

client.login(auth.token);
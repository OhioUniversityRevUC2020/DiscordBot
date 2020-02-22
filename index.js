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
            switch(parameters[1].toLowerCase()){
                case "tinybrain":
                    console.log(typeof message.guild.id);
                    break;
                case "link":
                    // Check if user input a username
                    if (parameters.length > 2) {
                        var username = parameters[2];
                        var options = {
                            uri: "https://www.google.com", // change to /user/link
                            XDiscordServer: message.guild.id,
                            method: "POST",
                            userId: message.author.id,
                            minecraftName: username
                        };

                        rp(options)
                            .then(function () {
                                message.channel.send("Howdy World!");
                            })
                            .catch(function (err) {
                                message.channel.send("Oh god oH fuck");
                            });
                    } else {
                        message.reply("Usage: !mc link <username>\nUse !mc for help.");
                    }
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

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
            break;

    }
});

function messag(message, script){
    message.author.send(script);

    return "Dj73960";
}

client.login(auth.token);

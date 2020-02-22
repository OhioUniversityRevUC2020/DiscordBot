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
            if (parameters.length > 1) {
                switch(parameters[1].toLowerCase()){
                    case "tinybrain":
                        message.channel.send("@Dj73960");
                        break;
                    case "link":
                        if (parameters.length === 3) {
                            link(message, parameters[2]);
                        } else {
                            message.reply("Usage: !mc link <username>\nUse !mc or !mc help for help.");
                        }
                        break;
                    case "unlink":
                        if (parameters.length === 3) {
                            unlink(message, parameters[2]);
                        } else {
                            message.reply("Usage: !mc unlink <username>");
                        }
                        break;
                    case "create":
                        if (parameters.length > 2) {
                            create(message, parameters.slice(3).join(" "));
                        } else {
                            message.reply("Usage: !mc create <server name>\nUse !mc or !mc help for help.");
                        }
                        break;
                    case "start":
                        if (parameters.length > 2) {
                            message.channel.send(parameters.slice(3).join(" "));
                            start(message, parameters.slice(3).join(" "));
                        } else {
                            message.reply("Usage: !mc create <server name>\nUse !mc or !mc help for help.");
                        }
                        break;
                    case "credits":
                        if (parameters.length === 2) {
                            credits(message, message.author.id);
                        } else {
                            message.reply("Usage: !mc create <server name>\nUse !mc or !mc help for help.");
                        }
                        break;
                    case "help":
                        help(message);
                        break;
                }
            } else {
                help(message);
            }
            break;
        default:
    }
});

function link(message, username){
    // Check if user input a username
    var options = {
        uri: "https://35.222.79.226/user/link",
        XDiscordServer: message.guild.id,
        method: "POST",
        userId: message.author.id,
        minecraftName: username,
        json: true
    };

    rp(options)
        .then(function (body) {
            message.reply(message.content);
        })
        .catch(function (err) {
            message.channel.send("Error using " + message.content);
        });
}

function unlink(message, username) {
    // Check if user input a username
    var options = {
        uri: "https://35.222.79.226/user/unlink",
        XDiscordServer: message.guild.id,
        method: "POST",
        userId: message.author.id,
        minecraftName: username,
        json: true
    };

    rp(options)
        .then(function (body) {
            message.reply(message.content);
        })
        .catch(function (err) {
            message.channel.send("Error using " + message.content);
        });
}

function create(message, serverName) {
    var options = {
        uri: "https://35.222.79.226/server/create",
        XDiscordServer: message.guild.id,
        method: "POST",
        name: serverName,
        creatorId: message.author.id,
        json: true
    };

    rp(options)
        .then(function (body) {
            message.reply(message.content);
        })
        .catch(function (err) {
            message.channel.send("Error using " + message.content);
        });
}

function start(message, serverName) {
    var options = {
        uri: "https://35.222.79.226/server/start",
        XDiscordServer: message.guild.id,
        method: "POST",
        name: serverName,
        json: true;
    };

    rp(options)
        .then(function (body) {
            message.reply(message.content);
        })
        .catch(function (err) {
            message.channel.send("Error using " + message.content);
        });
}

function credits(message, userId) {
    var options = {
        uri: "https://35.222.79.226/user/credits?id=" + userId,
        XDiscordServer: message.guild.id,
        json: true
    };

    rp(options)
        .then(function (body) {
            message.reply(message.content);
        })
        .catch(function (err) {
            message.channel.send("Error using " + message.content);
        });
}

function help(message) {
    message.channel.send("!mc - Display this help page\n!mc start - Start your Minecraft server" +
                         "\n!mc link - Link your account to your Discord Id\n!mc create - Instantly boot up a vanilla minecraft server" +
                         "\n!mc credits - Display your remaining credits before you git fucked");
}

client.login(auth.token);

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
    console.log(message.author.id);
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
                        message.channel.send("<@447895186010275850>");
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
                            start(message, parameters.slice(2).join(" "));
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

async function link(message, username){
    // Check if user input a username
    var options = {
        uri: "http://api.rev-uc-2020.asq.digital/user/link",
        headers: {
            "X-Discord-Server": message.guild.id,
        },
        method: "POST",
        body: {
            userId: message.author.id,
            minecraftName: username,
        },
        json: true
    };

    try {
        const body = await rp(options);
        message.reply(message.content);
    } catch (e) {
        message.channel.send("Error using " + message.content);
    }
}

async function unlink(message, username) {
    // Check if user input a username
    var options = {
        uri: "http://api.rev-uc-2020.asq.digital/user/unlink",
        headers: {
            "X-Discord-Server": message.guild.id
        },
        method: "POST",
        body: {
            userId: message.author.id,
            minecraftName: username
        },
        json: true
    };

    try {
        const body = await rp(options);
        message.reply(message.content);
    } catch (e) {
        message.channel.send("Error using " + message.content);
    }
}

async function create(message, serverName) {
    var options = {
        uri: "http://api.rev-uc-2020.asq.digital/server/create",
        headers: {
            "X-Discord-Server": message.guild.id
        },
        method: "POST",
        body: {
            name: serverName,
            creatorId: message.author.id
        },
        json: true
    };

    try {
        const body = await rp(options);
        message.reply(message.content);
    } catch (e) {
        message.channel.send("Error using " + message.content);
    }
}

async function start(message, serverName) {
    var options = {
        uri: "http://api.rev-uc-2020.asq.digital/server/start",
        headers: {
            "X-Discord-Server": message.guild.id
        },
        method: "POST",
        body: {
            name: serverName
        },
        json: true
    };

    try {
        const body = await rp(options);
        message.reply(message.content);
    } catch (e) {
        message.channel.send("Error using " + message.content);
    }
}

async function credits(message, userId) {
    var options = {
        uri: "http://api.rev-uc-2020.asq.digital/user/credits?id=" + userId,
        headers: {
            "X-Discord-Server": message.guild.id
        },
        json: true
    };

    try {
        const body = await rp(options);
        message.reply(message.content);
    } catch (e) {
        message.channel.send("Error using " + message.content);
    }
}

async function help(message) {
    message.channel.send("!mc - Display this help page\n!mc start - Start your Minecraft server" +
                         "\n!mc link - Link your account to your Discord Id\n!mc create - Instantly boot up a vanilla minecraft server" +
                         "\n!mc credits - Display your remaining credits before you git fucked");
}

client.login(auth.token);

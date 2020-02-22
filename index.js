var Discord = require('discord.js');
var auth = require('./auth.json');
var jsonfile = require('jsonfile');
var file = "teams.json"
var fs = require('fs');
// We are not affiliated with OU ACM

var client = new Discord.Client();


client.on ("ready", () => {
    console.log("Ready!");
});



client.on("message", (message) => {
    console.log(message.content);
    var result = "";
    console.log("Message Received!");
    let parameters = message.content.split(" ");
    console.log(parameters[0]);
    switch(parameters[0].toLowerCase()){
        case "hello":
            message.reply("World");
            break;

    }
});

client.login(auth.token);
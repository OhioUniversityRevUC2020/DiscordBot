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
    console.log(message.author.username);
    var result = "";
    console.log("Message Received!");
    let parameters = message.content.split(" ");
    console.log(parameters[0]);
    switch(parameters[0].toLowerCase()){
        case "!mc":
            switch(parameters[1].toLowerCase()){
                case "start":

                    break;
                case "link":
                    user = messag(message, "Please reply with your username: ");
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
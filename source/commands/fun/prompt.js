const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
let category = message.content.toLowerCase().substring(8);
//declare objects
var animals = {
   0: "Tiger",
   1: "Dog",
   2: "Cat",
   3: "Eagle",
   4: "Bear",
   5: "Monkey",
};
var bodyParts = {
   0: "Eyes",
   1: "Ears",
   2: "Nose",
   3: "Mouth",
   4: "Hands",
   5: "Torso",
};
 var buildings = {
    0: "2 Story House",
    1: "Apartment Complex",
    2: "School",
    3: "Church",
    4: "Castle",
    5: "Eiffel Tower",
 };
 var expressions = {
   0: "Happy",
   1: "Surprised",
    2: "Sad",
    3: "Angry",
    4: "Disgusted",
    5: "Content",
 };
 var plants = {
     0: "Rose",
     1: "Pine Tree",
     2: "Palm Tree",
     3: "Bush",
     4: "Hedge",
     5: "Dandelion",
}; 
//Random item within object- animals
if (category == "animals") {
function animal() {
    return(animals [Object.keys(animals)[Math.floor(Math.random() * Object.keys(animals).length)]])
};
var response1 = animal();
const promptEmbed = new discord.MessageEmbed()
    .setTitle(response1)
    .setColor("GREEN");
    message.channel.send(promptEmbed);
}
//Random item within object- bodyParts
else if(category == "body parts") {
function body() {
    return (bodyParts [Object.keys(bodyParts)[Math.floor(Math.random() * Object.keys(bodyParts).length)]])
};
var response2 = body();
const promptEmbed = new discord.MessageEmbed()
    .setTitle(response2)
    .setColor("GREEN");
    message.channel.send(promptEmbed);
}
//Random item within object- buildings
else if(category == "buildings") {
function building() {
    return (buildings [Object.keys(buildings)[Math.floor(Math.random() * Object.keys(buildings).length)]])
};
var response3 = building();
const promptEmbed = new discord.MessageEmbed()
    .setTitle(response3)
    .setColor("GREEN");
    message.channel.send(promptEmbed);
}
//Random item within object- expressions
else if(category == "expressions") {
function expression() {
    return (expressions [Object.keys(expressions)[Math.floor(Math.random() * Object.keys(expressions).length)]])
};
var response4 = expression();
const promptEmbed = new discord.MessageEmbed()
    .setTitle(response4)
    .setColor("GREEN");
    message.channel.send(promptEmbed);
}
//Random item within object- plants
else if(category == "plants") {
function plant() {
    return (plants [Object.keys(plants)[Math.floor(Math.random() * Object.keys(plants).length)]])
};
var response5 = plant();
const promptEmbed = new discord.MessageEmbed()
    .setTitle(response5)
    .setColor("GREEN");
    message.channel.send(promptEmbed);
}
//error
else {
    message.delete({timeout: 5000})
    message.channel.send("Invalid Prompt. Please type animals, body parts, buildings, expressions, or plants after the prompt command.")
    .then(msg => msg.delete({timeout: 5000}))
    .catch(console.error);
}
};
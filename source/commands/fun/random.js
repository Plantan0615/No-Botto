const axios = require("axios");
const {MessageEmbed} = require("discord.js");
module.exports.run = async(client, message, args) => {
let request = message.content.toLowerCase().substring(8);
//meme
if (request === "meme"){
    const url = "https://some-random-api.ml/meme"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const memeEmbed = new MessageEmbed()
        .setTitle("Random Meme")
        .setColor("BLURPLE")
        .setDescription(data.caption)
        .setImage(data.image);
    await message.channel.send(memeEmbed)
    }
//cat image
else if (request === "cat"){
    const url = "https://some-random-api.ml/img/cat"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const catEmbed = new MessageEmbed()
        .setTitle("Random Cat Image")
        .setColor("BLURPLE")
        .setDescription("A cat")
        .setImage(data.link);
    await message.channel.send(catEmbed)
    }
//dog image
else if (request === "dog"){
    const url = "https://some-random-api.ml/img/dog"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const dogEmbed = new MessageEmbed()
        .setTitle("Random Dog Image")
        .setColor("BLURPLE")
        .setDescription("A dog")
        .setImage(data.link);
    await message.channel.send(dogEmbed)
    }
//panda image
else if (request === "panda"){
    const url = "https://some-random-api.ml/img/panda"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const pandaEmbed = new MessageEmbed()
        .setTitle("Random Panda Image")
        .setColor("BLURPLE")
        .setDescription("A panda")
        .setImage(data.link);
    await message.channel.send(pandaEmbed)
    }
//red panda image
else if (request === "red panda"){
    const url = "https://some-random-api.ml/img/red_panda"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const redPandaEmbed = new MessageEmbed()
        .setTitle("Random Red Panda Image")
        .setColor("BLURPLE")
        .setDescription("A red panda")
        .setImage(data.link);
    await message.channel.send(redPandaEmbed)
    }
//birb image
else if (request === "birb"){
    const url = "https://some-random-api.ml/img/birb"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const birbEmbed = new MessageEmbed()
        .setTitle("Random Bird Image")
        .setColor("BLURPLE")
        .setDescription("A birb")
        .setImage(data.link);
    await message.channel.send(birbEmbed)
    }
//koala image
else if (request === "koala"){
    const url = "https://some-random-api.ml/img/koala"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const koalaEmbed = new MessageEmbed()
        .setTitle("Random Koala Image")
        .setColor("BLURPLE")
        .setDescription("A koala")
        .setImage(data.link);
    await message.channel.send(koalaEmbed)
    }
//fox image
else if (request === "fox"){
    const url = "https://some-random-api.ml/img/fox"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const foxEmbed = new MessageEmbed()
        .setTitle("Random Fox Image")
        .setColor("BLURPLE")
        .setDescription("A fox")
        .setImage(data.link);
    await message.channel.send(foxEmbed)
    }
//pikachu image
else if (request === "pikachu"){
    const url = "https://some-random-api.ml/img/pikachu"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const pikachuEmbed = new MessageEmbed()
        .setTitle("Random Pikachu Image")
        .setColor("BLURPLE")
        .setDescription("A wild Pikachu has appeared!")
        .setImage(data.link);
    await message.channel.send(pikachuEmbed)
    }
//winking gif
else if (request === "wink"){
    const url = "https://some-random-api.ml/animu/wink"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const winkEmbed = new MessageEmbed()
        .setTitle("Random Winking GIF")
        .setColor("BLURPLE")
        .setDescription("Wink wink. Nudge nudge.")
        .setImage(data.link);
    await message.channel.send(winkEmbed)
    }
//pat gif
else if (request === "pat"){
    const url = "https://some-random-api.ml/animu/pat"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const patEmbed = new MessageEmbed()
        .setTitle("Random Pat Pat GIF")
        .setColor("BLURPLE")
        .setDescription("Pat. Pat...... This feels wrong.")
        .setImage(data.link);
    await message.channel.send(patEmbed)
    }
//hug gif
else if (request === "hug"){
    const url = "https://some-random-api.ml/animu/hug"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const hugEmbed = new MessageEmbed()
        .setTitle("Random Hug GIF")
        .setColor("BLURPLE")
        .setDescription("I give you my virtual hugs.")
        .setImage(data.link);
    await message.channel.send(hugEmbed)
    }
//dog fact
else if (request === "dog fact"){
    const url = "https://some-random-api.ml/facts/dog"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const dogFactEmbed = new MessageEmbed()
        .setTitle("Random Dog Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about dogs.")
        .addField("You might not know:", data.fact);
    await message.channel.send(dogFactEmbed)
    }
//cat fact
else if (request === "cat fact"){
    const url = "https://some-random-api.ml/facts/cat"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const catFactEmbed = new MessageEmbed()
        .setTitle("Random Cat Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about cats.")
        .addField("You might not know:", data.fact);
    await message.channel.send(catFactEmbed)
    }
//panda fact
else if (request === "panda fact"){
    const url = "https://some-random-api.ml/facts/panda"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const pandaFactEmbed = new MessageEmbed()
        .setTitle("Random Panda Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about pandas.")
        .addField("You might not know:", data.fact);
    await message.channel.send(pandaFactEmbed)
    }
//fox fact
else if (request === "fox fact"){
    const url = "https://some-random-api.ml/facts/fox"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const foxFactEmbed = new MessageEmbed()
        .setTitle("Random Fox Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about foxes.")
        .addField("You might not know:", data.fact);
    await message.channel.send(foxFactEmbed)
    }
//bird fact
else if (request === "bird fact"){
    const url = "https://some-random-api.ml/facts/bird"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const birdFactEmbed = new MessageEmbed()
        .setTitle("Random Bird Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about birds.")
        .addField("You might not know:", data.fact);
    await message.channel.send(birdFactEmbed)
    }
//koala fact
else if (request === "koala fact"){
    const url = "https://some-random-api.ml/facts/koala"
    let data, response;
    try{response =  await axios.get(url);
        data = response.data;}
    catch (e) {return message.channel.send(`data:` `An error has occurred`)}
    const koalaFactEmbed = new MessageEmbed()
        .setTitle("Random Koala Fact")
        .setColor("BLURPLE")
        .setDescription("A fact about koalas.")
        .addField("You might not know:", data.fact);
    await message.channel.send(koalaFactEmbed)
    }
};

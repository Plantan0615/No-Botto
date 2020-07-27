module.exports.run = async(client, message, args) => {
    //getting announcement
    let user = message.author
    let announcement = `${user} This is the channel you were looking for`
    //declare channnels
    //
    // You will need to declare each channel here and change the variable names in the if else statements
    //
    let updatesChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "updates");
    let usefulChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "useful-stuff");
    let funChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "fun-stuff");
    let pollsChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "polls");
    let roleMenu = client.channels.cache.find(channel => channel.name.toLowerCase() === "role-menu");
    let antChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "ant");
    //send message based on request
    let request = message.content.toLowerCase().substring(6);
    if(request === "updates"){
        message.delete();
        updatesChannel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else if(request === "useful stuff"){
        message.delete();
        usefulChannel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else if(request === "fun stuff"){
        message.delete();
        funChannel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else if(request === "polls"){
        message.delete();
        pollsChannel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else if(request === "role menu"){
        message.delete();
        roleMenu.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else if(request === "ant"){
        message.delete();
        antChannel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
    }
    else {
        message.delete({timeout: 5000})
        message.channel.send("Invalid Channel. Please search for a different channel.").then(msg => msg.delete({timeout: 5000})).catch(console.error);
}
};
module.exports.run = async(client, message, args) => {
    //getting announcement
    let user = message.author
    let announcement = `${user} This is the channel you were looking for`
    //declare channnels
    let generalChannel = client.channels.cache.find(channel => channel.name.toLowerCase() === "general")
    let test1Channel = client.channels.cache.find(channel => channel.name.toLowerCase() === "test-1");
    let test2Channel = client.channels.cache.find(channel => channel.name.toLowerCase() === "test-2");
    let roleMenu = client.channels.cache.find(channel => channel.name.toLowerCase() === "role-menu");
    //send message based on request
    let request = message.content.toLowerCase().substring(6);
    if(request === "test 1"){
        message.delete();
        test1Channel.send(announcement)
        .then(msg => msg.delete({timeout: 15000}))
        .catch(console.error);
    }
    else if(request === "test 2"){
        message.delete();
        test2Channel.send(announcement)
        .then(msg => msg.delete({timeout: 15000}))
        .catch(console.error);
    }
    else if(request === "general"){
        message.delete();
        generalChannel.send(announcement)
        .then(msg => msg.delete({timeout: 15000}))
        .catch(console.error);
    }
    else if(request === "role menu"){
        message.delete();
        roleMenu.send(announcement)
        .then(msg => msg.delete({timeout: 15000}))
        .catch(console.error);
    }
    else {
        message.delete({timeout: 5000})
        message.channel.send("Invalid Channel. Please search for a different channel.")
        .then(msg => msg.delete({timeout: 5000}))
        .catch(console.error);
}
};
module.exports.run = async(client, message, args) => {
    let user = message.author
    let announcement = `${user} This is the channel you were looking for`
    let request = message.content.toLowerCase().substring(6);
    let channel = client.channels.cache.find(channel => channel.name.toLowerCase() === `${request}`)
    message.delete();
    channel.send(announcement).then(msg => msg.delete({timeout: 15000})).catch(console.error);
}
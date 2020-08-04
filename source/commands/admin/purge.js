module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You cannot clear messages.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;}
    let num = parseInt(args)
    if(!num){        
        message.channel.send("Must provide number of messages to delete.").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;}
    if (num > 99) {
        message.channel.send("Too many messages. (maximum: 99)").then(msg => msg.delete({timeout: 2000})).catch(err => console.log(err)); 
        message.delete(); return;
    }
    message.channel.bulkDelete(num + 1)
    .then(() => {
        message.channel.send(`Cleared the messages`).then(msg => msg.delete({timeout: 700}));
    }).catch(console.error)
}
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot clear messages");
    let num = parseInt(args)
    if(!num) return message.reply("Must provide number of messages to delete");
    if (num > 99) return message.reply("Too many messages (max 99)");
    message.channel.bulkDelete(num + 1)
    .then(() => {
        message.channel.send(`Cleared the messages`).then(msg => msg.delete({timeout: 300}));
    }).catch(console.error)
}
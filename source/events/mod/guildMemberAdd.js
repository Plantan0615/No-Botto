module.exports = (client, member) => {
    const role = member.guild.roles.cache.find(role => role.name === 'I Need to Read the Rules');
member.roles.add(role);
}
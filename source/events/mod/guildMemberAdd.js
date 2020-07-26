module.exports = (client, member) => {
    const role = member.guild.roles.cache.find(role => role.name === 'I Need to Read the Rules');
//
// you'll have to change the role. if you want to add the role ID instead of name, use .get(role => role.id ==== "ID") instead of find
//
member.roles.add(role);
}
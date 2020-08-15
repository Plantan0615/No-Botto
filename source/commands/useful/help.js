const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
//help
const helpEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Navigating Help')
    .setDescription('Help With Help (haha)')
    .addFields(
        { name: "~help fun", value: "Type this command to see what fun features I have."},
        { name: "~help poll", value: "Type this to learn how to set up a poll."},
        { name: "~help random", value: "Type this to learn how to get a random meme, image, animal fact, or GIF."},
        { name: "~help rpg", value: "Type this to learn how to play the RPGs/Choose Your Own Adventure Stories."},
        { name: "~help roles", value: "Type this for help with adding and remove roles from yourself."},
        { name: "~help role list", value: "Type this for a list of all the roles in the server."},
        { name: "~help useful", value: "Type this to see what useful features I have. (If you need help with the password check #rules-and-info.)"},
        { name: "~help economy", value: "Type this for help understanding PXTC's economy and level systems."},
        { name: "~help levels", value: "Type this for help understanding PXTC's levels and level roles."},
        { name: "~help admin", value: "Type this to see what features I have for admins."}
    );
//fun
const funEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Fun Help')
    .setDescription('Help With Fun Commands')
    .addFields(
        { name: "~dice", value: "Type the dice command, then either even or odd, and how many Moneys you want to bet (Separated with spaces). I will roll two dice, add them together, and tell you if you've won."},
        { name: "~dndroll", value: "Type the roll command and then 4, 6, 8, 10, 12, 20, or 100. I will give you a random number. Please use this command in dnd-chat."},
        { name: "~poll", value: "Type '~help poll' for more info"},
        { name: "~prompt", value: "Type the prompt command and then animals, body parts, buildings, expressions, food, famous buildings, landmarks, long, plants or person adjective. I will give you a random item from the category you choose."},
        { name: "~random", value: "Type '~help random' for more info"},
        { name: "~roulette", value: "To bet on a single number of the roulette wheel. Type the roulette command and then a colour(black, red, or green), then a number (between 1-37), and how many Moneys you want to bet (Separated with spaces). I will spin the wheel and tell you if you've won."},
        { name: "~roulette5050", value: "To bet on groups of the roulette wheel. Type the command, then a guess type (colours, even/odd, numbers), your betting option(black, red; even, odd; group1 (for numbers 1-18), group2 (for numbers 19-37)), and how many Moneys you want to bet (Separated with spaces). I will spin the wheel and tell you if you've won."},
        { name: "~wyr", value: "Simply type the command and I will provide you with a Would You Rather scenario. I will also react with options A and B to allow for easy voting."},
        { name: "Various RPGs", value: "Type '~help rpg' for more info"},
        { name: "Starboard", value: "If there is a post that you think is funny or think should be 'immortalised', simply react to it with ⭐ and I will add the post to the Starboard channel for you. (THIS ONLY WORKS FOR TEXT AND LINKS, I will not add pictures or link previews.)"}
    );
//poll
const pollEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('How to Create A Poll')
    .setDescription('Help With Using ~poll')
    .addFields(
        { name: "Step 1", value: "Create the message you want me to react to (this will be the poll itself). This command simply allows me to add reactions to a message. You must create the message with the poll title and options first."},
        { name: "Step 2", value: "Copy the ID of the message you just sent (You will need developer tools on for this. Go to settings, then appearance (behaviour if you're on mobile), and turn it on). Type the poll command and paste the ID (in the same message)."},
        { name: "Step 3", value: "You will then be prompted (in a following message) to provide the amount of poll options you wish to have (you will not need the ID again.)"},
        { name: "Step 4", value: "You will then be prompted (in following messages) to provide the emojis you want me to react with (one message at a time)."},
        { name: "Step 5", value: "I will delete the messages you and I have sent (except for the poll itself). If you need to edit the poll, do so at this point.(If the messages that prompt you to send an emoji have not been automatically deleted before the last emoji is sent, 1 or 2 messages may remain.)"}
    );
//random
const randomImageEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Get a random image, animal fact, or GIF')
    .setDescription('Help With Using ~random')
    .addFields(
        { name: "Random Meme", value: "Type meme after the random command to get a random meme."},
        { name: "Random Animal Pictures", value: "Type one of the following animals after the random command to get a random pic of that animal. Cat, dog, panda, red panda, koala, fox, birb, pikachu."},
        { name: "Random Animal Facts", value: "Type one of the following animals and the word fact after the random command to get a random fact about that animal. Cat, dog, panda, koala, fox, bird."},
        { name: "Random GIFS", value: "Type one of the following after the random command to get a random GIF of it. Hug, pat, wink."}
    );
//rpg
const rpgEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
    .setTitle("How to play the 'Choose your own Adventure' stories.")
    .setDescription("Help with the RPGs")
    .addFields(
        {name: "~rpghunter", value: "Type this to play the story as a male (adult) hunter."},
        {name: "~rpgteenager", value: "Type this to play the story as a female teenager."},
        {name: "How to Play:", value: "Simply type one of the above commands, and I will send a message. Wait for me to react to the message with A and B, then make your decision (by selecting either A or B), at which point I will send another message. After 4 decisions you will know the outcome of the story."}
    )
//role help
const roleEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Managing Roles')
    .setDescription('How to Add and Remove Roles')
    .addFields(
        { name: "~add", value: "Type the add command and the names of the roles you want to add. With the roles separated by commas."},
        { name: "~del", value: "Type the del command and the names of the roles you want to remove. With the roles separated by commas."},
        { name: "Reacting for Roles", value: "You can add roles to (and remove roles from) yourself by reacting (and unreacting) to the messages in #role-menu (I will only add the role if you react in that channel)."},
        { name: "Level Roles", value: "The I Need to Read the Rules, Noobz, iPhone Photographers, Soy Boys, Crafty Crew, and Epic Gamers Roles are level roles (based on xp, earned by takling). You CANNOT add yourself to (or remove yourself from) these roles."},
        { name: "Other Roles", value: "Please type ~help role list for info on all of the roles."}
    );
//role list
const roleListEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Role List for PXTC')
    .setDescription('List of Roles to Help with Adding/Removing Roles via Command')
    .addFields(
        { name: "Category 1- General Roles", value: "Animal Lover, Anime Weeb, Book Worm, Foodie, Furry, Green Thumbs (for weed smokeers), Language Learning Crew, Meme Queens, Movie Goer, Techie, YouTube Nerd, NSFW (unlocks NSFW channels), DMs Open, He/Him/His, She/Her/Hers, They/Them/Theirs"},
        { name: "Category 2- Art Roles", value: "Commissions Open, 3D Modeller, Animator, Builder, Cosplayer, Crafter, Digital Artist, Musical Artist, NSFW Artist, Performance Artist, Photographer, Photo Editor, Traditional Artist, Writer"},
        {name: "Category 3- Gaming Roles 1 (Action Adventure/ Action RPG)", value: "Action Adventure/RPG Gamer, Crashlands, Legend of Zelda, Monster Hunter Worlds, Pokemon, Skyrim, World of Warcraft"},
        {name: "Category 4- Gaming Roles 2 (Casual)", value: "Casual Gamer, Animal Crossing, Hand Simulator, House Flipper, Minecraft, Satisfactory, Shell Shock, Terraria, Phone Games, Server Games"},
        {name: "Category 5- Gaming Roles 3 (FPS)", value: "FPS Gamer, Apex Legends, Battlefield 5, Counter-Strike, Overwatch, Rainbow Six, Valorant"},
        {name: "Category 6- Gaming Roles 4 (Other Combat)", value: "Other Combat Gamer, For Honour, Smash Bros, League of Legends, Team Fight Tactics, Warframe, World of Tanks"},
        {name: "Category 7- Gaming Roles 5 (Puzzle Platformers)", value: "Catherine, Mario, Portal, The Witness"},
        {name: "Category 8- DND Roles", value: "Dungeon Master (assigned by DND Manager), DND Player, DND Character Designer, DND Map Designer, DND World Builder"},
        { name: "Category 9- Level Roles (Cannot add or remove these yourself)", value: "I Need to Read the Rules, Noobz, iPhone Photographers, Soy Boys, Crafty Crew, Epic Gamers. (Type '~help levels' for more info)."},
        { name: "Category 10- Other Roles (Cannot add or remove these yourself)", value: "Owner, Arts and Crafts Manager, Entertainment Manager, Gaming Manager, DND Manager, Founders, Beans, Server Boosters, Bots (Rhythm and No Botto)"}
    );
//useful
const usefulEmbed = new MessageEmbed()
.setColor('#0b5eaf')
.setTitle('Useful Help')
.setDescription('Help With Useful Commands')
.addFields(
    { name: "~find", value: "Type this followed by the channel you want me to find. I will ping you in that channel, then delete the messages after 15 seconds. YOU MUST TYPE THE CHANNEL NAME EXACTLY AS IT APPEARS (dashes and all)."},
    { name: "~mywarnings", value: "Type this command to see how many warnings you have, and the reasons for those warnings (This command will only work if you have sent a non-command message. Type ~economy help for more info.)."},
    { name: "~sanity", value: "Type this to see if I am still online."},
    { name: "~password", value: "For newcomers to type the password after the command. Do not tell others the password. If you have the role I Need to Read the Rules, you need to type this with the password."}
);
//economy
const economyEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle('Economy Help')
    .setDescription("Help With Understanding PXTC's Economy and Levels Systems")
    .addFields(
        { name: "~daily", value: "Type this once a day to earn 200 Moneys"},
        { name: "~leaderboard", value: "Type this to see your place on the leaderboard. (The leaderboards are grouped in 10s.)"},
        { name: "~rank", value: "Type this to see your current rank (based on XP)"},
        { name: "~stats", value: "Type this to see your current XP, Level, and Moneys. (Your rank cannot be viewed here.)"},
        { name: "~topten", value: "Type this to see the leaderboard of the top 10 XP earners."},
        { name: "How to Earn XP/Level Up", value: "Simply by talking! You will level up once you reach a certain amount of XP. Once you have reached a certain level, you will get a new Level Role"},
        { name: "How to Earn Moneys", value: "You can earn moneys by talking, and using the daily command!"},
        { name: "IMPORTANT NOTE", value: "These commands will only work if you have sent a message that is not a command. Only non-command messages count towards XP, Levels, and Moneys."}
    );
//levels 
const levelsEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
	.setTitle("Help with Levels and Level Roles")
    .setDescription("Help With Understanding PXTC's Levels")
    .addFields(
        { name: "Chunk 1: Levels 1- 11", value: " In this chunk, you will level up after every 1,000 XP (or 500 messages)."},
        { name: "Level 1- Noobz", value: "After you have read the rules, you are assigned this role."},
        { name: "Level 3- iPhone Photographers", value: "Once you have surpassed 2,000 XP (or 1,000 messages), you will be assigned this role."},
        { name: "Level 6- Soy Boys", value: "Once you have surpassed 5,000 XP (or 2,500 messages), you will be assigned this role."},
        { name: "Level 11- Crafty Crew", value: "Once you have surpassed 10,000 XP (or 5,000 messages), you will be assigned this role."},
        { name: "Chunk 2: Levels 12- 16", value: "In this chunk, you will level up after every 2,000 XP (or 1,000 messages)"},
        { name: "Level 16- Epic Gamers", value: "Once you have surpassed 20,000 XP (or 10,000 messages), you will be assigned this role."},
        { name: "NOTE:", value: "The key part of understanding these levels is that you must surpass the number of XP set out here (i.e. to level up from 1 to 2 you must have 1,002 XP, NOT 1,000 XP)"}
    );
//admin
    const adminEmbed = new MessageEmbed()
    .setColor('#0b5eaf')
    .setTitle('Help with Admin Stuff')
    .setDescription('Help With Admin Only Commands')
    .addFields(
        {name: "~ban", value: "For banning members. Type the command followed by the userID and the reason for the ban (MUST BE Separated with a comma)."},
        { name: "~emoji", value: "For setting up role menus. Works similarly to poll. Type ~help poll if you need help there."},
        {name: "~kick", value: "For kciking members. Type the command followed by the userID and the reason for the kick (MUST BE Separated with a comma)."},
        { name: "~purge", value: "For Bulk Deleting Messages. Type the command followed by the number of message you wish to delete. This only works for messages less than 2 weeks old."},
        {name: "~userwarns", value: "For viewing the warnings of members. Type this command followed by the userID (Seperated with a space)."},
        {name: "~warn", value: "For warning members. Type the command followed by the userID and the reason for the warning (MUST BE Separated with a comma)."},
        { name: "IMPORTANT NOTE", value: "Users can only be warned (and their warns checked) if they are in the Database(db). This means that they must have sent a message that is not a command. This also applies to currency if anyone is confused, as if they utilise db commands before they have sent an actual message the command will not work."}
    );
//help menu navigation
var helpType = message.content.toLowerCase().substring(6);
if(!helpType){message.channel.send(helpEmbed);}
else if (helpType === "fun"){message.channel.send(funEmbed);}
else if (helpType === "poll"){message.channel.send(pollEmbed);}
else if (helpType === "random"){message.channel.send(randomImageEmbed);}
else if (helpType === "rpg"){message.channel.send(rpgEmbed);}
else if (helpType === "roles"){message.channel.send(roleEmbed);}
else if (helpType === "role list"){message.channel.send(roleListEmbed);}
else if (helpType === "economy"){message.channel.send(economyEmbed);}
else if (helpType === "levels"){message.channel.send(levelsEmbed);}
else if (helpType === "useful"){message.channel.send(usefulEmbed);}
else if (helpType === "admin"){
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("You cannot use these commands, so no need to have this info.")
        .then(msg => msg.delete({timeout: 3000}))
        .catch(err => console.log(err)); message.delete(); return;}
            message.channel.send(adminEmbed);}
else{
    message.delete();
    message.channel.send("I'm not sure what you need help with. Type '~help' for all help commands.").then(msg => msg.delete({timeout: 15000})).catch(err => console.log(err));}
};

module.exports.help = {
    name: "help",
    category: "useful",
    usage: "",
    description: "This is the help command"
}
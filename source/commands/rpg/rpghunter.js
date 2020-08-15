const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
//EMBEDS
//first embed
const firstEmbed = new discord.MessageEmbed()
.setTitle("Decision 1")
.setDescription("You are a hunter, you are armed and lost in the woods. You also have a map, and you come to a fork in the road.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go left or right?' },
    { name: 'Option A:', value: 'Left.' },
    { name: 'Option B:', value: 'Right.' }
    );
//second embed A- left
const secondEmbedA = new discord.MessageEmbed()
.setTitle("Decision 2")
.setDescription("You see a strange light in the distance.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go towards it or stay on the path?' },
    { name: 'Option A:', value: 'Go towards it.' },
    { name: 'Option B:', value: 'Stay on the path.' }
    );
//second embed B- right
const secondEmbedB = new discord.MessageEmbed()
.setTitle("Decision 2")
.setDescription("You hear a strange noise in the distance.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go towards it or stay on the path?' },
    { name: 'Option A:', value: 'Go towards it.' },
    { name: 'Option B:', value: 'Stay on the path.' }
    );
//third embed A- left, go towards it
const thirdEmbedA = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a magical looking event. There is a game being played.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you play the game or threaten to shoot the creatures before you.' },
    { name: 'Option A:', value: 'Threaten to shoot the creatures.' },
    { name: 'Option B:', value: 'Play the game.' }
    );
//third embed B- left, stay on the path
const thirdEmbedB = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a black cat, and it's unsettling.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you pet or shoot the cat?' },
    { name: 'Option A:', value: 'Pet the cat.' },
    { name: 'Option B:', value: 'Shoot the cat.' }
    );
//third embed C- right, go towards it
const thirdEmbedC = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a strange looking man.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you speak to or shoot the man?' },
    { name: 'Option A:', value: 'Speak to the man.' },
    { name: 'Option B:', value: 'Shoot the man.' }
    );
//third embed D- right, stay on the path
const thirdEmbedD = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("The path ends.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you use your map or press on in the same direction?' },
    { name: 'Option A:', value: 'Use your map' },
    { name: 'Option B:', value: 'Press on in the same direction.' }
    );
//fourth embed A- left, go towards it, don't play the game
const fourthEmbedA = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("Instead of playing the game. You threaten the creatures. They respond hostiley and begin to chase you.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Run.' },
    { name: 'Option B:', value: 'Shoot.' }
    );
//fourth embed B- left, go towards it, play the game
const fourthEmbedB = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you stay with the creatures?' },
    { name: 'Option A:', value: 'Yes.' },
    { name: 'Option B:', value: 'No.' }
    );
//fourth embed C- left, stay on the path, pet the cat
const fourthEmbedC = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("A beautiful woman appears from nowhere. She asks what a handsome man like you is doing in the woods at this time of night.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you say?' },
    { name: 'Option A:', value: 'I am lost after doing some hunting.' },
    { name: 'Option B:', value: 'Something romantic, she is beautiful after all.' }
    );
//fourth embed D- left, stay on the path, shoot the cat
const fourthEmbedD = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("The cat bursts into flames, the light it creates illuminating another path forward.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you follow the new path or stay on your current route?' },
    { name: 'Option A:', value: 'Follow the new path.' },
    { name: 'Option B:', value: 'Stay on the current route.' }
    );
//fourth embed E- right, go towards it, speak to the man
const fourthEmbedE = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("He seems friendly enough. He says hello and asks what you're up to.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: "Ask him what he is doing in the woods." },
    { name: 'Option B:', value: 'Tell him that you are lost.' }
    );
//fourth embed F- right, go towards it, shoot the man
const fourthEmbedF = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("The man turns into a ghostly vapour, vanishing into thin air.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Stand there for a moment, petrified (and then flee).' },
    { name: 'Option B:', value: 'Scream (and flee immediately).' }
    );
//fourth embed G- right, stay on path, use the map
const fourthEmbedG = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You use the end of the path to find your current location on the map.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go back to where you started or continue forward?' },
    { name: 'Option A:', value: 'Go back to where I started.' },
    { name: 'Option B:', value: 'Continue forward.' }
    );
//fourth embed H- right, stay on the path, press on
const fourthEmbedH = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You continue through the trees and come to a river.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Which way will you follow the river?' },
    { name: 'Option A:', value: 'Up.' },
    { name: 'Option B:', value: 'Down.' }
    );
//final embed 1- left, go towards it, don't play the game, run
const finalEmbed1 = new discord.MessageEmbed()
.setTitle("Outcome 1 of 16")
.setDescription("The creatures chase you to the nearest road, which happens to be where your truck is.")
.setColor("#e0115b")
//final embed 2- left go towards it, don't play the game, shoot
const finalEmbed2 = new discord.MessageEmbed()
.setTitle("Outcome 2 of 16")
.setDescription("You shoot the creatures and it does nothing except make them vanish. You remain lost and confused by what you witnessed.")
.setColor("#e0115b")
//final embed 3- left, go towards it, play the game, join them
const finalEmbed3 = new discord.MessageEmbed()
.setTitle("Outcome 3 of 16")
.setDescription("You are turned into the magical being of your choosing, on the condition that you play the game again next year.")
.setColor("#e0115b")
//final embed 4- left, go towards it, play the game, don't join them
const finalEmbed4 = new discord.MessageEmbed()
.setTitle("Outcome 4 of 16")
.setDescription("They ask you what you want, if not eternal life. Upon telling them that you were simply lost, they help you back to your truck by flying.")
.setColor("#e0115b")
//final embed 5- left, stay on the path, pet the cat, tell her you're lost
const finalEmbed5 = new discord.MessageEmbed()
.setTitle("Outcome 5 of 16")
.setDescription("She offers you an easy way out, revealing that she is a witch. You climb upon her broomstick, and she flies you to your truck.")
.setColor("#e0115b")
//final embed 6- left, stay on the path, pet the cat, say something romantic
const finalEmbed6 = new discord.MessageEmbed()
.setTitle("Outcome 6 of 16")
.setDescription("She kidnaps you and reveals that she is a witch. She then turns you into stone.")
.setColor("#e0115b")
//final embed 7- left, stay on the path, shoot the cat, follow the new path
const finalEmbed7 = new discord.MessageEmbed()
.setTitle("Outcome 7 of 16")
.setDescription("You come to the end of the new path, exasperated you sit down and are somehow teleported to your truck.")
.setColor("#e0115b")
//final embed 8- left, stay on the path, shoot the cat, stay on the current path
const finalEmbed8 = new discord.MessageEmbed()
.setTitle("Outcome 8 of 16")
.setDescription("You become more lost once the path ends, you only get get to your truck once it becomes daytime.")
.setColor("#e0115b")
//final embed 9- right, go towards it, speak to the man, ask what he's doing
const finalEmbed9 = new discord.MessageEmbed()
.setTitle("Outcome 9 of 16")
.setDescription("The man tells you about the magical events taking place tonight. This completely scars you, scares you, and changes your worldview. You attempt to rationalise the events that took place, but end up going insane.")
.setColor("#e0115b")
//final embed 10- right, go towards it, speak to the man, tell him your lost
const finalEmbed10 = new discord.MessageEmbed()
.setTitle("Outcome 10 of 16")
.setDescription("He offers to take you back to your truck, for a price. Assuming he meant money, you say yes. But once you get back to the truck, he charges you one soul.....")
.setColor("#e0115b")
//final embed 11- right, go towards it, shoot the man, momentary silence
const finalEmbed11 = new discord.MessageEmbed()
.setTitle("Outcome 11 of 16")
.setDescription("Your momentary silence benfits you. You gather yourself and manage to find your way back to your truck, but you are seriously traumatised.")
.setColor("#e0115b")
//final embed 12- right, towards it, shoot the man, scream
const finalEmbed12 = new discord.MessageEmbed()
.setTitle("Outcome 12 of 16")
.setDescription("You panic and start running. You run continuously in the wrong direction, and remain lost forever.")
.setColor("#e0115b")
//final embed 13- right, stay on the path, use the map, backtrack
const finalEmbed13 = new discord.MessageEmbed()
.setTitle("Outcome 13 of 16")
.setDescription("It takes you quite a while, but you manage to backtrack to where your journey started, allowing you to find your way back to the truck before daybreak.")
.setColor("#e0115b")
//final embed 14- right, stay on the path, use the map, continue forward
const finalEmbed14 = new discord.MessageEmbed()
.setTitle("Outcome 14 of 16")
.setDescription("You press on and end up falling into a hole in the ground that you cannot climb out of. You have to phone for help, how embarrasing you didn't do that before.")
.setColor("#e0115b")
//final embed 15- right, stay on the path, continue forward, up
const finalEmbed15 = new discord.MessageEmbed()
.setTitle("Outcome 15 of 16")
.setDescription("You eventually come to a waterfall which you can climb with ease. You find you way back safely, although wet.")
.setColor("#e0115b")
//final embed 16- right, stay on the path, continue forward, down
const finalEmbed16 = new discord.MessageEmbed()
.setTitle("Outcome 16 of 16")
.setDescription("You come to a bridge where you can get to a road, but it isn't the road where your truck is parked. You eventually get back via hitchiking.")
.setColor("#e0115b")



//ACTUAL GAME LOGIC
//filter
const filter = (reaction, user) => { if (user.bot) return; return ["🅰️", '🅱️'].includes(reaction.emoji.name) && user.id === message.author.id;}
//first embed
let msg1 = await message.channel.send(firstEmbed)
await msg1.react("🅰️")
await msg1.react("🅱️")
const firstMsg = await msg1.awaitReactions(filter, { max: 1 })
const reaction = firstMsg.first();
    //if A- decision 1
    if (reaction.emoji.name === "🅰️") {
    let msg2 = await message.channel.send(secondEmbedA)
    await msg2.react('🅰️')
    await msg2.react('🅱️')
    const secondMsg = await msg2.awaitReactions(filter, { max: 1 })
    const reaction = secondMsg.first();
        //if A - decision 2
        if (reaction.emoji.name === "🅰️") {
        let msg4 = await message.channel.send(thirdEmbedA)
        await msg4.react('🅰️')
        await msg4.react('🅱️')
        const fourthMsg = await msg4.awaitReactions(filter, { max: 1 })
        const reaction = fourthMsg.first();
            //if A- decision 3
            if (reaction.emoji.name === "🅰️"){
            let msg8 = await message.channel.send(fourthEmbedA)
            await msg8.react('🅰️')
            await msg8.react('🅱️')
            const eighthMsg = await msg8.awaitReactions(filter, { max: 1 })
            const reaction = eighthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed1);}
                //if B- decision 4
                else {message.channel.send(finalEmbed2);}
            }
            //if B- decision 3
            else{
            let msg9 = await message.channel.send(fourthEmbedB)
            await msg9.react('🅰️')
            await msg9.react('🅱️')
            const ninthMsg = await msg9.awaitReactions(filter, { max: 1 })
            const reaction = ninthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed3);}
                //if B- decision 4
                else {message.channel.send(finalEmbed4);}
            }
        }
        //if B- decision 2
        else{
        let msg5 = await message.channel.send(thirdEmbedB)
        await msg5.react('🅰️')
        await msg5.react('🅱️')
        const fifthMsg = await msg5.awaitReactions(filter, { max: 1 })
        const reaction = fifthMsg.first();
            //if A- decision 3
            if (reaction.emoji.name === "🅰️"){
            let msg10 = await message.channel.send(fourthEmbedC)
            await msg10.react('🅰️')
            await msg10.react('🅱️')
            const tenthMsg = await msg10.awaitReactions(filter, { max: 1 })
            const reaction = tenthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed5);}
                //if B- decision 4
                else {message.channel.send(finalEmbed6);}
            }
            //if B- decision 3
            else{
            let msg11 = await message.channel.send(fourthEmbedD)
            await msg11.react('🅰️')
            await msg11.react('🅱️')
            const eleventhMsg = await msg11.awaitReactions(filter, { max: 1 })
            const reaction = eleventhMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed7);}
                //if B- decision 4
                else {message.channel.send(finalEmbed8);}
            }
        }
    }
    //if B- decision 1
    else {
    let msg3 = await message.channel.send(secondEmbedB)
    await msg3.react('🅰️')
    await msg3.react('🅱️')
    const thirdMsg = await msg3.awaitReactions(filter, { max: 1 })
    const reaction = thirdMsg.first();
        //if A - decision 2
        if (reaction.emoji.name === "🅰️") {
        let msg6 = await message.channel.send(thirdEmbedC)
        await msg6.react('🅰️')
        await msg6.react('🅱️')
        const sixthMsg = await msg6.awaitReactions(filter, { max: 1 })
        const reaction = sixthMsg.first();
            //if A- decision 3
            if (reaction.emoji.name === "🅰️"){
            let msg12 = await message.channel.send(fourthEmbedE)
            await msg12.react('🅰️')
            await msg12.react('🅱️')
            const twelfthMsg = await msg12.awaitReactions(filter, { max: 1 })
            const reaction = twelfthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed9);}
                //if B- decision 4
                else {message.channel.send(finalEmbed10);}
            }
            //if B- decision 3
            else{
            let msg13 = await message.channel.send(fourthEmbedF)
            await msg13.react('🅰️')
            await msg13.react('🅱️')
            const thirteenthMsg = await msg13.awaitReactions(filter, { max: 1 })
            const reaction = thirteenthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed11);}
                //if B- decision 4
                else {message.channel.send(finalEmbed12);}
            }
        }
        //if B- decision 2
        else{
        let msg7 = await message.channel.send(thirdEmbedD)
        await msg7.react('🅰️')
        await msg7.react('🅱️')
        const seventhMsg = await msg7.awaitReactions(filter, { max: 1 })
        const reaction = seventhMsg.first();
            //if A- decision 3
            if (reaction.emoji.name === "🅰️"){
            let msg14 = await message.channel.send(fourthEmbedG)
            await msg14.react('🅰️')
            await msg14.react('🅱️')
            const fourteenthMsg = await msg14.awaitReactions(filter, { max: 1 })
            const reaction = fourteenthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed13);}
                //if B- decision 4
                else {message.channel.send(finalEmbed14);}
            }
            //if B- decision 3
            else{
            let msg15 = await message.channel.send(fourthEmbedH)
            await msg15.react('🅰️')
            await msg15.react('🅱️')
            const fifteenthMsg = await msg15.awaitReactions(filter, { max: 1 })
            const reaction = fifteenthMsg.first();
                //if A- decision 4
                if (reaction.emoji.name === "🅰️"){message.channel.send(finalEmbed15);}
                //if B- decision 4
                else {message.channel.send(finalEmbed16);}
            }
        }
    }
}

module.exports.help = {
    name: "rpghunter",
    category: "rpg",
    usage: "",
    description: "Type this to play the story as a male (adult) hunter."
}

module.exports.h2p = {
    instructions: "Simply type one of the above commands, and I will send a message. Wait for me to react to the message with A and B, then make your decision (by selecting either A or B), at which point I will send another message. After 4 decisions you will know the outcome of the story."
}
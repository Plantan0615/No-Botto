const discord = require("discord.js");
module.exports.run = async(client, message, args) => {
//EMBEDS
//first embed
const firstEmbed = new discord.MessageEmbed()
.setTitle("Decision 1")
.setDescription("You are a teenage girl, you are unarmed and lost in the woods. You are dressed for a halloween party and come to a fork in the road.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go left or right?' },
    { name: 'Option A:', value: 'Left.' },
    { name: 'Option B:', value: 'Right.' }
    );
//second embed A
const secondEmbedA = new discord.MessageEmbed()
.setTitle("Decision 2")
.setDescription("You see a strange light in the distance.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go towards it or stay on the path?' },
    { name: 'Option A:', value: 'Go towards it.' },
    { name: 'Option B:', value: 'Stay on the path.' }
    );
//second embed B
const secondEmbedB = new discord.MessageEmbed()
.setTitle("Decision 2")
.setDescription("You hear a strange noise in the distance.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you go towards it or stay on the path?' },
    { name: 'Option A:', value: 'Go towards it.' },
    { name: 'Option B:', value: 'Stay on the path.' }
    );
//third embed A
const thirdEmbedA = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a magical looking event. There is a game being played.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you play the game?' },
    { name: 'Option A:', value: 'No.' },
    { name: 'Option B:', value: 'Yes.' }
    );
//third embed B
const thirdEmbedB = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a black cat, and it's unsettling.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you pet the cat?' },
    { name: 'Option A:', value: 'Yes.' },
    { name: 'Option B:', value: 'No.' }
    );
//third embed C
const thirdEmbedC = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("You come across a strange looking man.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you approach him kindly or harshly?' },
    { name: 'Option A:', value: 'Kindly.' },
    { name: 'Option B:', value: 'Harshly.' }
    );
//third embed D
const thirdEmbedD = new discord.MessageEmbed()
.setTitle("Decision 3")
.setDescription("The path ends.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you turn around or press on?' },
    { name: 'Option A:', value: 'Turn around.' },
    { name: 'Option B:', value: 'Press on.' }
    );
//fourth embed A
const fourthEmbedA = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("Instead of playing the game. You ask the creatures about how to get home. They don't know what you mean.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Ask for their help in teleporting you home.' },
    { name: 'Option B:', value: 'Say goodbye and try to continue walking.' }
    );
//fourth embed B
const fourthEmbedB = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Do you stay with the creatures?' },
    { name: 'Option A:', value: 'Yes.' },
    { name: 'Option B:', value: 'No.' }
    );
//fourth embed C
const fourthEmbedC = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("A beautiful woman appears from nowhere. She asks if you are in trouble.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you tell her?' },
    { name: 'Option A:', value: 'I am in trouble.' },
    { name: 'Option B:', value: 'I am just going for a walk.' }
    );
//fourth embed D
const fourthEmbedD = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You continue walking forward, the cat is now following you.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Continue walking, although at a quicker pace.' },
    { name: 'Option B:', value: 'Scare the cat' }
    );
//fourth embed E
const fourthEmbedE = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("The man tells you that you are as kind as you are pretty. You are flattered by this. He then offers to take you home.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: "Ask him how he knew that was what you wanted." },
    { name: 'Option B:', value: 'Go along with it, and follow his lead.' }
    );
//fourth embed F
const fourthEmbedF = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("The man turns into some sort of demon, his ghostly grasp taking hold of you.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Apologise.' },
    { name: 'Option B:', value: 'Tell him to fuck himself.' }
    );
//fourth embed G
const fourthEmbedG = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You turn around, eventually finding your way back to where the party was.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'What do you do?' },
    { name: 'Option A:', value: 'Phone for help.' },
    { name: 'Option B:', value: 'Trust that you can find your way from here.' }
    );
//fourth embed H
const fourthEmbedH = new discord.MessageEmbed()
.setTitle("Decision 4")
.setDescription("You continue through the trees and come to a river.")
.setColor("#e0115b")
.addFields(
    { name: 'Question:', value: 'Which way will you follow the river?' },
    { name: 'Option A:', value: 'Up.' },
    { name: 'Option B:', value: 'Down.' }
    );
//final embed 1
const finalEmbed1 = new discord.MessageEmbed()
.setTitle("Outcome 1 of 16")
.setDescription("The creatures tell you that you are creative, before teleporting you to the middle of the ocean by mistake.")
.setColor("#e0115b")
//final embed 2
const finalEmbed2 = new discord.MessageEmbed()
.setTitle("Outcome 2 of 16")
.setDescription("You remain lost, becoming a skilled woodsman, making a new life for yourself in the woods.")
.setColor("#e0115b")
//final embed 3
const finalEmbed3 = new discord.MessageEmbed()
.setTitle("Outcome 3 of 16")
.setDescription("You are welcomed into the community and are turned into a magical being.")
.setColor("#e0115b")
//final embed 4
const finalEmbed4 = new discord.MessageEmbed()
.setTitle("Outcome 4 of 16")
.setDescription("They ask you what you want, if not eternal life. You ask them to take you home, which they do.")
.setColor("#e0115b")
//final embed 5
const finalEmbed5 = new discord.MessageEmbed()
.setTitle("Outcome 5 of 16")
.setDescription("She kidnaps you and reveals that she is a witch. You become her witchy assistant for all of eternity.")
.setColor("#e0115b")
//final embed 6
const finalEmbed6 = new discord.MessageEmbed()
.setTitle("Outcome 6 of 16")
.setDescription("She believes you, you continue to walk in the direction you were, finding your way home.")
.setColor("#e0115b")
//final embed 7
const finalEmbed7 = new discord.MessageEmbed()
.setTitle("Outcome 7 of 16")
.setDescription("The cat continues to follow you. You remain lost, and the paranoia you have about this cat drives you crazy.")
.setColor("#e0115b")
//final embed 8
const finalEmbed8 = new discord.MessageEmbed()
.setTitle("Outcome 8 of 16")
.setDescription("The cat bites you, and you pass out. You wake up in your bed the next day, confused about the events the night before.")
.setColor("#e0115b")
//final embed 9
const finalEmbed9 = new discord.MessageEmbed()
.setTitle("Outcome 9 of 16")
.setDescription("The man tells you about the magical events taking place tonight. This completely scars you, scares you, and changes your worldview. You return home, but suddenly feel like you have made the wrong choices.")
.setColor("#e0115b")
//final embed 10
const finalEmbed10 = new discord.MessageEmbed()
.setTitle("Outcome 10 of 16")
.setDescription("He pretends to take you home, leading you instead to the nearest river. He suddenly vanishes, leaving you confused and alone in a completely different part of the woods.")
.setColor("#e0115b")
//final embed 11
const finalEmbed11 = new discord.MessageEmbed()
.setTitle("Outcome 11 of 16")
.setDescription("He laughs maniacally and turns you into a werewolf. You live your new life in secret.")
.setColor("#e0115b")
//final embed 12
const finalEmbed12 = new discord.MessageEmbed()
.setTitle("Outcome 12 of 16")
.setDescription("For some reason this works and he vanishes, teleporting you home simultaneously.")
.setColor("#e0115b")
//final embed 13
const finalEmbed13 = new discord.MessageEmbed()
.setTitle("Outcome 13 of 16")
.setDescription("You wonder why you didn't do this the entire time, but end up getting home safely.")
.setColor("#e0115b")
//final embed 14
const finalEmbed14 = new discord.MessageEmbed()
.setTitle("Outcome 14 of 16")
.setDescription("You get lost again (lol why pick this dummy :p)")
.setColor("#e0115b")
//final embed 15
const finalEmbed15 = new discord.MessageEmbed()
.setTitle("Outcome 15 of 16")
.setDescription("You eventually come to a waterfall and attempt to climb up. Because you are not dressed to go hiking you slip and fall to your doom.")
.setColor("#e0115b")
//final embed 16
const finalEmbed16 = new discord.MessageEmbed()
.setTitle("Outcome 16 of 16")
.setDescription("You eventually come to a bridge (where you can get to the road), and you hitchike home.")
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
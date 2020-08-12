module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  
      // Create RPG Table
      // id - autoincrement
      // category - hunter, teenager
      // scenario - string (description)
      // question - prompt user to answer choice (first field)
      // leftA - left answer (second field)
      // rightA - right answer (third field)
      // leftInt - left choice (foreign_key, id)
      // rightInt - right choice (foreign_key, id)
      // finalState - is Ending State (true, false)
  
      const sql = require("better-sqlite3")("/Users/chase/Desktop/Coding/No Botto/source/userInfo.db");
  
      if (client.sql == undefined) {
        client.sql = sql;
      }    
  
  
  
      // let prepareRPGTable = client.sql.prepare("CREATE TABLE IF NOT EXISTS rpg (id INT AUTO INCREMENT NOT NULL PRIMARY KEY, category VARCHAR(255), scenario VARCHAR(255), question VARCHAR(255), leftA VARCHAR(255), rightB VARCHAR(255), leftInt INT, rightInt INT, initState VARCHAR(255), finalState VARCHAR(255))")
      
  
      // // Create Table
      // prepareRPGTable.run();
  
      // // Get All categories
      // let rpgTable = client.sql.prepare("SELECT * FROM rpg")
  
      // let resultRPG = rpgTable.all();
  
      if (resultRPG.length == 0) {
        // Empty table
        // Create all choices
        let hunter = [
          { //main id
          scenario: "You are a teenage girl, you are unarmed and lost in the woods. You are dressed for a halloween party and come to a fork in the road.",
          category: "hunter",
          question: "Do you go left or right?",
          leftA: "Left.",
          rightB: "Right.",
          leftInt: "",
          rightInt: "",
          initState: "true",
          finalState: "false"
          },
          { // id 2
          scenario: "You see a strange light in the distance.",
          category: "hunter",
          question: "Do you go towards it or stay on the path?",
          leftA: "Go towards it.",
          leftB: "Stay on the path.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 3
          scenario: "You hear a strange noise in the distance.",
          category: "hunter",
          question: "Do you go towards it or stay on the path?",
          leftA: "Go towards it.",
          rightA: "Stay on the path.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 4
          scenario: "You come across a magical looking event. There is a game being played.",
          category: "hunter",
          quesiton: "Do you play the game or threaten to shoot the creatures before you?",
          leftA: "Threaten to shoot the creatures.",
          rightA: "Play the game.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 5
          scenario: "You come across a black cat, and it's unsettling.",
          category: "hunter",
          question: "Do you pet or shoot the cat?",
          leftA: "Pet the cat.",
          rightA: "Shoot the cat.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 6
          scenario: "You come across a strange looking man.",
          category: "hunter",
          question: "Do you speak to or shoot the man?",
          leftA: "Speak to the man",
          rightA: "Shoot the man.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 7
          scenario: "The path ends...",
          category: "hunter",
          question: "Do you use your map or press on in the same direction?",
          leftA: "Use your map.",
          rightA: "Press on in the same direction.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 8
          scenario: "Instead of playing the game.You threaten the creatures. They respond hostiley and begin to chase you. ",
          category: "hunter",
          question: "What do you do?",
          leftA: "Run.",
          rightA: "Shoot.",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 9
          scenario: "You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.",
          category: "hunter",
          question: "Do you stay with the creatures?",
          leftA: "Yes",
          rightA: "No",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 10
          scenario: "A beautiful woman appears from nowhere. She asks what a handsome man like you is doing in the woods at this time of night.",
          category: "hunter",
          question: "What do you say?",
          leftA: "I am lost after doing some hunting.",
          rightA: "Something romantic, she is beautiful after all.",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 11
          scenario: "The cat bursts into flames, the light it creates illuminating another path forward.",
          category: "hunter",
          question: "Do you follow the new path or stay on your current route?",
          leftA: "Follow the new path.",
          rightA: "Stay on the current route.",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 12
          scenario: "He seems friendly enough. He says hello and asks what you're up to.",
          category: "hunter",
          question: "What do you do?",
          leftA: "Ask him what he is doing in the woods.",
          rightA: "Tell him that you're lost.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {// id 13 
          scenario: "The man turns into a ghostly vapour, vanishing into thin air.",
          category: "hunter",
          question: "What do you do?",
          leftA: "Stand there for a moment, petrified (and then flee).",
          rightA: "Scream (and flee immediately).",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 14
          scenario: "You use the end of the path to find your current location on the map.",
          category: "hunter",
          question: "Do you go back to where you started or continue forward?",
          leftA: "Go back to where I started.",
          rightA: "Continue forward.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {//id 15
          scenario: "You continue through the trees and come to a river.",
          category: "hunter",
          question: "Which way will you follow the river?",
          leftA: "Up.",
          rightA: "Down.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {//id 16- outcome 1
          scenario: "The creatures chase you to the nearest road, which happens to be where your truck is.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 17- outcome 2
          scenario: "You shoot the creatures and it does nothing except make them vanish. You remain lost and confused by what you witnessed.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 18- outcome 3
          scenario: "You are turned into the magical being of your choosing, on the condition that you play the game again next year.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 19- outcome 4
          scenario: "They ask you what you want, if not eternal life. Upon telling them that you were simply lost, they help you back to your truck by flying.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 20- outcome 5
          scenario: "She offers you an easy way out, revealing that she is a witch. You climb upon her broomstick, and she flies you to your truck.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 21- outcome 6
          scenario: "She kidnaps you and reveals that she is a witch. She then turns you into stone.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 22- outcome 7
          scenario: "You come to the end of the new path, exasperated you sit down and are somehow teleported to your truck.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 23- outcome 8
          scenario: "You become more lost once the path ends, you only get get to your truck once it becomes daytime.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 24- outcome 9
          scenario: "The man tells you about the magical events taking place tonight. This completely scars you, scares you, and changes your worldview. You attempt to rationalise the events that took place, but end up going insane.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 25- outcome 10
          scenario: "He offers to take you back to your truck, for a price. Assuming he meant money, you say yes. But once you get back to the truck, he charges you one soul.....",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 26- outcome 11
          scenario: "Your momentary silence benfits you. You gather yourself and manage to find your way back to your truck, but you are seriously traumatised.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 27- outcome 12
          scenario: "You panic and start running. You run continuously in the wrong direction, and remain lost forever.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 28- outcome 13
          scenario: "It takes you quite a while, but you manage to backtrack to where your journey started, allowing you to find your way back to the truck before daybreak.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 29- outcome 14
          scenario: "You press on and end up falling into a hole in the ground that you cannot climb out of. You have to phone for help, how embarrasing you didn't do that before.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 30- outcome 15
          scenario: "You eventually come to a waterfall which you can climb with ease. You find you way back safely, although wet.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 31- outcome 16
          scenario: "You come to a bridge where you can get to a road, but it isn't the road where your truck is parked. You eventually get back via hitchiking.",
          category: "hunter",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          }
        ]
      let teenager = [
          { //main id
          scenario: "You are a teenage girl, you are unarmed and lost in the woods. You are dressed for a halloween party and come to a fork in the road.",
          category: "teenager",
          question: "Do you go left or right?",
          leftA: "Left.",
          rightB: "Right.",
          leftInt: "",
          rightInt: "",
          initState: "true",
          finalState: "false"
          },
          { // id 2
          scenario: "You see a strange light in the distance.",
          category: "teenager",
          question: "Do you go towards it or stay on the path?",
          leftA: "Go towards it.",
          leftB: "Stay on the path.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 3
          scenario: "You hear a strange noise in the distance.",
          category: "teenager",
          question: "Do you go towards it or stay on the path?",
          leftA: "Go towards it.",
          rightA: "Stay on the path.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 4
          scenario: "You come across a magical looking event. There is a game being played.",
          category: "teenager",
          quesiton: "Do you play the game?",
          leftA: "No.",
          rightA: "Yes.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 5
          scenario: "You come across a black cat, and it's unsettling.",
          category: "teenager",
          question: "Do you pet the cat?",
          leftA: "Yes.",
          rightA: "No.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 6
          scenario: "You come across a strange looking man.",
          category: "teenager",
          question: "Do you approach him kindly or harshly?",
          leftA: "Kindly",
          rightA: "Harshly",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 7
          scenario: "The path ends...",
          category: "teenager",
          question: "Do you turn around or press on?",
          leftA: "Turn around",
          rightA: "Press on",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 8
          scenario: "Instead of playing the game. You ask the creatures about how to get home. They don't know what you mean.",
          category: "teenager",
          question: "What do you do?",
          leftA: "Ask for their help in teleporting you home.",
          rightA: "Say goodbye and try to continue walking",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 9
          scenario: "You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.",
          category: "teenager",
          question: "Do you stay with the creatures?",
          leftA: "Yes",
          rightA: "No",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 10
          scenario: "A beautiful woman appears from nowhere. She asks if you are in trouble.",
          category: "teenager",
          question: "What do you tell her?",
          leftA: "I am in trouble.",
          rightA: "I am just going for a walk.",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 11
          scenario: "You continue walking forward, the cat is now following you.",
          category: "teenager",
          question: "'What do you do?",
          leftA: "Continue walking, although at a quicker pace",
          rightA: "Scare the cat",
          leftInt: "",
          rightInt: "",
          initState: "",
          finalState: ""
          },
          { // id 12
          scenario: "The man tells you that you are as kind as you are pretty. You are flattered by this. He then offers to take you home.",
          category: "teenager",
          question: "What do you do?",
          leftA: "Ask him how he knew that was what you wanted.",
          rightA: "Go along with it, and follow his lead.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {// id 13 
          scenario: "The man turns into some sort of demon, his ghostly grasp taking hold of you.",
          category: "teenager",
          question: "What do you do?",
          leftA: "Apologise.",
          rightA: "Tell him to fuck himself.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          { // id 14
          scenario: "You turn around, eventually finding your way back to where the party was.",
          category: "teenager",
          question: "What do you do?",
          leftA: "Phone for help.",
          rightA: "Trust that you can find your way from here.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {//id 15
          scenario: "You continue through the trees and come to a river.",
          category: "teenager",
          question: "Which way will you follow the river?",
          leftA: "Up.",
          rightA: "Down.",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "false"
          },
          {//id 16- outcome 1
          scenario: "The creatures tell you that you are creative, before teleporting you to the middle of the ocean by mistake.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 17- outcome 2
          scenario: "You remain lost, becoming a skilled woodsman, making a new life for yourself in the woods.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 18- outcome 3
          scenario: "You are welcomed into the community and are turned into a magical being.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 19- outcome 4
          scenario: "They ask you what you want, if not eternal life. You ask them to take you home, which they do.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 20- outcome 5
          scenario: "She kidnaps you and reveals that she is a witch. You become her witchy assistant for all of eternity.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 21- outcome 6
          scenario: "She believes you, you continue to walk in the direction you were, finding your way home.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 22- outcome 7
          scenario: "The cat continues to follow you. You remain lost, and the paranoia you have about this cat drives you crazy.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 23- outcome 8
          scenario: "The cat bites you, and you pass out. You wake up in your bed the next day, confused about the events the night before.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 24- outcome 9
          scenario: "The man tells you about the magical events taking place tonight. This completely scars you, scares you, and changes your worldview. You return home, but suddenly feel like you have made the wrong choices.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 25- outcome 10
          scenario: "He pretends to take you home, leading you instead to the nearest river. He suddenly vanishes, leaving you confused and alone in a completely different part of the woods.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 26- outcome 11
          scenario: "He laughs maniacally and turns you into a werewolf. You live your new life in secret.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 27- outcome 12
          scenario: "For some reason this works and he vanishes, teleporting you home simultaneously.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 28- outcome 13
          scenario: "You wonder why you didn't do this the entire time, but end up getting home safely.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 29- outcome 14
          scenario: "You get lost again (lol why pick this dummy :p)",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 30- outcome 15
          scenario: "You eventually come to a waterfall and attempt to climb up. Because you are not dressed to go hiking you slip and fall to your doom.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          },
          {//id 31- outcome 16
          scenario: "You eventually come to a bridge (where you can get to the road), and you hitchike home.",
          category: "teenager",
          question: "",
          leftA: "",
          rightA:"",
          leftInt: "",
          rightInt: "",
          initState: "false",
          finalState: "true"
          }
      ]
      }
  
  }
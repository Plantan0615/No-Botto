module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("your commands.", {type: "LISTENING"})
  // Create RPG Table
  // id - autoincrement
  // category - hunter, teenager
  // scenario - string (description)
  // question - prompt user to answer choice (first field)
  // leftA - left answer (second field)
  // rightB - right answer (third field)
  // leftInt - left choice (foreign_key, id)
  // rightInt - right choice (foreign_key, id)
  // finalState - is Ending State (true, false)

  let dropTable = client.sql.prepare("DROP TABLE IF EXISTS rpg")

  dropTable.run();
  let prepareRPGTable = client.sql.prepare("CREATE TABLE IF NOT EXISTS rpg (id INT AUTO INCREMENT NOT NULL PRIMARY KEY, category VARCHAR(255), scenario VARCHAR(255), question VARCHAR(255), leftA VARCHAR(255), rightB VARCHAR(255), leftInt INT, rightInt INT, initState VARCHAR(255), finalState VARCHAR(255))")


  // Create Table
  prepareRPGTable.run();

  // Get All categories
  let rpgTable = client.sql.prepare("SELECT * FROM rpg")

  let resultRPG = rpgTable.all();

  if (resultRPG.length == 0) {
    // Empty table
    // Create all choices
    let hunter = [
      { //main id 1
      scenario: "You are a hunter, you are armed and lost in the woods. You also have a map, and you come to a fork in the road.",
      category: "hunter",
      question: "Do you go left or right?",
      leftA: "Left.",
      rightB: "Right.",
      leftInt: "",//"2",
      rightInt: "",//"3",
      initState: "true",
      finalState: "false"
      },
      { // id 2
      scenario: "You see a strange light in the distance.",
      category: "hunter",
      question: "Do you go towards it or stay on the path?",
      leftA: "Go towards it.",
      rightB: "Stay on the path.",
      leftInt: "",//"4",
      rightInt: "",//"5",
      initState: "false",
      finalState: "false"
      },
      { // id 3
      scenario: "You hear a strange noise in the distance.",
      category: "hunter",
      question: "Do you go towards it or stay on the path?",
      leftA: "Go towards it.",
      rightB: "Stay on the path.",
      leftInt: "",//"6",
      rightInt: "",//"7",
      initState: "false",
      finalState: "false"
      },
      { // id 4
      scenario: "You come across a magical looking event. There is a game being played.",
      category: "hunter",
      question: "Do you play the game or threaten to shoot the creatures before you?",
      leftA: "Threaten to shoot the creatures.",
      rightB: "Play the game.",
      leftInt: "",//"8",
      rightInt: "",//"9",
      initState: "false",
      finalState: "false"
      },
      { // id 5
      scenario: "You come across a black cat, and it's unsettling.",
      category: "hunter",
      question: "Do you pet or shoot the cat?",
      leftA: "Pet the cat.",
      rightB: "Shoot the cat.",
      leftInt: "",//"10",
      rightInt: "",//"11",
      initState: "false",
      finalState: "false"
      },
      { // id 6
      scenario: "You come across a strange looking man.",
      category: "hunter",
      question: "Do you speak to or shoot the man?",
      leftA: "Speak to the man",
      rightB: "Shoot the man.",
      leftInt: "",//"12",
      rightInt: "",//"13",
      initState: "false",
      finalState: "false"
      },
      { // id 7
      scenario: "The path ends...",
      category: "hunter",
      question: "Do you use your map or press on in the same direction?",
      leftA: "Use your map.",
      rightB: "Press on in the same direction.",
      leftInt: "",//"14",
      rightInt: "",//"15",
      initState: "false",
      finalState: "false"
      },
      { // id 8
      scenario: "Instead of playing the game.You threaten the creatures. They respond hostiley and begin to chase you. ",
      category: "hunter",
      question: "What do you do?",
      leftA: "Run.",
      rightB: "Shoot.",
      leftInt: "",//"16",
      rightInt: "",//"17",
      initState: "false",
      finalState: "false"
      },
      { // id 9
      scenario: "You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.",
      category: "hunter",
      question: "Do you stay with the creatures?",
      leftA: "Yes",
      rightB: "No",
      leftInt: "",//"18",
      rightInt: "",//"19",
      initState: "false",
      finalState: "false"
      },
      { // id 10
      scenario: "A beautiful woman appears from nowhere. She asks what a handsome man like you is doing in the woods at this time of night.",
      category: "hunter",
      question: "What do you say?",
      leftA: "I am lost after doing some hunting.",
      rightB: "Something romantic, she is beautiful after all.",
      leftInt: "",//"20",
      rightInt: "",//"21",
      initState: "false",
      finalState: "false"
      },
      { // id 11
      scenario: "The cat bursts into flames, the light it creates illuminating another path forward.",
      category: "hunter",
      question: "Do you follow the new path or stay on your current route?",
      leftA: "Follow the new path.",
      rightB: "Stay on the current route.",
      leftInt: "",//"22",
      rightInt: "",//"23",
      initState: "false",
      finalState: "false"
      },
      { // id 12
      scenario: "He seems friendly enough. He says hello and asks what you're up to.",
      category: "hunter",
      question: "What do you do?",
      leftA: "Ask him what he is doing in the woods.",
      rightB: "Tell him that you're lost.",
      leftInt: "",//"24",
      rightInt: "",//"25",
      initState: "false",
      finalState: "false"
      },
      {// id 13
      scenario: "The man turns into a ghostly vapour, vanishing into thin air.",
      category: "hunter",
      question: "What do you do?",
      leftA: "Stand there for a moment, petrified (and then flee).",
      rightB: "Scream (and flee immediately).",
      leftInt: "",//"26",
      rightInt: "",//"27",
      initState: "false",
      finalState: "false"
      },
      { // id 14
      scenario: "You use the end of the path to find your current location on the map.",
      category: "hunter",
      question: "Do you go back to where you started or continue forward?",
      leftA: "Go back to where I started.",
      rightB: "Continue forward.",
      leftInt: "",//"28",
      rightInt: "",//"29",
      initState: "false",
      finalState: "false"
      },
      {//id 15
      scenario: "You continue through the trees and come to a river.",
      category: "hunter",
      question: "Which way will you follow the river?",
      leftA: "Up.",
      rightB: "Down.",
      leftInt: "",//"30",
      rightInt: "",//"31",
      initState: "false",
      finalState: "false"
      },
      {//id 16- outcome 1
      scenario: "The creatures chase you to the nearest road, which happens to be where your truck is.",
      category: "hunter",
      question: "",
      leftA: "",
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
      leftInt: "",
      rightInt: "",
      initState: "false",
      finalState: "true"
      }
    ]
  let teenager = [
      { //main id 1
      scenario: "You are a teenage girl, you are unarmed and lost in the woods. You are dressed for a halloween party and come to a fork in the road.",
      category: "teenager",
      question: "Do you go left or right?",
      leftA: "Left.",
      rightB: "Right.",
      leftInt: "",//"2",
      rightInt: "",//"3",
      initState: "true",
      finalState: "false"
      },
      { // id 2
      scenario: "You see a strange light in the distance.",
      category: "teenager",
      question: "Do you go towards it or stay on the path?",
      leftA: "Go towards it.",
      rightB: "Stay on the path.",
      leftInt: "",//"4",
      rightInt: "",//"5",
      initState: "false",
      finalState: "false"
      },
      { // id 3
      scenario: "You hear a strange noise in the distance.",
      category: "teenager",
      question: "Do you go towards it or stay on the path?",
      leftA: "Go towards it.",
      rightB: "Stay on the path.",
      leftInt: "",//"6",
      rightInt: "",//"7",
      initState: "false",
      finalState: "false"
      },
      { // id 4
      scenario: "You come across a magical looking event. There is a game being played.",
      category: "teenager",
      question: "Do you play the game?",
      leftA: "No.",
      rightB: "Yes.",
      leftInt: "",//"8",
      rightInt: "",//"9",
      initState: "false",
      finalState: "false"
      },
      { // id 5
      scenario: "You come across a black cat, and it's unsettling.",
      category: "teenager",
      question: "Do you pet the cat?",
      leftA: "Yes.",
      rightB: "No.",
      leftInt: "",//"10",
      rightInt: "",//"11",
      initState: "false",
      finalState: "false"
      },
      { // id 6
      scenario: "You come across a strange looking man.",
      category: "teenager",
      question: "Do you approach him kindly or harshly?",
      leftA: "Kindly",
      rightB: "Harshly",
      leftInt: "",//"12",
      rightInt: "",//"13",
      initState: "false",
      finalState: "false"
      },
      { // id 7
      scenario: "The path ends...",
      category: "teenager",
      question: "Do you turn around or press on?",
      leftA: "Turn around",
      rightB: "Press on",
      leftInt: "",//"14",
      rightInt: "",//"15",
      initState: "false",
      finalState: "false"
      },
      { // id 8
      scenario: "Instead of playing the game. You ask the creatures about how to get home. They don't know what you mean.",
      category: "teenager",
      question: "What do you do?",
      leftA: "Ask for their help in teleporting you home.",
      rightB: "Say goodbye and try to continue walking",
      leftInt: "",//"16",
      rightInt: "",//"17",
      initState: "false",
      finalState: "false"
      },
      { // id 9
      scenario: "You win the game, despite not understanding it. The creatures tell you about their magical history, it's enthralling. They offer you a place in their group.",
      category: "teenager",
      question: "Do you stay with the creatures?",
      leftA: "Yes",
      rightB: "No",
      leftInt: "",//"18",
      rightInt: "",//"19",
      initState: "false",
      finalState: "false"
      },
      { // id 10
      scenario: "A beautiful woman appears from nowhere. She asks if you are in trouble.",
      category: "teenager",
      question: "What do you tell her?",
      leftA: "I am in trouble.",
      rightB: "I am just going for a walk.",
      leftInt: "",//"20",
      rightInt: "",//"21",
      initState: "false",
      finalState: "false"
      },
      { // id 11
      scenario: "You continue walking forward, the cat is now following you.",
      category: "teenager",
      question: "'What do you do?",
      leftA: "Continue walking, although at a quicker pace",
      rightB: "Scare the cat",
      leftInt: "",//"22",
      rightInt: "",//"23",
      initState: "false",
      finalState: "false"
      },
      { // id 12
      scenario: "The man tells you that you are as kind as you are pretty. You are flattered by this. He then offers to take you home.",
      category: "teenager",
      question: "What do you do?",
      leftA: "Ask him how he knew that was what you wanted.",
      rightB: "Go along with it, and follow his lead.",
      leftInt: "",//"24",
      rightInt: "",//"25",
      initState: "false",
      finalState: "false"
      },
      {// id 13
      scenario: "The man turns into some sort of demon, his ghostly grasp taking hold of you.",
      category: "teenager",
      question: "What do you do?",
      leftA: "Apologise.",
      rightB: "Tell him to fuck himself.",
      leftInt: "",//"26",
      rightInt: "",//"27",
      initState: "false",
      finalState: "false"
      },
      { // id 14
      scenario: "You turn around, eventually finding your way back to where the party was.",
      category: "teenager",
      question: "What do you do?",
      leftA: "Phone for help.",
      rightB: "Trust that you can find your way from here.",
      leftInt: "",//"28",
      rightInt: "",//"29",
      initState: "false",
      finalState: "false"
      },
      {//id 15
      scenario: "You continue through the trees and come to a river.",
      category: "teenager",
      question: "Which way will you follow the river?",
      leftA: "Up.",
      rightB: "Down.",
      leftInt: "",//"30",
      rightInt: "",//"31",
      initState: "false",
      finalState: "false"
      },
      {//id 16- outcome 1
      scenario: "The creatures tell you that you are creative, before teleporting you to the middle of the ocean by mistake.",
      category: "teenager",
      question: "",
      leftA: "",
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
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
      rightB:"",
      leftInt: "",
      rightInt: "",
      initState: "false",
      finalState: "true"
      }
  ]

    // id - autoincrement
    // category - hunter, teenager
    // scenario - string (description)
    // question - prompt user to answer choice (first field)
    // leftA - left answer (second field)
    // rightB - right answer (third field)
    // leftInt - left choice (foreign_key, id)
    // rightInt - right choice (foreign_key, id)
    // finalState - is Ending State (true, false)

    let map = {}
    let questions = [...teenager, ...hunter]
    let counter = 0
    let currentCategory = null
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i]
      if (map[question.category] == undefined) {
        map[question.category] = {
          count: 0
        }
        if (currentCategory == null) {
          currentCategory = question.category
        }
        if (currentCategory != question.category) {
          counter = map[currentCategory].count + 0
          currentCategory = question.category
        } else {
          counter = 0
        }
      }
      let questionsql = client.sql.prepare("INSERT INTO rpg (id, category, scenario, question, leftA, rightB, leftInt, rightInt, initState, finalState) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")

      let result = questionsql.run((i + 1),
        question.category, question.scenario, question.question, question.leftA, question.rightB,
        (`${((counter)) + 2}`),
        `${((counter)) + 3}`,
        question.initState,
        question.finalState)
        counter+=2
        map[question.category].count += 1
    }


  }
  let sqlMatch = `SELECT * FROM rpg`
  let statement = client.sql.prepare(sqlMatch).all()

  let fs = require("fs")

  fs.writeFileSync(`./rpg.json`, JSON.stringify(statement))

  let isError = false

  // console.log(statement)

  let request = `SELECT DISTINCT category FROM rpg`
  let category = client.sql.prepare(request).all()

  // console.log(category)

  function createTree(category, data, iState) {
    let generateTree = {}

    // console.log(iState)

    function getData(id) {
      // console.log(data.length)

      return data.filter(v => v.id == id)
    }

    function buildTree(state) {
      if (state.length >= 1) {
        const {leftInt, rightInt} = state[0]
        const left = getData(leftInt)
        const right = getData(rightInt)

        let result = {}
        result.data = state[0]
        if (left.length == 1) {
          result.left = left[0]
        }
        if (right.length == 1) {
          result.right = right[0]
        }
        if (left.length == 0 && right.length == 0) {
          return null
        }
        return result
      } else {
        return null
      }
    }

    let hasSeen = []
    function recursiveTree(tree) {

      // console.log(tree)
      let fun = {}
      fun.id = tree.id
      fun.children = []
      fun.data = {
        scenario: tree.scenario,
        question: tree.question,
        final: tree.finalState == 'true' ? true : false,
        init: tree.initState == 'true' ? true : false
      }
      // console.log(tree.leftInt, tree.rightInt)
      if (tree.leftInt != undefined) {
        fun.data.left = tree.leftA
      }
      if (tree.rightInt != undefined) {
        fun.data.right = tree.rightB
      }
      if (tree.leftInt != undefined) {
        let newTree = getData(tree.leftInt)
        if (newTree.length == 1) {
          fun.children.push(recursiveTree(newTree[0]))
        }
      }
      if (tree.rightInt != undefined) {
        let newTree = getData(tree.rightInt)
        if (newTree.length == 1) {
          fun.children.push(recursiveTree(newTree[0]))
        }
      }

      return fun
    }

    console.log(iState.length)
    for (let i = 0; i < iState.length; i++) {
      generateTree = recursiveTree(iState[i])
    }

    fs.writeFileSync(`./outcome_${category}.json`, JSON.stringify(generateTree))

    return generateTree;
  }

  function traceByCategory(category, data) {
    let initState = data.filter(v => {
      return v.initState == 'true' || v.initState == true
    })
    let middleState = data.filter(v => {
      return v.initState == 'false' && v.finalState == 'false' || (v.initState == false && v.finalState == false) 
    })
    let finalState = data.filter(v => {
      return v.finalState == 'true' || v.finalState == true
    })

    if (initState.length == 1) {
      // Found Init, create StateMachine
      let tree = createTree(category, data, initState)
      return tree
    } else {
      throw Error(`Cannot create rpg state machine for ${category}.  Exiting`)
      process.exit()
    }
    return null
  }

  let categories = {}
  for (let i = 0; i < category.length; i++) {
    let categoryData = category[i]
    let categoryName = categoryData.category
    if (categories[categoryName] == undefined) {
      categories[categoryName] = {} // statemachine
    }
    // console.log(`Category Name: ${categoryName}`)
    let query = `SELECT * FROM rpg WHERE category = '${categoryName}'`
    let queryResult = client.sql.prepare(query).all()
    categories[categoryName] = traceByCategory(categoryName, queryResult)
  }

  client.rpg = categories

}
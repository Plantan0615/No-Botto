module.exports.run = async(client, message, args) => {
var scenarios = [
    {scenarioA: "be blind", scenarioB: "be deaf"},
    {scenarioA: "aliens be robotic", scenarioB: "aliens be organic"},
    {scenarioA: "be covered in fur", scenarioB: "be covered in scales"},
    {scenarioA: "always be 10 minutes late", scenarioB: "always be 20 minutes early"},
    {scenarioA: "have a literal get out of jail free card", scenarioB: "have a key that opens any door"},
]
function pickScenario (){
    return scenarios[Math.floor(Math.random() * scenarios.length)]
};
var situation = pickScenario();
message.channel.send ("Would you rather " + situation.scenarioA + " or " + situation.scenarioB + " ?")
    .then (function(message){
        message.react("🅰️");
        message.react("🅱️");
    }).catch(err => console.log(err));
}
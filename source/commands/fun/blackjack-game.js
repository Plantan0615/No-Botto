var shuffle = require("../../../node_modules/shuffle"),
    blackjackHand = require("./blackjack-hand"),
    EventEmitter = require("events").EventEmitter,
    util = require("util");
var deck,
    dealer,
    player,
    dealerHasStayed = false,
    playerHasStayed = false;

function Game(){
    EventEmitter.call(this);

    var game = this;
    this.onPlayerInputNeeded;
    this.onEnd;

    this.begin = function(){
        dealer= new blackjackHand();
        player = new blackjackHand();
        deck = shuffle.shuffle();
        deck.deal(2, [player, dealer]);

        isGameOver(playerTurn);
    }

    function playerTurn(){
        displayGameStatus();
        console.log("\nHit or Stay?");

        var handleInput = function(command){
            switch(command.toLowerCase()){
                case "hit":
                    player.push(deck.draw());
                    isGameOver(playerTurn);
                    break;
                case "stay":
                    playerHasStayed = true;
                    dealerTurn();
                    break;
                case "quit":
                    game.emit("end");
                    break;
                default:
                    console.log("Unknown command: " + command.toLowerCase());
                    playerTurn();
                    break;
            }
        };
        game.emit("input", handleInput);
    }

    function dealerTurn(){
        var dealerPause = 1000;
        displayGameStatus();

        setTimeout(function(){
            var dealerScore = dealer.score();
            var playerScore = player.score();

            if(dealerScore >= 16 && dealerScore >= playerScore){
                console.log("\nDealer stays");
                dealerHasStayed = true;
            } else {
                console.log("\nDealer hits");
                dealer.push(deck.draw());
            }

        setTimeout(function(){
            isGameOver(dealerTurn);
            }, dealerPause);

        }, dealerPause);
    }

    function isGameOver(callback){
        var target = 21;
        var dealerScore = dealer.score(target);
        var playerScore = player.score(target);

        if(dealerScore == target){
            displayGameStatus(true);
            console.log("\nDealer has 21. you lose");
            game.emit("end");
        } else if (playerScore > target){
            displayGameStatus(true);
            console.log("\nYou have gone bust. you lose")
            game.emit("end");
        } else if (dealerScore > target){
            displayGameStatus(true);
            console.log("\nDealer has gone bust. you win");
            game.emit("end");
        } else if(dealerHasStayed){
            displayGameStatus(true);
            if(dealerScore >= playerScore)
                console.log("You lose.\n")
            else
                console.log("You win. \n")
            game.emit("end");
        } else{
            callback();
        }
    }

    function displayGameStatus(gameIsOver){
        var target = 21;
        if(playerHasStayed || gameIsOver)
            console.log("\nDealer: %s (%d)", dealer.toString(), player.score(target));
        else
        console.log("\nDealer: %s", dealer.toString(true));    
        console.log("\nPlayer: %s (%d)", player.toString(), player.score(target));
    }
};

util.inherits(Game, EventEmitter);
module.exports = Game;
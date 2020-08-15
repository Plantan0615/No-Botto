const cardDealer = require("card-dealer");
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    if (args.length == 0) {
        // Error with no bet
        let msg = await message.reply("You must place a bet")
        await message.delete({timeout: 3000})
        await msg.delete({timeout: 2000})
        return
    }
    // UNO may be another option :)
    const standardDeck = cardDealer.standardDeck
    const dealer = new cardDealer.Dealer(standardDeck);

    const randomize = Math.floor(Math.random() * 10) + 1 // minimum: 1 time shuffle
    const cutIndexes = []
    // Shuffle the deck x times
    for(let i = 0; i < randomize; i++) {
        dealer.shuffle()
        const randomCut = Math.floor(Math.random() * dealer.remainingCards()) // minimum cut: 5 cards
        dealer.cut(randomCut)
        cutIndexes.push(randomCut)
    }

    console.log(`Shuffled: ${randomize} and cut: [${cutIndexes.join(",")}]`)

    

    let game = new BlackJack(message, dealer)

    await game.start()
}

module.exports.help = {
    name: "blackjack",
    category: "blackjack",
    usage: "PREFIXblackjack 5",
    description: "Blackjack is a game that you play against the dealer, trying to get your total cards to 21"
}

class BlackJack {
    constructor(_message, _system) {
        this.message = _message
        this.prompt = null
        this.player = {cards: [], total: 0}
        this.dealer = {cards: [], total: 0}
        this.system = _system
    }

    getRemainingDeck() {
        return this.system.remainingCards()
    }

    async start() {
        const promptMsg = new Discord.MessageEmbed();
        this.starterDeck()

        const isPlayerWinner = this.isBlackJack("player")
        const isDealerWinner = this.isBlackJack("dealer")
    }

    isBlackJack(input) {
        return this[input].totals == 21
    }

    hasBusted(input) {
        return this[input].totals >= 21
    }

    isUnder(input) {
        return this[input].totals
    }

    convertCardToValue(card) {
        let rank = card.rank
        let suit = card.suit

        if (["jack", "queen", "king"].includes(rank.toLowerCase())) {
            return '10'
        }
        if (["ace"].includes(rank.toLowerCase())) {
            return '11'
        }
        return rank
    }

    add2Deck(input) {
        let card = this.system.draw(1)
        this.system.discard(1)
        let value = card.rank
        this[input].cards.push(card)
        let result = this.convertCardToValue(card)
        this[input].total += parseInt(result)
    }

    starterDeck() {
        // ORDER: Player -> skip 1 -> dealer face up -> player -> skip 1 -> dealer face down
        this.add2Deck("player")
        this.add2Deck("dealer")
        this.add2Deck("player")
        this.add2Deck("dealer")
    }
}
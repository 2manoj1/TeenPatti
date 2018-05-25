import _ from 'lodash';
import Hearts from './Hearts';
import Spades from './Spades';
import Diamonds from './Diamonds';
import Clubs from './Clubs';

class Rules {
    constructor() {
        this.cardEnum = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K"
        ]

    }


    //1
    isSet(HandOfCards) {
        let cards = this.getCardsValue(HandOfCards);
        return _.every(cards, (c, i, arrElm) => c === arrElm[0]);
    }

    //2
    isPureSequence(HandOfCards) {
        if (this.isSameColor(HandOfCards)) {
            return this.isSequenceRun(HandOfCards);
        }
        return false;
    }

    //3
    isSequenceRun(HandOfCards) {
        let cards = this.getCardsValue(HandOfCards);
        let indexes = _.map(cards, (c) => _.findIndex(this.cardEnum, (cItem) => cItem === c));
        const sortedNumber = _.sortBy(indexes);
        if (sortedNumber[0] === 0 && sortedNumber[2] === 12 && (sortedNumber[1] === 1 || sortedNumber === 11)) return true;
        else {
            return this.isIncreasing(sortedNumber);
        }
    }

    //4
    isColorTwoSequence(HandOfCards) {
        if (this.isSameColor(HandOfCards)) {
            return this.isTwoSequence(HandOfCards);
        }
    }

    //5
    isTwoPair(HandOfCards) {
        let cards = this.getCardsValue(HandOfCards);
        return _.uniq(cards).length === 2;
    }


    //6
    isHighCard(HandOfCards) {
        return this.isTwoSequence(HandOfCards);
    }


    
    isTwoSequence(HandOfCards) {
        let cards = this.getCardsValue(HandOfCards);
        let indexes = _.map(cards, (c) => _.findIndex(this.cardEnum, (cItem) => cItem === c));
        const sortedNumber = _.sortBy(indexes);
        if (this.isTwoSequenceNumber(_.slice(sortedNumber, 0, 2)) || this.isTwoSequenceNumber(_.slice(sortedNumber, 1, 3))) {
            return true;
        }
        return false;
    }

    isTwoSequenceNumber(sortedNumber) {
        if (sortedNumber[0] === 0 && sortedNumber[1] === 12) return true;
        else return this.isIncreasing(sortedNumber);
    }

    isIncreasing(numbers) {
        return numbers.every((number, i) => i === 0 || ((numbers[i - 1] + 1) === number));
    }

    getCardsValue(HandOfCards) {
        return HandOfCards.map((cardNumber) => {
            const typeCard = this.getCardType(cardNumber);
            return typeCard && _.values(typeCard.getCard(cardNumber))[0];
        });
    }

    isSameColor(HandOfCards) {
        let cards = HandOfCards.map((cardNumber) => {
            const typeCard = this.getCardType(cardNumber);
            return typeCard && typeCard.getDeckName(cardNumber);
        });
        return _.every(cards, (c, i, arrElm) => c === arrElm[0]);
    }

    getCardType(card) {
        if (card >= 0 && card <= 12) {
            return Hearts;
        }
        else if (card >= 13 && card <= 25) {
            return Spades;
        }
        else if (card >= 26 && card <= 38) {
            return Diamonds;
        }
        else if (card >= 39 && card <= 51) {
            return Clubs;
        }
        else {
            return null;
        }
    }

    BreakDraw(drawPlayers) {
        let cardRank = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A"
        ]
        return _.map(drawPlayers, p => {
            let calCardValue = 0;
            _.map(p.card, cardNumber => {
                const typeCard = this.getCardType(cardNumber);
                if(typeCard) {
                    let rank;
                    if(typeCard.getDeckName() === "Hearts") {
                        rank = 400; 
                        let cardName = _.values(typeCard.getCard(cardNumber))[0];
                        let index = _.findIndex(cardRank, (cItem) => cItem === cardName);
                        calCardValue += (rank + index);
                    }
                    else if(typeCard.getDeckName() === "Spades") {
                        rank = 300; 
                        let cardName = _.values(typeCard.getCard(cardNumber))[0];
                        let index = _.findIndex(cardRank, (cItem) => cItem === cardName);
                        calCardValue += (rank + index);
                    }
                    else if(typeCard.getDeckName() === "Diamonds") {
                        rank = 200; 
                        let cardName = _.values(typeCard.getCard(cardNumber))[0];
                        let index = _.findIndex(cardRank, (cItem) => cItem === cardName);
                        calCardValue += (rank + index);
                    }
                    else {
                        rank = 100; 
                        let cardName = _.values(typeCard.getCard(cardNumber))[0];
                        let index = _.findIndex(cardRank, (cItem) => cItem === cardName);
                        calCardValue += (rank + index);
                    } 
                }
            })
            return {...p, "calCardValue": calCardValue};
        })

    }
}

const rules = new Rules();
export default rules;
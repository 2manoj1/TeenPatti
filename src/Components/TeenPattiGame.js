import Rules from './Rules';
import _ from 'lodash';

class TeenPattiGame {
    getWinner(inputArrayPlayers) {
        let priority = ["isset", "ispuresequence", "issequencerun", "iscolortwosequence", "istwopair", "ishighcard", "low"]
        let playerPlayData = inputArrayPlayers.map((player, key) => {
            let obj = {
                card: player,
                id: key,
                priority: priority[6]
            }
            if (Rules.isSet(player)) {
                obj.priority = priority[0];
            }
            else if (Rules.isPureSequence(player)) {
                obj.priority = priority[1];
            }
            else if (Rules.isSequenceRun(player)) {
                obj.priority = priority[2];
            }
            else if (Rules.isColorTwoSequence(player)) {
                obj.priority = priority[3];
            }
            else if (Rules.isTwoPair(player)) {
                obj.priority = priority[4];
            }
            else if (Rules.isHighCard(player)) {
                obj.priority = priority[5];
            }
            else {
                obj.priority = priority[6];
            }
            return obj;
        });
        let winner;
        let howManyIssetWinner = _.filter(playerPlayData, (player) => player.priority === priority[0]);
        let howManyIsPureSequenceWinner = _.filter(playerPlayData, (player) => player.priority === priority[1]);
        let howManyIsSequenceRunWinner = _.filter(playerPlayData, (player) => player.priority === priority[2]);
        let howManyIsColorTwoSequenceWinner = _.filter(playerPlayData, (player) => player.priority === priority[3]);
        let howManyIsTwoPairWinner = _.filter(playerPlayData, (player) => player.priority === priority[4]);
        let howManyIshighCardWinner = _.filter(playerPlayData, (player) => player.priority === priority[5]);
        let lowPriority = _.filter(playerPlayData, (player) => player.priority === priority[6]);
        if (howManyIssetWinner.length === 1) {
            winner = howManyIssetWinner;
        }
        else if (howManyIssetWinner.length > 1) {
            winner = this.getWinnerIfDraw(howManyIssetWinner);
        }
        else if (howManyIssetWinner.length === 0 && howManyIsPureSequenceWinner.length === 1) {
            winner = howManyIsPureSequenceWinner;
        }
        else if(howManyIsPureSequenceWinner > 1) {
            winner = this.getWinnerIfDraw(howManyIsPureSequenceWinner);
        }
        else if (howManyIssetWinner.length === 0 && howManyIsPureSequenceWinner.length === 0 && howManyIsSequenceRunWinner.length === 1) {
            winner = howManyIsSequenceRunWinner;
        }
        else if(howManyIsSequenceRunWinner.length > 1) {
            winner = this.getWinnerIfDraw(howManyIsSequenceRunWinner);
        }
        else if (howManyIssetWinner.length === 0 && howManyIsPureSequenceWinner.length === 0 && howManyIsSequenceRunWinner.length === 0 && howManyIsColorTwoSequenceWinner.length === 1) {
            winner = howManyIsColorTwoSequenceWinner;
        }
        else if(howManyIsColorTwoSequenceWinner > 1) {
            winner = this.getWinnerIfDraw(howManyIsColorTwoSequenceWinner);
        }
        else if (howManyIssetWinner.length === 0 && howManyIsPureSequenceWinner.length === 0 && howManyIsSequenceRunWinner.length === 0 && howManyIsColorTwoSequenceWinner.length === 0 && howManyIsTwoPairWinner.length === 1) {
            winner = howManyIsTwoPairWinner;
        }
        else if(howManyIsTwoPairWinner.length > 1) {
            winner = this.getWinnerIfDraw(howManyIsTwoPairWinner);
        }
        else if (howManyIssetWinner.length === 0 && howManyIsPureSequenceWinner.length === 0 && howManyIsSequenceRunWinner.length === 0 && howManyIsColorTwoSequenceWinner.length === 0 && howManyIsTwoPairWinner.length === 0 && howManyIshighCardWinner.length === 1) {
            winner = howManyIshighCardWinner;
        }
        else if(howManyIshighCardWinner.length > 1) {
            winner = this.getWinnerIfDraw(howManyIshighCardWinner);
        }
        else {
            winner = this.getWinnerIfDraw(lowPriority);
        }
        return winner;
    }

    getWinnerIfDraw(playersData) {
        let winnerPlayers = Rules.BreakDraw(playersData);
        return _.maxBy(winnerPlayers, p => p.calCardValue);
    }

    
}

export default new TeenPattiGame();
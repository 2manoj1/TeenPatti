
import {find} from 'lodash';
class Spades {
    constructor() {
        this.patti = [
            { 13: "A" },
            { 14: "2" },
            { 15: "3" },
            { 16: "4" },
            { 17: "5" },
            { 18: "6" },
            { 19: "7" },
            { 20: "8" },
            { 21: "9" },
            { 22: "10" },
            { 23: "J" },
            { 24: "Q" },
            { 25: "K" }
        ];
    }    
    getCard(cardNumber) {
        return find(this.patti, cardNumber); 
    }
    getDeckName() {
        return "Spades";
    }
}
export default new Spades();

import {find} from 'lodash';
class Clubs {
    constructor() {
        this.patti = [
            { 39: "A" },
            { 40: "2" },
            { 41: "3" },
            { 42: "4" },
            { 43: "5" },
            { 44: "6" },
            { 45: "7" },
            { 46: "8" },
            { 47: "9" },
            { 48: "10" },
            { 49: "J" },
            { 50: "Q" },
            { 51: "K" }
        ];
    }
    getCard(cardNumber) {
        return find(this.patti, cardNumber); 
    }

    getDeckName() {
        return "Clubs";
    }
}
export default new Clubs();
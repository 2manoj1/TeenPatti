import {find} from 'lodash';
class Diamonds {
    constructor() {
        this.patti = [
            { 26: "A" },
            { 27: "2" },
            { 28: "3" },
            { 29: "4" },
            { 30: "5" },
            { 31: "6" },
            { 32: "7" },
            { 33: "8" },
            { 34: "9" },
            { 35: "10" },
            { 36: "J" },
            { 37: "Q" },
            { 38: "K" }
        ];

    }  
    getCard(cardNumber) {
        return find(this.patti, cardNumber); 
    }  

    getDeckName() {
        return "Diamonds";
    }
}

export default new Diamonds();
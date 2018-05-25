import {find} from 'lodash';
class Hearts {
    constructor() {
        this.patti = [
            { 0: "A" },
            { 1: "2" },
            { 2: "3" },
            { 3: "4" },
            { 4: "5" },
            { 5: "6" },
            { 6: "7" },
            { 7: "8" },
            { 8: "9" },
            { 9: "10" },
            { 10: "J" },
            { 11: "Q" },
            { 12: "K" }
        ];

    }

    getCard(cardNumber) {
        return find(this.patti, cardNumber); 
    }

    getDeckName() {
        return "Hearts";
    }
    
}

export default new Hearts();
import { SUITS, VALUES } from './constants';

export class CardConstructionException extends Error {
    constructor(message) {
        super(message);
        this.name = 'CardConstructionException';
        this.message = message;
    };
};

export class Card {
    constructor(suit, value) {
        if (SUITS.indexOf(suit) > -1 && VALUES.indexOf(value) > -1) {
            this.value = value;
            this.suit = suit;
        } else throw new CardConstructionException('Invalid values');
    };
};

//To prevent new cards from being added. 
//Cards can only be removed from the Array.
export class PopOnlyArray extends Array {
    constructor(array) {
        super(...array);
    };
    push() {
        throw Error('Method not supported');
    };
    concat() {
        throw Error('Method not supported');
    };
};


//A layer on top of the array.
export class PopOnlyStack {
    constructor(cards) {
        this.cards = new PopOnlyArray(cards);
    };

    pop() {
        return this.cards.pop();
    };

    push() {
        throw Error(`Elements cannot be pushed to an immutable stack.
        Only pop is supported`);
    };
};

//Player has a name and cards.
export class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    };
};

//Board can have cards upto 5.
export class Board {
    constructor(cards) {
        this.cards = cards;
    };
};
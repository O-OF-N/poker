import { PopOnlyStack, Card, Player, Board } from './models';
import { SUITS, VALUES } from './constants';

//All the cards are built and stacked
export const constructAllCards = () => new PopOnlyStack(SUITS.map(suit => VALUES.map(value => new Card(suit, value)))
    .reduce((card1, card2) => card1.concat(card2)));

//Cards are shuffled. O(n)
export const shuffleCards = cards => {
    if (!cards || !cards.cards || !cards.cards instanceof Array || !cards.cards.length) return [];
    try {
        let shuffledCards = [].concat(cards.cards);
        const length = shuffledCards.length;
        for (let i = 0; i < length; i++) {
            const rand = random(0, length - 1);
            const temp = shuffledCards[rand];
            shuffledCards[rand] = shuffledCards[i];
            shuffledCards[i] = temp;
        };
        return shuffledCards;
    } catch (err) {
        console.log(err);
        return [];
    }
};

//When given an input, generates range. Similar to range function in python
export const range = max => [...Array(max).keys()]

//Fetches the last card from the stack.
export const dealCard = cards => cards && cards instanceof Array && cards.length ? cards.pop() : null;

//Builds players by passing them name and their card stack empty.
export const buildPlayers = count => range(count).map(playerId => new Player(`player-${playerId}`));

//First deal. 2 cards each per player
export const initialDealToPlayers = (players, cards) =>
    players.map(player => Object.assign({}, player, { cards: player.cards.concat(dealCard(cards)) }))
        .map(player => Object.assign({}, player, { cards: player.cards.concat(dealCard(cards)) }));

export const flop = cards => new Board([dealCard(cards), dealCard(cards), dealCard(cards)]);

export const turn = (board, cards) =>
    Object.assign({}, board, { cards: board.cards.concat(dealCard(cards)) });

export const river = (board, cards) =>
    Object.assign({}, board, { cards: board.cards.concat(dealCard(cards)) });

//Generates a random number between min and max.
const random = (max, min) => Math.floor(Math.random() * (max - min) + min);


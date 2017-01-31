import chai from 'chai';
import * as Operations from '../src/card-operations';
const expect = chai.expect;
describe('A call to constructAllCards', () => {
    it('returns 52 cards', () => {
        const cards = Operations.constructAllCards().cards;
        expect(cards.length).to.equal(52);
    });

    it('returns all the 13 cards of each suit', () => {
        const cards = Operations.constructAllCards().cards;
        const spades = cards.filter(card => card.suit === 'Spade');
        const hearts = cards.filter(card => card.suit === 'Heart');
        const diamonds = cards.filter(card => card.suit === 'Diamond');
        const clubs = cards.filter(card => card.suit === 'Club');
        expect(spades.length).to.equal(13);
        expect(hearts.length).to.equal(13);
        expect(diamonds.length).to.equal(13);
        expect(clubs.length).to.equal(13);
    });

    it('returns all cards under each suit', () => {
        const cards = Operations.constructAllCards().cards;
        const ass = cards.filter(card => card.value === 'A');
        const two = cards.filter(card => card.value === '2');
        const three = cards.filter(card => card.value === '3');
        const four = cards.filter(card => card.value === '4');
        const five = cards.filter(card => card.value === '5');
        const six = cards.filter(card => card.value === '6');
        const seven = cards.filter(card => card.value === '7');
        const eight = cards.filter(card => card.value === '8');
        const nine = cards.filter(card => card.value === '9');
        const ten = cards.filter(card => card.value === '10');
        const jack = cards.filter(card => card.value === 'J');
        const queen = cards.filter(card => card.value === 'Q');
        const king = cards.filter(card => card.value === 'K');
        expect(ass.length).to.equal(4);
        expect(two.length).to.equal(4);
        expect(three.length).to.equal(4);
        expect(four.length).to.equal(4);
        expect(five.length).to.equal(4);
        expect(six.length).to.equal(4);
        expect(seven.length).to.equal(4);
        expect(eight.length).to.equal(4);
        expect(nine.length).to.equal(4);
        expect(ten.length).to.equal(4);
        expect(jack.length).to.equal(4);
        expect(queen.length).to.equal(4);
        expect(king.length).to.equal(4);
    });
});


describe('A call to shuffle', () => {
    const cards = Operations.constructAllCards();
    it('returns all the 52 cards', () => {
        const shuffledCards = Operations.shuffleCards(cards);
        expect(shuffledCards.length).to.eq(52);
    });

    it('returns empty array when null is passed', () => {
        const shuffledCards = Operations.shuffleCards(null);
        expect(shuffledCards.length).to.eq(0);
    });

    it('returns empty array when empty array is passed as cards', () => {
        const shuffledCards = Operations.shuffleCards({ cards: [] });
        expect(shuffledCards.length).to.eq(0);
    });

    it('returns empty array when null is passed insted of  array for cards', () => {
        const shuffledCards = Operations.shuffleCards({ cards: null });
        expect(shuffledCards.length).to.eq(0);
    });
    it('returns every card passed as input', () => {
        const shuffledCards = Operations.shuffleCards(cards);
        const containsAll = cards.cards.every(card => shuffledCards.indexOf(card) >= 0)
        expect(containsAll).to.eq(true);
    });
    it('returns only the cards that were passed as input', () => {
        const shuffledCards = Operations.shuffleCards(cards);
        const containsAll = shuffledCards.every(card => cards.cards.indexOf(card) >= 0)
        expect(containsAll).to.eq(true);
    });
    it('returns the in a different order each time', () => {
        const shuffledCards1 = Operations.shuffleCards(cards);
        const shuffledCards2 = Operations.shuffleCards(cards);
        const shuffledCards3 = Operations.shuffleCards(cards);
        const shuffledCards1Stringified = shuffledCards1.map(card => card.suit.concat(card.value)).join(',');
        const shuffledCards2Stringified = shuffledCards2.map(card => card.suit.concat(card.value)).join(',');
        const shuffledCards3Stringified = shuffledCards3.map(card => card.suit.concat(card.value)).join(',');
        expect(shuffledCards1Stringified).to.not.eq(shuffledCards2Stringified);
        expect(shuffledCards2Stringified).to.not.eq(shuffledCards3Stringified);
        expect(shuffledCards1Stringified).to.not.eq(shuffledCards3Stringified);
    });
});

describe('A call to dealCard', () => {
    const cards = Operations.constructAllCards().cards.splice(0, 4);
    it('returns the first card in the stack', () => {
        const cardsCopy = [].concat(...cards);
        const dealtCard = Operations.dealCard(cardsCopy);
        expect(cards[cards.length - 1]).to.eq(dealtCard);
    });
    it('returns null when there are no more cards in the stack', () => {
        const cardsCopy = [].concat(...cards);
        Operations.dealCard(cardsCopy);
        Operations.dealCard(cardsCopy);
        Operations.dealCard(cardsCopy);
        const lastCard = Operations.dealCard(cardsCopy);
        const overFlowCard = Operations.dealCard(cardsCopy);
        expect(lastCard).to.not.eq(null);
        expect(overFlowCard).to.eq(null);
    });
    it('returns null when empty card array is passed', () => {
        const cardsCopy = []
        const dealtCard = Operations.dealCard(cardsCopy);
        expect(dealtCard).to.eq(null);
    });
    it('returns a card till the stack is empty', () => {
        const cardsCopy = [].concat(...cards);
        const firstCard = Operations.dealCard(cardsCopy);
        const secondCard = Operations.dealCard(cardsCopy);
        const thirdCard = Operations.dealCard(cardsCopy);
        const lastCard = Operations.dealCard(cardsCopy);
        expect(firstCard).to.not.eq(null);
        expect(secondCard).to.not.eq(null);
        expect(thirdCard).to.not.eq(null);
        expect(lastCard).to.not.eq(null);
    });
});


'use strict'
import {
    constructAllCards, shuffleCards,
    dealCard, buildPlayers, initialDealToPlayers, flop, turn, river
} from './card-operations';


const playerCount = 4;

const shuffleAndDeal = () => {
    const cards = constructAllCards();
    const shuffledCards = shuffleCards(cards);
    const dealtCard = dealCard(shuffledCards);
    return dealtCard ? dealCard : 'No cards to be dealt';
};

const playGame = () => {
    const cards = constructAllCards();
    const players = buildPlayers(4);
    const shuffledCards = shuffleCards(cards);
    const playersWithCards = initialDealToPlayers(players, shuffledCards);
    const board_flop = flop(shuffledCards);
    const board_turn = turn(board_flop, shuffledCards);
    const board_river = river(board_turn, shuffledCards);
    return { player: playersWithCards, board: board_river };
};

console.log('dealt card = ', shuffleAndDeal);

const {player, board} = playGame();
console.log('>>>>>>>>>>>Players : <<<<<<<<<<<<<<<<');
player.forEach(player => {
    console.log();
    console.log('player name: ', player.name);
    console.log('Player cards: ', player.cards[0], player.cards[1]);
    console.log();
});

console.log('>>>>>>>>>>>>Board : <<<<<<<<<<<<<<<<<');
console.log();
console.log(board.cards);





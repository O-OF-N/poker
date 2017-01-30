'use strict'
import { constructAllCards, shuffleCards, 
    dealCard, buildPlayers, initialDealToPlayers,flop, turn, river } from './card-operations';

const playerCount = 4;
const cards = constructAllCards();
const players = buildPlayers(4);
const shuffledCards = shuffleCards(cards);
const playersWithCards = initialDealToPlayers(players, shuffledCards);
const board_flop = flop(shuffledCards);
const board_turn = turn(board_flop,shuffledCards);
const board_river = river(board_turn,shuffledCards);
playersWithCards.forEach(player=>console.log(player.name,player.cards[0], player.cards[1]));
console.log(board_river);




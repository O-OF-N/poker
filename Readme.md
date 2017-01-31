Steps to run the project

* npm install
* npm start

Steps to run the test cases:

* npm install
* npm test

This project has 2 methods in index.js and their functionalities are as described below:

1) shuffleAndDeal
        * Constructs all the 52 cards
        * Shuffles them that way, each time the order is different
        * Deals a single card. 
        * If there are no more cards in the stack 'No cards to be dealt' will be printed. Else the dealt card will be printed.

2) playGame
        * Constructs all the 52 cards
        * Builds 4 players. With players names as 'Player-0' to 'Player-4'
        * Shuffled the cards.
        * Deals 2 cards to each payer in a cyclic fashion. So a deal of one card each to each player, followed by another deal.
        * Constructs a board, and adds 3 cards to the board (Flop)
        * Adds one more card to the board(Turn)
        * Adds one more card to the board(River)
        * Finally prints 
                * The player names and each card possesed by the player
                * The cards on the board.

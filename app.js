



const namesGame = [
    'Pedra',
    'Papel',
    'Tesoura'
];
const AIPlayer = [1,2,3];
const resFeedback = [
    '13',
    '21',
    '32',
];
let pointsYou = 0;
let pointsAI;
const gameFunction = {
    select: function(token) {
        let gameAI = this.randonAI();
        this.gameCheck(token, gameAI);
        this.titleRound(token, gameAI);
    },
    randonAI: function() {
        let roundAI = Math.floor(Math.random() * 3);
        return roundAI;
    },
    gameCheck: function(token1, token2) {
        let resUnif = `${token1 - 1}${token2}`;
        resFeedback.forEach(res => {
            if(res === resUnif) {
                pointsYou ++;
                document.querySelector('#points').innerHTML = pointsYou; 
            };
        });
    },
    titleRound: function(token1, token2) {
        document.querySelector('#gameAI').innerHTML = `Player2 = ${namesGame[token2]}`;
        document.querySelector('#gameYou').innerHTML = `Player 1 (you) = ${namesGame[token1 - 1]}`;
    },
};
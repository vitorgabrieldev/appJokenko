



const namesGame = ['Pedra','Papel','Tesoura'];
const AIPlayer = [1,2,3];
const resFeedback = ['1-0','0-2','2-1',];
let pointsYou = 0;
let pointsAI = 0;
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
        let resUnif = `${token1 - 1}-${token2}`;
        document.querySelector('.containerChoice').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.containerChoice').style.display = 'block';
            document.querySelector('#gameYou').innerHTML = `Esperando...`;
            document.querySelector('#gameAI').innerHTML = `Esperando...`;
        },1500);
        resFeedback.forEach(res => {
            if(res == resUnif) {
                pointsYou ++;
                document.querySelector('#points').innerHTML = `Points (you) = ${pointsYou}`;
            } else {
                if(token1 - 1 == token2) {
                    document.querySelector('.empateTitle').style.opacity = '1';
                    setTimeout(() => {
                        document.querySelector('.empateTitle').style.opacity = '0';
                    }, 1400);
                };
            };
        });
    },
    titleRound: function(token1, token2) {
        document.querySelector('#gameYou').innerHTML = `${namesGame[token1 - 1]}`;
        document.querySelector('#gameAI').innerHTML = `${namesGame[token2]}`;
    },
};
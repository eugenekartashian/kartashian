let boardWidth = 360;
let boardHeight = 640;
let backgroundImg = new Image();
backgroundImg.src = './images/game-bg.png';
let inputLocked = false;

document.addEventListener('keydown', handleKeyDown);

let GAME_STATE = {
    MENU: 'menu',
    PLAYING: 'playing',
    GAME_OVER: 'gameOver'
};

let currentState = GAME_STATE.MENU;

let playButton = {
    x: boardWidth / 2 - 180 / 2,
    y: boardHeight / 2 - 180 / 2,
    width: 180,
    height: 180
};

let logo = {
    x: boardWidth / 2 - 300 / 2,
    y: boardHeight / 4,
    width: 300,
    height: 100
};

let gameTextImg = new Image();
gameTextImg.src = './images/game-logo.png';

let gameOverImg = new Image();
gameOverImg.src = './images/game-over.png';

let bird = {
    x: 50,
    y: boardHeight / 2,
    width: 60,
    height: 50
};

let velocityY = 0;
let velocityX = -2;
let gravity = 0.5;
let birdY = boardHeight / 2;
let pipeWidth = 50;
let pipeGap = 250;
let pipeAarray = [];
let pipeIntervalId;

function placePipes() {
    createPipes();
}

function createPipes() {
    let maxTopPipeHeight = boardHeight - pipeGap - 50;
    let topPipeHeight = Math.floor(Math.random() * maxTopPipeHeight);
    let bottomPipeHeight = boardHeight - topPipeHeight - pipeGap;

    let topPipe = {
        x: boardWidth,
        y: 0,
        width: pipeWidth,
        height: topPipeHeight,
        img: topPipeImg,
        passed: false
    };

    let bottomPipe = {
        x: boardWidth,
        y: topPipeHeight + pipeGap,
        width: pipeWidth,
        height: bottomPipeHeight,
        img: bottomPipeImg,
        passed: false
    };

    pipeAarray.push(topPipe, bottomPipe);
};

window.onload = function () {
    board = document.getElementById('board');
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext('2d');

    birdImg = new Image();
    birdImg.src = './images/game-avatar.png';

    topPipeImg = new Image();
    topPipeImg.src = './images/pipe-top.png';

    bottomPipeImg = new Image();
    bottomPipeImg.src = './images/pipe-bottom.png';

    playButtonImg = new Image();
    playButtonImg.src = './images/play-button.png';

    requestAnimationFrame(update);
};

function update() {
    context.clearRect(0, 0, boardWidth, boardHeight);
    if(currentState === GAME_STATE.MENU) {
        renderMenu();
    } else if(currentState === GAME_STATE.PLAYING) {
        renderGame();
    } else if(currentState === GAME_STATE.GAME_OVER) {
        renderGameOver();
    };

    requestAnimationFrame(update);
};

function renderMenu() {
    if(backgroundImg.complete) {
        context.drawImage(backgroundImg, 0, 0, boardWidth, boardHeight);
    };

    if(playButtonImg.complete) {
        context.drawImage(playButtonImg, playButton.x, playButton.y, playButton.width, playButton.height); 
    };

    if(gameTextImg.complete) {
        let scaleWidth = logo.width;
        let scaleHeight = (gameTextImg.height / gameTextImg.width) * scaleWidth;
        context.drawImage(gameTextImg, logo.x, logo.y, scaleWidth, scaleHeight);
    }; 
};

function renderGame() {
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > boardHeight) {
        currentState = GAME_STATE.GAME_OVER;
    };

    for(let i = 0; i < pipeAarray.length; i++) {
        let pipe = pipeAarray[i];
        pipe.x += velocityX;

        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        };

        if(detectCollision(bird, pipe)) {
            currentState = GAME_STATE.GAME_OVER;
        };
    };

    while(pipeAarray.length > 0 && pipeAarray[0].x < -pipeWidth) {
        pipeAarray.shift();
    };
    context.fillStyle = 'white';
    context.font = '45px sans-serif';
    context.textAlign = 'left';
    context.fillText(score, 5, 45);
};

function renderGameOver() {
    if(gameOverImg.complete) {
        let imgWidth = 300;
        let imgHeight = 100;
        let x = (boardWidth - imgWidth) / 2;
        let y = boardHeight / 3;
        
        context.drawImage(gameOverImg, x, y, imgWidth, imgHeight);

        let scoreText = `Your score: ${Math.floor(score)}`;
        context.fillStyle = 'black';
        context.font = '45px san-serif';
        context.textAlign = 'center';
        context.fillText(scoreText, boardWidth / 2, y + imgHeight + 50);
        
        inputLocked = true;
        setTimeout(() => {
            inputLocked = false;
        }, 1000);
    };
};

function handleKeyDown(e) {
    if(inputLocked) return;

    if(e.code === 'Space') {
        if(currentState === GAME_STATE.MENU) {
            startGame();
        } else if(currentState === GAME_STATE.GAME_OVER) {
            resetGame();
            currentState = GAME_STATE.MENU;
        } else if(currentState === GAME_STATE.PLAYING) {
            velocityY = -6;
        };
    };
};

function startGame() {
    currentState = GAME_STATE.PLAYING;
    bird.y = birdY;
    velocityY = 0;
    pipeAarray = [];
    score = 0;

    if(pipeIntervalId) {
        clearInterval(pipeIntervalId);
    };

    pipeIntervalId = setInterval(placePipes, 2000);
};

function resetGame() {
    bird.y = birdY;
    pipeAarray = [];
    score = 0;
};

function detectCollision(a, b) {
    return a.x < b.x + b.width && 
    a.x + a.width > b.x && 
    a.y < b.y + b.height && 
    a.y + a.height > b.y;
};
// script.js
const player = document.getElementById('player');
const item = document.getElementById('item');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

let score = 0;
let playerX = 50; // Initial player position
let itemY = 0;
let obstacleY = 0;

// Game loop
function update() {
    itemY += 5; // Adjust item speed
    obstacleY += 3; // Adjust obstacle speed

    item.style.top = itemY + 'px';
    obstacle.style.top = obstacleY + 'px';

    // Check for collisions
    if (
        itemY >= 400 && // Adjust this value based on game container height
        playerX >= item.offsetLeft &&
        playerX <= item.offsetLeft + 20
    ) {
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
        resetItem();
    }

    if (
        obstacleY >= 400 && // Adjust this value based on game container height
        playerX >= obstacle.offsetLeft &&
        playerX <= obstacle.offsetLeft + 30
    ) {
        endGame();
    }

    if (itemY >= 400) {
        resetItem();
    }

    if (obstacleY >= 400) {
        resetObstacle();
    }

    requestAnimationFrame(update);
}

function resetItem() {
    itemY = 0;
    item.style.top = '0';
    item.style.left = Math.floor(Math.random() * 350) + 'px';
}

function resetObstacle() {
    obstacleY = 0;
    obstacle.style.top = '0';
    obstacle.style.left = Math.floor(Math.random() * 350) + 'px';
}

function endGame() {
    alert('Game Over! Your score: ' + score);
    score = 0;
    scoreDisplay.innerText = 'Score: ' + score;
    resetItem();
    resetObstacle();
}

// Handle player controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && playerX > 0) {
        playerX -= 5;
        player.style.left = playerX + 'px';
    } else if (e.key === 'ArrowRight' && playerX < 350) {
        playerX += 5;
        player.style.left = playerX + 'px';
    }
});

// Handle restart button click
restartButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.innerText = 'Score: ' + score;
    resetItem();
    resetObstacle();
});

// Start the game loop
requestAnimationFrame(update);

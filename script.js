// Handle player controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && playerX > 0) {
        moveLeft();
    } else if (e.key === 'ArrowRight' && playerX < 350) {
        moveRight();
    } else if (e.key === 'ArrowDown' && itemY < 400) {
        moveDown();
    }
});

function moveLeft() {
    playerX -= 5;
    player.style.left = playerX + 'px';
}

function moveRight() {
    playerX += 5;
    player.style.left = playerX + 'px';
}

function moveDown() {
    itemY += 20; // Increase item drop speed
    item.style.top = itemY + 'px';
}

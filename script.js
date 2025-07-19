const table = document.getElementById('schulte-table');

function generateRandomNumbers() {
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

function buildTable() {
    table.innerHTML = '';
    const numbers = generateRandomNumbers();
    let numberIndex = 0;

    // Determine square size based on screen dimensions
    const screenSize = Math.min(window.innerWidth, window.innerHeight);
    const cellSize = screenSize * 0.95; // 95% of available space
    table.style.setProperty('--cell-size', `${cellSize}px`);

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const isWhite = (row + col) % 2 === 0;
            cell.classList.add(isWhite ? 'white' : 'gray');

            if (row === 2 && col === 2) {
                cell.classList.add('center-dot');
            } else {
                cell.textContent = numbers[numberIndex++];
            }

            table.appendChild(cell);
        }
    }
}

// Rebuild on load and resize
buildTable();
window.addEventListener('resize', buildTable);

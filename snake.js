const svg = document.getElementById('snakeGrid');

const rows = 7;
const cols = 53;
const cellSize = 15;

const grid = [];
let snakeClickCount = 0;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x * cellSize);
    rect.setAttribute("y", y * cellSize);
    rect.setAttribute("width", cellSize - 2);
    rect.setAttribute("height", cellSize - 2);
    rect.setAttribute("class", "commit");
    svg.appendChild(rect);
    grid.push({ x, y, rect });
  }
}

// Snake path
let snakeIndex = 0;
const snakeLength = 10;
const snakeTrail = [];

function updateSnake() {
  const { x, y } = grid[snakeIndex];
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // Easter egg on click
  circle.addEventListener('click', () => {
    snakeClickCount++;
    if (snakeClickCount === 3) {
      alert("🥚 You found the Easter Egg!\n🐍 Snake: 'Commit to your dreams, Lakshay.'");
      snakeClickCount = 0;
    } else {
      alert(`🐍 Snake says hi, Lakshay! (${snakeClickCount}/3)`);
    }
  });

  circle.setAttribute("cx", x * cellSize + cellSize / 2);
  circle.setAttribute("cy", y * cellSize + cellSize / 2);
  circle.setAttribute("r", cellSize / 3);
  circle.setAttribute("class", "snake");

  svg.appendChild(circle);
  snakeTrail.push(circle);

  if (snakeTrail.length > snakeLength) {
    const removed = snakeTrail.shift();
    svg.removeChild(removed);
  }

  snakeIndex = (snakeIndex + 1) % grid.length;
}

setInterval(updateSnake, 100);

const skills = ['💻', '🖌️', '⚙️', '🌐', '📱', '🧠']; // Emoji placeholders for skills
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  matchedCount = 0;
  document.getElementById('message').textContent = '';

  const items = shuffle([...skills, ...skills]); // duplicate for pairs

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.skill = item;
    card.dataset.index = index;
    card.textContent = '';
    card.addEventListener('click', handleCardClick);
    board.appendChild(card);
  });
}

function handleCardClick(e) {
  const card = e.target;
  if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.textContent = card.dataset.skill;
  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;

  const isMatch = firstCard.dataset.skill === secondCard.dataset.skill;

  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedCount += 1;
    if (matchedCount === skills.length) {
      document.getElementById('message').textContent = '🎉 All matched! Great job!';
    }
    resetTurn();
  } else {
    setTimeout(() => {
      firstCard.textContent = '';
      secondCard.textContent = '';
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function restartGame() {
  createBoard();
}

// Initialize
createBoard();

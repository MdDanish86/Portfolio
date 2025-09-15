import React, { useEffect, useState, useCallback } from 'react';
import '../styles/game.css';

const skills = ['💻', '🖌️', '⚙️', '🌐', '📱', '🧠'];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Game = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(null); // best score in current session

  const createBoard = useCallback(() => {
    const shuffled = shuffle([...skills, ...skills]).map((skill, index) => ({
      id: index,
      skill,
      flipped: false,
      matched: false,
    }));

    setCards(shuffled);
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
    setMatchedCount(0);
    setMessage('');
    setScore(0); // reset score
    // bestScore remains unless improved
  }, []);

  const handleCardClick = (index) => {
    if (lockBoard || cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    if (!firstCard) {
      setFirstCard({ ...newCards[index], index });
    } else {
      setSecondCard({ ...newCards[index], index });
      setLockBoard(true);
      setScore(prev => prev + 1); // ⬆️ increase score for each turn
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      const isMatch = firstCard.skill === secondCard.skill;

      if (isMatch) {
        const newCards = [...cards];
        newCards[firstCard.index].matched = true;
        newCards[secondCard.index].matched = true;
        setCards(newCards);
        setMatchedCount((prev) => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstCard.index].flipped = false;
          newCards[secondCard.index].flipped = false;
          setCards(newCards);
          resetTurn();
        }, 800);
      }
    }
  }, [firstCard, secondCard, cards]);

  useEffect(() => {
    if (matchedCount === skills.length) {
      setMessage('🎉 All matched! Great job!');
      // Update best score if it's better or first time
      if (bestScore === null || score < bestScore) {
        setBestScore(score);
      }
    }
  }, [matchedCount, score, bestScore]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  useEffect(() => {
    createBoard();
  }, [createBoard]);

  return (
    <div id= "game" className="game-container">
      <h1>Skill Match Game</h1>

      <div className="scoreboard">
        <p>🎯 Turns: <strong>{score}</strong></p>
        <p>🏆 Best Score: <strong>{bestScore !== null ? bestScore : '--'}</strong></p>
      </div>

      <div id="game-board" className="game-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || card.matched ? card.skill : ''}
          </div>
        ))}
      </div>

      <div id="message" className="message">{message}</div>

      <button onClick={createBoard}>🔁 Restart</button>
    </div>
  );
};

export default Game;

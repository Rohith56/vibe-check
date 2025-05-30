import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import type { VibeType } from '../data/questions';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<VibeType[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (vibe: VibeType) => {
    const newAnswers = [...answers, vibe];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result and navigate
      const result = calculateResult(newAnswers);
      navigate('/result', { state: { result } });
    }
  };

  const calculateResult = (answers: VibeType[]) => {
    const vibeCounts: Record<VibeType, number> = {
      Brainy: 0,
      Hype: 0,
      Chill: 0,
      Chaotic: 0,
    };

    answers.forEach((vibe) => {
      vibeCounts[vibe]++;
    });

    const sorted = Object.entries(vibeCounts).sort((a, b) => b[1] - a[1]);
    return sorted[0][0]; // Highest count
  };

  const q = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{q.question}</h2>
      <div className="quiz-options">
        {q.options.map((option, index) => (
          <button
            key={index}
            className="quiz-option"
            onClick={() => handleAnswer(option.vibe)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
};

export default Quiz;

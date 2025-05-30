import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const vibeMessages: Record<string, string> = {
  Brainy: "You're wise, curious, and thoughtful. A true intellectual 🧠.",
  Hype: "You're the life of the party! Always full of energy and vibes 🔥.",
  Chill: "Peaceful, grounded, and calm — you're everyone's cozy go-to 🌊.",
  Chaotic: "Unpredictable and hilarious, you're pure wild card energy 🎲.",
};

const vibeBackgrounds: Record<string, string> = {
  Brainy: '#a1c4fd',   // soft blue
  Hype: '#ff6a6a',     // energetic red
  Chill: '#b2f7ef',    // calm aqua
  Chaotic: '#fcb045',  // wild orange
};

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    navigate('/');
    return null;
  }

  const bgColor = vibeBackgrounds[result] || '#ffffff';

  const handleShare = () => {
    const shareText = `I got the "${result}" vibe on Vibe Check 🔮! What’s your vibe? Check it out: https://vibe-check-drab-theta.vercel.app`;
    navigator.clipboard.writeText(shareText);
    alert('Vibe copied to clipboard! Share it with your friends ✨');
  };

  return (
    <div
      className="result-container"
      style={{
        backgroundColor: bgColor,
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        transition: 'background-color 0.5s ease-in-out',
      }}
    >
      <h1>Your Vibe Is:</h1>
      <h2 className="vibe-name">{result}</h2>
      <p className="vibe-description">{vibeMessages[result]}</p>

      <button className="share-button" onClick={handleShare} style={{ margin: '1rem', padding: '0.5rem 1rem' }}>
        Share Your Vibe 🚀
      </button>

      <button className="restart-button" onClick={() => navigate('/')} style={{ padding: '0.5rem 1rem' }}>
        Retake Quiz 🔁
      </button>
    </div>
  );
};

export default ResultPage;

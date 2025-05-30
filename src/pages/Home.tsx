import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">✨ Vibe Check ✨</h1>
      <p className="home-subtitle">Discover your vibe in 30 seconds.</p>
      <Link to="/quiz">
        <button className="start-button">Start the Vibe Check</button>
      </Link>
    </div>
  );
}

import Chart from "./Chart";

type VibeScores = { [key: string]: number };

interface ResultProps {
  vibeScores: VibeScores;
  resetQuiz: () => void;
}

export default function Result({ vibeScores, resetQuiz }: ResultProps) {
  const dominantVibe = Object.entries(vibeScores).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max)
  )[0];

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4 text-green-600">Your Dominant Vibe: {dominantVibe}</h2>
      <p className="text-gray-600">Here's your vibe distribution:</p>
      
      <Chart vibeScores={vibeScores} />

      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        onClick={resetQuiz}
      >
        Retake Quiz
      </button>
    </div>
  );
}

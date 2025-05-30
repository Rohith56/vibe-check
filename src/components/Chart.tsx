import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";

type ChartProps = {
  vibeScores: { [vibe: string]: number };
};

export default function Chart({ vibeScores }: ChartProps) {
  const chartData = Object.entries(vibeScores).map(([vibe, score]) => ({
    vibe,
    score,
  }));

  return (
    <div className="flex justify-center mt-10">
      <RadarChart outerRadius={120} width={400} height={300} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="vibe" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar name="Vibe Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </div>
  );
}

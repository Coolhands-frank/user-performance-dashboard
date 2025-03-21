import { PieChart, Pie, Cell } from 'recharts';
import { useChart } from '../app/context/ChartContext';

const COLORS = ['#4285F4', '#E0E0E0'];

const DonutChart = () => {
  const { correctAnswers, totalQuestions } = useChart();

  const data = [
    { name: 'Correct', value: correctAnswers },
    { name: 'Incorrect', value: totalQuestions - correctAnswers },
  ];

  return (
    <div className="relative flex flex-col items-center space-y-2">
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={70}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex items-center justify-center text-3xl">
        🎯
      </div>
    </div>
  );
};

export default DonutChart;

'use client';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, ReferenceLine, Dot } from 'recharts';
import { useChart } from '../app/context/ChartContext';

export default function LineGraph() {
  const { percentile } = useChart();

  // Mock data for graph
  const data = [
    { percentile: 0, numberOfStudent: 1 },
    { percentile: 10, numberOfStudent: 2 },
    { percentile: 20, numberOfStudent: 3 },
    { percentile: 25, numberOfStudent: 5 },
    { percentile: 30, numberOfStudent: 4 },
    { percentile: 40, numberOfStudent: 7 },
    { percentile: 50, numberOfStudent: 12 },
    { percentile: 60, numberOfStudent: 8 },
    { percentile: 70, numberOfStudent: 4 },
    { percentile: 75, numberOfStudent: 5 },
    { percentile: 80, numberOfStudent: 3 },
    { percentile: 90, numberOfStudent: 4 },
    { percentile: 100, numberOfStudent: 2 },
  ];

  return (
    <div className="w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* X-Axis */}
          <XAxis
            dataKey="percentile"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tick={{ fontSize: 12 }}
          />
          

          {/* Tooltip */}
          <Tooltip 
         //   formatter={(value, name) => name === 'numberOfStudent' ? `numberOfStudent : ${value}` : value}
            labelFormatter={(label) => `${label}`}
            contentStyle={{ fontSize: '14px' }}
          />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="numberOfStudent"
            stroke="#6366F1" // Indigo-500
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6, fill: '#6366F1' }}
          />

          {/* Reference Line for Your Percentile */}
          <ReferenceLine
            x={percentile}
            stroke="#000"
            strokeDasharray="3 3"
            label={{
              value: 'your percentile',
              position: 'insideMiddleLeft',
              fontSize: 12,
              fill: '#374151', // Gray-700
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

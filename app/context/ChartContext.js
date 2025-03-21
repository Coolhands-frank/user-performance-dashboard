'use client';

import { createContext, useContext, useState } from 'react';

const ChartContext = createContext();

export const useChart = () => useContext(ChartContext);

export const ChartProvider = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [totalQuestions, setTotalQuestions] = useState(15);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);

  const updateScores = ({ rank, percentile, currentScore }) => {
    setRank(rank);
    setPercentile(Number(percentile)); // Ensure it's a number
    setCorrectAnswers(Number(currentScore)); 
  };

  return (
    <ChartContext.Provider
      value={{
        correctAnswers,
        totalQuestions,
        rank,
        percentile,
        updateScores,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

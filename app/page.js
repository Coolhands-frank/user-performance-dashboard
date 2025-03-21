"use client";
import UpdateScoresModal from "../components/UpdateScoresModal"
import Image from "next/image";
import DonutChart from "../components/DonutChart"
import LineGraph from "../components/LineGraph";
import { useChart } from "./context/ChartContext";

export default function Home() {
  const {correctAnswers, totalQuestions, rank, percentile} = useChart()

  const syllabusData = [
    { name: "HTML Tools, Forms, History", value: 80, color: "#2563EB" },
    { name: "Tags & References in HTML", value: 60, color: "#F97316" },
    { name: "Tables & References in HTML", value: 24, color: "#EF4444" },
    { name: "Tables & CSS Basics", value: 96, color: "#22C55E" },
  ];

  return (
    <div className="p-6 w-full">
      <div className="mb-4 text-lg">
        <h2>Skill Test</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        
        {/* LEFT SECTION (Main Content) */}
        <div className="space-y-6 lg:w-4/7">

          {/* HEADER */}
          <div className="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center mb-6 border border-gray-300">
            <div className="flex items-center gap-3">
              <Image src="/html-logo.png" width={50} height={50} alt="HTML Logo" />
              <div>
                <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
                <p className="text-sm text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div>
            </div>
            <UpdateScoresModal />
          </div>
          
          {/* QUICK STATISTICS */}
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-300">
            <h3 className="text-lg font-semibold">Quick Statistics</h3>
            <div className="mt-4 flex justify-center gap-6 md:justify-between md:gap-0 w-full">

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-200 p-2">
                  <p className="text-xl">🏆</p>
                </div>
                <div>
                  <p className="text-base font-bold">{rank}</p>
                  <p className="text-xs font-normal text-gray-500">YOUR RANK</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-200 p-2">
                  <p className="text-xl">🗓️</p>
                </div>
                <div>
                  <p className="text-base font-bold">{percentile}%</p>
                  <p className="text-xs font-normal text-gray-500">PERCENTILE</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-200 p-2">
                  <p className="text-xl">✅</p>
                </div>
                <div>
                  <p className="text-base font-bold">{correctAnswers}/{totalQuestions}</p>
                  <p className="text-xs font-normal text-gray-500">CORRECT ANSWERS</p>
                </div>
              </div>

            </div>
          </div>

          {/* COMPARISON GRAPH */}
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-300">
            <h3 className="text-lg font-semibold">Comparison Graph</h3>
            <p className="text-sm mb-2">
              You scored <strong>{percentile}% percentile</strong>, which is {percentile < 72 ? "lower" : "higher"} than the average percentile 72% of the engineers who took this assessment.
            </p>
            <LineGraph />
          </div>
        </div>

        {/* RIGHT SECTION (Syllabus Wise & Question Analysis) */}
        <div className="lg:w-3/7 space-y-6">

          {/* SYLLABUS WISE ANALYSIS */}
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-300">
            <h3 className="text-lg font-semibold mb-8">Syllabus Wise Analysis</h3>

            {syllabusData.map((item, index) => (
              <div key={index} className="mb-8">
                <p className="text-sm font-medium mb-3">{item.name}</p>
                <div className="w-full flex items-center">
                  <div className="w-5/6 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                  </div>
                  <p className="w-1/6 text-right font-semibold" style={{color: item.color}}>{item.value}%</p>
                </div>
              </div>
            ))}

          </div>

          {/* QUESTION ANALYSIS */}
          <div className="bg-white shadow-sm rounded-lg p-6 flex flex-col border border-gray-300">
            <div className="flex items-center justify-between text-lg font-semibold">
              <h3 className=" mb-2">Question Analysis</h3>
              <h3 className="text-blue-800">{correctAnswers}/{totalQuestions}</h3>
            </div>
            
            <p className="text-sm mb-2">
              <strong>You scored {correctAnswers} question correct out of {totalQuestions}</strong>. However, improvements are needed.
            </p>
            <DonutChart />
          </div>
          
        </div>
      </div>
    </div>
  );
}

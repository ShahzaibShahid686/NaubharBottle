import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Analysis() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Real-Time Voltage (V)",
        data: [],
        borderColor: "#3B82F6", // Tailwind blue-500
        tension: 0.1,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Live Energy Monitoring",
      },
    },
    animation: { duration: 0 },
    scales: { y: { beginAtZero: true } },
    maintainAspectRatio: false,
  };

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newLabel = new Date().toLocaleTimeString();
      const newValue = Math.random() * 100 + 200; // Random voltage values (200-300V)

      setChartData(prev => ({
        labels: [...prev.labels.slice(-10), newLabel], // Keep last 10 entries
        datasets: [
          {
            ...prev.datasets[0],
            data: [...prev.datasets[0].data.slice(-10), newValue],
          },
        ],
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 ml-64 h-screen">
      <h1 className="text-3xl font-bold mb-6">Live Energy Analysis</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg h-[70vh]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
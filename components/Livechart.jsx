import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function LiveChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Live Energy Consumption",
        data: [],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newTime = new Date().toLocaleTimeString();
        const newValue = Math.floor(Math.random() * 100) + 1;

        const newLabels = [...prev.labels, newTime].slice(-10); // Keep last 10 labels
        const newData = [...prev.datasets[0].data, newValue].slice(-10);

        return {
          ...prev,
          labels: newLabels,
          datasets: [
            {
              ...prev.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Live Chart</h2>
      <Line data={chartData} />
    </div>
  );
}

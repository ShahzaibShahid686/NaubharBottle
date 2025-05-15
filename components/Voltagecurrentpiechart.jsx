import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function VoltageCurrentPieChart() {
  const voltage = 416;
  const current = 441;

  const data = {
    labels: ["Voltage", "Current"],
    datasets: [
      {
        label: "kWh",
        data: [voltage, current],
        backgroundColor: ["#FBBF24", "#F43F5E"], 
        borderColor: ["#60a5fa", "#f87171"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md h-[300px]">
      <h2 className="text-lg font-bold mb-4 text-center text-gray-700">
        Voltage vs Current
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
}

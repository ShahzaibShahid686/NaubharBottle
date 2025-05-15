import { FiTrendingUp } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

export default function TotalConsumption() {
  const data = [
    { label: "Today", value: "3,720", color: "text-blue-500" },
    { label: "This Week", value: "25,253", color: "text-green-500" },
    { label: "This Month", value: "131,390", color: "text-purple-600" },
    { label: "This Year", value: "968,579", color: "text-red-500" },
  ];

  return (
    <div className="bg-[#e6effc] p-6 rounded-xl shadow-md w-full max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
        <FiTrendingUp className="text-blue-500 text-xl" />
        <h2 className="text-xl font-bold text-gray-700">Total Consumption</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <FaArrowUp className={`text-3xl mb-1 ${item.color}`} />
            <h3 className="text-md font-semibold text-gray-700">{item.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            <span className="text-sm text-gray-500">kWh</span>
          </div>
        ))}
      </div>
    </div>
  );
}

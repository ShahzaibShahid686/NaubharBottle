import React, { useState } from "react";
import Image from "next/image";
import roimg from "@/public/Ro.JPG";
import compressorImage from "@/public/compressor.png";
import pieChart from "@/public/energy_pie_chart.png"; 

const Reports = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("today");

  const realTimeData = [
    { id: "RO-1", current: 53, voltage: 398.1, power: 31, status: "online" },
    { id: "RO-2", current: 0.8, voltage: 407.8, power: 0, status: "offline" },
    { id: "RO-3", current: 5.8, voltage: 421.6, power: 3, status: "online" },
    { id: "RO-4", current: 1.9, voltage: 416.8, power: 1, status: "online" },
  ];

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-gray-800">Energy Dashboard</h1>

        {/* RO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: "RO-1", value: 342 },
            { name: "RO-2", value: 327 },
            { name: "RO-3", value: 387 },
            { name: "RO-4", value: 277 },
          ].map((item) => (
            <div key={item.name} className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm">{item.name}</h3>
              <p className="text-gray-400 text-xs mb-2">Today</p>
              <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              <p className="text-gray-400 text-xs">kWh</p>
            </div>
          ))}
        </div>

        {/* Total Consumption Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold text-gray-700">Total Consumption</h2>
            <select
              value={selectedTimePeriod}
              onChange={(e) => setSelectedTimePeriod(e.target.value)}
              className="text-gray-500 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div className="flex justify-center my-4">
            <Image
              src={compressorImage}
              alt="Compressor"
              width={300}
              height={130}
              className="object-contain rounded"
            />
          </div>

          <p className="text-5xl font-extrabold text-indigo-600 leading-tight">1,333</p>
          <p className="text-gray-400 text-xs">kWh</p>
        </div>

        {/* Energy Breakdown and Chart */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Breakdown with Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-gray-600 font-semibold mb-4">Energy Consumption Breakdown</h2>
            <p className="text-gray-400 text-xs mb-2">Today</p>

            {/* Pie Chart Image */}
            <div className="flex justify-center my-4">
              <Image
                src={pieChart}
                alt="Energy Pie Chart"
                width={250}
                height={250}
                className="rounded"
              />
            </div>
          </div>

          {/* Right: Usage Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-gray-600 font-semibold mb-4">Energy Usage</h2>
            <p className="text-gray-400 text-xs mb-4">Last 7 Days</p>
            <div className="h-48 relative">
              <div className="absolute bottom-0 w-full flex justify-between items-end h-full">
                {[80, 60, 100, 70, 90, 50, 30].map((height, index) => (
                  <div
                    key={index}
                    className="w-4 bg-blue-300 rounded"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>1,500</span>
              <span>1,000</span>
              <span>500</span>
            </div>
          </div>
        </div>

        {/* Real Time Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Real Time Value</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2">Sources</th>
                  <th className="py-2">Current Avg (A)</th>
                  <th className="py-2">Voltage L-L Avg (V)</th>
                  <th className="py-2">Total Power (kW)</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {realTimeData.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`border-b ${idx === realTimeData.length - 1 ? "bg-blue-50" : ""}`}
                  >
                    <td className="py-3 flex items-center gap-2">
                      <Image src={roimg} alt="meter" width={30} height={30} />
                      <span>{row.id}</span>
                    </td>
                    <td className="py-3">{row.current} (A)</td>
                    <td className="py-3">{row.voltage} (V)</td>
                    <td className="py-3">{row.power} (kW)</td>
                    <td className="py-3">
                      <span
                        className={`inline-block w-4 h-4 rounded-full shadow-md ${
                          row.status === "online" ? "bg-green-500" : "bg-red-600"
                        }`}
                      ></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;


import React from "react";
import { TbDeviceAnalytics } from "react-icons/tb";

import Topbar from "@/components/Topbar";
import { GiElectric } from "react-icons/gi";

export default function CustomDashboard() {
  
  const sections = [
    {
      title: "Main-LT",
      values: ["405.2 V", "854.9 A", "586 kW"],
      icon: <GiElectric className="text-xl text-blue-500" />,
    },
    {
      title: "Water Treatment",
      values: ["405.3 V", "6.9 A", "3 kW"],
      icon: <GiElectric className="text-xl text-green-500" />,
    },
    {
      title: "Syrup Room",
      values: ["405.5 V", "3.1 A", "1 kW"],
      icon: <GiElectric className="text-xl text-purple-500" />,
    },
    {
      title: "Turbine 1",
      values: ["405.6 V", "0.6 A", "0 kW"],
      icon: <GiElectric className="text-xl text-red-500" />,
    },
    {
      title: "Evaporator",
      values: ["400.5 V", "121.3 A", "59 kW"],
      icon: <GiElectric className="text-xl text-yellow-500" />,
    },
    {
      title: "Air Compressor\n(3+4+5)",
      values: ["404.2 V", "190.9 A", "116 kW"],
      icon: <GiElectric className="text-xl text-pink-500" />,
    },
    {
      title: "Air Compressor\n(1+2)",
      values: ["403.7 V", "3.7 A", "2 kW"],
      icon: <GiElectric className="text-xl text-indigo-500" />,
    },
    {
      title: "Line-5",
      values: ["0 V", "0 A", "0 kW"],
      icon: <GiElectric className="text-xl text-gray-500" />,
    },
    {
      title: "Line-4",
      values: ["401.7 V", "7.3 A", "4 kW"],
      icon: <GiElectric className="text-xl text-teal-500" />,
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Topbar />

      <main className="pt-[110px] ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <TbDeviceAnalytics className="text-4xl text-blue-500" />
            Custom Real-Time Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold dark:text-gray-200 whitespace-pre-line">
                    {section.title}
                  </h3>
                  {section.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-gray-700 rounded">
                    <span className="text-sm text-blue-600 dark:text-blue-300">
                      Voltage
                    </span>
                    <span className="font-medium">{section.values[0]}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-gray-700 rounded">
                    <span className="text-sm text-green-600 dark:text-green-300">
                      Current
                    </span>
                    <span className="font-medium">{section.values[1]}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-gray-700 rounded">
                    <span className="text-sm text-purple-600 dark:text-purple-300">
                      Power
                    </span>
                    <span className="font-medium">{section.values[2]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

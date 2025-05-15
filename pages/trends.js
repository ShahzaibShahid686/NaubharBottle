'use client';
import Topbar from '@/components/Topbar'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const generateInitialData = () => {
  const now = new Date();
  return [
    { name: 'Main-LT', voltage: 412.6, current: 597.8, power: 434, time: now },
    { name: 'Water Treatment', voltage: 412.6, current: 4.7, power: 3, time: now },
    { name: 'Syrup Room', voltage: 412.6, current: 20.5, power: 13, time: now },
    { name: 'Turbine 1', voltage: 412.7, current: 0.4, power: 0, time: now },
    { name: 'Evaporator', voltage: 408.2, current: 126.6, power: 64, time: now },
    { name: 'Air Compressor (3+4+5)', voltage: 412.5, current: 12.2, power: 6, time: now },
    { name: 'Air Compressor (1+2)', voltage: 411.9, current: 28.3, power: 25, time: now },
    { name: 'Line-5', voltage: 0, current: 0, power: 0, time: now },
    { name: 'Line-4', voltage: 409.4, current: 6.8, power: 3, time: now },
  ];
};

export default function TrendsPage() {
  const [data, setData] = useState(generateInitialData());
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map(item => ({
        ...item,
        voltage: item.voltage + (Math.random() * 2 - 1),
        current: item.current + (Math.random() * 5 - 2.5),
        power: item.power + (Math.random() * 3 - 1.5),
        time: new Date(),
      }));
      setData(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <Topbar />
      <div className="pt-16 p-8">
        <h1 className="text-3xl font-bold mb-8">Real-Time Trends Analysis</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[item]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="time" 
                      tickFormatter={(time) => new Date(time).toLocaleTimeString()}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="voltage"
                      stroke="#8884d8"
                      name="Voltage (V)"
                    />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#82ca9d"
                      name="Current (A)"
                    />
                    <Line
                      type="monotone"
                      dataKey="power"
                      stroke="#ffc658"
                      name="Power (kW)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Voltage</p>
                  <p className="text-lg font-medium">{item.voltage.toFixed(1)} V</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Current</p>
                  <p className="text-lg font-medium">{item.current.toFixed(1)} A</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Power</p>
                  <p className="text-lg font-medium">{item.power.toFixed(1)} kW</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
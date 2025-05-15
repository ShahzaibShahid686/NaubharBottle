
import { Table } from "@/components/ui/table";

export default function EnergyTablePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Energy Data</h1>
      <TableComponent />
    </div>
  );
}

function TableComponent() {
  const data = [
    { device: "Pump A", voltage: 220, current: 15 },
    { device: "Motor B", voltage: 440, current: 10 }
  ];

  return (
    <Table className="border rounded-lg">
      
      <thead>
        <tr>
          <th>Device</th>
          <th>Voltage (V)</th>
          <th>Current (A)</th>
        </tr>
      </thead>
      
      {/* Table Body */}
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.device}</td>
            <td>{item.voltage}</td>
            <td>{item.current}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

import React from "react";
import { FiFileText } from "react-icons/fi"; // Importing the icon used in sidebar

export default function Reports() {
  return (
    <div className="p-6 ml-64"> {/* Adjust margin-left to match sidebar width */}
      <div className="flex items-center gap-2 mb-6">
        <FiFileText className="text-2xl text-blue-500" />
        <h1 className="text-2xl font-bold">Reports Dashboard</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Monthly Reports</h2>
        <div className="grid gap-4">
          <div className="p-3 border rounded-lg">
            <h3 className="font-medium">January 2024 Report</h3>
            <p className="text-sm text-gray-600">Generated on 01/02/2024</p>
          </div>
          <div className="p-3 border rounded-lg">
            <h3 className="font-medium">February 2024 Report</h3>
            <p className="text-sm text-gray-600">Generated on 02/02/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
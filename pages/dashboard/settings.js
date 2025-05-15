import React from "react";
import { FiSettings } from "react-icons/fi"; // Icon used in sidebar

export default function Settings() {
  return (
    <div className="p-6 ml-64"> {/* Match sidebar width with margin-left */}
      <div className="flex items-center gap-2 mb-6">
        <FiSettings className="text-2xl text-blue-500" />
        <h1 className="text-2xl font-bold">System Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-4 max-w-2xl">
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-3">Profile Settings</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-3">Notifications</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <span>System Alerts</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
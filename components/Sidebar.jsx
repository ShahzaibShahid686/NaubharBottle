import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FiBarChart2,
  FiSettings,
  FiFileText,
} from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <aside className="fixed top-[110px] left-0 w-64 h-[calc(100vh-110px)] bg-indigo-500 text-white px-4 py-6 z-40">
      
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between text-xl font-bold mb-4 focus:outline-none"
      >
        <span>DASHBOARD</span>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>

      
      {isOpen && (
        <nav className="space-y-4 ml-2">
          <Link
            href="/dashboard/analysis"
            className={`flex items-center gap-3 hover:underline ${
              router.pathname === "/dashboard/analysis" ? "font-semibold" : ""
            }`}
          >
            <FiBarChart2 />
            <span>Analysis</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={`flex items-center gap-3 hover:underline ${
              router.pathname === "/dashboard/settings" ? "font-semibold" : ""
            }`}
          >
            <FiSettings />
            <span>Settings</span>
          </Link>
          <Link
            href="/dashboard/reports"
            className={`flex items-center gap-3 hover:underline ${
              router.pathname === "/dashboard/reports" ? "font-semibold" : ""
            }`}
          >
            <FiFileText />
            <span>Reports</span>
          </Link>
        </nav>
      )}
    </aside>
  );
}

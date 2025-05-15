import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FiSun, FiMoon, FiUser } from "react-icons/fi";
import { TbLayoutDashboard, TbDeviceAnalytics } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { RiFileChartLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const navItems = [
  { label: "DASHBOARD", icon: <TbLayoutDashboard />, path: "/" },
  { label: "CUSTOM DASHBOARD", icon: <TbDeviceAnalytics />, path: "/custom" },
  { label: "DIAGRAM", icon: <GiNetworkBars />, path: "/energy-table" },
  { label: "TRENDS", icon: <AiOutlineAreaChart />, path: "/trends" },
  { label: "REPORTS", icon: <RiFileChartLine />, path: "/reports" },

];

export default function Topbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showAlarms, setShowAlarms] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-[100] bg-white dark:bg-gray-900 shadow-md h-[110px]">
      {/* Top row */}
      <div className="w-full h-[60px] flex items-center justify-between px-4 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-500 rounded-sm flex items-center justify-center text-white">
            NB
          </div>
          <span className="text-xl font-bold text-[#1b3d8b] dark:text-white">
            Naubhar <span className="text-[#004785]">Bottling</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={toggleTheme} className="text-xl text-gray-700 dark:text-yellow-400">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <FiUser className="text-2xl text-sky-500" />
          <span className="text-sm font-medium text-black dark:text-white cursor-pointer">Logout</span>

          <div className="relative">
            <button onClick={() => setShowAlarms(!showAlarms)} className="text-black dark:text-white text-sm font-semibold">
              Alarms
            </button>
            {showAlarms && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-900 shadow-lg rounded-md z-50">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="alarm-1">
                    <AccordionTrigger className="px-4 hover:bg-gray-100 dark:hover:bg-gray-800">
                      New Alarms (3)
                    </AccordionTrigger>
                    <AccordionContent className="p-2">
                      <div className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        Pump pressure high
                      </div>
                      <div className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        Temperature threshold exceeded
                      </div>
                      <div className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        Low fluid level
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="alarm-2">
                    <AccordionTrigger className="px-4 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Acknowledged Alarms (5)
                    </AccordionTrigger>
                    <AccordionContent className="p-2">
                      <div className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        Motor vibration high
                      </div>
                      <div className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                        Flow rate low
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="w-full h-[50px] bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center h-full px-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`flex items-center gap-2 px-4 h-full hover:bg-gray-100 dark:hover:bg-gray-800 ${
                router.pathname === item.path
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

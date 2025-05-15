import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import TotalConsumption from "@/components/Totalconsumption";
import Voltagecurrentpiechart from "@/components/Voltagecurrentpiechart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Topbar />
      
      <div className="flex pt-[110px]">
        <Sidebar />
        
        <main className="flex-1 p-6 ml-64 min-h-[calc(100vh-110px)] pb-[120px]"> {/* Added bottom padding */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
            <div className="w-full lg:w-1/2">
              <Voltagecurrentpiechart />
            </div>
            <div className="w-full lg:w-1/2">
              <TotalConsumption />
            </div>
          </div>
        </main>
      </div>

      {/* Footer Outside Flex Container */}
      <Footer /> {/* Moved outside flex div */}
    </div>
  );
}
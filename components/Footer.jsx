
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#2c3e50] text-white py-4 border-t-2 border-blue-500 z-30">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        <div className="text-center md:text-left">
          <h4 className="text-[#3498db] font-bold text-lg">Naubhar Bottling</h4>
          <p className="text-sm">Energy Monitoring Solution</p>
        </div>

        
        <div className="text-center">
          <p className="text-sm">&copy; 2025 All Rights Reserved</p>
          <p className="text-sm">Version: 1.2.0</p>
        </div>

        
        <div className="text-center md:text-right">
          <p className="text-sm">Contact: support@naubhar.com</p>
          <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
            <FiInstagram className="text-lg hover:text-[#E1306C] cursor-pointer" />
            <span className="text-sm">@naubhar_bottling</span>
          </div>
          <p className="text-sm mt-1">Phone: +92 300 1234567</p>
        </div>
      </div>
    </footer>
  );
}
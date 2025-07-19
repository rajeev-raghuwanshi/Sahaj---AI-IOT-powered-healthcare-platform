import { useState, useEffect } from "react";
import { Home as HomeIcon, Bot, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Pages
import Home from "../pages/AiHome";
import AIAssistant from "../pages/AiAssistant";
import IoT from "../pages/IOT";
import MedicalHistory from "./MedicalHistory";
import Doctors from "./Doctors";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState("home"); // ✅ Default page is AI Assistant
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const images = [
    {
      url: "https://img.freepik.com/free-vector/artificial-intelligence-flat-concept-with-robotic-helper-smartphone-happy-characters-scientists-user-vector-illustration_1284-84244.jpg",
      caption: "Smart Healthcare with AI Integration",
    },
    {
      url: "https://www.datapharm.com/media/nswbqc1z/shutterstock_1181716903-structured-data-2.jpg",
      caption: "Innovative Health Technologies",
    },
    {
      url: "https://www.helpwire.app/blog/wp-content/uploads/2021/12/iot-in-healthcare.jpg",
      caption: "Revolutionizing Healthcare with IoT",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pages = {
    home: <Home />,
    ai: <AIAssistant />,
    iot: <IoT />,
    telemedicine: <Doctors />,
    medical: <MedicalHistory />,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 shadow-md border-r border-gray-400 p-4 transition-all duration-300 ${
          expanded ? "w-52" : "w-16"
        } rounded-r-xl`}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-full hover:bg-gray-400 transition duration-300"
          >
            <Menu className="text-gray-800" />
          </button>
        </div>

        {/* Home */}
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-400 hover:scale-[1.02] p-2 rounded transition-all duration-300"
          onClick={() => setPage("home")}
        >
          <HomeIcon />
          {expanded && <span className="font-semibold">Home</span>}
        </div>

        {/* AI Assistant */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 hover:scale-[1.02] p-2 rounded transition-all duration-300"
          onClick={() => window.location.href = "http://localhost:8501/"}
        >
          <Bot />
          {expanded && <span className="font-semibold">AI Diagnosis</span>}
        </div>

        {/* Telemedicine */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 hover:scale-[1.02] p-2 rounded transition-all duration-300"
          onClick={() => setPage("telemedicine")}
        >
          <span className="text-xl">🩺</span>
          {expanded && <span className="font-semibold">Telemedicine</span>}
        </div>

        {/* IoT */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 hover:scale-[1.02] p-2 rounded transition-all duration-300"
          onClick={() => setPage("iot")}
        >
          <span className="text-xl">📡</span>
          {expanded && <span className="font-semibold">IoT</span>}
        </div>

        {/* Medical History */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 hover:scale-[1.02] p-2 rounded transition-all duration-300"
          onClick={() => setPage("medical")}
        >
          <span className="text-xl">📝</span>
          {expanded && <span className="font-semibold">Medical History</span>}
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 bg-gray-300 overflow-auto p-6">
        {pages[page]}
      </div>
    </div>
  );
}
